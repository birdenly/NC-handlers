Game.KillMutex = [
    "gpgmutex_spacesiege_exe"
];
Game.FileSymlinkCopyInstead = [
"system_detail.gas",
"GDFBinary.dll",
"granny2.dll",
"language.dll",
];

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "SpaceSiege.exe";
Game.BinariesFolder = "";
Game.GUID = "Space Siege";
Game.GameName = "Space Siege";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Space Siege";
Game.ResetWindows = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled = false;
Game.Description = "Start your main game once before trying the handler.\n\nUse LAN to host/connect. If you get an in-game firewall error and still see the other lobby, ignore it.\n\nAfter all the instances have launched, resized and positioned correctly, alt+tab to the Nucleus Co-op screen than press the END key once to lock the input for all instances to have their own working cursor, keyboard and FOCUS (in a instance is frozen, unlock and lock again). You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked."; 	
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.UseDI8CoopLvlUnlocker = true; 
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\My Games\\Space Siege";

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
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.AdjustWindowRectHook = true;  
Game.ProtoInput.SetRemoveBorderHook = true;

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

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, true, true, true, true);
    System.Threading.Thread.Sleep(500);
    ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
  }
};

Game.Play = function () {

    var config = Context.DocumentsPlayer + "My Games\\Space Siege\\SpaceSiege.ini";
    var dict = [
        Context.FindLineNumberInTextFile(config, "width =", Nucleus.SearchType.StartsWith) + '|width = '+ (Context.Width*0.95),
        Context.FindLineNumberInTextFile(config, "fullscreen =", Nucleus.SearchType.StartsWith) + '|fullscreen = false',
        Context.FindLineNumberInTextFile(config, "can_skip_intro =", Nucleus.SearchType.StartsWith) + '|can_skip_intro = true',
        Context.FindLineNumberInTextFile(config, "height =", Nucleus.SearchType.StartsWith) + '|height = ' + (Context.Height*0.95)
    ];
    Context.ReplaceLinesInTextFile(config, dict);

    Context.PatchFileFindPattern(
        System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SpaceSiege.exe"),
        System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SpaceSiege.exe"),
        "3E 39 8E E3 3F 00",
        Context.AspectRatioDecimal,
        2,
        true
    );

};