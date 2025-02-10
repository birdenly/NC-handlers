Game.ExecutableContext = ["GDWeave","winmm.dll"]; //mods needed
Game.FileSymlinkCopyInstead = [
  "WebfishingPlus.json"
];
Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "webfishing.exe";
Game.SteamID = "3146520";
Game.GUID = "Webfishing";
Game.GameName = "Webfishing";
Game.MaxPlayers = 12;
Game.MaxPlayersOneMonitor = 12;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "WEBFISHING v1.12";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: You NEED WebfishingPlus installed LOCALLY in your main game folder (not with mod manager): https://github.com/NotNite/WebfishingPlus?tab=readme-ov-file#installation install GDweave than WebfishingPlus. Now run your game once with the mods so config files are created.\n\nCreate a game on one instance and join in with others on the PLAY menu\n\nAlt+tab to the keyboard and mouse instance if you have one to control it";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 8;

Game.SupportsKeyboard = true;
Game.UseGoldberg = true;
Game.SetWindowHook= true;
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\Godot\\app_userdata\\webfishing_2_newver";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {

  Context.StartArguments = " -w -t --resolution " + Context.Width + "x" + Context.Height + " --position " + Context.PosX + "," +Context.PosY;

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder)  + "\\GDWeave\\configs\\WebfishingPlus.json";
  var dict = [
  Context.FindLineNumberInTextFile(txtPath, '  "ControllerSupport":', Nucleus.SearchType.StartsWith) + '|  "ControllerSupport": true,',
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);


};
