
Game.ExecutableContext = ["cstrike_brazilian"
];

Game.KillMutex = [
    "ValvePlatformUIMutex"          
];

Game.FileSymlinkCopyInstead = [
  "config.cfg",
  "game.cfg",
  "skill1.cfg",
  "ai.cfg",
  "botprofile.db",
  "botchatter.db",
  "shader_cache.cfg",
  "dxsupport_override.cfg",
];

Game.FileSymlinkExclusions = ["x360controller.cfg"];

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "hl2.exe";
Game.SteamID = "10";
Game.GUID = "Counter strike 1.6 source";
Game.GameName = "Counter-strike 1.6 source";
Game.BinariesFolder = "game";
Game.MaxPlayers = 32;
Game.MaxPlayersOneMonitor = 32;
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Counter-strike 1.6: Source";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "IMPORTANT: This handler is made for Counter-Strike 1.6: Source - Standalone Edition. Create a server in the first instance all others will auto join. I recommend waiting for everyone to join the server to start selecting a team, as if one person selects a team the bots will spawn in and start the match. Vertical splitscreen makes in-game menus (buy menu/scoreboard) hard to see but still usable. When in game you can use the 'home' buttom to disable/enable cursor so it doesnt stay in the middle of the screen. Add custom resolutions in your AMD/Nvidia/Intel panel (For example for a 1920x1080 monitor add: 960x1080, 960x540, 1920x540 etc.) so the game can see them and use them. After all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 25;

Game.FakeFocus = true; 
Game.PromptAfterFirstInstance = true;  

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
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
//Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.FindWindowHook = false;
Game.ProtoInput.DontShowCursorWhenImageUpdated = true;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = true

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
//Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = false;
Game.ProtoInput.UseOpenXinput = false;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function() {
    var Args = (Context.Args = " -windowed -width " + Context.Width + " -height " + Context.Height + " -game cstrike -console");
    Context.StartArguments = Args; 


  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\cstrike\\cfg\\config.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "name ", Nucleus.SearchType.StartsWith) + '|name "' + Context.Nickname + '"',
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);


//auto connect
if(Context.PlayerID == 0){
}
else{
  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\cstrike\\cfg\\config.cfg"; 
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "voice_enable ", Nucleus.SearchType.StartsWith) + '|connect ' + Context.LocalIP
    
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);
}

    if (Context.IsKeyboardPlayer) {
      var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\cstrike\\cfg\\config.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "cl_mouselook ", Nucleus.SearchType.StartsWith) + '|cl_mouselook "1"',
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);
      Game.ProtoInput.DrawFakeCursor = true;

      Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

    } else {
      var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\cstrike\\cfg\\config.cfg"; 
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, "joystick ", Nucleus.SearchType.StartsWith) + '|joystick "1"',
        Context.FindLineNumberInTextFile(txtPath, "cl_mouselook ", Nucleus.SearchType.StartsWith) + '|cl_mouselook "0"',
        Context.FindLineNumberInTextFile(txtPath, "", Nucleus.SearchType.StartsWith) + '|exec 360controller.cfg'
        
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);
      Game.ProtoInput.DrawFakeCursor = false;

      Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = false;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;
    }
  
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\cstrike\\cfg\\360controller.cfg");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "360controller.cfg");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
};
