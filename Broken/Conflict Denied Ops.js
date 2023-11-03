
Game.KillMutex = [
  "{CGTERROR2-713BE74C-758D-4109-BD4C-4C3B1D1E7D6D}"
];

Game.FileSymlinkExclusions = ["d3d9.ini", "d3d9.dll"];
Game.FileSymlinkCopyInstead = ["GameExplorerBinary.dll", "GameuxInstallHelper.dll", "M_BAS.dll", "M_CMB.dll", "M_COMPETITIVE.dll","M_CTL.dll","M_DMN.dll","M_SAW.dll","M_TWN.dll","M_WHL.dll","M_WTR.dll","msvcp71.dll","msvcr71.dll"];

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "ConflictDeniedOps.exe";
Game.SteamID = "8100";
Game.GUID = "Conflict Denied Ops";
Game.GameName = "Conflict Denied Ops";
Game.BinariesFolder = "";
Game.MaxPlayers = 32;
Game.MaxPlayersOneMonitor = 32;
Game.LauncherTitle = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Conflict : Denied Ops";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
// Game.XInputPlusDll = ["xinput1_3.dll","dinput8.dll"];
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 25;
Game.HideTaskbar = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "Documents\\Eidos\\ConflictDeniedOps";

Game.UseSteamless = true; 
Game.SteamlessArgs = "--quiet --keepbind";     
Game.FakeFocus = true; 
Game.SupportsKeyboard = true; 
Game.GamePlayBeforeGameSetup = true;

// Game.LaunchAsDifferentUsers = true; //can be used to connect with gamespy, even tho you get disconnected after 2s
//Game.UseForceBindIP = true;  


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

Game.SupportsMultipleKeyboardsAndMice = false;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

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
// Game.ProtoInput.CursorVisibilityHook = false;
// Game.ProtoInput.ClipCursorHook = true;
// Game.ProtoInput.FocusHooks = true;
// //Game.ProtoInput.DrawFakeCursor = true;
// Game.ProtoInput.FindWindowHook = false;
// Game.ProtoInput.DontShowCursorWhenImageUpdated = true;
// Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = true

// Game.ProtoInput.RawInputFilter = true;
// Game.ProtoInput.MouseMoveFilter = false;
// Game.ProtoInput.MouseActivateFilter = true;
// Game.ProtoInput.WindowActivateFilter = true;
// Game.ProtoInput.WindowActvateAppFilter = true;
// Game.ProtoInput.MouseWheelFilter = true;
// Game.ProtoInput.MouseButtonFilter = true;
// //Game.ProtoInput.KeyboardButtonFilter = true;

// Game.ProtoInput.SendMouseWheelMessages = true;
// Game.ProtoInput.SendMouseButtonMessages = true;
// Game.ProtoInput.SendMouseMovementMessages = true;
// Game.ProtoInput.SendKeyboardButtonMessages = true;
// Game.ProtoInput.XinputHook = false;
// Game.ProtoInput.UseOpenXinput = false;
// Game.ProtoInput.UseDinputRedirection = false;
// Game.ProtoInput.DinputDeviceHook = false;
// Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function() {  



  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("MAIN", "ResolutionX", Context.Width),
    new Nucleus.IniSaveInfo("MAIN", "ResolutionY", Context.Height),
    new Nucleus.IniSaveInfo("MAIN", "ForceWindowedMode", 1)

  ]);

  // if (Context.PlayerID == 0) {
  // } else {
    var id = Context.PlayerID;

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dinput8.dll");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dinput8.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\port_rebinder.dll");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "port_rebinder.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\socket.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "socket.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var dlls = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dlls.cfg";
    var lines = ["port_rebinder.dll"];
    Context.WriteTextFile(dlls, lines);

    // var ipconfig = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\port.ini";
    // Context.ModifySaveFile(ipconfig, ipconfig, Nucleus.SaveType.INI, [new Nucleus.IniSaveInfo("MYPORT", "PORT", "468" + id)]);
  // }


//     if (Context.IsKeyboardPlayer) {
//       Game.ProtoInput.DrawFakeCursor = true;

//       Game.ProtoInput.RawInputFilter = true;
// Game.ProtoInput.MouseMoveFilter = false;
// Game.ProtoInput.MouseActivateFilter = true;
// Game.ProtoInput.WindowActivateFilter = true;
// Game.ProtoInput.WindowActvateAppFilter = true;
// Game.ProtoInput.MouseWheelFilter = true;
// Game.ProtoInput.MouseButtonFilter = true;

//     } else {
//       Game.ProtoInput.DrawFakeCursor = false;

//       Game.ProtoInput.RawInputFilter = false;
// Game.ProtoInput.MouseMoveFilter = false;
// Game.ProtoInput.MouseActivateFilter = false;
// Game.ProtoInput.WindowActivateFilter = false;
// Game.ProtoInput.WindowActvateAppFilter = false;
// Game.ProtoInput.MouseWheelFilter = false;
// Game.ProtoInput.MouseButtonFilter = false;

//     }       
};
