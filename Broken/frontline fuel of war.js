

Game.DirSymlinkExclusions = [
    "Binaries"
];


Game.FileSymlinkCopyInstead = [//Array with the name of the files you want Nucleus Co-op to make full copies of, in rare cases some games need certain files to be full copies or they won't run. 
   "d3dx9_31.dll",   
   "FrontlinesGE.dll",   
   "fxgraphlayout.dll",   
   "NxCooking.dll",   
   "ogg.dll",   
   "OpenAL32.dll",   
   "stats.dll",   
   "vorbis.dll",   
   "vorbisenc.dll",   
   "vorbisfile.dll",   
   "wrap_oal.dll",   
   "wxdockitu.dll",   
   "wxmsw262u.dll",      
]; 

Game.GameName = "Frontlines Fuel of War";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "FFOW.exe";
Game.SteamID = "9460";
Game.GUID = "Frontlines Fuel of War";
Game.MaxPlayers = 64;
Game.MaxPlayersOneMonitor = 64;
Game.BinariesFolder = "Binaries";
Game.NeedsSteamEmulation = false;
Game.SupportsPositioning = true;
Game.LauncherTitle = "";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Frontlines: Fuel of War";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [  ];
Game.Hook.CustomDllEnabled= false;
Game.HookFocus= true;
Game.SetWindowHookStart = true;
Game.Description = "";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 25;
Game.ResetWindows = true; 

Game.UseGoldberg = true; 




Game.UseNucleusEnvironment = true; 
Game.UserProfileConfigPath = "Documents\\My Games\\Frontlines - Fuel of War\\GCGame\\Config";

// //USS deprecated options:

// Game.HookSetCursorPos = false;
// Game.HookGetCursorPos = false;
// Game.HookGetKeyState = false;
// Game.HookGetAsyncKeyState = false;
// Game.HookGetKeyboardState = false;
// Game.HookFilterRawInput = false;
// Game.HookFilterMouseMessages = false;
// Game.HookUseLegacyInput = false;
// Game.HookDontUpdateLegacyInMouseMsg = false;
// Game.HookMouseVisibility = false;

// Game.SendNormalMouseInput = false;
// Game.SendNormalKeyboardInput = false;
// Game.SendScrollWheel = false;
// Game.ForwardRawKeyboardInput = false;
// Game.ForwardRawMouseInput = false;
// Game.HookReRegisterRawInput = false;
// Game.HookReRegisterRawInputMouse = false;
// Game.HookReRegisterRawInputKeyboard = false;
// Game.DrawFakeMouseCursor = false;

// //ProtoInput:

// Game.SupportsMultipleKeyboardsAndMice = true;

// Game.ProtoInput.InjectStartup = false;
// Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
// Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
// Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

// Game.LockInputAtStart = false;
// Game.LockInputSuspendsExplorer = true;
// Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
// Game.LockInputToggleKey = 0x23;

// Game.ProtoInput.RenameHandlesHook = false;
// Game.ProtoInput.RenameHandles = [];
// Game.ProtoInput.RenameNamedPipes = [];

// Game.ProtoInput.RegisterRawInputHook = true;
// Game.ProtoInput.GetRawInputDataHook = true;
// Game.ProtoInput.MessageFilterHook = true;
// // Game.ProtoInput.GetCursorPosHook = true;
// // Game.ProtoInput.SetCursorPosHook = true;
// Game.ProtoInput.GetKeyStateHook = true;
// Game.ProtoInput.GetAsyncKeyStateHook = false;
// Game.ProtoInput.GetKeyboardStateHook = true;
// // Game.ProtoInput.CursorVisibilityHook = true;
// // Game.ProtoInput.ClipCursorHook = true;
// Game.ProtoInput.FocusHooks = true;
// //Game.ProtoInput.DrawFakeCursor = true;
// Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
// Game.ProtoInput.SetWindowPosHook = true;
// Game.ProtoInput.SetWindowStyleHook = true;

// // Game.ProtoInput.RawInputFilter = true;
// // Game.ProtoInput.MouseMoveFilter = false;
// // Game.ProtoInput.MouseActivateFilter = true;
// // Game.ProtoInput.WindowActivateFilter = true;
// // Game.ProtoInput.WindowActvateAppFilter = true;
// // Game.ProtoInput.MouseWheelFilter = true;
// // Game.ProtoInput.MouseButtonFilter = true;
// // Game.ProtoInput.KeyboardButtonFilter = true;

// Game.ProtoInput.SendMouseWheelMessages = true;
// Game.ProtoInput.SendMouseButtonMessages = true;
// Game.ProtoInput.SendMouseMovementMessages = true;
// Game.ProtoInput.SendKeyboardButtonMessages = true;
// Game.ProtoInput.XinputHook = false;
// Game.ProtoInput.UseOpenXinput = false;
// Game.ProtoInput.UseDinputRedirection = false;
// Game.ProtoInput.DinputDeviceHook = false;
// Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
// Game.ProtoInput.MultipleProtoControllers = false;

// Game.ProtoInput.EnableFocusMessageLoop = false;
// //Game.ProtoInput.FocusLoopIntervalMilliseconds = 40000;
// //Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// //Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
// //Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
// //Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
// //Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
// Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function () {
      var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\GCEngine.ini"
        Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
        new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "StartupResolutionX", Context.Width),
        new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "StartupResolutionY", Context.Height),
        new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "StartupFullscreen", "False"),
    ]);
    
    if (Player.IsKeyboardPlayer) {
        Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup " + "-resx=" + Context.Width + " -resy= " + Context.Height;
    // Context.Hook.ForceFocus = "False";
    // Game.ProtoInput.RawInputFilter = true;
    // Game.ProtoInput.MouseMoveFilter = false;
    // Game.ProtoInput.MouseActivateFilter = true;
    // Game.ProtoInput.WindowActivateFilter = true;
    // Game.ProtoInput.WindowActvateAppFilter = true;
    // Game.ProtoInput.MouseWheelFilter = true;
    // Game.ProtoInput.MouseButtonFilter = true;
    // Game.ProtoInput.KeyboardButtonFilter = true;
    // Game.ProtoInput.DrawFakeCursor = true;
    // Game.ProtoInput.CursorVisibilityHook = true;
    // Game.ProtoInput.ClipCursorHook = true;
    // Game.ProtoInput.GetCursorPosHook = true;
    // Game.ProtoInput.SetCursorPosHook = true;

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", "")
    ]);

    }
    else {
        Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup " + "-resx= " + Context.Width + " -resy= " + Context.Height;
    // Game.ProtoInput.RawInputFilter = false;
    // Game.ProtoInput.MouseMoveFilter = false;
    // Game.ProtoInput.MouseActivateFilter = false;
    // Game.ProtoInput.WindowActivateFilter = false;
    // Game.ProtoInput.WindowActvateAppFilter = false;
    // Game.ProtoInput.MouseWheelFilter = false;
    // Game.ProtoInput.MouseButtonFilter = false;
    // Game.ProtoInput.KeyboardButtonFilter = false;
    // Game.ProtoInput.DrawFakeCursor = false;
    // Game.ProtoInput.CursorVisibilityHook = false;
    // Game.ProtoInput.ClipCursorHook = false;
    // Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
    // Game.ProtoInput.GetCursorPosHook = false;
    // Game.ProtoInput.SetCursorPosHook = false;


    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
    ]);
    }


    //     // var numPlayers = 0;

        // for (var i = 0; i < PlayerList.Count; i++) {
        // var player = PlayerList[i];
  
        // if (player.IsXInput && player.ScreenIndex !== -1) {
        // numPlayers++;
        // }
        // player.ProtoController1 = (Context.GamepadId);
        // player.ProtoController2 = (Context.GamepadId);
        // player.ProtoController3 = (Context.GamepadId);
        // player.ProtoController4 = (Context.GamepadId);
        // player.ProtoController5 = (Context.GamepadId);
        // player.ProtoController6 = (Context.GamepadId);
        // player.ProtoController7 = (Context.GamepadId);
        // player.ProtoController8 = (Context.GamepadId);
        // player.ProtoController9 = (Context.GamepadId);
        // }

}