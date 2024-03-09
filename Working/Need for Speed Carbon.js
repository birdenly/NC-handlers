var answers1 = ["Xbox Icons", "PlayStation Icons"];
Game.AddOption("What gamepad icons to use in-game?", "", "icons", answers1);

var answers2 = ["yes", "no"];
Game.AddOption("Use nucleus settings.ini?", "'yes' = Will use a settings.ini with almost all chaos effect/stuff disabled already(read handlers note to fully disable it). 'no' = If you already saved setting in chaos mod and will use it in split screen.", "org", answers2);

Game.FileSymlinkExclusions = [
"dinput8.dll",
"d3d9.dll",
"buttons-playstation.tpk",
"buttons-xbox.tpk",
"NFSCarbon.WidescreenFix.asi",
"NFSCarbon.WidescreenFix.ini",
"NFSCHDReflections.asi",
"NFSCHDReflections.ini",
"NFSCHUDAdapter.asi",
"NFSCExtraOptions.asi",
"NFSCExtraOptionsSettings.ini",
"Settings.ini"
];

Game.FileSymlinkCopyInstead = [
"ZChaosCarbonServer.exe",
"pugixml.dll",
"ZChaosCarbon.asi",
"ZChaosCarbon.ini",
"zlib1.dll",
"assimp-vc141-mt.dll",
"bass.dll",
"NFSCLimitAdjuster.asi",
"NFSCLimitAdjuster.ini",
"Achievements.ini",
"GlobalStats.ini",
"PersistentEffects.ini",
"Ramps.ini",
"Save.ini",
"SaveBlips.ini",
"SaveJesus.ini",
"SaveMenuJesus.ini",
"SaveMPObjects.dat",
"SaveObjects.ini",
"SaveObjectsCol.ini",
];

Game.DirExclusions = ["scripts"];

Game.GameName = "Need for Speed Carbon";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "NFSC.exe";
Game.SteamID = "";
Game.GUID = "Need for Speed Carbon";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Need for Speed™ Carbon";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "IMPORTANT: You will need Zolika1351 chaos mod already installed: https://zolika1351.pages.dev/mods/nfscchaos , just place everything into your main game folder.\n\nThis isnt normal multiplayer, but the Zolika1351's multiplayer version as there is no other way to play online.\n\nVertical split will cause menus/HUDs to be cut off.\n\nTo connect to each other you will need to start a game in the same level as the other player, works for Carrer and quick match, any mode that needs online wont work.\n\nTo fully disable chaos mod while on multiplaye: On player 1 screen (the host) press 'F7' to open the menu go into manual configuration > debug options and turn both 'No timer' and 'No effects timer' to ON, the menu can be used with numpad or controllers.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 5;

Game.HideTaskbar = true;
Game.SetWindowHook = true;
Game.FakeFocus = true;
Game.ChangeExe = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "Documents\\NFS Carbon";
Game.UserProfileSavePathNoCopy = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "Documents\\NFS Carbon";

Game.Play = function() {

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var ICONS = Context.Options["icons"];
  var ORG = Context.Options["org"];

  let chosenX;
  let chosenY;
  if (ICONS == "Xbox Icons") {
    chosenX = 1;
    chosenY = 2;
  } else {
    chosenX = 2;
    chosenY = 3;
  }

  var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSCarbon.WidescreenFix.ini";
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, "ImproveGamepadSupport", Nucleus.SearchType.StartsWith) + "|ImproveGamepadSupport = " + chosenX,
    Context.FindLineNumberInTextFile(cfgpath, "ResX", Nucleus.SearchType.StartsWith) + "|ResX = " + Context.Width,
    Context.FindLineNumberInTextFile(cfgpath, "ResY", Nucleus.SearchType.StartsWith) + "|ResY = " + Context.Height
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFS_XtendedInput.ini";
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, "ControllerIconMode", Nucleus.SearchType.StartsWith) + "|ControllerIconMode = " + chosenY,
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  let chaos = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ZChaos";
  if (!System.IO.Directory.Exists(chaos)) {
	  System.IO.Directory.CreateDirectory(chaos);
  }

  var savePath = Context.RootInstallFolder + "\\Zchaos\\Settings.ini";
  if (!System.IO.File.Exists(savePath)) {
    ORG = "yes"
  }

  if(ORG == "yes"){
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Zchaos\\Settings.ini";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "config\\Settings.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }else{
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Zchaos\\Settings.ini";
    var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "Zchaos\\Settings.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Zchaos\\Settings.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("ChaosSettings", "ChaosAudioVolume", "0.000000"),
    new Nucleus.IniSaveInfo("ChaosSettings", "ChaosStableOnly", 1),
    new Nucleus.IniSaveInfo("ChaosSettings", "ChaosStreamStableEffectsOnly", 1),
    new Nucleus.IniSaveInfo("ChaosSettings", "ConnectToTwitch", 0),

    new Nucleus.IniSaveInfo("ChaosSettings", "MP_HostPort", 6969),
    new Nucleus.IniSaveInfo("ChaosSettings", "MP_IP1", 127),
    new Nucleus.IniSaveInfo("ChaosSettings", "MP_IP2", 0),
    new Nucleus.IniSaveInfo("ChaosSettings", "MP_IP3", 0),
    new Nucleus.IniSaveInfo("ChaosSettings", "MP_IP4", 1),
    new Nucleus.IniSaveInfo("ChaosSettings", "MP_PlayerName", Context.Nickname),

    new Nucleus.IniSaveInfo("ChaosSettings", "MP_ShowPlayerName", 1),
    new Nucleus.IniSaveInfo("ChaosSettings", "MP_UseNetBlenderForPlayers", 1),
    new Nucleus.IniSaveInfo("ChaosSettings", "MP_UseNetBlenderForTraffic", 1),
    new Nucleus.IniSaveInfo("ChaosSettings", "MP_MidTickRate", 5),
    new Nucleus.IniSaveInfo("ChaosSettings", "MP_TickRate", 10),

    new Nucleus.IniSaveInfo("ChaosSettings", "VotingEnabled", 0),
    new Nucleus.IniSaveInfo("ChaosSettings", "VotingHTML", 0),
    new Nucleus.IniSaveInfo("ChaosSettings", "g_bAutoReconnect", 1),
    new Nucleus.IniSaveInfo("ChaosSettings", "g_bVotingWindow", 0),


  ]);

  
  if (Context.PlayerID == 0) {

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Zchaos\\Settings.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ChaosSettings", "MP_AutoHost", 1),
      new Nucleus.IniSaveInfo("ChaosSettings", "MP_AutoConnect", 0),
    ]);

  }else{
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Zchaos\\Settings.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ChaosSettings", "MP_AutoConnect", 1),
      new Nucleus.IniSaveInfo("ChaosSettings", "MP_AutoHost", 0)
    ]);

  }

  var numPlayers = 0;

  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    if (player.IsXInput && player.ScreenIndex !== -1) {
      numPlayers++;
    }
    player.ProtoController1 = Context.GamepadId;
    player.ProtoController2 = Context.GamepadId;
    player.ProtoController3 = Context.GamepadId;
    player.ProtoController4 = Context.GamepadId;
    player.ProtoController5 = Context.GamepadId;
    player.ProtoController6 = Context.GamepadId;
    player.ProtoController7 = Context.GamepadId;
    player.ProtoController8 = Context.GamepadId;
    player.ProtoController9 = Context.GamepadId;
  }
};
