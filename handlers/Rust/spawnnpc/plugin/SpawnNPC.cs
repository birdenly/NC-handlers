using Rust;
using System;
using Facepunch;
using Oxide.Core;
using System.Linq;
using UnityEngine;
using UnityEngine.AI;
using Newtonsoft.Json;
using Oxide.Core.Plugins;
using System.Collections.Generic;
using Newtonsoft.Json.Converters;
using UnityEngine.SceneManagement;

#region License
/*
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*The "AI Scarecrow" part of the code is added with the permission of "Spiikesan", from the "Better Scarecrows" plugin from the umod website. Thanks to "Spiikesan" for helping with the plugin.*/
#endregion

namespace Oxide.Plugins
{
    [Info("Spawn NPC", "Author mod from Flames", "1.0.24")]
    [Description("Spawn NPC on monuments")]

    #region class NPC RustPlugin

    class SpawnNPC : RustPlugin
    {
        [PluginReference] Plugin Kits, MarkerManager;
        static SpawnNPC Instance;
        private PluginConfig config;

        #region Permission

        private const string PermChatCommand = "spawnnpc.command";

        #endregion

        #region NPCType variable

        private const string PrefabScientist = "assets/rust.ai/agents/npcplayer/humannpc/scientist/scientistnpc_roam.prefab";
        private const string PrefabScarecrow = "assets/prefabs/npc/scarecrow/scarecrow.prefab";

        #endregion

        #region loot crate variable

        static readonly Dictionary<string, string> lootPrefabs = new Dictionary<string, string>
        {
            ["radtown_loot_component_test"] = "assets/bundled/prefabs/radtown/loot_component_test.prefab",
            ["radtown_crate_elite"] = "assets/bundled/prefabs/radtown/crate_elite.prefab",
            ["radtown_bradley_crate"] = "assets/prefabs/npc/m2bradley/bradley_crate.prefab",
            ["radtown_heli_crate"] = "assets/prefabs/npc/patrol helicopter/heli_crate.prefab",
            ["radtown_foodbox"] = "assets/bundled/prefabs/radtown/foodbox.prefab",
            ["radtown_crate_normal"] = "assets/bundled/prefabs/radtown/crate_normal.prefab",
            ["radtown_crate_normal_2"] = "assets/bundled/prefabs/radtown/crate_normal_2.prefab",
            ["radtown_crate_normal_2_medical"] = "assets/bundled/prefabs/radtown/crate_normal_2_medical.prefab",
            ["radtown_crate_basic"] = "assets/bundled/prefabs/radtown/crate_basic.prefab",
            ["radtown_crate_tools"] = "assets/bundled/prefabs/radtown/crate_tools.prefab",
            ["underwater_labs_crate_normal"] = "assets/bundled/prefabs/radtown/underwater_labs/crate_normal.prefab",
            ["underwater_labs_crate_normal_2"] = "assets/bundled/prefabs/radtown/underwater_labs/crate_normal_2.prefab",
            ["underwater_labs_crate_tools"] = "assets/bundled/prefabs/radtown/underwater_labs/crate_tools.prefab",
            ["underwater_labs_crate_food_2"] = "assets/bundled/prefabs/radtown/underwater_labs/crate_food_2.prefab",
            ["underwater_labs_tech_parts_2"] = "assets/bundled/prefabs/radtown/underwater_labs/tech_parts_2.prefab",
            ["underwater_labs_crate_elite"] = "assets/bundled/prefabs/radtown/underwater_labs/crate_elite.prefab",
            ["radtown_crate_underwater_basic"] = "assets/bundled/prefabs/radtown/crate_underwater_basic.prefab",
            ["radtown_crate_underwater_advanced"] = "assets/bundled/prefabs/radtown/crate_underwater_advanced.prefab",
            ["chinooklockedcrate"] = "assets/prefabs/deployable/chinooklockedcrate/codelockedhackablecrate.prefab",
            ["supply_drop"] = "assets/prefabs/misc/supply drop/supply_drop.prefab",
            ["presentdrop"] = "assets/prefabs/misc/xmas/sleigh/presentdrop.prefab"
        };

        #endregion

        private readonly List<BaseCombatEntity> MyNPCs = new List<BaseCombatEntity>();
        private readonly List<ExpectedCorpse> expectedCorpses = new List<ExpectedCorpse>();
        private readonly List<GameObject> availableMonuments = new List<GameObject>();
        private readonly LootGenerator lootGenerator = new LootGenerator();

        #region class NPC Inventories

        public Dictionary<ulong, Inv> botInventories = new Dictionary<ulong, Inv>();

        public class Inv
        {
            public List<InvContents>[] inventory = { new List<InvContents>(), new List<InvContents>(), new List<InvContents>() };
        }
        public class InvContents
        {
            public int ID;
            public int amount;
            public ulong skinID;
        }

        #endregion

        #region class LootGenerator

        class LootGenerator
        {
            private Dictionary<string, LootSpawner> spawners = new Dictionary<string, LootSpawner>();

            public LootSpawner Get(string name)
            {
                if (!lootPrefabs.ContainsKey(name))
                {
                    Instance.PrintWarning($"Unknown crate NpcType: {name}");
                    return null;
                }

                if (!spawners.ContainsKey(name))
                {
                    spawners[name] = new LootSpawner(lootPrefabs[name]);
                }

                if (!spawners[name].IsContainerOk)
                {
                    spawners[name].Cleanup();
                    spawners[name] = new LootSpawner(lootPrefabs[name]);
                }

                return spawners[name];
            }

            public void Cleanup()
            {
                foreach (var spawner in spawners.Values)
                {
                    spawner.Cleanup();
                }
                spawners.Clear();
                spawners = null;
            }
        }

        #endregion

        #region class LootSpawner

        class LootSpawner
        {
            private string FullPrefabName;
            private LootContainer LootContainer;
            public bool IsContainerOk
            {
                get
                {
                    return this.LootContainer != null && !this.LootContainer.IsDestroyed;
                }
            }

            public LootSpawner(string prefabName)
            {
                this.FullPrefabName = prefabName;
                this.LootContainer = GameManager.server.CreateEntity(this.FullPrefabName, new Vector3(), new Quaternion(), true) as LootContainer;
                this.LootContainer.Spawn();
                this.LootContainer.CancelInvoke(new Action(this.LootContainer.SpawnLoot));
                Instance.NextTick(() =>
                {
                    this.LootContainer.Kill();
                });
            }

            public void Cleanup()
            {
                if (this.IsContainerOk)
                {
                    this.LootContainer.Kill();
                }
            }

            public void SpawnLoot()
            {
                this.LootContainer.inventory.Clear();
                ItemManager.DoRemoves();
                this.LootContainer.PopulateLoot();
            }

            public ItemContainer Inventory
            {
                get
                {
                    return this.LootContainer.inventory;
                }
            }
        }

        #endregion

        #region class ExpectedCorpse

        class ExpectedCorpse
        {
            public ulong id;
            public NPCPreset preset;
        }

        #endregion

        #region class NPCItemDefinition

        class NPCItemDefinition
        {
            [JsonProperty(PropertyName = "Short Name Item")]
            public string ItemShortName;

            [JsonProperty(PropertyName = "SkinID Item")]
            public ulong[] ItemSkinID = { 0 };

            public virtual Item CreateItem()
            {
                ulong data2Inf_unknwn = 0;
                if (this.ItemSkinID.Length > 0)
                {
                    data2Inf_unknwn = this.ItemSkinID.GetRandom();
                }
                return ItemManager.CreateByName(ItemShortName, 1, data2Inf_unknwn);
            }
        }

        #endregion

        #region class NPCItemSpendableDefinition

        class NPCItemSpendableDefinition : NPCItemDefinition
        {
            [JsonProperty(PropertyName = "Amount Item")]
            public int ItemAmount;

            public override Item CreateItem()
            {
                var item = base.CreateItem();
                item.amount = ItemAmount;
                return item;
            }
        }

        #endregion

        #region class NPCExtraLootDefinition

        class NPCExtraLootDefinition
        {
            [JsonProperty(PropertyName = "Items List")]
            public Item[] Items;

            public class Item
            {
                [JsonProperty(PropertyName = "Short Name Item")]
                public string ItemShortName;

                [JsonProperty(PropertyName = "SkinID Item")]
                public uint ItemSkinID;

                [JsonProperty(PropertyName = "Min Item")]
                public int ItemsCountMin;

                [JsonProperty(PropertyName = "Max Item")]
                public int ItemsCountMax;

                [JsonProperty(PropertyName = "Probability Item Spawn")]
                public float Probability;
            }

            public List<global::Item> GetItems()
            {
                List<global::Item> result = new List<global::Item>(Items.Length);
                foreach (var item in Items)
                {
                    if (GetItemRandom(item.Probability))
                    {
                        result.Add(ItemManager.CreateByName(item.ItemShortName, UnityEngine.Random.Range(item.ItemsCountMin, item.ItemsCountMax), item.ItemSkinID));
                    }
                }
                return result;
            }

            private static bool GetItemRandom(float Probability)
            {
                return UnityEngine.Random.Range(0f, 1f) < Probability;
            }
        }

        #endregion

        #region class NPCLootDefinition

        class NPCLootDefinition
        {
            [JsonProperty(PropertyName = "Use loot Rust")]
            public bool UseLootRust;

            [JsonProperty(PropertyName = "Use loot Kit")]
            public bool UseLootKit;

            [JsonProperty(PropertyName = "Use Loot Extra")]
            public bool UseExtraLoot;

            [JsonProperty(PropertyName = "Use loot Crates")]
            public bool UseCratesLoot;

            [JsonProperty(PropertyName = "Name crates loot")]
            public string[] NameCratesLoot = { };

            [JsonProperty(PropertyName = "Min Item")]
            public int ItemsMin;

            [JsonProperty(PropertyName = "Max Item")]
            public int ItemsMax;

            [JsonProperty(PropertyName = "List exclude items")]
            public string[] ListExcludeItems;

            [JsonProperty(PropertyName = "Extra loot definition")]
            public NPCExtraLootDefinition ExtraLootDefinition;

            public void SpawnItemsToContainer(ItemContainer container)
            {
                if (UseLootRust == true)
                {
                    return;
                }

                if (UseCratesLoot == true && NameCratesLoot.Length != 0)
                {
                    ClearContainer(container);
                    uint spawnedItems = 0;

                    for (int i = 0; i < NameCratesLoot.Length; i++)
                    {
                        var spawner = Instance.lootGenerator.Get(NameCratesLoot[i]);
                        spawner.SpawnLoot();
                        while (spawner.Inventory.itemList.Count > 0)
                        {
                            var item = spawner.Inventory.itemList[0];
                            if (ListExcludeItems != null && ListExcludeItems.Contains(item.info.shortname))
                            {
                                item.RemoveFromContainer();
                                item.Remove();
                                continue;
                            }
                            item.MoveToContainer(container);
                            spawnedItems++;
                            if (spawnedItems >= UnityEngine.Random.Range(ItemsMin, ItemsMax)) continue;
                        }

                        if (spawnedItems >= ItemsMax) break;
                    }
                }
                else if (UseCratesLoot == true && NameCratesLoot.Length == 0)
                {
                    Instance.PrintWarning($"The list is empty, Default Loot for this NPC, check the settings (Crates Loot!)");
                }

                if (UseExtraLoot == true && ExtraLootDefinition != null)
                {
                    ClearContainer(container);
                    var extraItems = ExtraLootDefinition.GetItems();
                    foreach (var item in extraItems)
                    {
                        item.MoveToContainer(container);
                    }
                }
                else if (UseExtraLoot == true && ExtraLootDefinition == null)
                {
                    Instance.PrintWarning($"The list is empty, Default Loot for this NPC, check the settings (Extra Loot!)");
                }
            }
        }

        #endregion

        #region class NPCPreset

        class NPCPreset
        {
            [JsonProperty(PropertyName = "Preset name")]
            public string PresetName;

            [JsonProperty(PropertyName = "How many seconds until the respawns")]
            public int RespawnNPCPeriodSeconds;

            [JsonProperty(PropertyName = "Use random appearance on the map, after the destruction of the NPC")]
            public bool RespawnRandomPosition;

            [JsonProperty(PropertyName = "NPC Type (Scientist = true | Scarecrow = false)")]
            public bool NPCTypeScientist;

            [JsonProperty(PropertyName = "Display name")]
            public string NpcDisplayName;

            [JsonProperty(PropertyName = "Health")]
            public float NpcHealth;

            [JsonProperty(PropertyName = "At what distance does the NPC see the enemy")]
            public float NpcLookRadius;

            [JsonProperty(PropertyName = "At what distance does the NPC attack the enemy")]
            public float NpcAttackRadius;

            [JsonProperty(PropertyName = "Roam range, (affects the Scientist only)")]
            public float NpcRoamRange;

            [JsonProperty(PropertyName = "Enable map marker NPC")]
            public bool EnableMarker;

            [JsonProperty(PropertyName = "Radio disabled")]
            public bool DesableRadio;

            [JsonProperty(PropertyName = "Enable weapon damage multiplier")]
            public bool EnableDamageMultiplier;

            [JsonProperty(PropertyName = "Weapon damage multiplier")]
            public float WeaponDamageMultiplier;

            [JsonProperty(PropertyName = "Use kit (clothing and Loot)")]
            public bool UseKit;

            [JsonProperty(PropertyName = "Kit ID")]
            public string KitName = "";

            [JsonProperty(PropertyName = "Wear")]
            public NPCItemDefinition[] Wear;

            [JsonProperty(PropertyName = "Belt")]
            public NPCItemSpendableDefinition[] Belt;

            [JsonProperty(PropertyName = "Loot")]
            public NPCLootDefinition Loot;

            public void InitPlayer(BaseCombatEntity npcEnt)
            {
                BasePlayer npcPlayer = npcEnt as BasePlayer;
                if (npcPlayer == null)
                {
                    throw new Exception("Unable to init player");
                }

                ClearContainer(npcPlayer.inventory.containerBelt);
                ClearContainer(npcPlayer.inventory.containerMain);
                ClearContainer(npcPlayer.inventory.containerWear);
                npcPlayer.inventory.ServerUpdate(0f);

                object checkKit = Instance.Kits?.CallHook("GetKitInfo", KitName);

                if (UseKit == false)
                {
                    foreach (var wearItem in Wear)
                    {
                        wearItem.CreateItem().MoveToContainer(npcPlayer.inventory.containerWear);
                    }

                    foreach (var beltItem in Belt)
                    {
                        beltItem.CreateItem().MoveToContainer(npcPlayer.inventory.containerBelt);
                    }
                }

                if (UseKit == true && checkKit != null)
                {
                    Instance.Kits?.Call("GiveKit", npcPlayer, KitName);
                }
                else if (UseKit == true && checkKit == null)
                {
                    Instance.PrintWarning($"Kit ID not filled this [NPC preset name - {PresetName}] check the settings (Kit ID)!");
                }

                npcPlayer.displayName = NpcDisplayName;
                npcPlayer.startHealth = NpcHealth;
                npcPlayer.InitializeHealth(NpcHealth, NpcHealth);

                if (npcPlayer is ScientistNPC && NPCTypeScientist == true)
                {
                    ScientistNPC _scientist = npcPlayer as ScientistNPC;

                    if (EnableMarker) Interface.CallHook("API_CreateMarker", _scientist, "scientist", 0, 3f, 0.0f, NpcDisplayName, "0", "0", 0.0f);

                    if (DesableRadio)
                    {
                        _scientist.DeathEffects = new GameObjectRef[0];
                        _scientist.radioChatterType = ScientistNPC.RadioChatterType.NONE;
                        _scientist.RadioChatterEffects = new GameObjectRef[0];
                    }

                    for (int i = 0; i < _scientist.inventory.containerBelt.itemList.ToList().Count; i++)
                    {
                        Item item = _scientist.inventory.containerBelt.itemList.ToList()[i];
                        if (item == null) continue;
                        BaseProjectile weaponProjectile = (item?.GetHeldEntity() as HeldEntity) as BaseProjectile;
                        if (weaponProjectile == null) return;
                        weaponProjectile.effectiveRange = NpcAttackRadius;
                        weaponProjectile.CanUseAtMediumRange = true;
                        weaponProjectile.CanUseAtLongRange = true;
                    }
                }

                if (npcPlayer is ScarecrowNPC && NPCTypeScientist == false)
                {
                    ScarecrowNPC _scarecrow = npcPlayer as ScarecrowNPC;

                    if (EnableMarker) Interface.CallHook("API_CreateMarker", _scarecrow, "scarecrow", 0, 3f, 0.0f, NpcDisplayName, "0", "0", 0.0f);
                }
            }

            public NPCNavigationComponent Spawn(Vector3 position, bool shouldRespawn = true)
            {
                if (NPCTypeScientist == true)
                {
                    BaseCombatEntity baseCombatEntity = InstantiateEntity(PrefabScientist, position);
                    InitPlayer(baseCombatEntity);
                    var npc = baseCombatEntity.gameObject.AddComponent<NPCNavigationComponent>();
                    npc.SetInfo(PresetName, position, NpcRoamRange, shouldRespawn);

                    NavMeshAgent navMeshAgent = baseCombatEntity.GetComponent<NavMeshAgent>();
                    if (navMeshAgent != null)
                    {
                        const int AREA_MASK = 1;
                        const int AGENT_TYPE_ID = -1372625422;

                        navMeshAgent.agentTypeID = AGENT_TYPE_ID;
                        navMeshAgent.areaMask = AREA_MASK;
                    }

                    BaseNavigator baseNavigator = baseCombatEntity.GetComponent<BaseNavigator>();

                    if (baseNavigator != null)
                    {
                        const string WALKABLE = "Walkable";
                        baseNavigator.DefaultArea = WALKABLE;
                        if (baseNavigator.topologyPreference == 0) baseNavigator.topologyPreference = (TerrainTopology.Enum)1673010749;
                        baseNavigator.topologyPreference |= TerrainTopology.Enum.Monument | TerrainTopology.Enum.Building;
                    }

                    Instance.timer.In(1f, () => { Instance.ScientistBrain(baseCombatEntity, position); });

                    Instance.MyNPCs.Add(baseCombatEntity);
                    return npc;
                }
                else if (NPCTypeScientist == false)
                {
                    BaseCombatEntity baseCombatEntity = InstantiateEntity(PrefabScarecrow, position);
                    InitPlayer(baseCombatEntity);
                    var npc = baseCombatEntity.gameObject.AddComponent<NPCNavigationComponent>();
                    npc.SetInfo(PresetName, position, NpcRoamRange, shouldRespawn);

                    Instance.MyNPCs.Add(baseCombatEntity);
                    return npc;
                }

                return null;
            }

            private BaseCombatEntity InstantiateEntity(string prefab, Vector3 position)
            {
                var entity = GameManager.server.CreateEntity(prefab, position, new Quaternion()) as BaseCombatEntity;
                entity.name = prefab;
                SceneManager.MoveGameObjectToScene(entity.gameObject, Rust.Server.EntityScene);
                UnityEngine.Object.Destroy(entity.GetComponent<Spawnable>());
                if (!entity.gameObject.activeSelf) entity.SetActive(true);
                entity.enableSaving = false;
                entity.Spawn();
                return entity;
            }
        }

        #endregion

        #region AI Scientist

        private void ScientistBrain(BaseCombatEntity baseCombatEntity, Vector3 position)
        {
            if (baseCombatEntity == null) return;
            if (baseCombatEntity is global::HumanNPC) ScientistBrain<global::HumanNPC>(baseCombatEntity, position);
        }

        private void ScientistBrain<T>(BaseCombatEntity baseCombatEntity, Vector3 position) where T : BaseEntity
        {
            BaseAIBrain baseAIBrain = baseCombatEntity.GetComponent<BaseAIBrain>();
            if (baseAIBrain != null)
            {
                ScientistNPC _scientist = baseCombatEntity as ScientistNPC;

                NPCNavigationComponent npcPlayer = _scientist.GetComponent<NPCNavigationComponent>();
                var preset = Instance.config.GetNPCPreset(npcPlayer.presetName);

                _scientist.Brain.Navigator.Init(_scientist, _scientist.Brain.Navigator.Agent);
                _scientist.Brain.ForceSetAge(0);

                _scientist.Brain.states.Remove(AIState.TakeCover);
                _scientist.Brain.states.Remove(AIState.Roam);
                _scientist.Brain.states.Remove(AIState.Chase);
                _scientist.Brain.states.Remove(AIState.Idle);
                _scientist.Brain.states.Remove(AIState.Flee);

                _scientist.Brain.Navigator.BestCoverPointMaxDistance = preset.NpcRoamRange / 2;
                _scientist.Brain.Navigator.BestRoamPointMaxDistance = preset.NpcRoamRange;
                _scientist.Brain.Navigator.MaxRoamDistanceFromHome = preset.NpcRoamRange;

                _scientist.Brain.AddState(new TakeCoverState { brain = _scientist.Brain, Position = position });
                _scientist.Brain.AddState(new IdleState(_scientist) { brain = _scientist.Brain });
                _scientist.Brain.AddState(new ChaseState(_scientist) { brain = _scientist.Brain });
                baseAIBrain.Events.Memory.Position.Set(position, 4);
                GenericRoamState<T> genericRoamState = new GenericRoamState<T>();
                genericRoamState.brain = baseAIBrain;
                baseAIBrain.states[AIState.Roam] = genericRoamState;
                _scientist.Brain.Navigator.PlaceOnNavMesh();
                _scientist.Brain.Senses.Init(_scientist, _scientist.Brain, 5f, preset.NpcLookRadius, preset.NpcLookRadius * 2, -1f, true, true, true, preset.NpcLookRadius, false, false, true, EntityType.Player, false);

            }
        }

        private Vector3 GetHomePosition(BaseCombatEntity baseCombatEntity)
        {
            if (baseCombatEntity != null)
            {
                if (baseCombatEntity is global::HumanNPC) return GetHomePosition<global::HumanNPC>(baseCombatEntity);
            }
            return Vector3.zero;
        }

        private Vector3 GetHomePosition<T>(BaseCombatEntity baseCombatEntity) where T : BaseEntity => baseCombatEntity.GetComponent<BaseAIBrain>().Events.Memory.Position.Get(4);

        public class IdleState : ScientistBrain.BasicAIState
        {
            private readonly ScientistNPC _npc;

            public IdleState(ScientistNPC npc) : base(AIState.Idle) { _npc = npc; }

            public override float GetWeight() => 50f;

            public override void StateEnter(BaseAIBrain brain, BaseEntity entity)
            {
                base.StateEnter(brain, entity);
                _npc.SetPlayerFlag(BasePlayer.PlayerFlags.Relaxed, true);
            }

            public override void StateLeave(BaseAIBrain brain, BaseEntity entity)
            {
                base.StateLeave(brain, entity);
                _npc.SetPlayerFlag(BasePlayer.PlayerFlags.Relaxed, false);
            }
        }

        public class ChaseState : ScientistBrain.BasicAIState
        {
            private StateStatus status = StateStatus.Error;
            private float nextPositionUpdateTime;

            public ChaseState(ScientistNPC npc) : base(AIState.Chase)
            {
                AgrresiveState = true;
            }

            public override void StateEnter(BaseAIBrain brain, BaseEntity entity)
            {
                base.StateEnter(brain, entity);
                status = StateStatus.Error;
                if (brain.PathFinder == null) return;

                status = StateStatus.Running;
                nextPositionUpdateTime = 0.0f;
            }

            public override void StateLeave(BaseAIBrain brain, BaseEntity entity)
            {
                base.StateLeave(brain, entity);
                Stop();
            }

            public override StateStatus StateThink(float delta, BaseAIBrain brain, BaseEntity entity)
            {
                if (status == StateStatus.Error) return status;

                var baseEntity = brain.Events.Memory.Entity.Get(brain.Events.CurrentInputMemorySlot);
                if (baseEntity == null) return StateStatus.Error;

                var distance = Vector3.Distance(entity.transform.position, baseEntity.transform.position);

                if (brain.Senses.Memory.IsLOS(baseEntity) || (double)distance <= brain.Navigator.MaxRoamDistanceFromHome) brain.Navigator.SetFacingDirectionEntity(baseEntity);
                else brain.Navigator.ClearFacingDirectionOverride();

                brain.Navigator.SetCurrentSpeed(distance <= brain.Navigator.MaxRoamDistanceFromHome ? BaseNavigator.NavigationSpeed.Normal : BaseNavigator.NavigationSpeed.Fast);

                if (Time.time > nextPositionUpdateTime)
                {
                    nextPositionUpdateTime = Time.time + UnityEngine.Random.Range(0.5f, 1f);
                    brain.Navigator.SetDestination(baseEntity.transform.position, BaseNavigator.NavigationSpeed.Normal);
                }

                return brain.Navigator.Moving ? StateStatus.Running : StateStatus.Finished;
            }

            private void Stop()
            {
                brain.Navigator.Stop();
                brain.Navigator.ClearFacingDirectionOverride();
            }
        }

        public class TakeCoverState : ScientistBrain.BasicAIState
        {
            private StateStatus status = StateStatus.Error;
            private BaseEntity coverFromEntity;
            public Vector3 Position;

            public TakeCoverState() : base(AIState.TakeCover) { }

            public override void StateEnter(BaseAIBrain brain, BaseEntity entity)
            {
                base.StateEnter(brain, entity);
                status = StateStatus.Running;
                if (StartMovingToCover()) return;

                status = StateStatus.Error;
            }

            public override void StateLeave(BaseAIBrain brain, BaseEntity entity)
            {
                base.StateLeave(brain, entity);
                brain.Navigator.ClearFacingDirectionOverride();
                ClearCoverPointUsage(entity);
            }

            public override StateStatus StateThink(float delta, BaseAIBrain brain, BaseEntity entity)
            {
                FaceCoverFromEntity();

                if (status == StateStatus.Error) return status;

                return brain.Navigator.Moving ? StateStatus.Running : StateStatus.Finished;
            }

            private void ClearCoverPointUsage(BaseEntity entity)
            {
                var aiPoint = brain.Events.Memory.AIPoint.Get(4);
                if (aiPoint == null) return;

                aiPoint.ClearIfUsedBy(entity);
            }

            private bool StartMovingToCover() => brain.Navigator.SetDestination(Position, BaseNavigator.NavigationSpeed.Normal);

            private void FaceCoverFromEntity()
            {
                coverFromEntity = brain.Events.Memory.Entity.Get(brain.Events.CurrentInputMemorySlot);
                if (coverFromEntity != null) brain.Navigator.SetFacingDirectionEntity(coverFromEntity);
            }
        }

        public class GenericRoamState<T> : BaseAIBrain.BasicAIState
        {
            private StateStatus status = StateStatus.Error;
            private static readonly Vector3[] preferedTopologySamples = new Vector3[4];
            private static readonly Vector3[] topologySamples = new Vector3[4];
            public GenericRoamState() : base(AIState.Roam) { }
            public override void StateLeave(BaseAIBrain brain, BaseEntity entity)
            {
                base.StateLeave(brain, entity);
                brain.Navigator.Stop();
            }

            public override void StateEnter(BaseAIBrain brain, BaseEntity entity)
            {
                NPCNavigationComponent npcPlayer = brain.GetComponent<NPCNavigationComponent>();
                var preset = Instance.config.GetNPCPreset(npcPlayer.presetName);

                base.StateEnter(brain, entity);
                status = StateStatus.Error;
                if (brain.PathFinder == null) return;
                Vector3 destination = GetBestRoamPosition(brain.Navigator, brain.Events.Memory.Position.Get(4), brain.Events.Memory.Position.Get(4), 1f, preset.NpcRoamRange);
                if (brain.Navigator.SetDestination(destination, BaseNavigator.NavigationSpeed.Slow, 0f, 0f))
                {
                    status = StateStatus.Running;
                    return;
                }
                status = StateStatus.Error;
            }

            public override StateStatus StateThink(float delta, BaseAIBrain brain, BaseEntity entity)
            {
                base.StateThink(delta, brain, entity);
                if (status == StateStatus.Error) return status;
                if (brain.Navigator.Moving) return StateStatus.Running;
                return StateStatus.Finished;
            }

            private Vector3 GetBestRoamPosition(BaseNavigator navigator, Vector3 localTo, Vector3 fallback, float minRange, float maxRange)
            {
                int topologyIndex = 0;
                int preferredTopologyIndex = 0;
                for (float degree = 0f; degree < 360f; degree += 90f)
                {
                    Vector3 position;
                    Vector3 pointOnCircle = BasePathFinder.GetPointOnCircle(localTo, UnityEngine.Random.Range(minRange, maxRange), degree + UnityEngine.Random.Range(0f, 90f));
                    if (navigator.GetNearestNavmeshPosition(pointOnCircle, out position, 20f) && navigator.IsAcceptableWaterDepth(position))
                    {
                        topologySamples[topologyIndex] = position;
                        topologyIndex++;
                        if (navigator.IsPositionATopologyPreference(position))
                        {
                            preferedTopologySamples[preferredTopologyIndex] = position;
                            preferredTopologyIndex++;
                        }
                    }
                }

                Vector3 chosenPosition;
                if (UnityEngine.Random.Range(0f, 1f) <= 0.9f && preferredTopologyIndex > 0) chosenPosition = preferedTopologySamples[UnityEngine.Random.Range(0, preferredTopologyIndex)];
                else if (topologyIndex > 0) chosenPosition = topologySamples[UnityEngine.Random.Range(0, topologyIndex)];
                else chosenPosition = fallback;
                return chosenPosition;
            }
        }

        #endregion

        #region class NPCSpawnRule

        public abstract class NPCSpawnRule
        {
            [JsonProperty(PropertyName = "Min Amount Npc")]
            public int MinAmountNpc;

            [JsonProperty(PropertyName = "Max Amount Npc")]
            public int MaxAmountNpc;

            private static NavMeshHit navmeshHit;

            protected bool FindValidSpawnPoint(out Vector3 result)
            {
                for (int i = 0; i < 250; i++)
                {
                    Vector3 randomPos = this.GetSpawnPos();
                    RaycastHit hitInfo;
                    if (Physics.Raycast(randomPos, Vector3.down, out hitInfo, 500.0f, Layers.Solid))
                    {
                        randomPos.y = hitInfo.point.y;
                    }
                    else
                    {
                        continue;
                    }

                    if (!this.PreNavmeshCheck(randomPos))
                    {
                        continue;
                    }

                    if (NavMesh.SamplePosition(randomPos, out navmeshHit, 50, 1))
                    {
                        if (!NavMesh.SamplePosition(navmeshHit.position, out navmeshHit, 10f, 1))
                        {
                            continue;
                        }

                        if (navmeshHit.position.y - TerrainMeta.HeightMap.GetHeight(navmeshHit.position) > 0.8f)
                        {
                            continue;
                        }

                        if (navmeshHit.position.y < TerrainMeta.WaterMap.GetHeight(navmeshHit.position))
                        {
                            continue;
                        }

                        if (IsInTextures(navmeshHit.position))
                        {
                            continue;
                        }

                        if (IsInRockPrefab(navmeshHit.position))
                        {
                            continue;
                        }

                        if (IsNearWorldCollider(navmeshHit.position))
                        {
                            continue;
                        }

                        if (IsBuildingBlocked(navmeshHit.position))
                        {
                            continue;
                        }

                        if (IsInObject(navmeshHit.position))
                        {
                            continue;
                        }

                        if (AntiHack.TestInsideTerrain(navmeshHit.position))
                        {
                            continue;
                        }

                        result = navmeshHit.position;
                        return true;
                    }
                }

                result = Vector3.zero;
                return false;
            }

            private static bool IsInTextures(Vector3 point)
            {
                var raycastStart = new Vector3(point.x, 250.0f, point.z);
                RaycastHit hitInfo;
                if (Physics.Raycast(raycastStart, Vector3.down, out hitInfo, 500.0f, Layers.Solid))
                {
                    var res = Mathf.Abs(hitInfo.point.y - point.y) > 0.4f;
                    return res;
                }
                return true;
            }

            protected static RaycastHit raycastHit;
            protected static Collider[] _buffer = new Collider[256];
            protected const int WORLD_LAYER = 65536;
            protected static readonly string[] AcceptedColliders = new string[]
            { "road", "carpark", "rocket_factory", "range", "train_track", "runway", "_grounds", "concrete_slabs", "lighthouse", "cave", "office", "walkways", "sphere", "tunnel", "industrial", "junkyard" };
            protected static readonly string[] BlockedColliders = new string[]
            { "cliff", "rock", "junk", "range", "invisible" };

            protected static bool IsInRockPrefab(Vector3 position)
            {
                Physics.queriesHitBackfaces = true;

                bool isInRock = Physics.Raycast(position, Vector3.up, out raycastHit, 20f, WORLD_LAYER, QueryTriggerInteraction.Ignore) && BlockedColliders.Any(s => raycastHit.collider?.gameObject?.name.Contains(s, System.Globalization.CompareOptions.OrdinalIgnoreCase) ?? false);

                Physics.queriesHitBackfaces = false;

                return isInRock;
            }

            protected static bool IsNearWorldCollider(Vector3 position)
            {
                Physics.queriesHitBackfaces = true;

                int count = Physics.OverlapSphereNonAlloc(position, 2f, _buffer, WORLD_LAYER, QueryTriggerInteraction.Ignore);

                Physics.queriesHitBackfaces = false;

                int removed = 0;

                for (int i = 0; i < count; i++)
                {
                    if (AcceptedColliders.Any(s => _buffer[i].gameObject.name.Contains(s))) removed++;
                }

                return removed != count;
            }

            private static bool IsBuildingBlocked(Vector3 position) => GamePhysics.CheckSphere<BuildingPrivlidge>(position, 30.0f);

            protected bool IsInObject(Vector3 position)
            {
                int layerMask = LayerMask.GetMask("Default", "Tree", "Construction", "World", "Vehicle_Detailed", "Deployed");

                return Physics.OverlapSphere(position, 0.5f, layerMask).Length > 0;
            }

            protected virtual int GetCount()
            {
                return UnityEngine.Random.Range(MinAmountNpc, MaxAmountNpc);
            }

            protected abstract bool PreNavmeshCheck(Vector3 randomPos);
            protected abstract Vector3 GetSpawnPos();
            public abstract void Spawn();
        }

        #endregion

        #region ScarecrowNPC Random homePosition

        public Vector3 GetRandomPosition()
        {
            Vector3 position = Vector3.zero;

            for (int i = 0; i < 2; i++)
            {
                float x = UnityEngine.Random.Range(-TerrainMeta.Size.x / 2, TerrainMeta.Size.x / 2), z = UnityEngine.Random.Range(-TerrainMeta.Size.z / 2, TerrainMeta.Size.z / 2), y = TerrainMeta.HeightMap.GetHeight(new Vector3(x, 0, z));

                position = new Vector3(x, y + 0.5f, z);

                if (!NavMesh.SamplePosition(position, out navmeshHit, 10f, 1) || position.y < TerrainMeta.WaterMap.GetHeight(position) || IsInRockPrefab(position) || IsNearWorldCollider(position) || IsBuildingBlocked(position) || IsInObject(position) || AntiHack.TestInsideTerrain(position))
                {
                    i = 0;
                }
                else break;
            }

            if (position == Vector3.zero)
            {
                position.y = TerrainMeta.HeightMap.GetHeight(0, 0);
            }

            return position;
        }

        private static NavMeshHit navmeshHit;
        private static RaycastHit raycastHit;
        private static Collider[] _buffer = new Collider[256];
        private const int WORLD_LAYER = 65536;
        private static readonly string[] AcceptedColliders = new string[]
        { "road", "carpark", "rocket_factory", "range", "train_track", "runway", "_grounds", "concrete_slabs", "lighthouse", "cave", "office", "walkways", "sphere", "tunnel", "industrial", "junkyard" };
        private static readonly string[] BlockedColliders = new string[]
        { "cliff", "rock", "junk", "range", "invisible" };

        private static bool IsInRockPrefab(Vector3 position)
        {
            Physics.queriesHitBackfaces = true;

            bool isInRock = Physics.Raycast(position, Vector3.up, out raycastHit, 20f, WORLD_LAYER, QueryTriggerInteraction.Ignore) && BlockedColliders.Any(s => raycastHit.collider?.gameObject?.name.Contains(s, System.Globalization.CompareOptions.OrdinalIgnoreCase) ?? false);

            Physics.queriesHitBackfaces = false;

            return isInRock;
        }

        private static bool IsNearWorldCollider(Vector3 position)
        {
            Physics.queriesHitBackfaces = true;

            int count = Physics.OverlapSphereNonAlloc(position, 2f, _buffer, WORLD_LAYER, QueryTriggerInteraction.Ignore);

            Physics.queriesHitBackfaces = false;

            int removed = 0;

            for (int i = 0; i < count; i++)
            {
                if (AcceptedColliders.Any(s => _buffer[i].gameObject.name.Contains(s))) removed++;
            }

            return removed != count;
        }

        private static bool IsBuildingBlocked(Vector3 position) => GamePhysics.CheckSphere<BuildingPrivlidge>(position, 30.0f);

        private bool IsInObject(Vector3 position)
        {
            int layerMask = LayerMask.GetMask("Default", "Tree", "Construction", "World", "Vehicle_Detailed", "Deployed");

            return Physics.OverlapSphere(position, 0.5f, layerMask).Length > 0;
        }

        #endregion

        #region class NPCMonumentSpawnRule

        class NPCMonumentSpawnRule : NPCSpawnRule
        {
            [JsonProperty(PropertyName = "Name Monument")]
            public string MonumentName;

            [JsonProperty(PropertyName = "Name Preset Npc")]
            public string PresetName;

            [JsonProperty(PropertyName = "Min Radius Spawn Npc")]
            public float MinRadiusSpawn;

            [JsonProperty(PropertyName = "Max Radius Spawn Npc")]
            public float MaxRadiusSpawn;

            private List<Vector3> monumentPositions;
            private Vector3 currentMonumentPos;
            private bool inited = false;
            public override void Spawn()
            {
                if (!inited)
                {
                    inited = true;
                    var monuments = Instance.availableMonuments.FindAll(g => g.name.Contains(this.MonumentName));
                    if (monuments.Count == 0)
                    {
                        return;
                    }
                    monumentPositions = monuments.Select(x => x.transform.position).ToList();
                }

                if (monumentPositions.Count == 0)
                {
                    return;
                }

                foreach (var monumentPosition in monumentPositions)
                {
                    currentMonumentPos = monumentPosition;
                    Vector3 point;
                    var count = this.GetCount();
                    int beforeSpawn = Instance.MyNPCs.Count;
                    for (int i = 0; i < count; i++)
                    {
                        if (FindValidSpawnPoint(out point))
                        {
                            Instance.config.GetNPCPreset(PresetName).Spawn(point);
                        }
                    }
                    int spawnedCount = Instance.MyNPCs.Count - beforeSpawn;
                    if (count != spawnedCount)
                    {
                        Instance.PrintWarning($"Unable to spawn {count} at {MonumentName}, result is {spawnedCount}");
                    }
                }
                currentMonumentPos = new Vector3();
            }

            protected override Vector3 GetSpawnPos()
            {
                float angle = UnityEngine.Random.Range(0, Mathf.PI * 2);
                float radius = UnityEngine.Random.Range(MinRadiusSpawn, MaxRadiusSpawn);
                float x = radius * Mathf.Cos(angle);
                float y = radius * Mathf.Sin(angle);
                return currentMonumentPos + new Vector3(x, 250.0f, y);
            }

            protected override bool PreNavmeshCheck(Vector3 randomPos)
            {
                return true;
            }
        }

        #endregion

        #region class NPCBiomeSpawnRule

        class NPCBiomeSpawnRule : NPCSpawnRule
        {
            [JsonConverter(typeof(StringEnumConverter))]
            [JsonProperty(PropertyName = "Name Biome")]
            public TerrainBiome.Enum BiomeName;

            [JsonProperty(PropertyName = "Name Preset Npc")]
            public string PresetName;

            public override void Spawn()
            {
                Vector3 point;
                var count = this.GetCount();
                for (int i = 0; i < count; i++)
                {
                    if (FindValidSpawnPoint(out point))
                    {
                        Instance.config.GetNPCPreset(PresetName).Spawn(point);
                    }
                }
            }

            protected override Vector3 GetSpawnPos()
            {
                return new Vector3(UnityEngine.Random.Range(-TerrainMeta.Size.x / 2, TerrainMeta.Size.x / 2), 250.0f, UnityEngine.Random.Range(-TerrainMeta.Size.z / 2, TerrainMeta.Size.z / 2));
            }

            protected override bool PreNavmeshCheck(Vector3 randomPos)
            {
                return (TerrainBiome.Enum)TerrainMeta.BiomeMap.GetBiomeMaxType(randomPos) == this.BiomeName;
            }
        }

        #endregion

        #region class NPCNavigationComponent

        public class NPCNavigationComponent : MonoBehaviour
        {
            public BasePlayer npcPlayer;
            public Vector3 homePosition;
            public float NpcRoamRange;
            public string presetName;
            public bool naturalDeath = false;
            public bool handledKill;
            public bool shouldRespawn;

            private void Awake()
            {
                npcPlayer = GetComponent<BasePlayer>();
                enabled = false;
            }

            private void Check()
            {
                if (npcPlayer == null || npcPlayer.IsDestroyed || npcPlayer.isMounted || !npcPlayer.HasBrain) return;

                if (Vector3.Distance(npcPlayer.transform.position, homePosition) > NpcRoamRange)
                {
                    ScarecrowBrain scarecrow_brain = npcPlayer.GetComponent<ScarecrowBrain>();

                    if (scarecrow_brain && scarecrow_brain.Senses.Memory.Targets.Count == 0)
                    {
                        scarecrow_brain.Navigator.SetDestination(homePosition, BaseNavigator.NavigationSpeed.Slow, 0f, 0f);
                    }
                }

                CheckSwimming();
            }

            private void CheckSwimming()
            {
                if (Instance.MyNPCs.Contains(npcPlayer) && npcPlayer.IsSwimming())
                {
                    var _npc = npcPlayer as BaseCombatEntity;

                    Instance.NextTick(() =>
                    {
                        _npc.Kill();
                        Destroy(this);
                        return;
                    });
                }
            }

            private void OnDestroy()
            {
                InvokeHandler.CancelInvoke(this, Check);
                if (npcPlayer != null && npcPlayer.IsValid() && !npcPlayer.IsDestroyed && !naturalDeath)
                {
                    npcPlayer.Kill();
                }
            }

            public void SetInfo(string presetName, Vector3 homePosition, float NpcRoamRange, bool shouldRespawn)
            {
                this.presetName = presetName;
                this.homePosition = homePosition;
                this.NpcRoamRange = NpcRoamRange;
                this.shouldRespawn = shouldRespawn;
                InvokeHandler.InvokeRepeating(this, Check, 1.0f, 10.0f);
            }
        }

        #endregion

        #region OnEntityDeath

        private void OnEntityDeath(BaseCombatEntity entity, HitInfo info)
        {
            if (entity == null || info == null) return;

            if (MyNPCs.Contains(entity))
            {
                NPCNavigationComponent npcPlayer = entity.GetComponent<NPCNavigationComponent>();
                Vector3 homePosition = GetHomePosition(entity);
                if (npcPlayer != null)
                {
                    npcPlayer.naturalDeath = true;
                    var preset = config.GetNPCPreset(npcPlayer.presetName);

                    expectedCorpses.Add(new ExpectedCorpse { id = npcPlayer.npcPlayer.userID, preset = preset });

                    if (npcPlayer.shouldRespawn)
                    {
                        if (preset.RespawnRandomPosition == false)
                        {
                            timer.In(preset.RespawnNPCPeriodSeconds, () => { preset.Spawn(npcPlayer.homePosition); });
                        }
                        else if (preset.RespawnRandomPosition == true)
                        {
                            timer.In(preset.RespawnNPCPeriodSeconds, () => { preset.Spawn(npcPlayer.homePosition = GetRandomPosition()); });
                        }

                        if (entity is ScarecrowNPC)
                        {
                            ScarecrowNPC _scarecrow = entity as ScarecrowNPC;
                            Effect.server.Run("assets/prefabs/npc/murderer/sound/death.prefab", _scarecrow, 0, Vector3.zero, _scarecrow.eyes.transform.forward.normalized);
                        }
                    }
                    npcPlayer.handledKill = true;
                    UnityEngine.Object.Destroy(npcPlayer);
                }

                BasePlayer npc = entity as BasePlayer;

                ItemContainer[] source = { npc.inventory.containerMain, npc.inventory.containerWear, npc.inventory.containerBelt };
                Inv botInv = new Inv();
                botInventories.Add(npc.userID, botInv);
                for (int i = 0; i < source.Length; i++)
                {
                    foreach (var item in source[i].itemList)
                    {
                        botInv.inventory[i].Add(new InvContents
                        {
                            ID = item.info.itemid,
                            amount = item.amount,
                            skinID = item.skin,
                        });
                    }
                }

                MyNPCs.Remove(entity);
            }
        }

        #endregion

        #region OnEntityTakeDamage

        private object OnEntityTakeDamage(BaseEntity entity, HitInfo hitInfo)
        {
            if (entity == null || hitInfo == null) return null;

            if (MyNPCs.Contains(hitInfo.Initiator as ScientistNPC) || MyNPCs.Contains(hitInfo.Initiator as ScarecrowNPC))
            {
                NPCNavigationComponent npcPlayer = hitInfo.Initiator.GetComponent<NPCNavigationComponent>();
                var preset = config.GetNPCPreset(npcPlayer.presetName);

                if (npcPlayer != null && preset.EnableDamageMultiplier)
                {
                    hitInfo.damageTypes.ScaleAll(0.01f * preset.WeaponDamageMultiplier);
                }
            }

            if (HitInfoInitiator(hitInfo.Initiator) || hitInfo.Initiator?.ToString() == null || (hitInfo.WeaponPrefab != null && hitInfo.WeaponPrefab.ShortPrefabName == "rocket_mlrs"))
            {
                if (MyNPCs.Contains(entity as ScientistNPC) || MyNPCs.Contains(entity as ScarecrowNPC))
                {
                    hitInfo.damageTypes.ScaleAll(0);
                }
            }
            return null;
        }

        private bool HitInfoInitiator(BaseEntity entity)
        {
            bool flag = false;
            if (entity != null)
            {
                if (entity.ShortPrefabName.Contains("cactus")
                || entity.ShortPrefabName.Contains("cactus-1")
                || entity.ShortPrefabName.Contains("cactus-2")
                || entity.ShortPrefabName.Contains("cactus-3")
                || entity.ShortPrefabName.Contains("cactus-4")
                || entity.ShortPrefabName.Contains("cactus-5")
                || entity.ShortPrefabName.Contains("cactus-6")
                || entity.ShortPrefabName.Contains("cactus-7")
                || entity is BradleyAPC
                || entity is BaseHelicopter)
                {
                    flag = true;
                }
            }
            return flag;
        }

        #endregion

        #region OnEntitySpawned

        void OnEntitySpawned(BaseEntity entity)
        {
            if (entity is LootableCorpse)
            {
                LootableCorpse corpse = entity as LootableCorpse;
                var corpseID = corpse.playerSteamID;
                var expectedCorpse = expectedCorpses.Find(ex => ex.id == corpseID);
                if (expectedCorpse == null) return;
                var preset = expectedCorpse.preset;
                corpse.playerName = preset.NpcDisplayName;

                if (preset.Loot.UseLootRust == false && preset.Loot.UseLootKit == false && preset.Loot.UseCratesLoot == false && preset.Loot.UseExtraLoot == false)
                {
                    Instance.PrintWarning($"No filled Loot this [NPC preset name - {preset.PresetName}] check the settings (UseLootRust = true, UseLootKit = false, UseCratesLoot = false, UseExtraLoot = false)");

                    NextTick(() =>
                    {
                        if (corpse != null && corpse.IsValid())
                        {
                            corpse.containers[0].Clear();
                        }
                    });
                }

                if (preset.Loot.UseLootKit == false)
                {
                    NextTick(() =>
                    {
                        if (corpse != null && corpse.IsValid())
                        {
                            preset.Loot.SpawnItemsToContainer(corpse.containers[0]);
                        }
                    });
                }

                object checkKit = Instance.Kits?.CallHook("GetKitInfo", preset.KitName);

                if (preset.Loot.UseLootKit == true && checkKit != null)
                {
                    timer.Once(0.1f, () =>
                    {
                        if (corpse == null || corpse.IsDestroyed || !botInventories.ContainsKey(corpseID)) return;

                        Inv botInv = botInventories[corpseID];
                        corpse.containers[0].Clear();
                        for (int i = 0; i < botInv.inventory.Length; i++)
                        {
                            foreach (var item in botInv.inventory[i])
                            {
                                var giveItem = ItemManager.CreateByItemID(item.ID, item.amount, item.skinID);
                                if (!giveItem.MoveToContainer(corpse.containers[i], -1, true)) giveItem.Remove();
                            }
                        }

                        corpse.containers[1].Clear();
                        corpse.containers[2].Clear();
                        ItemManager.DoRemoves();
                    });
                }
                else if (preset.Loot.UseLootKit == true && checkKit == null)
                {
                    Instance.PrintWarning($"No filled Loot this [NPC preset name - {preset.PresetName}] check the settings (Kit ID)");
                    NextTick(() =>
                    {
                        if (corpse != null && corpse.IsValid())
                        {
                            corpse.containers[0].Clear();
                        }
                    });
                }

                timer.Once(5f, () =>
                {
                    expectedCorpses.Remove(expectedCorpse);
                    botInventories.Remove(corpseID);
                });
            }
        }

        #endregion

        #region OnServerInitialized, Init, Unload, LoadDefaultConfig

        private void Init()
        {
            permission.RegisterPermission(PermChatCommand, this);
            Instance = this;
            config = Config.ReadObject<PluginConfig>();
            Config.WriteObject(config);
        }

        private void OnServerInitialized()
        {
            config.InitConfig();
            if (MarkerManager == null) PrintWarning("The [MarkerManager (https://umod.org)] plugin is not installed, markers cannot be displayed!");
            if (Kits == null) PrintWarning("The [Kits (https://umod.org)] plugin is not installed, kits are not issued!");
        }

        private void Unload()
        {
            NpcKill();
            MyNPCs.Clear();
            lootGenerator.Cleanup();
            config = null;
            Instance = null;
        }

        protected override void LoadDefaultConfig()
        {
            Config.WriteObject(new PluginConfig(), true);
        }

        #endregion

        #region Console Commands

        [ConsoleCommand("monument")]
        private void ConsoleCommand(ConsoleSystem.Arg arg)
        {
            if (arg.IsAdmin)
            {
                foreach (var monument in Instance.availableMonuments)
                {
                    Instance.PrintWarning($"Monument Name {monument.name}");
                    LogToFile("Log_File", $"[Monument Name {monument.name}", this);
                }
            }
        }

        #endregion

        #region Chat Command

        [ChatCommand("npc")]
        private void ChatCommand(BasePlayer player, string command, string[] args)
        {
            if (player == null && !player.IsAlive()) return;

            if (permission.UserHasPermission(player.UserIDString, PermChatCommand))
            {
            }

            if (args.Length < 1)
            {
                Message(player, "ExampleCommands");
                return;
            }

            switch (args[0].ToLower())
            {
                case "count":
                    Message(player, $"{lang.GetMessage("NpcCount", this, player.UserIDString)}" + $" [ <color=#ffbd33>{this.MyNPCs.Count}</color> ] NPC");
                    break;

                case "kill":
                    NpcKill();
                    MyNPCs.Clear();
                    Message(player, "NpcKill");
                    break;

                case "respawn":
                    NpcKill();
                    MyNPCs.Clear();
                    Message(player, "NpcKill");
                    Instance.timer.In(2f, () =>
                    {
                        config.InitSpawns();
                        Message(player, $"{lang.GetMessage("NpcCount", this, player.UserIDString)}" + $" [ <color=#ffbd33>{this.MyNPCs.Count}</color> ] NPC");
                    });
                    break;

                case "reload":
                    player.Command("o.reload SpawnNPC");
                    Message(player, "ReloadPlugin");
                    break;

                default:
                    Message(player, "ExampleCommands");
                    break;
            }
        }

        #endregion

        #region Language

        private void Message(BasePlayer player, string messageKey, params object[] args)
        {
            if (player == null) return;

            var message = GetMessage(messageKey, player.UserIDString, args);
            player.ChatMessage(message);
        }

        private string GetMessage(string messageKey, string playerID, params object[] args)
        {
            return string.Format(lang.GetMessage(messageKey, this, playerID), args);
        }

        protected override void LoadDefaultMessages()
        {
            lang.RegisterMessages(new Dictionary<string, string>
            {
                { "NoPermission", "<color=#ff0000>You do not have permission!</color>" },
                { "ExampleCommands", "[<color=#ffbd33>Example Commands</color>] \n[<color=#ffbd33>/npc count</color>] - Shows how many NPCs are on the map. \n[<color=#ffbd33>/npc kill</color>] - Kill all NPCs on the map. \n[<color=#ffbd33>/npc respawn</color>] - Respawn all NPCs on the map. \n[<color=#ffbd33>/npc reload</color>] - Reload plugin."},
                { "NpcCount", "<color=#00ce10>An has appeared on the map</color>"},
                { "NpcKill", "<color=#00ce10>Kill all NPC</color> [<color=#ffbd33>OK</color>]"},
                { "ReloadPlugin", "<color=#00ce10>Reloaded plugin SpawnNPC</color> [<color=#ffbd33>OK</color>]"},
            }, this, "en");

            lang.RegisterMessages(new Dictionary<string, string>
            {
                { "NoPermission", "<color=#ff0000>У вас нет разрешения!</color>" },
                { "ExampleCommands", "[<color=#ffbd33>Примеры команд</color>] \n[<color=#ffbd33>/npc count</color>] - Покажет сколько НПС на карте. \n[<color=#ffbd33>/npc kill</color>] - Убьёт всех НПС на карте. \n[<color=#ffbd33>/npc respawn</color>] - Респавн всех НПС на карте. \n[<color=#ffbd33>/npc reload</color>] - Перезагрузить плагин."},
                { "NpcCount", "<color=#00ce10>На карте появилось</color>"},
                { "NpcKill", "<color=#00ce10>Убить всех НПС</color> [<color=#ffbd33>OK</color>]"},
                { "ReloadPlugin", "<color=#00ce10>Перезагружен плагин SpawnNPC</color> [<color=#ffbd33>OK</color>]"},
            }, this, "ru");
        }

        #endregion

        #region Helper

        #region NpcKill

        public void NpcKill()
        {
            NPCNavigationComponent[] NPCNavigationComponent = UnityEngine.Object.FindObjectsOfType<NPCNavigationComponent>();
            if (NPCNavigationComponent != null)
            {
                foreach (NPCNavigationComponent npc in NPCNavigationComponent)
                {
                    npc.handledKill = true;
                    UnityEngine.Object.Destroy(npc);
                    Interface.CallHook("API_RemoveMarker", "scarecrow");
                    Interface.CallHook("API_RemoveMarker", "scientist");
                }
            }
        }

        #endregion

        #region ClearContainer

        private static void ClearContainer(ItemContainer container)
        {
            while (container.itemList.Count > 0)
            {
                var item = container.itemList[0];
                item.RemoveFromContainer();
                item.Remove(0f);
            }
        }

        #endregion

        #region Target

        private object CanBradleyApcTarget(BradleyAPC bradley, BaseEntity entity)
        {
            if (bradley == null || entity == null) return null;
            if (MyNPCs.Contains(entity as ScientistNPC) || MyNPCs.Contains(entity as ScarecrowNPC))
            {
                return false;
            }
            return null;
        }

        private object OnHelicopterTarget(HelicopterTurret turret, BaseCombatEntity entity)
        {
            if (turret == null || entity == null) return null;
            if (MyNPCs.Contains(entity as ScientistNPC) || MyNPCs.Contains(entity as ScarecrowNPC))
            {
                return false;
            }
            return null;
        }

        private object OnTurretTarget(NPCAutoTurret turret, BaseCombatEntity entity)
        {
            if (turret == null || entity == null) return null;
            if (config.CanBeAttackedByTurrets)
            {
                if (MyNPCs.Contains(entity as ScientistNPC) || MyNPCs.Contains(entity as ScarecrowNPC))
                {
                    return false;
                }
            }
            return null;
        }

        private object OnNpcTarget(ScarecrowNPC npc, BaseEntity target)
        {
            if (!MyNPCs.Contains(npc)) return CanAttack(target);
            else return null;
        }

        private object CanAttack(BaseEntity target)
        {
            if (HumanNPCCheck(target) || MyNPCs.Contains(target) || (target is BasePlayer && (target as BasePlayer).IsSleeping())) return false;
            else return null;
        }

        private bool HumanNPCCheck(BaseEntity target)
        {
            BasePlayer player = target as BasePlayer;
            return player != null && !player.userID.IsSteamId() && !(target is ScientistNPC) && !(target is ScarecrowNPC);
        }

        #endregion

        #region Check OnNpcKits

        object OnNpcKits(BasePlayer player)
        {
            if (MyNPCs.Contains(player))
            {
                return true;
            }
            return null;
        }

        #endregion

        #endregion

        #region PluginConfig

        class PluginConfig
        {
            //[JsonIgnore]
            [JsonProperty(PropertyName = "Names for monument. Read-only!")]
            public string[] MonumentNamesReadonly
            {
                get
                {
                    return new string[]
                    {
                        #region Monument Names Procedural Map
                        "powerplant_1",
                        "military_tunnel_1",
                        "harbor_1",
                        "harbor_2",
                        "airfield_1",
                        "trainyard_1",
                        "water_treatment_plant_1",
                        "satellite_dish",
                        "sphere_tank",
                        "radtown_small_3",
                        "launch_site_1",
                        "excavator_1",
                        "junkyard_1",
                        "warehouse",
                        "gas_station_1",
                        "supermarket_1",
                        "mining_quarry_c",
                        "mining_quarry_a",
                        "mining_quarry_b",
                        "desert_military_base_a",
                        "arctic_research_base_a",
                        #endregion

                        #region Monument Names HapisIsland Map
                        "Water Well A (x)",
                        "Water Well E (x)",
                        "MONUMENT Dome",
                        "Mining Quarry A2 ***",
                        "MONUMENT Junkyard *",
                        "MONUMENT Pumpjack Compound ***",
                        "MONUMENT Fishing Village South A **",
                        "MONUMENT Fishing Village East C **",
                        "MONUMENT Compound ***",
                        "Lighthouse",
                        "Lighthouse 2",
                        "MONUMENT Military Tunnels Underground (old)",
                        "MONUMENT Satellite Dish Island ***",
                        "Warehouse 2",
                        "Mining Quarry C2 ***",
                        "MONUMENT Water Treatment Plant ***",
                        "MONUMENT Waste Management ***",
                        "MONUMENT Launch Site ***",
                        "MONUMENT Stables A",
                        #endregion
                    };
                }
            }

            //[JsonIgnore]
            [JsonProperty(PropertyName = "Names for biome. Read-only!")]
            public string[] BiomeNamesReadonly
            {
                get
                {
                    return new string[]
                    {
                        TerrainBiome.Enum.Arctic.ToString(), TerrainBiome.Enum.Arid.ToString(), TerrainBiome.Enum.Temperate.ToString(), TerrainBiome.Enum.Tundra.ToString()
                    };
                }
            }

            [JsonProperty(PropertyName = "Names for loot crate. Read-only!")]
            public string[] CrateNamesReadonly
            {
                get
                {
                    return lootPrefabs.Keys.ToArray();
                }
            }

            [JsonIgnore]
            public List<NPCSpawnRule> AllRules
            {
                get
                {
                    return this.BiomeSpawnRules.Cast<NPCSpawnRule>().Concat(this.SpawnRules).ToList();
                }
            }

            [JsonProperty(PropertyName = "Turrets by outpost sentries don't attack NPC")]
            public bool CanBeAttackedByTurrets = false;

            #region NPCPreset

            [JsonProperty(PropertyName = "Preset for the NPC")]
            public NPCPreset[] NpcPresets =
            {
                #region Murderer_machete_monument
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 600,
                    RespawnRandomPosition = false,
                    NPCTypeScientist = false,
                    PresetName = "murderer_machete_monument",
                    NpcDisplayName = "Murderer",
                    NpcHealth = 100,
                    NpcLookRadius = 30,
                    NpcAttackRadius = 0,
                    NpcRoamRange = 30f,
                    EnableMarker = false,
                    DesableRadio = true,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "gloweyes",
                            ItemSkinID = new ulong[] { 0 }
                        },
                        new NPCItemDefinition
                        {
                            ItemShortName = "burlap.headwrap",
                            ItemSkinID = new ulong[] { 811534810 }
                        },
                        new NPCItemDefinition
                        {
                            ItemShortName = "burlap.trousers",
                            ItemSkinID = new ulong[] { 1177788927 }
                        },
                        new NPCItemDefinition
                        {
                            ItemShortName = "burlap.shirt",
                            ItemSkinID = new ulong[] { 1177719024 }
                        },
                        new NPCItemDefinition
                        {
                            ItemShortName = "shoes.boots",
                            ItemSkinID = new ulong[] { 820952520 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "machete",
                            ItemSkinID = new ulong[] { 928142240 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = false,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = true,
                        NameCratesLoot = new string[] { "radtown_loot_component_test" },
                        ItemsMin = 3,
                        ItemsMax = 6,
                    }
                },
                #endregion

                #region Scarecrow_sickle_biome
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 600,
                    RespawnRandomPosition = true,
                    NPCTypeScientist = false,
                    PresetName = "scarecrow_sickle_biome",
                    NpcDisplayName = "Scarecrow",
                    NpcHealth = 100,
                    NpcLookRadius = 30,
                    NpcAttackRadius = 0,
                    NpcRoamRange = 100f,
                    EnableMarker = false,
                    DesableRadio = true,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "gloweyes",
                            ItemSkinID = new ulong[] { 0 }
                        },
                        new NPCItemDefinition
                        {
                            ItemShortName = "scarecrow.suit",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "sickle",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = false,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = true,
                        NameCratesLoot = new string[] { "radtown_loot_component_test" },
                        ItemsMin = 3,
                        ItemsMax = 6,
                    }
                },
                #endregion

                #region Surgeon_butcher_biome
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 600,
                    RespawnRandomPosition = true,
                    NPCTypeScientist = false,
                    PresetName = "surgeon_butcher_biome",
                    NpcDisplayName = "Surgeon",
                    NpcHealth = 100,
                    NpcLookRadius = 30,
                    NpcAttackRadius = 0,
                    NpcRoamRange = 100f,
                    EnableMarker = false,
                    DesableRadio = true,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "gloweyes",
                            ItemSkinID = new ulong[] { 0 }
                        },
                        new NPCItemDefinition
                        {
                            ItemShortName = "halloween.surgeonsuit",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "knife.butcher",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = false,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = true,
                        NameCratesLoot = new string[] { "radtown_loot_component_test" },
                        ItemsMin = 3,
                        ItemsMax = 6,
                    }
                },
                #endregion

                #region Mummy_pitchfork_biome
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 600,
                    RespawnRandomPosition = true,
                    NPCTypeScientist = false,
                    PresetName = "mummy_pitchfork_biome",
                    NpcDisplayName = "Mummy",
                    NpcHealth = 200,
                    NpcLookRadius = 30,
                    NpcAttackRadius = 0,
                    NpcRoamRange = 100f,
                    EnableMarker = false,
                    DesableRadio = true,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "halloween.mummysuit",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "pitchfork",
                            ItemSkinID = new ulong[] { 0 }
                        },
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 10,
                            ItemShortName = "grenade.beancan",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = true,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = false,
                        NameCratesLoot = new string[] { "radtown_loot_component_test" },
                        ItemsMin = 3,
                        ItemsMax = 6,
                    }
                },
                #endregion

                #region Mummy_chainsaw_biome
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 600,
                    RespawnRandomPosition = true,
                    NPCTypeScientist = false,
                    PresetName = "mummy_chainsaw_biome",
                    NpcDisplayName = "Mummy",
                    NpcHealth = 200,
                    NpcLookRadius = 30,
                    NpcAttackRadius = 0,
                    NpcRoamRange = 100f,
                    EnableMarker = false,
                    DesableRadio = true,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "halloween.mummysuit",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "chainsaw",
                            ItemSkinID = new ulong[] { 0 }
                        },
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 10,
                            ItemShortName = "grenade.beancan",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = true,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = false,
                        NameCratesLoot = new string[] { "radtown_loot_component_test" },
                        ItemsMin = 3,
                        ItemsMax = 6,
                    }
                },
                #endregion
				
                #region Butcher_revolver_monument
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 900,
                    RespawnRandomPosition = false,
                    NPCTypeScientist = true,
                    PresetName = "butcher_revolver_monument",
                    NpcDisplayName = "Butcher",
                    NpcHealth = 100,
                    NpcLookRadius = 40,
                    NpcAttackRadius = 30,
                    NpcRoamRange = 30f,
                    EnableMarker = false,
                    DesableRadio = true,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "burlap.headwrap",
                            ItemSkinID = new ulong[]
                            {
                                942098139,
                                1691834772,
                                896506958,
                                861551572,
                                1694253807,
                                868014709,
                                785890135,
                                822358002,
                                2359491836,
                                2628320731,
                                2546312064,
                                2255857422,
                                942098139,
                                868014709,
                                2627598726,
                                861551572,
                                785890135,
                                896506958,
                                2564348661,
                                822358002,
                                1691834772,
                                1694253807
                            }
                        },
                        new NPCItemDefinition
                        {
                            ItemShortName = "burlap.shirt",
                            ItemSkinID = new ulong[]
                            {
                                849866944,
                                1127407306,
                                809909900,
                                1438049725,
                                654502725,
                                899941622,
                                1755124648,
                                926478499,
                                1294811936,
                                1394039696,
                                1354670586,
                                1323654151,
                                1229561297,
                                882451685,
                                1294812700,
                                1145786859,
                                2039984110,
                                2547109183,
                                2556987808,
                                2365505183,
                                585386820,
                                2519100346,
                                2255869247
                            }
                        },
                        new NPCItemDefinition
                        {
                            ItemShortName = "burlap.trousers",
                            ItemSkinID = new ulong[]
                            {
                                1127409880,
                                1760352876,
                                2216144342,
                                1994622998,
                                921250017,
                                1438049211,
                                2519100909,
                                2365579502,
                                2255871111,
                                1380047706,
                                2556988996,
                                1323664071,
                                1394040054,
                                1145780081,
                                2039988322,
                                1354675665,
                                1755140135,
                                809968188
                            }
                        },
                        new NPCItemDefinition
                        {
                            ItemShortName = "shoes.boots",
                            ItemSkinID = new ulong[]
                            {
                                1100926907,
                                1441308562,
                                1432967312,
                                919261524,
                                1395755190,
                                1084392788,
                                920390242,
                                962503020,
                                961096730,
                                2410871443,
                                784559403,
                                493064563,
                                1106548545,
                                1406796292,
                                838205144,
                                899942107,
                                2075527039,
                                493534620,
                                826587881,
                                1915397286,
                                2199934989,
                                1196740980,
                                513629119,
                                869090082,
                                2304198263,
                                613481881,
                                944997041,
                                809586899,
                                882570089,
                                1111680681,
                                2537679237,
                                507940691
                            }
                        },
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "pistol.revolver",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = true,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = false,
                        NameCratesLoot = new string[] { "radtown_loot_component_test" },
                        ItemsMin = 3,
                        ItemsMax = 6,
                    }
                },
                #endregion

                #region Scientist_spacesuit_monument
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 1200,
                    RespawnRandomPosition = false,
                    NPCTypeScientist = true,
                    PresetName = "scientist_spacesuit_monument",
                    NpcDisplayName = "Scientist spacesuit",
                    NpcHealth = 350,
                    NpcLookRadius = 80,
                    NpcAttackRadius = 70,
                    NpcRoamRange = 100f,
                    EnableMarker = false,
                    DesableRadio = false,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "hazmatsuit.spacesuit",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "lmg.m249",
                            ItemSkinID = new ulong[]
                            {
                                1719536313
                            }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = false,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = true,
                        NameCratesLoot = new string[] { "chinooklockedcrate" },
                        ItemsMin = 3,
                        ItemsMax = 6,
                    }
                },
                #endregion
				
                #region Scientist_heavy_l96_monument
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 1200,
                    RespawnRandomPosition = false,
                    NPCTypeScientist = true,
                    PresetName = "scientis_heavy_l96_monument",
                    NpcDisplayName = "Scientist heavy",
                    NpcHealth = 250,
                    NpcLookRadius = 80,
                    NpcAttackRadius = 70,
                    NpcRoamRange = 80f,
                    EnableMarker = false,
                    DesableRadio = false,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "scientistsuit_heavy",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "rifle.l96",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = false,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = true,
                        NameCratesLoot = new string[] { "radtown_crate_elite" },
                        ItemsMin = 3,
                        ItemsMax = 6,
                    }
                },
                #endregion

                #region Scientist_heavy_lr300_monument
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 1200,
                    RespawnRandomPosition = false,
                    NPCTypeScientist = true,
                    PresetName = "scientist_heavy_lr300_monument",
                    NpcDisplayName = "Scientist heavy",
                    NpcHealth = 250,
                    NpcLookRadius = 80,
                    NpcAttackRadius = 70,
                    NpcRoamRange = 80f,
                    EnableMarker = false,
                    DesableRadio = false,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "scientistsuit_heavy",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "rifle.lr300",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = false,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = true,
                        NameCratesLoot = new string[] { "radtown_crate_elite" },
                        ItemsMin = 3,
                        ItemsMax = 6,
                    }
                },
                #endregion
				
                #region Scientist_lr300_monument
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 900,
                    RespawnRandomPosition = false,
                    NPCTypeScientist = true,
                    PresetName = "scientist_lr300_monument",
                    NpcDisplayName = "Scientist",
                    NpcHealth = 175,
                    NpcLookRadius = 60,
                    NpcAttackRadius = 50,
                    NpcRoamRange = 50f,
                    EnableMarker = false,
                    DesableRadio = false,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "hazmatsuit_scientist",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "rifle.lr300",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = true,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = false,
                        NameCratesLoot = new string[] { "radtown_crate_normal_2_medical" },
                        ItemsMin = 1,
                        ItemsMax = 3,
                    }
                },
                #endregion
				
                #region Scientist_mp5_monument
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 900,
                    RespawnRandomPosition = false,
                    NPCTypeScientist = true,
                    PresetName = "scientist_mp5_monument",
                    NpcDisplayName = "Scientist",
                    NpcHealth = 175,
                    NpcLookRadius = 60,
                    NpcAttackRadius = 50,
                    NpcRoamRange = 50f,
                    EnableMarker = false,
                    DesableRadio = false,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "hazmatsuit_scientist",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "smg.mp5",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = true,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = false,
                        NameCratesLoot = new string[] { "radtown_crate_normal_2_medical" },
                        ItemsMin = 1,
                        ItemsMax = 3,
                    }
                },
                #endregion
				
                #region Scientist_spas12_monument
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 900,
                    RespawnRandomPosition = false,
                    NPCTypeScientist = true,
                    PresetName = "scientis_shotgun_monument",
                    NpcDisplayName = "Scientist",
                    NpcHealth = 175,
                    NpcLookRadius = 60,
                    NpcAttackRadius = 50,
                    NpcRoamRange = 50f,
                    EnableMarker = false,
                    DesableRadio = false,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "hazmatsuit_scientist",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "shotgun.spas12",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = true,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = false,
                        NameCratesLoot = new string[] { "radtown_crate_normal_2_medical" },
                        ItemsMin = 1,
                        ItemsMax = 3,
                    }
                },
                #endregion
				
                #region Scientist_m92_monument
                new NPCPreset
                {
                    RespawnNPCPeriodSeconds = 900,
                    RespawnRandomPosition = false,
                    NPCTypeScientist = true,
                    PresetName = "scientis_m92_monument",
                    NpcDisplayName = "Scientist",
                    NpcHealth = 175,
                    NpcLookRadius = 60,
                    NpcAttackRadius = 50,
                    NpcRoamRange = 50f,
                    EnableMarker = false,
                    DesableRadio = false,
                    EnableDamageMultiplier = false,
                    WeaponDamageMultiplier = 100.0f,
                    UseKit = false,
                    KitName = "",
                    Wear = new NPCItemDefinition[]
                    {
                        new NPCItemDefinition
                        {
                            ItemShortName = "hazmatsuit_scientist",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Belt = new NPCItemSpendableDefinition[]
                    {
                        new NPCItemSpendableDefinition
                        {
                            ItemAmount = 1,
                            ItemShortName = "pistol.m92",
                            ItemSkinID = new ulong[] { 0 }
                        }
                    },
                    Loot = new NPCLootDefinition
                    {
                        UseLootRust = true,
                        UseLootKit = false,
                        UseExtraLoot = false,
                        UseCratesLoot = false,
                        NameCratesLoot = new string[] { "radtown_crate_normal_2_medical" },
                        ItemsMin = 1,
                        ItemsMax = 3,
                    }
                },
                #endregion
            };

            #endregion

            public NPCPreset GetNPCPreset(string presetName)
            {
                return this.NpcPresets.ToList().Find(np => np.PresetName.Equals(presetName));
            }

            #region NPCMonumentSpawnRule

            [JsonProperty(PropertyName = "Rule Spawn NPC for Monument")]
            public NPCMonumentSpawnRule[] SpawnRules =
            {
                #region powerplant
                new NPCMonumentSpawnRule
                {
                    MonumentName = "powerplant_1",
                    PresetName = "scientist_lr300_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "powerplant_1",
                    PresetName = "scientist_mp5_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "powerplant_1",
                    PresetName = "scientis_shotgun_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                #endregion
				
                #region military_tunnel
                new NPCMonumentSpawnRule
                {
                    MonumentName = "military_tunnel_1",
                    PresetName = "scientist_lr300_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "military_tunnel_1",
                    PresetName = "scientist_mp5_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "military_tunnel_1",
                    PresetName = "scientis_shotgun_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                #endregion
				
                #region airfield
                new NPCMonumentSpawnRule
                {
                    MonumentName = "airfield_1",
                    PresetName = "scientist_lr300_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "airfield_1",
                    PresetName = "scientist_mp5_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "airfield_1",
                    PresetName = "scientis_shotgun_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                #endregion
				
                #region trainyard
                new NPCMonumentSpawnRule
                {
                    MonumentName = "trainyard_1",
                    PresetName = "scientist_lr300_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "trainyard_1",
                    PresetName = "scientist_mp5_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "trainyard_1",
                    PresetName = "scientis_shotgun_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                #endregion
				
                #region water_treatment_plant
                new NPCMonumentSpawnRule
                {
                    MonumentName = "water_treatment_plant_1",
                    PresetName = "scientist_lr300_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "water_treatment_plant_1",
                    PresetName = "scientist_mp5_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "water_treatment_plant_1",
                    PresetName = "scientis_shotgun_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                #endregion
				
                #region radtown_small
                new NPCMonumentSpawnRule
                {
                    MonumentName = "radtown_small_3",
                    PresetName = "scientist_lr300_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "radtown_small_3",
                    PresetName = "scientist_mp5_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "radtown_small_3",
                    PresetName = "scientis_shotgun_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 60,
                },
                #endregion
				
                #region launch_site
                new NPCMonumentSpawnRule
                {
                    MonumentName = "launch_site_1",
                    PresetName = "scientis_heavy_l96_monument",
                    MinAmountNpc = 1,
                    MaxAmountNpc = 1,
                    MinRadiusSpawn = 180,
                    MaxRadiusSpawn = 200,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "launch_site_1",
                    PresetName = "scientist_heavy_lr300_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 180,
                    MaxRadiusSpawn = 200,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "launch_site_1",
                    PresetName = "scientist_spacesuit_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 180,
                    MaxRadiusSpawn = 200,
                },
                #endregion
				
                #region junkyard
                new NPCMonumentSpawnRule
                {
                    MonumentName = "junkyard_1",
                    PresetName = "scientist_lr300_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 100,
                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "junkyard_1",
                    PresetName = "scientist_mp5_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 100,

                },
                new NPCMonumentSpawnRule
                {
                    MonumentName = "junkyard_1",
                    PresetName = "scientis_shotgun_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 50,
                    MaxRadiusSpawn = 100,
                },
                #endregion
				
                #region satellite_dish
                new NPCMonumentSpawnRule
                {
                    MonumentName = "satellite_dish",
                    PresetName = "scientis_m92_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 30,
                    MaxRadiusSpawn = 50,
                },
                #endregion
				
                #region harbor_1
                new NPCMonumentSpawnRule
                {
                    MonumentName = "harbor_1",
                    PresetName = "scientis_m92_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 30,
                    MaxRadiusSpawn = 50,
                },
                #endregion
				
                #region harbor_2
                new NPCMonumentSpawnRule
                {
                    MonumentName = "harbor_2",
                    PresetName = "scientis_m92_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 30,
                    MaxRadiusSpawn = 50,
                },
                #endregion

                #region sphere_tank
                new NPCMonumentSpawnRule
                {
                    MonumentName = "sphere_tank",
                    PresetName = "butcher_revolver_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 30,
                    MaxRadiusSpawn = 50,
                },
                #endregion
				
				#region warehouse,
                new NPCMonumentSpawnRule
                {
                    MonumentName = "warehouse",
                    PresetName = "murderer_machete_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 10,
                    MaxRadiusSpawn = 20,
                },
                #endregion
				
                #region gas_station
                new NPCMonumentSpawnRule
                {
                    MonumentName = "gas_station_1",
                    PresetName = "murderer_machete_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 10,
                    MaxRadiusSpawn = 20,
                },
                #endregion
				
                #region supermarket
                new NPCMonumentSpawnRule
                {
                    MonumentName = "supermarket_1",
                    PresetName = "murderer_machete_monument",
                    MinAmountNpc = 3,
                    MaxAmountNpc = 3,
                    MinRadiusSpawn = 10,
                    MaxRadiusSpawn = 20,
                },
                #endregion
            };

            #endregion

            #region NPCBiomeSpawnRule

            [JsonProperty(PropertyName = "Rule Spawn NPC for Biome")]
            public NPCBiomeSpawnRule[] BiomeSpawnRules =
            {
                #region Biome Arctic
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Arctic,
                    PresetName = "scarecrow_sickle_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Arctic,
                    PresetName = "surgeon_butcher_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Arctic,
                    PresetName = "mummy_pitchfork_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Arctic,
                    PresetName = "mummy_chainsaw_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                #endregion

                #region Biome Arid
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Arid,
                    PresetName = "scarecrow_sickle_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Arid,
                    PresetName = "surgeon_butcher_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Arid,
                    PresetName = "mummy_pitchfork_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Arid,
                    PresetName = "mummy_chainsaw_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                #endregion

                #region Biome Temperate
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Temperate,
                    PresetName = "scarecrow_sickle_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Temperate,
                    PresetName = "surgeon_butcher_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Temperate,
                    PresetName = "mummy_pitchfork_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Temperate,
                    PresetName = "mummy_chainsaw_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                #endregion

                #region Biome Tundra
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Tundra,
                    PresetName = "scarecrow_sickle_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Tundra,
                    PresetName = "surgeon_butcher_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Tundra,
                    PresetName = "mummy_pitchfork_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                new NPCBiomeSpawnRule
                {
                    BiomeName = TerrainBiome.Enum.Tundra,
                    PresetName = "mummy_chainsaw_biome",
                    MinAmountNpc = 5,
                    MaxAmountNpc = 5,
                },
                #endregion
            };

            #endregion

            public void InitConfig()
            {
                Validate();
                InitMonuments();
                InitSpawnScaleFactor();
                InitSpawns();
            }

            private void Validate()
            {
                bool valid = true;
                if (NpcPresets.Select(preset => preset.PresetName).Distinct().Count() != NpcPresets.Length)
                {
                    Instance.PrintWarning($"There are duplicating NPC preset names, check the config!");
                    valid = false;
                }

                foreach (var preset in NpcPresets)
                {
                    foreach (var nid in preset.Wear)
                    {
                        if (ItemManager.itemList.FindIndex(id => id.shortname == nid.ItemShortName) == -1)
                        {
                            Instance.PrintWarning($"NPC preset {preset.PresetName}: shortname {nid.ItemShortName} doesn't exist");
                            valid = false;
                        }
                    }

                    foreach (var nid in preset.Belt)
                    {
                        if (ItemManager.itemList.FindIndex(id => id.shortname == nid.ItemShortName) == -1)
                        {
                            Instance.PrintWarning($"NPC preset {preset.PresetName}: shortname {nid.ItemShortName} doesn't exist");
                            valid = false;
                        }
                    }

                    foreach (var crateName in preset.Loot.NameCratesLoot)
                    {
                        if (!CrateNamesReadonly.Contains(crateName))
                        {
                            Instance.PrintWarning($"NPC preset {preset.PresetName}: crate {crateName} doesn't exist");
                            valid = false;
                        }
                    }

                    if (preset.Loot.UseLootRust == false && preset.Loot.UseLootKit == false && preset.Loot.UseExtraLoot == false && preset.Loot.UseCratesLoot == false)
                    {
                        Instance.PrintWarning($"No filled Loot this [NPC preset name - {preset.PresetName}] check the settings (UseLootRust = true, UseLootKit = false, UseCratesLoot = false, UseExtraLoot = false)");
                    }
                }

                foreach (var rule in SpawnRules)
                {
                    if (NpcPresets.ToList().FindIndex(pr => pr.PresetName.Equals(rule.PresetName)) == -1)
                    {
                        Instance.PrintWarning($"Unknown NPC preset {rule.PresetName}, check the config!");
                        valid = false;
                    }

                    if (!MonumentNamesReadonly.Contains(rule.MonumentName))
                    {
                        Instance.PrintWarning($"Unknown monument name {rule.MonumentName}, check the config!");
                        valid = false;
                    }

                    if (rule.MinRadiusSpawn == rule.MaxRadiusSpawn)
                    {
                        Instance.PrintWarning($"Monument name {rule.MonumentName}, Use different value for (MinRadiusSpawn, MaxRadiusSpawn) this value must not be the same!");
                    }
                }

                foreach (var rule in BiomeSpawnRules)
                {
                    if (NpcPresets.ToList().FindIndex(pr => pr.PresetName.Equals(rule.PresetName)) == -1)
                    {
                        Instance.PrintError($"Unknown NPC preset {rule.PresetName}, check the config!");
                        valid = false;
                    }

                    if (!BiomeNamesReadonly.Contains(rule.BiomeName.ToString()))
                    {
                        Instance.PrintError($"Unknown biome name {rule.BiomeName.ToString()}, check the config!");
                        valid = false;
                    }
                }

                if (!valid)
                {
                    throw new Exception("Config is invalid check the console");
                }
            }

            public void InitSpawns()
            {
                foreach (var rule in AllRules)
                {
                    rule.Spawn();
                }
                Instance.PrintWarning($"Successfully spawned {Instance.MyNPCs.Count} NPCs");
            }

            private void InitSpawnScaleFactor()
            {
                int maxFromRules = 0;
                foreach (var monument in Instance.availableMonuments)
                {
                    var MonumentName = MonumentNamesReadonly.ToList().Find(name => monument.name.Contains(name));
                    if (MonumentName != null)
                    {
                        foreach (var rule in SpawnRules)
                        {
                            if (rule.MonumentName.Equals(MonumentName))
                            {
                                maxFromRules += rule.MaxAmountNpc;
                            }
                        }
                    }
                }

                foreach (var rule in BiomeSpawnRules)
                {
                    maxFromRules += rule.MaxAmountNpc;
                }

                if (maxFromRules == 0)
                {
                    maxFromRules = 1;
                }
            }

            private void InitMonuments()
            {
                foreach (var monument in TerrainMeta.Path.Monuments)
                {
                    Instance.availableMonuments.Add(monument.gameObject);
                }

                Instance.PrintWarning($"Found {Instance.availableMonuments.Count} monuments");
            }
        }

        #endregion
    }

    #endregion
}