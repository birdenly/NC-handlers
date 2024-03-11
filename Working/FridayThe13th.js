Game.FileSymlinkExclusions = [ "EAC_Launcher.exe", "OnlineFix.ini", "OnlineFix.url", "OnlineFix64.dll", "eac_server64.dll", "EasyAntiCheat_x64.dll", "steam_api64_of.dll" ,"steam_api64.dll" ,"steam_api.dll","steam_appid.txt","force_account_name.txt","force_language.txt"];
Game.FileSymlinkCopyInstead = [];

Game.DirSymlinkExclusions = ["Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv139\\Win64","SummerCamp\\Binaries\\Win64"];
Game.DirExclusions = ["Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv139\\Win64\\steam_settings"];

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.SupportsKeyboard = false;
Game.ExecutableName = "SummerCamp.exe";
Game.SteamID = "438740";
Game.GUID = "Friday the 13th";
Game.GameName = "Friday the 13th";
Game.MaxPlayers = 7;
Game.MaxPlayersOneMonitor = 7;
Game.BinariesFolder = "SummerCamp\\Binaries\\Win64";
Game.Hook.CustomDllEnabled = false;
Game.Hook.ForceFocusWindowName = "Friday the 13th";
Game.HasDynamicWindowTitle = true; 
Game.Hook.ForceFocus = false;
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.PauseBetweenStarts = 10;
Game.XInputPlusDll = [];

Game.UseGoldberg = true;
Game.RefreshWindowAfterStart = true;
Game.SetWindowHookStart = true;
Game.HideTaskbar = true;
Game.GoldbergExperimental = true; 

Game.Description = "To connect the instances, each player must select Quick Play. You will need to wait several minutes, but eventually a room will be created and every player will start joining. Do NOT minimize any instance, otherwise the UI will disappear.";


Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\SummerCamp\\Saved\\Config\\WindowsNoEditor";

//USS deprecated options:

Game.HookSetCursorPos = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = false;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = false;
Game.SendNormalKeyboardInput = false;
Game.SendScrollWheel = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = false;
Game.HookReRegisterRawInputMouse = false;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = false;

//ProtoInput:

Game.SupportsMultipleKeyboardsAndMice = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;

Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = false;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

    //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
    //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

    ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

    //ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5000, true, true, true, true, true);
  }
};

Game.ProtoInput.OnInputUnlocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

    ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
  }
};

Game.Play = function () {
  var Args = (Context.Args = " -windowed " + " -AlwaysFocus " + " -nosplash" + " -ResX= " + Context.Width + " -ResY= " + Context.Height);
  Context.StartArguments = Args;
  
  var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv139\\Win64\\steam_settings");
  System.IO.Directory.CreateDirectory(filePath);

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv139\\Win64\\steam_settings\\DLC.txt";
  var lines = [
    "857280=Friday the 13: The Game - Jason Part 2 Pick Axe Kill Pack",
    "739581=Friday the 13: The Game - Jason Part 7 Machete Kill Pack",
    "737990=Friday the 13th: The Game - Jason Part 4 Pig Splitter Kill Pack",
    "735000=Friday the 13th: The Game - Halloween Clothing Pack",
    "719330=Friday the 13th: The Game - Emote Pack 1",
    "702660=Friday the 13th: The Game - Spring Break 1984 Clothing Pack",
    "646161=FridaFriday the 13th: The Game - Counselor Clothing Pack",
    "646160=Friday the 13th: The Game - Tom Savini designed Jason Voorhees Character",
    "607580=Friday the 13th: The Game - Tom Savini designed Jason Voorhees Character",
    "607570=Friday the 13th: The Game - Counselor Clothing Pack"
  ];

  Context.WriteTextFile(autoExec, lines);

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv139\\Win64\\disable_lan_only.txt";
  var lines = [
  ];

  Context.WriteTextFile(autoExec, lines);

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv139\\Win64\\steam_interfaces.txt";
  var lines = [
    "SteamClient007",
    "SteamClient008",
    "SteamClient009",
    "SteamClient010",
    "SteamClient011",
    "SteamClient012",
    "SteamClient013",
    "SteamClient014",
    "SteamClient015",
    "SteamClient016",
    "SteamClient017",
    "SteamClient018",
    "SteamClient019",
    "SteamClient020",
    "SteamClient017",
    "SteamClient007",
    "SteamClient008",
    "SteamClient009",
    "SteamClient010",
    "SteamClient011",
    "SteamClient012",
    "SteamClient013",
    "SteamClient014",
    "SteamClient015",
    "SteamClient016",
    "SteamClient017",
    "SteamClient018",
    "SteamClient019",
    "SteamGameServer010",
    "SteamGameServer010",
    "SteamGameServer013",
    "SteamGameServer014",
    "SteamGameServer005",
    "SteamGameServer006",
    "SteamGameServer007",
    "SteamGameServer008",
    "SteamGameServer009",
    "SteamGameServer010",
    "SteamGameServer011",
    "SteamGameServer012",
    "SteamGameServer013",
    "SteamGameServer014",
    "SteamGameServer012",
    "SteamGameServer013",
    "SteamGameServer012",
    "SteamGameServer011",
    "SteamGameServer010",
    "SteamGameServer009",
    "SteamGameServer008",
    "SteamGameServer005",
    "SteamGameServerStats001",
    "SteamGameServerStats001",
    "SteamUser021",
    "SteamUser020",
    "SteamUser009",
    "SteamUser010",
    "SteamUser011",
    "SteamUser012",
    "SteamUser013",
    "SteamUser014",
    "SteamUser015",
    "SteamUser016",
    "SteamUser017",
    "SteamUser018",
    "SteamUser019",
    "SteamUser020",
    "SteamUser021",
    "SteamUser018",
    "SteamUser009",
    "SteamUser010",
    "SteamUser011",
    "SteamUser012",
    "SteamUser013",
    "SteamUser014",
    "SteamUser015",
    "SteamUser016",
    "SteamUser017",
    "SteamUser018",
    "SteamUser019",
    "SteamUser020",
    "SteamFriends017",
    "SteamFriends004",
    "SteamFriends005",
    "SteamFriends006",
    "SteamFriends007",
    "SteamFriends008",
    "SteamFriends009",
    "SteamFriends010",
    "SteamFriends011",
    "SteamFriends012",
    "SteamFriends013",
    "SteamFriends014",
    "SteamFriends015",
    "SteamFriends016",
    "SteamFriends017",
    "SteamFriends015",
    "SteamFriends004",
    "SteamFriends005",
    "SteamFriends006",
    "SteamFriends007",
    "SteamFriends008",
    "SteamFriends009",
    "SteamFriends010",
    "SteamFriends011",
    "SteamFriends012",
    "SteamFriends013",
    "SteamFriends014",
    "SteamFriends015",
    "SteamFriends016",
    "SteamUtils010",
    "SteamUtils010",
    "SteamUtils009",
    "SteamUtils009",
    "SteamUtils002",
    "SteamUtils003",
    "SteamUtils004",
    "SteamUtils005",
    "SteamUtils006",
    "SteamUtils007",
    "SteamUtils008",
    "SteamUtils009",
    "SteamUtils010",
    "SteamUtils007",
    "SteamUtils002",
    "SteamUtils003",
    "SteamUtils004",
    "SteamUtils005",
    "SteamUtils006",
    "SteamUtils007",
    "SteamUtils008",
    "SteamUtils009",
    "SteamMatchMaking009",
    "SteamMatchMaking001",
    "SteamMatchMaking002",
    "SteamMatchMaking003",
    "SteamMatchMaking004",
    "SteamMatchMaking005",
    "SteamMatchMaking006",
    "SteamMatchMaking007",
    "SteamMatchMaking008",
    "SteamMatchMaking009",
    "SteamMatchMaking009",
    "SteamMatchMakingServers002",
    "SteamMatchMakingServers002",
    "STEAMUSERSTATS_INTERFACE_VERSION012",
    "STEAMUSERSTATS_INTERFACE_VERSION011",
    "STEAMUSERSTATS_INTERFACE_VERSION001",
    "STEAMUSERSTATS_INTERFACE_VERSION002",
    "STEAMUSERSTATS_INTERFACE_VERSION003",
    "STEAMUSERSTATS_INTERFACE_VERSION004",
    "STEAMUSERSTATS_INTERFACE_VERSION005",
    "STEAMUSERSTATS_INTERFACE_VERSION006",
    "STEAMUSERSTATS_INTERFACE_VERSION007",
    "STEAMUSERSTATS_INTERFACE_VERSION008",
    "STEAMUSERSTATS_INTERFACE_VERSION009",
    "STEAMUSERSTATS_INTERFACE_VERSION010",
    "STEAMUSERSTATS_INTERFACE_VERSION011",
    "STEAMUSERSTATS_INTERFACE_VERSION012",
    "STEAMUSERSTATS_INTERFACE_VERSION011",
    "STEAMAPPS_INTERFACE_VERSION008",
    "STEAMAPPS_INTERFACE_VERSION008",
    "STEAMAPPS_INTERFACE_VERSION002",
    "STEAMAPPS_INTERFACE_VERSION003",
    "STEAMAPPS_INTERFACE_VERSION004",
    "STEAMAPPS_INTERFACE_VERSION005",
    "STEAMAPPS_INTERFACE_VERSION006",
    "STEAMAPPS_INTERFACE_VERSION007",
    "STEAMAPPS_INTERFACE_VERSION008",
    "STEAMAPPS_INTERFACE_VERSION007",
    "SteamNetworking006",
    "SteamNetworking006",
    "SteamNetworking001",
    "SteamNetworking002",
    "SteamNetworking003",
    "SteamNetworking004",
    "SteamNetworking005",
    "SteamNetworking006",
    "SteamNetworking005",
    "SteamNetworking005",
    "SteamNetworking004",
    "SteamNetworking003",
    "SteamNetworking002",
    "SteamNetworking001",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION014",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION016",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION001",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION002",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION003",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION004",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION005",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION006",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION007",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION008",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION009",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION010",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION011",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION012",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION013",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION014",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION016",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION013",
    "STEAMSCREENSHOTS_INTERFACE_VERSION003",
    "STEAMSCREENSHOTS_INTERFACE_VERSION002",
    "STEAMHTTP_INTERFACE_VERSION003",
    "STEAMHTTP_INTERFACE_VERSION003",
    "STEAMHTTP_INTERFACE_VERSION001",
    "STEAMHTTP_INTERFACE_VERSION002",
    "STEAMHTTP_INTERFACE_VERSION003",
    "STEAMHTTP_INTERFACE_VERSION002",
    "STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001",
    "STEAMUGC_INTERFACE_VERSION014",
   "STEAMUGC_INTERFACE_VERSION015",
   "STEAMUGC_INTERFACE_VERSION016",
   "STEAMUGC_INTERFACE_VERSION014",
    "STEAMUGC_INTERFACE_VERSION015",
    "STEAMUGC_INTERFACE_VERSION016",
    "STEAMUGC_INTERFACE_VERSION001",
    "STEAMUGC_INTERFACE_VERSION002",
    "STEAMUGC_INTERFACE_VERSION003",
    "STEAMUGC_INTERFACE_VERSION004",
    "STEAMUGC_INTERFACE_VERSION005",
    "STEAMUGC_INTERFACE_VERSION006",
    "STEAMUGC_INTERFACE_VERSION007",
    "STEAMUGC_INTERFACE_VERSION008",
    "STEAMUGC_INTERFACE_VERSION009",
    "STEAMUGC_INTERFACE_VERSION010",
    "STEAMUGC_INTERFACE_VERSION011",
    "STEAMUGC_INTERFACE_VERSION012",
    "STEAMUGC_INTERFACE_VERSION013",
    "STEAMUGC_INTERFACE_VERSION014",
    "STEAMUGC_INTERFACE_VERSION015",
    "STEAMUGC_INTERFACE_VERSION016",
    "STEAMUGC_INTERFACE_VERSION007",
    "STEAMAPPLIST_INTERFACE_VERSION001",
    "STEAMAPPLIST_INTERFACE_VERSION001",
    "STEAMMUSIC_INTERFACE_VERSION001",
    "STEAMMUSIC_INTERFACE_VERSION001",
    "STEAMMUSICREMOTE_INTERFACE_VERSION001",
    "STEAMMUSICREMOTE_INTERFACE_VERSION001",
    "STEAMHTMLSURFACE_INTERFACE_VERSION_005",
    "STEAMHTMLSURFACE_INTERFACE_VERSION_001",
    "STEAMHTMLSURFACE_INTERFACE_VERSION_002",
    "STEAMHTMLSURFACE_INTERFACE_VERSION_003",
    "STEAMHTMLSURFACE_INTERFACE_VERSION_004",
    "STEAMHTMLSURFACE_INTERFACE_VERSION_005",
    "STEAMHTMLSURFACE_INTERFACE_VERSION_003",
    "STEAMINVENTORY_INTERFACE_V003",
    "STEAMINVENTORY_INTERFACE_V003",
    "STEAMINVENTORY_INTERFACE_V001",
    "STEAMINVENTORY_INTERFACE_V002",
    "STEAMINVENTORY_INTERFACE_V003",
    "STEAMINVENTORY_INTERFACE_V001",
    "SteamController007",
    "SteamController008",
    "SteamController003",
    "SteamController004",
    "SteamController005",
    "SteamController006",
    "SteamController007",
    "SteamController008",
    "SteamController003",
    "SteamController001",
    "SteamController003",
    "SteamController004",
    "SteamController005",
    "SteamController006",
    "SteamController007",
    "SteamMasterServerUpdater001",
    "STEAMVIDEO_INTERFACE_V002",
    "STEAMVIDEO_INTERFACE_V001",
    "STEAMCONTROLLER_INTERFACE_VERSION",
    "STEAMCONTROLLER_INTERFACE_VERSION",
    "STEAMCONTROLLER_INTERFACE_VERSION",
    "STEAMCONTROLLER_INTERFACE_VERSION",
    ];

    Context.WriteTextFile(autoExec, lines);

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\GameUserSettings.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("/Script/SummerCamp.SCGameUserSettings", "ResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/SummerCamp.SCGameUserSettings", "ResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/SummerCamp.SCGameUserSettings", "LastUserConfirmedResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/SummerCamp.SCGameUserSettings", "LastUserConfirmedResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/SummerCamp.SCGameUserSettings", "FullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/SummerCamp.SCGameUserSettings", "LastConfirmedFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/SummerCamp.SCGameUserSettings", "PreferredFullscreenMode", 2)
  ]);

  if (Context.PlayerID == 0) {
    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\GameUserSettings.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("/Script/SummerCamp.SCGameUserSettings", "VolumeMusic", "1.000000"),
    ]);
  }else{
    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\GameUserSettings.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("/Script/SummerCamp.SCGameUserSettings", "VolumeMusic", "0.300000"),
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

}

