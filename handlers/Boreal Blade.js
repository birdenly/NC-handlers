var answers1 = ["30", "60", "90", "120", "144", "0"];
Game.AddOption("Select the FPS cap.", "0 is for unlimited FPS", "fps", answers1);

Game.NeedsSteamEmulation = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "borealblade_64bit.exe";
Game.SteamID = "598780";
Game.GUID = "Boreal Blade";
Game.GameName = "Boreal Blade";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Boreal Blade";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "Host a multiplayer match on one instance and use quick play to join.\n\nWhen using keyboard/mouse, use the HOME key in your keyboard to remove the cursor from the middle of the screen when in-game.\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 8;
Game.PauseBetweenStarts = 8;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\BorealBlade";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\598780";
Game.UseGoldberg = true; 
Game.GoldbergNoLocalSave = true;
// Game.HookFocus = true;


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

Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.DrawFakeCursor = false;
// Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = true

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
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

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

    ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

    //ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5000, true, true, true, true, true);

    
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

  var FPS = Context.Options["fps"];

  var cfgpath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\options.txt";
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'setOption(renderingModule, "ScreenWidth",', Nucleus.SearchType.StartsWith) + '|setOption(renderingModule, "ScreenWidth", '+ Context.Width +')',
    Context.FindLineNumberInTextFile(cfgpath, 'setOption(renderingModule, "FramerateLimit",', Nucleus.SearchType.StartsWith) + '|setOption(renderingModule, "FramerateLimit", '+ FPS +')',
    Context.FindLineNumberInTextFile(cfgpath, 'setOption(renderingModule, "ScreenHeight",', Nucleus.SearchType.StartsWith) + '|setOption(renderingModule, "ScreenHeight", '+ Context.Height +')',
    Context.FindLineNumberInTextFile(cfgpath, 'setOption(renderingModule, "Windowed",', Nucleus.SearchType.StartsWith) + '|setOption(renderingModule, "Windowed", true)',
    Context.FindLineNumberInTextFile(cfgpath, 'setOption(renderingModule, "WindowTitleBar",', Nucleus.SearchType.StartsWith) + '|setOption(renderingModule, "WindowTitleBar", false)',
    Context.FindLineNumberInTextFile(cfgpath, 'setOption(renderingModule, "ShowFPS",', Nucleus.SearchType.StartsWith) + '|setOption(renderingModule, "ShowFPS", true)',
    Context.FindLineNumberInTextFile(cfgpath, 'setOption(renderingModule, "MaximizeWindow",', Nucleus.SearchType.StartsWith) + '|setOption(renderingModule, "MaximizeWindow", false)',

    Context.FindLineNumberInTextFile(cfgpath, 'setOption(settingsMenuUtilModule, "ResolutionX",', Nucleus.SearchType.StartsWith) + '|setOption(settingsMenuUtilModule, "ResolutionX", '+ Context.Width +')',
    Context.FindLineNumberInTextFile(cfgpath, 'setOption(settingsMenuUtilModule, "ApplyResolution",', Nucleus.SearchType.StartsWith) + '|setOption(settingsMenuUtilModule, "ApplyResolution", true)',
    Context.FindLineNumberInTextFile(cfgpath, 'setOption(settingsMenuUtilModule, "ResolutionY",', Nucleus.SearchType.StartsWith) + '|setOption(settingsMenuUtilModule, "ResolutionY", '+ Context.Height +')',

    Context.FindLineNumberInTextFile(cfgpath, 'setOption(settingsMenuUtilModule, "Windowed",', Nucleus.SearchType.StartsWith) + '|setOption(settingsMenuUtilModule, "Windowed", true)',
    Context.FindLineNumberInTextFile(cfgpath, 'setOption(settingsMenuUtilModule, "ApplyWindowedMode",', Nucleus.SearchType.StartsWith) + '|setOption(settingsMenuUtilModule, "ApplyWindowedMode", true)',
    Context.FindLineNumberInTextFile(cfgpath, 'setOption(settingsMenuUtilModule, "LastStartFailed",', Nucleus.SearchType.StartsWith) + '|setOption(settingsMenuUtilModule, "LastStartFailed", false)',
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  if (Context.PlayerID != 0) {
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'setOption(audioModule, "VolumeMusic",', Nucleus.SearchType.StartsWith) + '|setOption(audioModule, "VolumeMusic", 0)',
    ];
  }else{
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'setOption(audioModule, "VolumeMusic",', Nucleus.SearchType.StartsWith) + '|setOption(audioModule, "VolumeMusic", 50)',
    ];
  }
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  var steam_settings = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings";
  if (!System.IO.Directory.Exists(steam_settings)) {
    System.IO.Directory.CreateDirectory(steam_settings);
  }

  Context.CopyFolder(Context.ScriptFolder, steam_settings);

};
