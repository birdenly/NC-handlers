

Game.DirSymlinkExclusions = [
    "Binaries\\Win64",
    "ROGame\\Config"
];
// Game.FileSymlinkExclusions = [
//     "steam_api.dll",
//         "steam_appid.txt",
//         "steam_interfaces.txt"

// ];


Game.FileSymlinkCopyInstead = [
    "steam_api64.dll",
    "steamclient64.dll"
      
      
]; 
Game.GameName = "Rising Storm 2";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "VNGame.exe";
Game.SteamID = "418460";
Game.GUID = "Rising Storm 2";
Game.MaxPlayers = 64;
Game.MaxPlayersOneMonitor = 64;
Game.BinariesFolder = "Binaries\\Win64";
Game.NeedsSteamEmulation = false;
Game.SupportsPositioning = true;
Game.UseGoldberg = true; 
Game.LauncherTitle = "";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Rising Storm 2";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [ "xinput1_3.dll","Xinput9_1_0.dll" ];
Game.Hook.CustomDllEnabled= false;
Game.HookFocus= true;
Game.SetWindowHookStart = true;
Game.Description = "make a folder with the name 'server' and put everything of the dedicated server inside it and change the ROgame.exe of the dedicated server to ROgame1.exe";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 25;
Game.ResetWindows = true; 
Game.HideTaskbar = true;


Game.GoldbergWriteSteamIDAndAccount = true; 

// Game.UseNucleusEnvironment = true; 
// Game.UserProfileConfigPath = "Documents\\My Games\\RedOrchestra2\\ROGame\\Config";

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
// Game.ProtoInput.GetCursorPosHook = true;
// Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = true;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = true;
// Game.ProtoInput.CursorVisibilityHook = true;
// Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
//Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;

// Game.ProtoInput.RawInputFilter = true;
// Game.ProtoInput.MouseMoveFilter = false;
// Game.ProtoInput.MouseActivateFilter = true;
// Game.ProtoInput.WindowActivateFilter = true;
// Game.ProtoInput.WindowActvateAppFilter = true;
// Game.ProtoInput.MouseWheelFilter = true;
// Game.ProtoInput.MouseButtonFilter = true;
// Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = false;
Game.ProtoInput.UseOpenXinput = false;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 40000;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function () {
    //   var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\ROEngine.ini"
    //     Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    //     new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen", "False"),
    //     new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
    //     new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height),
    //     new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "StartupFullscreen", "False"),

    //     new Nucleus.IniSaveInfo("SystemSettings", "SLSNativeResX", Context.Width),
    //     new Nucleus.IniSaveInfo("SystemSettings", "SLSNativeResY", Context.Height),

    //     new Nucleus.IniSaveInfo("SystemSettings", "EnableSteamStats", "False"),

    //     new Nucleus.IniSaveInfo("OnlineSubsystemSteamworks.OnlineSubsystemSteamworks", "bUseVAC", "False"),
    // ]);

    // var filePath = (Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win64\\steam_settings");
    // System.IO.Directory.CreateDirectory(filePath);

    // var enginePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ROGame\\Config\\OverrideEngine.ini");
    // var lines = ["bVACEnabled=0"];
    // Context.WriteTextFile(enginePath, lines);

    // var overlay = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\wide.txt"; //in case the resolution isnt right
    // var lines = ["setres " + Context.Width + "x" +  Context.Height];r
    // Context.WriteTextFile(overlay, lines);
    // var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ROGame\\Config\\DefaultEngine.ini"
    //     Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    //         new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen", "False"),
    //         new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
    //         new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height),
    //         new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "StartupFullscreen", "False"),
    
    //         new Nucleus.IniSaveInfo("SystemSettings", "SLSNativeResX", Context.Width),
    //         new Nucleus.IniSaveInfo("SystemSettings", "SLSNativeResY", Context.Height),
    
    //         new Nucleus.IniSaveInfo("SystemSettings", "EnableSteamStats", "False"),
    
    //         new Nucleus.IniSaveInfo("OnlineSubsystemSteamworks.OnlineSubsystemSteamworks", "bUseVAC", "False"),
    // ]);

    

    
    if (Player.IsKeyboardPlayer) {
        Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup " + "-resx=" + Context.Width + " -resy= " + Context.Height;
    Context.Hook.ForceFocus = "False";
    Game.ProtoInput.RawInputFilter = true;
    Game.ProtoInput.MouseMoveFilter = false;
    Game.ProtoInput.MouseActivateFilter = true;
    Game.ProtoInput.WindowActivateFilter = true;
    Game.ProtoInput.WindowActvateAppFilter = true;
    Game.ProtoInput.MouseWheelFilter = true;
    Game.ProtoInput.MouseButtonFilter = true;
    Game.ProtoInput.KeyboardButtonFilter = true;
    Game.ProtoInput.DrawFakeCursor = true;
    Game.ProtoInput.CursorVisibilityHook = true;
    Game.ProtoInput.ClipCursorHook = true;
    Game.ProtoInput.GetCursorPosHook = true;
    Game.ProtoInput.SetCursorPosHook = true;

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win64\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", "")
    ]);

    }
    else {
        Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup " + "-resx= " + Context.Width + " -resy= " + Context.Height;
    Game.ProtoInput.RawInputFilter = false;
    Game.ProtoInput.MouseMoveFilter = false;
    Game.ProtoInput.MouseActivateFilter = false;
    Game.ProtoInput.WindowActivateFilter = false;
    Game.ProtoInput.WindowActvateAppFilter = false;
    Game.ProtoInput.MouseWheelFilter = false;
    Game.ProtoInput.MouseButtonFilter = false;
    Game.ProtoInput.KeyboardButtonFilter = false;
    Game.ProtoInput.DrawFakeCursor = false;
    Game.ProtoInput.CursorVisibilityHook = false;
    Game.ProtoInput.ClipCursorHook = false;
    Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
    Game.ProtoInput.GetCursorPosHook = false;
    Game.ProtoInput.SetCursorPosHook = false;


    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win64\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
    ]);
    }

        var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win64\\steam_interfaces.txt";
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


        // var numPlayers = 0;

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