var answers1 = ["30", "45", "60", "75", "90", "105", "120", "144", "165", "200"];
Game.AddOption("Select the FPS cap.", "", "fps", answers1);

Game.FileSymlinkExclusions = ["steam_api64.dll"];
Game.FileSymlinkCopyInstead = [
  "binkw32.dll",
  "amd_ags_x64.dll",
  "rldata.dll",
  "d3dcompiler_47.dll",
  "egodumper.exe",
  "game.dat",
  "GFSDK_SSAO_D3D11.win64.dll",
  "SkipFrontEnd.xml",
  "GPUOpen_DepthOfFieldFX_x64.dll",
  "Tobii.GameIntegration.dll",
  "Windows.Gaming.Input.dll"
];
// Game.NeedsSteamEmulation = true;
Game.UseGoldberg = true;
Game.GoldbergExperimental = true;
Game.CreateSteamAppIdByExe = true;  
Game.GoldbergNoLocalSave = true;
Game.UseNucleusEnvironment = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = false;
Game.SymlinkFolders = false;
Game.SupportsKeyboard = true;
Game.ExecutableName = "f1_2018.exe";
Game.SteamID = "737800";
Game.GUID = "F1 2018";
Game.GameName = "F1 2018";
Game.MaxPlayers = 16;
Game.MaxPlayersOneMonitor = 16;
Game.BinariesFolder = "";
Game.HideTaskbar = false;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "F1 2018";
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled= false;
Game.UserProfileConfigPath = "Documents\\My Games\\F1 2018\\hardwaresettings";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\737800";
Game.FakeFocus = true;
Game.HookFocus = false;
Game.ResetWindows = true;
Game.Description =
  "Connect the instances via the online play option, if the instances do not open when launching via Nucleus change the steam language in the Nucleus UI settings to match the one your regular game has. The game already has native splitscreen for 2 players max but with this you can play 4+";
Game.PauseBetweenStarts = 30;
Game.PauseBetweenProcessGrab = 5;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.MultipleProtoControllers = true;


Game.Play = function() {

  var FPS = Context.Options["fps"];

  // var path = Context.UserProfileConfigPath + "\\hardware_settings_config.xml";
  // var dict = [
  //   Context.FindLineNumberInTextFile(path, "		<resolution width=", Nucleus.SearchType.StartsWith) + '|		<resolution width="' + Context.Width + '" height="'+ Context.Height +'" displayMode="1" vsync="false" vsyncInterval="auto" frameRateLimiterEnabled="true" frameRateLimiterValue="' + FPS +'">',
  // ];
  // Context.ReplaceLinesInTextFile(path, dict);

  // var filePath = Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings";
  // System.IO.Directory.CreateDirectory(filePath);	

  // var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\DLC.txt";
  // var lines = [
  // "863160=HEADLINE CONTENT DLC PACK"
  // ];

  // Context.WriteTextFile(autoExec, lines);

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

  // var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_interfaces.txt";
  // var lines = [
  //   "SteamClient012",
  //   "SteamGameServer011",
  //   "SteamGameServerStats001",
  //   "SteamUser016",
  //   "SteamFriends013",
  //   "SteamUtils005",
  //   "SteamMatchMaking009",
  //   "SteamMatchMakingServers002",
  //   "STEAMUSERSTATS_INTERFACE_VERSION011",
  //   "STEAMAPPS_INTERFACE_VERSION005",
  //   "SteamNetworking005",
  //   "STEAMREMOTESTORAGE_INTERFACE_VERSION008",
  //   "STEAMSCREENSHOTS_INTERFACE_VERSION001",
  //   "STEAMHTTP_INTERFACE_VERSION001"
  // ];

  // Context.WriteTextFile(interfaces, lines);

};