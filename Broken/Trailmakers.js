

Game.ExecutableContext = [ 
  "Trailmakers_Data"
    ];
Game.FileSymlinkExclusions = [
    // "steam_api64.dll"
];

Game.UseGoldberg = true;
Game.GoldbergExperimentalSteamClient = true; 
Game.CreateSteamAppIdByExe = true; 
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "Trailmakers.exe";
Game.SteamID = "585420";
Game.GUID = "Trailmakers";
Game.GameName = "Trailmakers";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.LauncherTitle = "";
Game.Hook.ForceFocusWindowName = "Trailmakers";
Game.FakeFocus = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.Hook.CustomDllEnabled = false;
Game.Description = "";
Game.PauseBetweenStarts = 42;

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
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
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
Game.ProtoInput.FocusHooks = false;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;
Game.ProtoInput.DontShowCursorWhenImageUpdated = true;

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


Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function () {

        var Args = Context.Args = " -screen-fullscreen 0 -popupwindow " + " -screen-width " + (Context.Width) + " -screen-height " + (Context.Height);

        Context.StartArguments = Args;
        
        if (Context.IsKeyboardPlayer) {
            Game.ProtoInput.RawInputFilter = true;
            Game.ProtoInput.MouseMoveFilter = false;
            Game.ProtoInput.MouseActivateFilter = true;
            Game.ProtoInput.WindowActivateFilter = true;
            Game.ProtoInput.WindowActvateAppFilter = true;
            Game.ProtoInput.MouseWheelFilter = true;
            Game.ProtoInput.MouseButtonFilter = true;
            Game.ProtoInput.KeyboardButtonFilter = true;

            var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
            Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
            new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
            new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
             new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
             new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", ""),
             ]);

          } else {
            Game.ProtoInput.RawInputFilter = false;
            Game.ProtoInput.MouseMoveFilter = false;
            Game.ProtoInput.MouseActivateFilter = false;
            Game.ProtoInput.WindowActivateFilter = false;
            Game.ProtoInput.WindowActvateAppFilter = false;
            Game.ProtoInput.MouseWheelFilter = false;
            Game.ProtoInput.MouseButtonFilter = false;
            Game.ProtoInput.KeyboardButtonFilter = false;

            var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
            Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
            new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
            new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
            new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
            new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId),
            ]);
        
          }	
        
}