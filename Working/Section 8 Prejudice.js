

Game.ExecutableContext = [ 
    "S9-Win32-F.exe.cfg"
];


Game.FileSymlinkExclusions = ["xlive.dll", "xlive.ini", "TeknoXlive.dll"];
Game.FileSymlinkCopyInstead = ["S9.exe","DefaultGame.ini","S9Engine.ini"];


Game.GameName = "Section 8: Prejudice";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.LauncherExe = "S9.exe";
Game.LauncherTitle = "";
Game.ExecutableName = "S9-Win32-F.exe";
Game.SteamID = "97100";
Game.GUID = "Section 8 Prejudice";
Game.MaxPlayers = 64;
Game.MaxPlayersOneMonitor = 64;
Game.BinariesFolder = "Binaries\\Win32";
Game.SupportsPositioning = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Section 8: Prejudice PC";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled= false;
Game.Description = "IMPORTANT: Your Nucleus Co-op nickname cannot have spaces, the GFWL emulator doesnt work with them. also recommend not having any GFWL emulators in your game folder, it will cause conflicts with the one in the handler.\n\nThe saves per instance are stored inside Nucleus Co-op content folder and the nucleus Document config path, so if you delete Nucleus, the game content folder or the document config path, your Nucleus saves for this game will be lost(not your main game save).\n\nIn the main menu go into EXTRAS>SYSTEM LINK and create a match, to join the match press the ' key it will open the console, in it type 'open 127.0.0.1'. The admin password is '123' if you are asked for one in console commands. If you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 25;
Game.HideTaskbar = true;

Game.NeedsSteamEmulation = true;
Game.UseSteamless = true;
 
Game.SetWindowHookStart = true;
Game.ResetWindows = true; 

Game.KeepSymLinkOnExit = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\My Games\\Section 8 Prejudice - PC";
Game.UserProfileConfigPathNoCopy = true; 


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
Game.ProtoInput.GetAsyncKeyStateHook = true;
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
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function () {
    

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\xlive.dll");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "xlive.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
    
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\xlive.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "xlive.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\xlive.ini";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "profile name 1", Nucleus.SearchType.StartsWith) + '|profile name 1 = ' + Context.Nickname,
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    
    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\S9game\\Config\\S9Engine.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
      new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height)
    ]);

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\S9game\\Config\\DefaultGame.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("Engine.AccessControl", "AdminPassword", 123),
      new Nucleus.IniSaveInfo("Engine.GameInfo", "bKickLiveIdlers", false),
      new Nucleus.IniSaveInfo("Engine.GameInfo", "MaxPlayersAllowedListen", 64)
    ]);

    if (Player.IsKeyboardPlayer) {
        Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup -NoController " + "-resx=" + Context.Width + " -resy= " + Context.Height;
    Context.Hook.ForceFocus = "False";
    Game.ProtoInput.RawInputFilter = true;
    Game.ProtoInput.MouseMoveFilter = false;
    Game.ProtoInput.MouseActivateFilter = true;
    Game.ProtoInput.WindowActivateFilter = true;
    Game.ProtoInput.WindowActvateAppFilter = true;
    Game.ProtoInput.MouseWheelFilter = true;
    Game.ProtoInput.MouseButtonFilter = true;
    Game.ProtoInput.KeyboardButtonFilter = true;
    Game.ProtoInput.DrawFakeCursor = false;
    Game.ProtoInput.CursorVisibilityHook = true;
    Game.ProtoInput.ClipCursorHook = true;
    Game.ProtoInput.GetCursorPosHook = true;
    Game.ProtoInput.SetCursorPosHook = true;
    }
    else {
        Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup -nomouse " + "-resx= " + Context.Width + " -resy= " + Context.Height;
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
    Game.ProtoInput.GetCursorPosHook = true;
    Game.ProtoInput.SetCursorPosHook = true;
    Game.ProtoInput.GetKeyStateHook = false;
    Game.ProtoInput.GetAsyncKeyStateHook = false;
    Game.ProtoInput.GetKeyboardStateHook = false;
    }


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