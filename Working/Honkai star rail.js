
Game.ExecutableContext = [ 
    "StarRail_Data"
];

Game.FileSymlinkCopyInstead = [
  "config.ini",
  "UnityCrashHandler64.exe",
  "UnityPlayer.dll",
  "StarRailBase.dll",
  "GameAssembly.dll",
  "ACE-DRV64.dll"
];

Game.RequiresAdmin = true;

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.BinariesFolder = "Games";  
Game.ExecutableName = "StarRail.exe";
Game.SteamID = "";
Game.GUID = "Honkai Star Rail";
Game.GameName = "Honkai Star Rail";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Honkai: Star Rail";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll","xinput1_4.dll","dinput.dll","dinput8.dll"];
Game.Description = "I TAKE NO RESPONSIBILITY FOR ANY POSSIBE ACCOUNT BANS. USE THIS HANDLER AT YOUR OWN RISK AND WOULD ADVISE EXPERIMENTING ON A SECONDARY/DUMMY ACCOUNT. This handler is made for Honkai Star Rail downloaded from the official site. Before running the game with nucleus, go into configuration and choose any resolution thats not fullscreen. You will need different accounts for each player. When you get past the login screen and get in game, click in the process picker window the name 'starrail', it will say protoInput failed but just click 'ok'. For the controller to work, alt+tab to the instance and move/press something on it, than alt+tab back to the keyboard/mouse instance if you have one. Dont go to the graphics settings it will reset the window to the middle of the screen. Do not try more than 2 players.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;

Game.ResetWindows = true;
Game.SetWindowHook = true;
Game.ForceProcessPick = true; 
 Game.SetTopMostAtEnd = true; 
Game.FakeFocus = true; 
Game.PreventWindowDeactivation = true;
Game.SupportsKeyboard = true; 

Game.SupportsMultipleKeyboardsAndMice = false;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = []; 
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;


Game.ProtoInput.EnableFocusMessageLoop = true; 
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02A3, 0x02A1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE 
 
 
Game.Play = function() {

  var Args = (Context.Args = " -screen-fullscreen 0 -popupwindow" + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;


  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Games\\XInputPlus.ini";
	Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
	new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
	new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
	new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
	new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId),
	]);

};