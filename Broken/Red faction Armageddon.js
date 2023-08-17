

Game.ExecutableContext = ["binkw32.dll"];

Game.FileSymlinkExclusions = [//Array with the name of the files you don't want Nucleus Co-op to symlink, useful if you want to replace files or use external files.  
  "RedFactionArmageddon.exe", 
  "RedFactionArmageddon_DX11.exe",  
  "vcredist_x86.exe",
  "changelist.txt"  
]; 
// Game.KillMutex = ["RFG"];
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = true;
Game.GoldbergNoLocalSave = true;
Game.GoldbergExperimental = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = false;
Game.SymlinkFolders = false;
Game.SupportsKeyboard = true;
Game.ExecutableName = "rf4_launcher.exe";
Game.SteamID = "55110";
Game.GUID = "Red Faction Armageddon";
Game.GameName = "Red Faction Armageddon";
Game.MaxPlayers = 16;
Game.MaxPlayersOneMonitor = 16;
Game.LauncherTitle = "";
Game.HideTaskbar = false;
Game.StartArguments = "";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Red Faction: Armageddon";
// Game.FakeFocus = true;
// Game.HookFocus = true;
Game.Hook.DInputForceDisable = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.Hook.CustomDllEnabled = false;
// Game.UseForceBindIP = true;
Game.Description =
  "IMPORTANT: Set the regular game to windowed before running this. Connect the instaces via the default internet matchmaking option, private groups don't seem to work. Minimum required players is 3 in modes like Anarchy. If you run one instance with keyboard you have to set keyboard and mouse control in the in-game options for that instance, same for gamepads if you had set keyboard previously.";
Game.PauseBetweenStarts = 30;

Game.Play = function() {
  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_interfaces.txt";
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

  // if (Player.IsKeyboardPlayer) {
  //   Context.Hook.BlockMouseEvents = "False";
  //   Context.Hook.BlockKeyboardEvents = "False";
  //   Context.Hook.BlockInputEvents = "False";
  //   Context.Hook.ForceFocus = "False";
  // } else {
  //   Context.Hook.BlockMouseEvents = "True";
  //   Context.Hook.BlockKeyboardEvents = "True";
  //   Context.Hook.BlockInputEvents = "True";
  //   Context.Hook.ForceFocus = "True";
  // }

  // if (Context.HasKeyboardPlayer == true) {
  //   Game.FakeFocus = false;
  //   Game.HookFocus = false;
  //   Game.Hook.CustomDllEnabled = true;
  //   Game.Hook.UseAlpha8CustomDll = true;
  // } else {
  // }

  // if (Context.NumControllers < 5) {
  //   Game.Hook.XInputReroute = false;
  // } else {
  //   Game.FakeFocus = false;
  //   Game.HookFocus = false;
  //   Game.Hook.CustomDllEnabled = true;
  //   Game.Hook.UseAlpha8CustomDll = true;
  // }

    // var Args = (Context.Args = " -w " + Context.Width + " -h " + Context.Height);

    // Context.StartArguments = Args;

};