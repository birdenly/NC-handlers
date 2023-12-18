var answers1 = ["READ", "REMOVE"];
Game.AddOption(
  "THE HANDLER DOES NOT SUPPORT CONTROLLERS, DO NOT ASK FOR IT.",
  "Now that you know that it doesnt support controllers, choose 'REMOVE' in the options to remove this box(and get in game faster)",
  "read",
  answers1
);

Game.ExecutableContext = ["Lethal Company_Data"];
Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt"];
Game.FileSymlinkCopyInstead = ["nvngx_dlss.dll", "NVUnityPlugin.dll", "UnityCrashHandler64.exe", "UnityPlayer.dll"];
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = false;
Game.ExecutableName = "Lethal Company.exe";
Game.SteamID = "1966720";
Game.GUID = "Lethal Company";
Game.GameName = "Lethal Company";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.LauncherTitle = "";
Game.HideTaskbar = false;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Lethal Company";
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: Set your main game into windowed, else you might have problems with resizing.\n\nGo into online and host a public match and join in with others, also make voice chat press to talk to not hear your mic.\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)\n\nDisable any overlays that are attaching to the game (discord,steam or any other)\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.SetWindowHookStart = true;
Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\LocalLow\\ZeekerssRBLX\\Lethal Company";

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
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.DontShowCursorWhenImageUpdated = true;

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
// Game.ProtoInput.XinputHook = true;
// Game.ProtoInput.UseOpenXinput = true;
// Game.ProtoInput.UseDinputRedirection = false;
// Game.ProtoInput.DinputDeviceHook = false;
// Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
// Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  var Args = (Context.Args = " -screen-fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;

  var READ = Context.Options["read"];

  if (READ == "REMOVE") {
    var script = Context.HandlersFolder + "\\Lethal company.js";
    var dict = [
      Context.FindLineNumberInTextFile(script, "var answers1", Nucleus.SearchType.StartsWith) + "|//removed",
      Context.FindLineNumberInTextFile(script, "Game.AddOption", Nucleus.SearchType.StartsWith) + "|//removed",
      Context.FindLineNumberInTextFile(script, '  "THE HANDLER DOES NOT SUPPORT CONTROLLERS AND WONT IN THE NEAR FUTURE, DO NOT ASK FOR IT.",', Nucleus.SearchType.StartsWith) + "|//removed",
      Context.FindLineNumberInTextFile(script, '  "Now that you know that it doesnt support controllers, choose ', Nucleus.SearchType.StartsWith) + "|//removed",
      Context.FindLineNumberInTextFile(script, '  "read",', Nucleus.SearchType.StartsWith) + "|//removed",
      Context.FindLineNumberInTextFile(script, "  answers1", Nucleus.SearchType.StartsWith) + "|//removed",
      Context.FindLineNumberInTextFile(script, ");", Nucleus.SearchType.StartsWith) + "|//removed"
    ];
    Context.ReplaceLinesInTextFile(script, dict);
  }

  // var numPlayers = 0;

  // for (var i = 0; i < PlayerList.Count; i++) {
    //   var player = PlayerList[i];

    //   if (player.IsXInput && player.ScreenIndex !== -1) {
      //     numPlayers++;
    //   }
  //   player.ProtoController1 = Context.GamepadId;
    //   player.ProtoController2 = Context.GamepadId;
    //   player.ProtoController3 = Context.GamepadId;
    //   player.ProtoController4 = Context.GamepadId;
    //   player.ProtoController5 = Context.GamepadId;
    //   player.ProtoController6 = Context.GamepadId;
    //   player.ProtoController7 = Context.GamepadId;
    //   player.ProtoController8 = Context.GamepadId;
    //   player.ProtoController9 = Context.GamepadId;
  // }
};
