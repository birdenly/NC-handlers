var answers0 = [
  "yes",
  "no"
];
Game.AddOption(
  "Enable V-sync?",
  'This is the only way to limit FPS.',
  "fps",
  answers0
);

var answers1 = [
  "256",
  "512",
  "1024",
  "2048",
  "4096"
];
Game.AddOption(
  "Select your Shadow Map Size.",
  'Determines the shadow map resolution.\n\nlower number = better performance',
  "shadow",
  answers1
);

var answers2 = [
  "0",
  "1",
  "2"
];
Game.AddOption(
  "Select your Texture LOD.",
  'Determines texture mip level used as the base texture mip level\n\nVariables: 0 = low, 1 = medium, 2 = high',
  "texture",
  answers2
);


var answers3 = [
  "0",
  "1"
];
Game.AddOption(
  "Render shadows in game?",
  'Variables: 0 = no shadows, 1 = draw shadows\n\nCan possibly only work on one instance, depending on your system',
  "Dshadow",
  answers3
);


Game.KillMutex = ["{D1E69D32-FD21-41f8-B1EC-6A232D5AA81D}"];

Game.FileSymlinkCopyInstead = [
"WBMemoryU.dll",
"binkw32.dll",
"dbghelp.dll",
"default.archcfg",
"DevVisualization.dll",
"enginemsg.txt",
"GameDatabase.dll",
"LTMemoryU.dll",
"PerformanceMon.x86U.dll",
"Shared_DebugConsole.dll",
"steam_api.dll",
"StringEditRuntime.dll",
"symsrv.dll",
"TextOutput.dll",
"WBGames.Hydra.Assert.x86U.dll",
"WBGames.Lib.v4.0U.dll",
];
Game.FileSymlinkExclusions = [
  "autoexec.cfg",
  "steam_api.dll",
  "Game.dll"
];

Game.HandlerInterval = 100;
Game.SymlinkGame = true;
Game.ExecutableName = "GOME.exe";
Game.LauncherExe = "launch.bat";
Game.LauncherExeIgnoreFileCheck = true; 
Game.BinariesFolder = "x86";
Game.GUID = "Guardians of Middle earth";
Game.GameName = "Guardians of Middle earth";
Game.SteamID = "111900";
Game.MaxPlayers = 10;
Game.MaxPlayersOneMonitor = 10;
Game.Hook.ForceFocusWindowName = "Guardians of Middle-earth";
Game.Hook.CustomDllEnabled = false;
Game.Description = "IMPORTANT: CLOSE STEAM BEFORE PLAYING. Tested with latest steam version.\n\nHorizontal split seems to cause the life bars to offset, any other resolution works fine.\n\nTo play with each other go in the friends list (press Y in the controller) and invite to party, if it doesnt automatically accept alt+tab to the player that was invited press shift+tab and accept the invite.\n\nTo change teams: In the Game Lobby you need to go with the Cursor on the players/bots and change their team.\n\nTo change the Bot Difficulty: In the Game Lobby you need to go with the Cursor on the Bot Portraits and if you Left Mouse click them you had the option to change the difficulty.\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.).\n\nDisable any overlays that are attaching to the game (discord,steam or any other).\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["dinput8.dll","xinput1_3.dll","xinput9_1_0.dll","xinput1_4.dll","xinput_SK32.dll"];

Game.UseGoldberg = true; 
// Game.GoldbergExperimentalSteamClient = true; manual setup in the handler
Game.GoldbergNoLocalSave = true;

Game.SetWindowHookStart = true;
Game.ResetWindows = true;
Game.HideTaskbar = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\WBGames\\Guardians of Middle-earth";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\111900";

Game.PlayerSteamIDs = [
"76561199023125438",
"76561199023125439",
"76561199023125440",
"76561199023125441",
"76561199023125442",
"76561199023125443",
"76561199023125444",
"76561199023125445",
"76561199023125446",
"76561199023125447",
"76561199023125448",];

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
Game.ProtoInput.MessageFilterHook = false;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
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

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 8000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

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
  
      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
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

Game.Play = function() {

  var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\launch.bat";
  var lines = [
      'cd x86',
      'steamclient_loader_32.exe',
      'exit'
  ];
  Context.WriteTextFile(timese, lines);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\Game.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Game.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\GOME.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "GOME.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\steam_api.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "steam_api.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\ColdClientLoader.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "ColdClientLoader.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\steamclient.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "steamclient.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\steamclient64.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "steamclient64.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\steamclient_loader_32.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "steamclient_loader_32.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  if (!System.IO.File.Exists(Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\settings.cfg")) {
    var filePath = Context.EnvironmentPlayer + "WBGames";
    System.IO.Directory.CreateDirectory(filePath);
    
    var filePath = Context.EnvironmentPlayer + "WBGames\\Guardians of Middle-earth\\";
    System.IO.Directory.CreateDirectory(filePath);
    
      var savePath = (Context.SavePath = Context.EnvironmentPlayer + "WBGames\\Guardians of Middle-earth\\settings.cfg");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "settings.cfg");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  if (!System.IO.File.Exists(Context.EnvironmentRoot + Context.Nickname + "\\" + Context.UserProfileSavePath + "\\remote\\Profiles\\PROF_0")) {

    var filePath = Context.EnvironmentRoot + Context.Nickname + "\\AppData\\Roaming\\Goldberg SteamEmu Saves";
    if (!System.IO.Directory.Exists(filePath)) {
        System.IO.Directory.CreateDirectory(filePath);
    }

    var filePath = Context.EnvironmentRoot + Context.Nickname  + "\\AppData\\Roaming\\Goldberg SteamEmu Saves\\111900";
    if (!System.IO.Directory.Exists(filePath)) {
        System.IO.Directory.CreateDirectory(filePath);
    }

    var filePath = Context.EnvironmentRoot + Context.Nickname  + "\\AppData\\Roaming\\Goldberg SteamEmu Saves\\111900\\remote";
    if (!System.IO.Directory.Exists(filePath)) {
        System.IO.Directory.CreateDirectory(filePath);
    }

    var filePath = Context.EnvironmentRoot + Context.Nickname  + "\\AppData\\Roaming\\Goldberg SteamEmu Saves\\111900\\remote\\Profiles";
    if (!System.IO.Directory.Exists(filePath)) {
        System.IO.Directory.CreateDirectory(filePath);
    }

    var savePath = Context.EnvironmentRoot + Context.Nickname + "\\" + Context.UserProfileSavePath + "\\remote\\Profiles\\PROF_0";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "PROF_0");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = Context.EnvironmentRoot + Context.Nickname + "\\" + Context.UserProfileSavePath + "\\remote\\Profiles\\PROF_1";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "PROF_1_H");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = Context.EnvironmentRoot + Context.Nickname + "\\" + Context.UserProfileSavePath + "\\remote\\Profiles\\PROF_2";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "PROF_2_V");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = Context.EnvironmentRoot + Context.Nickname + "\\" + Context.UserProfileSavePath + "\\remote\\Profiles\\PROF_3";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "PROF_3_4Split");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  
  var SHADOW = Context.Options["shadow"];
  var TEXTURE = Context.Options["texture"];
  var DSHADOW = Context.Options["Dshadow"];
  var FPS = Context.Options["fps"];

  if(FPS=="yes"){ 
    FPS = "True";
  }else{
    FPS = "False";
  }

  var cfgpath = Context.EnvironmentPlayer + Context.UserProfileConfigPath  + "\\settings.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, '"Fullscreen"', Nucleus.SearchType.StartsWith) + '|"Fullscreen" "False"',
      Context.FindLineNumberInTextFile(cfgpath, '"ScreenHeight"', Nucleus.SearchType.StartsWith) + '|"ScreenHeight" "' + Context.Height + '.000000"',
      Context.FindLineNumberInTextFile(cfgpath, '"ScreenWidth"', Nucleus.SearchType.StartsWith) + '|"ScreenWidth" "' + Context.Width  + '.000000"',
      Context.FindLineNumberInTextFile(cfgpath, '"Vsync"', Nucleus.SearchType.StartsWith) + '|"Vsync" "' + FPS  + '"',

      Context.FindLineNumberInTextFile(cfgpath, '"DrawShadows"', Nucleus.SearchType.StartsWith) + '|"DrawShadows" "' + DSHADOW + '"',
      Context.FindLineNumberInTextFile(cfgpath, '"ShadowMapSize"', Nucleus.SearchType.StartsWith) + '|"ShadowMapSize" "' + SHADOW + '"',
      Context.FindLineNumberInTextFile(cfgpath, '"TextureLOD"', Nucleus.SearchType.StartsWith) + '|"TextureLOD" "' + TEXTURE + '"',
    ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);


  var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\autoexec.cfg";
  var lines = [
    'DisableMaterialsFromFile 1',
    'Fullscreen False',
    'ScreenWidth ' + Context.Width,
    'ScreenHeight ' + Context.Height
    
  ];
  Context.WriteTextFile(timese, lines);

  if (!System.IO.Directory.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\steam_settings")) {
    var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\steam_settings");
    System.IO.Directory.CreateDirectory(filePath);
  }

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\steam_settings\\DLC.txt";
  var lines = [
    "111916=The Enchanter Bundle",
    "111915=The Tactician Bundle",
    "111914=The Defender Bundle",
    "111913=The Striker Bundle",
    "111912=The Warrior Bundle",
    "111911=The Hobbit Dwarves Bundle",
    "111910=Smaug's Treasure"
  ];
  Context.WriteTextFile(autoExec, lines);

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\x86\\steam_settings\\auto_accept_invite.txt";
  var lines = [
    "76561199023125438",
    "76561199023125439",
    "76561199023125440",
    "76561199023125441",
    "76561199023125442",
    "76561199023125443",
    "76561199023125444",
    "76561199023125445",
    "76561199023125446",
    "76561199023125447",
    "76561199023125448",
  ];
  Context.WriteTextFile(autoExec, lines);
  
};
