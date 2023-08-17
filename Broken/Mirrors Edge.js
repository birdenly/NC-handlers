
Game.KillMutex = ["UnrealEngine3_3_ME1-1"];
Game.ExecutableContext = [ 
    "PhysXLocal"
];

Game.DirSymlinkExclusions = [
    "Binaries"
];

Game.GameName = "Mirrors Edge";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "MirrorsEdge.exe";
Game.SteamID = "17410";
Game.GUID = "Mirrors Edge";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "Binaries";
Game.NeedsSteamEmulation = false;
Game.SupportsPositioning = true;
//Game.UseGoldberg = true; 
Game.LauncherTitle = "";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Mirror's Edge";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled= false;
Game.HookFocus= true;
Game.SetWindowHookStart = true;
Game.Description = "";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 25;
Game.ResetWindows = true; 
Game.HideTaskbar = true;

Game.NeedsSteamEmulation = true; 
Game.UseGoldberg = true; 
Game.UseNucleusEnvironment = true; 
Game.UserProfileConfigPath = "Documents\\EA Games";
Game.LaunchAsDifferentUsers = true;

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

Game.SupportsMultipleKeyboardsAndMice = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

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
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = true;

Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 40000;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function () {
  
      var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Mirror's Edge\\TdGame\\Config\\TdInput.ini"
        Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
        new Nucleus.IniSaveInfo("Engine.PlayerInput", ';.Bindings=(Name = "SIXAXIS_Gyro", Command = "Axis aPS3Gyro")', 'Bindings=(Name="=",Command="setres '+ Context.Height + 'x' + Context.Width + 'x32W",Control=False,Shift=False,Alt=False))'),
    ]);

    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Mirror's Edge\\TdGame\\Config\\TdEngine.ini"
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen", "False"),
    new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
    new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height)
]);
    

    // var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\d3d9.dll");
    // var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.dll");
    // System.IO.File.Copy(savePkgOrigin, savePath, true);

    // var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\d3d9.ini");
    // var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.ini");
    // System.IO.File.Copy(savePkgOrigin, savePath, true);

    
    if (Player.IsKeyboardPlayer) {
       Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup " + "-resx=" + Context.Width + " -resy= " + Context.Height;
    Context.Hook.ForceFocus = "False";
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

    // var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\XInputPlus.ini";
    // Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", "")
    // ]);

    }
    else {
      Context.StartArguments = "-windowed -AlwaysFocus " + "-resx= " + Context.Width + " -resy= " + Context.Height;
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


    // var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\XInputPlus.ini";
    // Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
    // ]);
    }

        // var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\steam_interfaces.txt";
        // var lines = [
        // "SteamClient015",
        // "SteamGameServer012",
        // "SteamGameServerStats001",
        // "SteamUser017",
        // "SteamFriends014",
        // "SteamUtils007",
        // "SteamMatchMaking009",
        // "SteamMatchMakingServers002",
        // "STEAMUSERSTATS_INTERFACE_VERSION011",
        // "STEAMAPPS_INTERFACE_VERSION006",
        // "SteamNetworking005",
        // "STEAMREMOTESTORAGE_INTERFACE_VERSION012",
        // "STEAMSCREENSHOTS_INTERFACE_VERSION002",
        // "STEAMHTTP_INTERFACE_VERSION002",
        // "STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001",
        // "STEAMUGC_INTERFACE_VERSION002",
        // "STEAMAPPLIST_INTERFACE_VERSION001",
        // "STEAMMUSIC_INTERFACE_VERSION001",
        // "STEAMMUSICREMOTE_INTERFACE_VERSION001",
        // "STEAMCONTROLLER_INTERFACE_VERSION",
        // ];

        // Context.WriteTextFile(autoExec, lines);


        var numPlayers = 0;

        for (var i = 0; i < PlayerList.Count; i++) {
        var player = PlayerList[i];
  
        if (player.IsXInput && player.ScreenIndex !== -1) {
        numPlayers++;
        }
        player.ProtoController1 = (Context.GamepadId);
        player.ProtoController2 = (Context.GamepadId);
        player.ProtoController3 = (Context.GamepadId);
        player.ProtoController4 = (Context.GamepadId);
        player.ProtoController5 = (Context.GamepadId);
        player.ProtoController6 = (Context.GamepadId);
        player.ProtoController7 = (Context.GamepadId);
        player.ProtoController8 = (Context.GamepadId);
        player.ProtoController9 = (Context.GamepadId);
        }
        Context.RunAdditionalFiles(["all|" + Game.Folder + "\\RunMultiplayer.bat"], false, "", 0, false, false, false, false);
}