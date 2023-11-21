
// var answers1 = ["no","yes"];
// Game.AddOption("Change graphics for each instance? HIGHLY RECOMMENDED IF IT IS THE FIRST RUN (or after deleting your content folder) or you can change it in your main game before playing with nucleus, reduce your graphics so your pc can handle the game", "INSTRUCTIONS: Open a instance, change the graphics you want than select 'DOOMEternalx64vk.exe' in the process picker window that opens.", "grph", answers1);

Game.KillMutex = ["Ghost"];

Game.FileSymlinkExclusions = [
"steam_api64.dll",
"steam_appid.txt",
"steam_api.dll",
"steam_api.of",
"OnlineFix64.dll",
"steam_api64.dll",
"winmm.dll",
"Custom.dll",
"dlllist.txt",
"EasyAntiCheat_x64.dll",
"OnlineFix.ini",

];
// Game.FileSymlinkCopyInstead = [
//   "bink2w64.dll",
//   "dbghelp.dll",
//   "idTechLauncher.exe",
//   "installscript.vdf",
//   "nvngx_dlss.dll",
//   "oo2core_8_win64.dll",
//   "oo2ext_8_win64.dll",
//   "PartyWin.dll",
//   "PartyWin7.dll",
//   "EternalModManager.exe",
//   "EternalModInjector.bat",
//   "EternalModInjector Settings.txt",
//   "EternalModManager.exe.config"
// ];

Game.DirSymlinkExclusions = ["launcher", "binaries_dx12", "binaries"];
Game.NeedsSteamEmulation = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
// Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "vermintide2_dx12.exe";
Game.BinariesFolder = "binaries_dx12";
Game.SteamID = "552500";
Game.GUID = "Warhammer Vermintide 2";
Game.GameName = "Warhammer Vermintide 2";
Game.LauncherExe = "Launcher.exe";
Game.LauncherTitle = "Launcher";
Game.MaxPlayers = 32;
Game.MaxPlayersOneMonitor = 32;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Warhammer: Vermintide 2";
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "";
Game.PauseBetweenProcessGrab = 10;
Game.PauseBetweenStarts = 20;

Game.UseGoldberg = true;
Game.GoldbergExperimental = true; 
Game.SetTopMostAtEnd = true; 

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\Fatshark\\Vermintide 2";


Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {

    Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));
  

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\binaries_dx12\\steam_interfaces.txt";
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
  "STEAMCONTROLLER_INTERFACE_VERSION",
  ];

  Context.WriteTextFile(autoExec, lines);

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\launcher\\steam_interfaces.txt";
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
  "STEAMCONTROLLER_INTERFACE_VERSION",
  ];

  Context.WriteTextFile(autoExec, lines);

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\binaries\\steam_interfaces.txt";
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
  "STEAMCONTROLLER_INTERFACE_VERSION",
  ];

  Context.WriteTextFile(autoExec, lines);

    var cfgFilePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\user_settings.config";
    var resolutionW = Context.FindLineNumberInTextFile(cfgFilePath, 'screen_resolution = [', Nucleus.SearchType.Contains) + 1;
    var resolutionH = Context.FindLineNumberInTextFile(cfgFilePath, 'screen_resolution = [', Nucleus.SearchType.Contains) + 2;
    var windowmode = Context.FindLineNumberInTextFile(cfgFilePath, 'fullscreen', Nucleus.SearchType.Contains);
    var fps = Context.FindLineNumberInTextFile(cfgFilePath, 'max_fps =', Nucleus.SearchType.Contains);
    var mute = Context.FindLineNumberInTextFile(cfgFilePath, 'mute_in_background =', Nucleus.SearchType.Contains);
    var intro = Context.FindLineNumberInTextFile(cfgFilePath, 'play_intro_cinematic =', Nucleus.SearchType.Contains);

    Context.ReplaceLinesInTextFile(cfgFilePath, [
      resolutionW + '| ' + Context.Width,
      resolutionH + '| ' + Context.Height,
      windowmode + '|fullscreen = false',
      fps + '|max_fps = 30',
      mute + '|mute_in_background = false',
      intro + '|play_intro_cinematic = false'
    ]);
  

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
