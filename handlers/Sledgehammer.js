var answers2 = ["Sledgehammer", "GearGrinder"];
Game.AddOption("What version of the game you have?", "This game has 2 versions, Sledgehammer or GearGrinder depeding on where you are from\n\nTo check, open your main game once and check the window title, whatever is the name in it is your game version to select in this option.", "version", answers2);

Game.KillMutex = [
  "Sledgehammer"
];
Game.PartialMutexSearch = true;
Game.FileSymlinkExclusions = ["xinput1_3.dll"];
Game.ExecutableName = "GearGrinder.exe";
Game.GameName = "Sledgehammer";
Game.GUID = "Sledgehammer";
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.MaxPlayers = 8;
Game.HandlerInterval = 100;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Sledgehammer release build v1.01 (Apr 10 2008 15:24:43)";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description = "IMPOTANT: As found by Moss_OH (tester), if you get problems trying to connect to the host, you may need to disable wifi or mess with network adapters for the instances to connect.\n\nSimply create a game in one instace and join in with others.";	
Game.PauseBetweenStarts = 10;
Game.PauseBetweenProcessGrab = 5; 

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\My Games\\Sledgehammer"; // or Documents\\My Games\\GearGrinder

// Game.RefreshWindowAfterStart = true;

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

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 8000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function () {

  var version = Context.Options["version"];
  if (version == "GearGrinder") {
    Game.KillMutex = [
      "GearGrinder"
    ];
    var cfgpath = Context.DocumentsPlayer + "\\My Games\\GearGrinder\\user_config.cfg";
  }else{
    var cfgpath = Context.DocumentsPlayer + "\\My Games\\Sledgehammer\\user_config.cfg";
  }

  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'seta profile_name', Nucleus.SearchType.StartsWith) + '|seta profile_name "'+Context.Nickname+'"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_height', Nucleus.SearchType.StartsWith) + '|seta r_height "' + Context.Height  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_width', Nucleus.SearchType.StartsWith) + '|seta r_width "' + Context.Width  + '"'
  ];

  Context.ReplaceLinesInTextFile(cfgpath, dict);
  if (Context.PlayerID == 0) {
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'seta s_musicEnable', Nucleus.SearchType.StartsWith) + '|seta s_musicEnable "1"',
    ];
  } else {
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'seta s_musicEnable', Nucleus.SearchType.StartsWith) + '|seta s_musicEnable "0"',
    ];
  }
  Context.ReplaceLinesInTextFile(cfgpath, dict);

}