Game.FileSymlinkCopyInstead = [
  "steam.dll",
  "steam_api.dll",
  "steam_appid.txt",
  "steamclient.dll",
  "test.ini",
  "settings.ini",
  "version.txt",
  "vstdlib_s.dll",
  "ClientRegistry.blob",
  "nvtt.dll",
  "PhysX3_x86.dll",
  "PhysX3Common_x86.dll",
  "tbb.dll",
  "tbbmalloc.dll",
  "tier0_s.dll",
];
Game.HandlerInterval = 100;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.KeepSymLinkOnExit = false;
Game.ExecutableName = "bloodsports.exe";
Game.GUID = "BloodsportsTV";
Game.GameName = "Bloodsports.TV";
Game.SteamID = '336420';
Game.MaxPlayers = 5;
Game.MaxPlayersOneMonitor = 5;
Game.Hook.ForceFocusWindowName = "Bloodsports.TV";
Game.Hook.CustomDllEnabled = false;
Game.Description = "Launch the game once before playing split-screen.\n\nHorizontal split works but the game/camera will be REALLY far away and act weird in small maps.\n\nGo into play > new game > start the lobby and join in with others.\n\nAfter all instances resized correctly, press the END key once to lock input and control all instances, when you are done press END again then CTRL+Q to close all instances.";
Game.HideTaskbar = true;
Game.ResetWindows = true;
Game.RefreshWindowAfterStart = true;
Game.StartArguments = "-bundle-dir bundle";  
Game.PauseBetweenStarts = 15;
Game.PauseBetweenProcessGrab = 5;
Game.SetWindowHook = true;
Game.NeedsSteamEmulation = true;
Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Roaming\\SmartSteamEmu";
Game.UserProfileConfigPath = "AppData\\Roaming\\Toadman Interactive\\BloodsportsTV";
Game.UserProfileSavePathNoCopy = true;	
Game.UserProfileConfigPathNoCopy = false;

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
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = true;
Game.ProtoInput.GetAsyncKeyStateHook = true;
Game.ProtoInput.GetKeyboardStateHook = true;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = true;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = true;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {

    var SourceCode = Context.EnvironmentPlayer + Context.UserProfileConfigPath  + "\\user_settings.config";
    var resolution1 = Context.FindLineNumberInTextFile(SourceCode, 'borderless_fullscreen =', Nucleus.SearchType.StartsWith);
    var resolution2= Context.FindLineNumberInTextFile(SourceCode, 'fullscreen =', Nucleus.SearchType.StartsWith);
    var resolution3 = Context.FindLineNumberInTextFile(SourceCode, 'screen_resolution = [', Nucleus.SearchType.StartsWith); 
    var resolution4 = Context.FindLineNumberInTextFile(SourceCode, 'screen_name =', Nucleus.SearchType.StartsWith);
    Context.ReplaceLinesInTextFile(SourceCode, [
    resolution1 + '|borderless_fullscreen = false',
    resolution2 + '|fullscreen = false',
    (resolution3+1) + '|	'+Context.Width,
    (resolution3+2) + '|	'+Context.Height,
    resolution4 +'|screen_name = "'+Context.Nickname+'"',
    ]);   
};