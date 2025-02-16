Game.ExecutableContext = ["FonixTtsDtSimpleFr.dll"];

Game.FileSymlinkExclusions = ["steam_api.dll"];

Game.GameName = "Global Ops Commando Libya";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "GlobalOps.exe";
Game.SteamID = "200020";
Game.GUID = "Global Ops Commando Libya";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "Binaries";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Global Ops: Commando Libya";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "IMPORTANT: Start the game once and change some settings before trying split screen\n\nIn the first instance create match as HOST, than with other instances join as CLIENT with the IP 127.0.0.1\n\nThe game has full controller support, but you simply cant see what you are selecting\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;
Game.HideTaskbar = true;

Game.UseGoldberg = true;
Game.GoldbergNoLocalSave = true;

// Game.SetWindowHook = true;
Game.ResetWindows = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\My Games\\GlobalOps-CommandoLibya";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\200020";

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

Game.ProtoInput.InjectStartup = true;
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
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;

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
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

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

    ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
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

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\GO_Game\\Config\\GO_Engine.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
    new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height),
    new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen", "False"),
    new Nucleus.IniSaveInfo("SystemSettings", "AllowD3D10", "False"),
    new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "StartupFullscreen", "False"),
  ]);

  if (Context.IsKeyboardPlayer) {

    Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup -NoController " + "-resx=" + Context.Width + " -resy= " + Context.Height;
    Context.Hook.ForceFocus = "False";

    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "AllowJoystickInput", 0),
    ]);
  } else {
    
    Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup " + "-resx= " + Context.Width + " -resy= " + Context.Height;

    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "AllowJoystickInput", 1),
    ]);

  }

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\GO_Game\\Config\\DefaultGTLocalConf.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("GO_Game.GT_LocalConf", "PlayerName", Context.Nickname),
    new Nucleus.IniSaveInfo("GO_Game.GT_LocalConf", "UnlockedLevel", 1),
    new Nucleus.IniSaveInfo("GO_Game.GT_LocalConf", "MPAddress", "127.0.0.1")
  ]);

  if (Context.PlayerID == 0) {
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("GO_Game.GT_LocalConf", "MusicVolume", "0.5")
    ]);
  }else{
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("GO_Game.GT_LocalConf", "MusicVolume", "0.0"),
    ]);
  }

  var numPlayers = 0;

  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    if (player.IsXInput && player.ScreenIndex !== -1) {
      numPlayers++;
    }
    player.ProtoController1 = Context.GamepadId;
    player.ProtoController2 = Context.GamepadId;
    player.ProtoController3 = Context.GamepadId;
    player.ProtoController4 = Context.GamepadId;
    player.ProtoController5 = Context.GamepadId;
    player.ProtoController6 = Context.GamepadId;
    player.ProtoController7 = Context.GamepadId;
    player.ProtoController8 = Context.GamepadId;
    player.ProtoController9 = Context.GamepadId;
  }
};
