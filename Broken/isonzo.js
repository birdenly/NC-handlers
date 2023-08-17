
Game.ExecutableContext = ["Isonzo_Data"];
// Game.FileSymlinkCopyInstead = ["Player.log", "UnityCrashHandler64.exe", "UnityPlayer.dll", "GameAssembly.dll","AnselPlugin64.dll","AnselSDK64.dll","EOSSDK-Win64-Shipping.dll","fmodstudio.dll","fmodstudiol.dll","M2HDetect.dll","PhotonEncryptorPlugin.dll","resonanceaudio.dll","Rewired_DirectInput.dll","steam_api64.dll"];
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = false;
Game.ExecutableName = "Isonzo.exe";
Game.BinariesFolder = "";
Game.SteamID = "1556790";
Game.GUID = "Isonzo";
Game.GameName = "Isonzo";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.LauncherTitle = "";
Game.HideTaskbar = false;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "isonzo";
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;

Game.UseGoldberg = true; 
Game.GoldbergExperimental = true; 

Game.UseNemirtingasEpicEmu = true;
Game.EpicEmuArgs = true;

// Game.UseForceBindIP = true;  

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

// Game.ProtoInput.InjectStartup = true;
// Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
// Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
// Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

// Game.LockInputAtStart = false;
// Game.LockInputSuspendsExplorer = true;
// Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
// Game.LockInputToggleKey = 0x23;

// Game.ProtoInput.RenameHandlesHook = false;
// Game.ProtoInput.RenameHandles = [];
// Game.ProtoInput.RenameNamedPipes = [];

// Game.ProtoInput.RegisterRawInputHook = false;
// Game.ProtoInput.GetRawInputDataHook = false;
// Game.ProtoInput.MessageFilterHook = true;
// Game.ProtoInput.GetCursorPosHook = false;
// Game.ProtoInput.SetCursorPosHook = false;
// Game.ProtoInput.GetKeyStateHook = false;
// Game.ProtoInput.GetAsyncKeyStateHook = false;
// Game.ProtoInput.GetKeyboardStateHook = false;
// Game.ProtoInput.CursorVisibilityHook = false;
// Game.ProtoInput.ClipCursorHook = true;
// Game.ProtoInput.FocusHooks = true;
// Game.ProtoInput.DrawFakeCursor = false;
// Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
// Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;
// Game.ProtoInput.DontShowCursorWhenImageUpdated = true;

// Game.ProtoInput.RawInputFilter = false;
// Game.ProtoInput.MouseMoveFilter = false;
// Game.ProtoInput.MouseActivateFilter = false;
// Game.ProtoInput.WindowActivateFilter = false;
// Game.ProtoInput.WindowActvateAppFilter = false;
// Game.ProtoInput.MouseWheelFilter = false;
// Game.ProtoInput.MouseButtonFilter = false;
// Game.ProtoInput.KeyboardButtonFilter = false;

// Game.ProtoInput.SendMouseWheelMessages = true;
// Game.ProtoInput.SendMouseButtonMessages = true;
// Game.ProtoInput.SendMouseMovementMessages = true;
// Game.ProtoInput.SendKeyboardButtonMessages = true;
// Game.ProtoInput.XinputHook = true;
// Game.ProtoInput.UseOpenXinput = true;
// Game.ProtoInput.UseDinputRedirection = false;
// Game.ProtoInput.DinputDeviceHook = false;
// Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
// Game.ProtoInput.MultipleProtoControllers = false;

// Game.ProtoInput.EnableFocusMessageLoop = true;
// Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
// Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
// Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE


Game.Play = function() {
  var Args = (Context.Args = " -screen-fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;

  // if (Context.IsKeyboardPlayer) {
  //   Game.ProtoInput.KeyboardButtonFilter = true;
  //   Game.ProtoInput.CursorVisibilityHook = true;
  //   Game.ProtoInput.DontShowCursorWhenImageUpdated = true;
  //   Game.ProtoInput.DrawFakeCursor = true;

  // } else {
  //   Game.ProtoInput.KeyboardButtonFilter = false;
  //   Game.ProtoInput.CursorVisibilityHook = false;
  //   Game.ProtoInput.DontShowCursorWhenImageUpdated = false;
  //   Game.ProtoInput.DrawFakeCursor = false;
  // }
};
