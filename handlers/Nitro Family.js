Game.DirSymlinkCopyInstead = ["Players", "Scripts", "SaveGame"];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "NitroFamily.exe";
Game.GUID = "Nitro Family";
Game.GameName = "Nitro Family";
Game.MaxPlayersOneMonitor = 16;
Game.MaxPlayers = 16;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Nitro Family";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled = false;
Game.PauseBetweenStarts = 15;
Game.Description =
  "Avoid horizontal split, some stuff will cut off from the screen.\n\nMake start a LAN server then join in from the browser, remember to change names and make the server visible.\n\nPress END so everyone can control their own instance.";
Game.PauseBetweenProcessGrab = 15;
Game.HideTaskbar = true;	
Game.UseForceBindIP = true;
Game.KeepSymLinkOnExit = true;
// Game.CreateSingleDeviceFile = true;

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

// Game.SupportsMultipleKeyboardsAndMice = true;

// Game.ProtoInput.InjectStartup = true;

// Game.LockInputAtStart = false;
// Game.LockInputSuspendsExplorer = true;
// Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
// Game.LockInputToggleKey = 0x23;

// Game.ProtoInput.RenameHandlesHook = false;
// Game.ProtoInput.RenameHandles = [];
// Game.ProtoInput.RenameNamedPipes = [];

// Game.ProtoInput.RegisterRawInputHook = true;
// Game.ProtoInput.GetRawInputDataHook = true;
// Game.ProtoInput.MessageFilterHook = true;
// Game.ProtoInput.GetCursorPosHook = true;
// Game.ProtoInput.SetCursorPosHook = true;
// Game.ProtoInput.GetKeyStateHook = true;
// Game.ProtoInput.GetAsyncKeyStateHook = true;
// Game.ProtoInput.GetKeyboardStateHook = true;
// Game.ProtoInput.CursorVisibilityHook = true;
// Game.ProtoInput.ClipCursorHook = true;
// Game.ProtoInput.FocusHooks = true;
// Game.ProtoInput.DrawFakeCursor = true;

// Game.ProtoInput.RawInputFilter = true;
// Game.ProtoInput.MouseMoveFilter = true;
// Game.ProtoInput.MouseActivateFilter = true;
// Game.ProtoInput.WindowActivateFilter = true;
// Game.ProtoInput.WindowActivateAppFilter = true;
// Game.ProtoInput.MouseWheelFilter = true;
// Game.ProtoInput.MouseButtonFilter = true;
// Game.ProtoInput.KeyboardButtonFilter = true;

// Game.ProtoInput.SendMouseWheelMessages = true;
// Game.ProtoInput.SendMouseButtonMessages = true;
// Game.ProtoInput.SendMouseMovementMessages = true;
// Game.ProtoInput.SendKeyboardButtonMessages = true;

// Game.ProtoInput.OnInputLocked = function() {	
// 	for (var i = 0; i < PlayerList.Count; i++) {
// 	  var player = PlayerList[i];
	  
// 	  ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, true, false, false, true);
	  
// 	  System.Threading.Thread.Sleep(500);
	  
// 	  ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
// 	}
// }

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
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
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
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
Game.ProtoInput.SetWindowPosHook = true;

Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.BlockedMessages = [0x0008];

 Game.ProtoInput.OnInputLocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 25, true, true, true, true, true);

      System.Threading.Thread.Sleep(1000);

      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);

      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
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

      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
    }
  };

var answers1 = ["30", "60", "45", "90", "120"];
Game.AddOption("Choose your FPS limit", "", "fps", answers1);

Game.Play = function() {

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Scripts\\PersistentSymbols.ini";
  var dict = [
    Context.FindLineNumberInTextFile(savePath, 'persistent extern INDEX sam_bFullScreen=(INDEX)', Nucleus.SearchType.StartsWith) + '|persistent extern INDEX sam_bFullScreen=(INDEX)0;',
    Context.FindLineNumberInTextFile(savePath, 'persistent extern INDEX sam_iScreenSizeI=(INDEX)', Nucleus.SearchType.StartsWith) + '|persistent extern INDEX sam_iScreenSizeI=(INDEX)'+Context.Width+';',
    Context.FindLineNumberInTextFile(savePath, 'persistent extern INDEX sam_iScreenSizeJ=(INDEX)', Nucleus.SearchType.StartsWith) + '|persistent extern INDEX sam_iScreenSizeJ=(INDEX)'+Context.Height+';',
    Context.FindLineNumberInTextFile(savePath, 'persistent extern user INDEX sam_bPauseOnMinimize=(INDEX)', Nucleus.SearchType.StartsWith) + '|persistent extern user INDEX sam_bPauseOnMinimize=(INDEX)0;',
    Context.FindLineNumberInTextFile(savePath, 'persistent extern user INDEX sam_iMaxFPSActive=(INDEX)', Nucleus.SearchType.StartsWith) + '|persistent extern user INDEX sam_iMaxFPSActive=(INDEX)'+Context.Options["fps"]+';',
  ];
  Context.ReplaceLinesInTextFile(savePath, dict);
};
