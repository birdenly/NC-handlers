var answers1 = ["No", "Yes"];
Game.AddOption("Use Process Picker?", "If you want to set the game to windowed or change res, this makes it easier.", "Picker", answers1);

var answers2 = ["30", "45", "60", "75", "90"];
Game.AddOption("Select the FPS cap.", "91 FPS is the cap for multiplayer.", "fps", answers2);
Game.GamePlayBeforeGameSetup = true; 
Game.KillMutex = ["CrytekApplication(0)"];
Game.DirSymlinkExclusions = ["bin64_SteamRetail"];
Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt", "steam_interfaces.txt", "local_save.txt"];
Game.FileSymlinkCopyInstead = ["system.cfg"];
Game.GameName = "Evolve";
Game.UseGoldberg = true;
Game.GoldbergExperimental = true; 
// Game.NeedsSteamEmulation = true; 
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "Evolve.exe";
Game.ExecutableToLaunch = "RebornEvolve.exe";
Game.SteamID = "273350";
Game.GUID = "Evolve";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 4;
Game.BinariesFolder = "bin64_SteamRetail";
Game.LauncherTitle = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "EVOLVE";
// Game.PreventWindowDeactivation = true;
// Game.HookFocus = true;
Game.SupportsKeyboard = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.Description =
  "On first Nucleus launch select your custom resolution in the game graphics settings and disable fullscreen for all instances, use the process picker UI option to make this easier, select the ryse process in process picker after you finish setting up an instance. If you want the instances to resize correctly and avoid stretching you need to create custom resolutions in your AMD/Nvidia/Intel panel (For example: 960x1080, 960x540, 1920x540 etc.) so the game can see and use them. Create a gladiator custom match, select the map and choose match me, do the same in the other instance to connect. Reduce graphics settings per instance like shadows and textures to improve performance.";
Game.PauseBetweenStarts = 35;

Game.Play = function() {

  var FPS = Context.Options["fps"];

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Bin64_SteamRetail\\RebornEvolve.exe")) {
  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));
  }

var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Bin64_SteamRetail\\steam_interfaces.txt";
var lines = [
"SteamClient015",
"SteamGameServer012",
"SteamGameServerStats001",
"SteamUser017",
"SteamFriends014",
"SteamUtils007",
"SteamMatchMaking009",
"SteamMatchMakingServers002",
"STEAMUSERSTATS_INTERFACE_VERSION011",
"STEAMAPPS_INTERFACE_VERSION006",
"SteamNetworking005",
"STEAMREMOTESTORAGE_INTERFACE_VERSION012",
"STEAMSCREENSHOTS_INTERFACE_VERSION002",
"STEAMHTTP_INTERFACE_VERSION002",
"STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001",
"STEAMUGC_INTERFACE_VERSION002",
"STEAMAPPLIST_INTERFACE_VERSION001",
"STEAMMUSIC_INTERFACE_VERSION001",
"STEAMMUSICREMOTE_INTERFACE_VERSION001",
"STEAMCONTROLLER_INTERFACE_VERSION"
];
Context.WriteTextFile(interfaces, lines);

  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Bin64_SteamRetail\\local_save.txt";
  var lines = [
    "EvolveCrack"
  ];
  Context.WriteTextFile(interfaces, lines);

var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Bin64_SteamRetail\\disable_lan_only.txt";
  var lines = [];
  Context.WriteTextFile(timese, lines);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Bin64_SteamRetail\\dxgi.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("Window.System", "OverrideRes", Context.Width + "x" + Context.Height),
      new Nucleus.IniSaveInfo("Render.FrameRate", "TargetFPS", FPS),
      new Nucleus.IniSaveInfo("Render.FrameRate", "BackgroundFPS", FPS),
      new Nucleus.IniSaveInfo("Input.Gamepad", "SlotReassignment", Context.GamepadId - 1),
    ]);

    var controller = 0
    var hide = ""
    if (Context.IsKeyboardPlayer) {
      controller = ""
      hide = "true"
    }else{
      controller = Context.GamepadId - 1
      hide = "false"
    }
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Bin64_SteamRetail\\dxgi.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("Input.Gamepad", "SlotReassignment", controller),
      new Nucleus.IniSaveInfo("Input.Gamepad", "HideGamepads", hide),
      new Nucleus.IniSaveInfo("Input.XInput", "SlotReassignment", controller),
    ]);

  var picker = Context.Options["Picker"];

  if (picker == "Yes") {
    Game.ForceProcessPick = true;
    Game.PromptBetweenInstances = true;
  }

  if (picker == "No") {
  }
};