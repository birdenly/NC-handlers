
Game.ExecutableContext = ["CUESDK.x64_2013.dll"];
// Game.KillMutex = ["CrytekApplication"];


Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = false;
Game.ExecutableName = "Homefront2_Release.exe";
Game.SteamID = "223100";
Game.GUID = "Homefront The Revolution";
Game.GameName = "Homefront The Revolution";
Game.MaxPlayers = 32;
Game.MaxPlayersOneMonitor = 32;
Game.BinariesFolder = "Bin64";
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;
// Game.UseNucleusEnvironment = true;
// Game.UserProfileConfigPath = "Documents\\My Games\\Crysis Wars";
Game.SupportsKeyboard = true; 
Game.UseGoldberg = true;

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

// Game.SupportsMultipleKeyboardsAndMice = true;

// Game.ProtoInput.InjectStartup = false;
// Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
// Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
// Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

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
// Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;

// // Game.ProtoInput.RawInputFilter = true;
// // Game.ProtoInput.MouseMoveFilter = true;
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
// Game.ProtoInput.XinputHook = false;
// Game.ProtoInput.UseOpenXinput = false;
// Game.ProtoInput.UseDinputRedirection = false;
// Game.ProtoInput.DinputDeviceHook = false;
// Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
// Game.ProtoInput.MultipleProtoControllers = false;

// Game.ProtoInput.EnableFocusMessageLoop = false;
// //Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
// //Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// //Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
// //Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
// //Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
// //Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
// Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  // var COOP = Context.Options["Coop"];

  // if (COOP == "YES") {
  //   Context.StartArguments = "-mod CrysisCoop -devmode";
  // } else {
  //   Context.StartArguments = "-devmode";
  // }

  // var txtPath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\game.cfg";
  // var dict = [
  //   Context.FindLineNumberInTextFile(txtPath, "r_Fullscreen", Nucleus.SearchType.StartsWith) + "|r_Fullscreen = 0",
  //   Context.FindLineNumberInTextFile(txtPath, "r_Width =", Nucleus.SearchType.StartsWith) + "|r_Width = " + Context.Width,
  //   Context.FindLineNumberInTextFile(txtPath, "r_Height =", Nucleus.SearchType.StartsWith) + "|r_Height = " + Context.Height,
  //   Context.FindLineNumberInTextFile(txtPath, "", Nucleus.SearchType.StartsWith) + "|r_displayinfo = 0"
  // ];
  // Context.ReplaceLinesInTextFile(txtPath, dict);

  // if (Context.IsKeyboardPlayer) {
  //   Game.ProtoInput.RawInputFilter = true;
  //   Game.ProtoInput.MouseMoveFilter = true;
  //   Game.ProtoInput.MouseActivateFilter = true;
  //   Game.ProtoInput.WindowActivateFilter = true;
  //   Game.ProtoInput.WindowActvateAppFilter = true;
  //   Game.ProtoInput.MouseWheelFilter = true;
  //   Game.ProtoInput.MouseButtonFilter = true;
  //   Game.ProtoInput.KeyboardButtonFilter = true;
  //   Game.ProtoInput.CursorVisibilityHook = true;
  //   Game.ProtoInput.ClipCursorHook = true;
  // } else {
  //   Game.ProtoInput.RawInputFilter = false;
  //   Game.ProtoInput.MouseMoveFilter = false;
  //   Game.ProtoInput.MouseActivateFilter = false;
  //   Game.ProtoInput.WindowActivateFilter = false;
  //   Game.ProtoInput.WindowActvateAppFilter = false;
  //   Game.ProtoInput.MouseWheelFilter = false;
  //   Game.ProtoInput.MouseButtonFilter = false;
  //   Game.ProtoInput.KeyboardButtonFilter = false;
  //   Game.ProtoInput.CursorVisibilityHook = false;
  //   Game.ProtoInput.ClipCursorHook = false;
    
  // }
};
