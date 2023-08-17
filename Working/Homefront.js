
var answers1 = [
"Default",
"NO",
"YES"
  
  ];
  Game.AddOption(
    "The game uses DirectX 10 as default, Do you want to enable DirectX9?",
    'Default will use the previous or default settings. Choose NO to go back to DirectX 10',
    "dx",
    answers1
  );

Game.KillMutex = [
    "FrontlinesGame_SingleInstanceMutex"          
];

Game.FileSymlinkCopyInstead = [
    "vorbisfile.dll"  ,
    "vorbis.dll"  ,
    "PhysXExtensions.dll"  ,
    "NxCooking.dll"  ,
    "ogg.dll"  ,
    "FrontlinesGE.dll"  ,
    "DefaultEngine.ini"  ,
    "DefaultInput.ini"  ,
    "DefaultInput_deu.ini"  ,
    "DefaultInput_fra.ini"  ,
    "GlobalBanlist.ini"  ,
    "LocalBanlist.ini"  ,
    "BaseEngine.ini"  ,
    "BaseInput.ini",
    "BaseInput_deu.ini",
    "BaseInput_fra.ini"
];

Game.GameName = "Homefront";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "HOMEFRONT.exe";
Game.SteamID = "55100";
Game.GUID = "Homefront";
Game.MaxPlayers = 32;
Game.MaxPlayersOneMonitor = 32;
Game.BinariesFolder = "Binaries";
Game.SupportsPositioning = true;
Game.LauncherTitle = "";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "HOMEFRONT";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled= false;
Game.Description = "Some parts of the menus only work with mouse.\n\nWith the first instance, Go into mutiplayer, create a lobby, set it to online and star the match. After doing so, start the next instance and join in the server and do the same to all the next ones.\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked. Add custom resolutions in your AMD/Nvidia/Intel panel (For example for a 1920x1080 monitor add: 960x1080, 960x540, 1920x540 etc.) so the game can see them and use them.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 25;
Game.HideTaskbar = true;

Game.UseGoldberg = true; 
Game.GoldbergExperimentalSteamClient = true; 
Game.PromptBetweenInstances = true;
Game.GoldbergNoLocalSave = true;

Game.SetWindowHookStart = true;
Game.ResetWindows = true;  

Game.UseNucleusEnvironment = true; 
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\55100\\remote";
Game.UserProfileConfigPath = "Documents\\My Games\\HOMEFRONT\\GCGame\\Config";



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
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
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
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02A3, 0x02A1]; // Blocks WM_KILLFOCUS

Game.Play = function () {

      var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\GCEngine.ini"
        Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
        new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen",0),
        new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
        new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height),
    ]);

    var DX = Context.Options["dx"];
    var argumento = "";

    if(DX == "YES"){
        var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\GCEngine.ini"
        Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
        new Nucleus.IniSaveInfo("SystemSettings", "AllowD3D10","False")
    ]);
        argumento = "-d3d9";
    }
    else if(DX=="NO"){
        var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\GCEngine.ini"
        Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
        new Nucleus.IniSaveInfo("SystemSettings", "AllowD3D10","True")
    ]);
        
    }else{
    }

    if (Player.IsKeyboardPlayer) {
        Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup -nostartupmovies -NoController " + argumento + " -resx=" + Context.Width + " -resy= " + Context.Height;
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
    }
    else {
        Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup -nostartupmovies -nomouse " + argumento + " -resx= " + Context.Width + " -resy= " + Context.Height;
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
    Game.ProtoInput.ClipCursorHook = true;
    Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
    Game.ProtoInput.GetCursorPosHook = false;
    Game.ProtoInput.SetCursorPosHook = false;
    }


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

}