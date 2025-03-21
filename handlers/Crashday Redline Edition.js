var answers1 = ["30", "60", "90", "125", "144"];
Game.AddOption("Select the FPS cap.", "125 is default", "fps", answers1);

Game.KillMutex = ["CrashdayGame"];
Game.PauseBeforeMutexKilling = 3;
Game.HandlerInterval = 1000;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "crashday.exe";
Game.SteamID = "508980";
Game.GUID = "Crashday Redline Edition";
Game.GameName = "Crashday Redline Edition";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Crashday Redline Edition v1.5.44.10";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: Start the game once and change some settings before trying split screen\n\nCreate an online game with one player and join in with others\n\nIf you have a keyboard/mouse player, alt+tab to their screen to control it";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.UseGoldberg = true;
Game.GoldbergNoLocalSave = true;
Game.SupportsKeyboard = true;

Game.UseSteamless = true;
Game.SteamlessArgs = "--quiet --keepbind";
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\Crashday";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\508980";

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

Game.ProtoInput.FocusHooks = true;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  Context.Wait(4000);
  var FPS = Context.Options["fps"];

  Context.StartArguments = " -skiplauncher";

  var configPaths = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\config\\graphics.config";
  var dict = [
    Context.FindLineNumberInTextFile(configPaths, '    "Windowed":', Nucleus.SearchType.StartsWith) + '|    "Windowed": true,',
    Context.FindLineNumberInTextFile(configPaths, '    "FPSLimiter":', Nucleus.SearchType.StartsWith) + '|    "FPSLimiter": '+FPS+',',
    Context.FindLineNumberInTextFile(configPaths, '    "ScreenHeight":', Nucleus.SearchType.StartsWith) + '|    "ScreenHeight": ' + Context.Height+",",
    Context.FindLineNumberInTextFile(configPaths, '    "ScreenWidth":', Nucleus.SearchType.StartsWith) + '|    "ScreenWidth": ' + Context.Width+",",
  ];
  Context.ReplaceLinesInTextFile(configPaths, dict);

  var configPaths = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\config\\audio.config";
  if (Context.PlayerID != 0) {
    var dict = [Context.FindLineNumberInTextFile(configPaths, '    "EnableMusic":', Nucleus.SearchType.StartsWith) + '|    "EnableMusic": false,'];
  } else {
    var dict = [Context.FindLineNumberInTextFile(configPaths, '    "EnableMusic":', Nucleus.SearchType.StartsWith) + '|    "EnableMusic": true,'];
  }
  Context.ReplaceLinesInTextFile(configPaths, dict);

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
