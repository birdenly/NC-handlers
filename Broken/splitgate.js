
Game.ExecutableContext = ["OpenImageDenoise.dll"];

Game.FileSymlinkCopyInstead = [ //files inside the exe folder
   "equ8_conf.json",
   "tbb12.dll",
   "OpenImageDenoise.dll",
   "anticheat.x64.equ8.exe.bootstrap",
   "client.x64.equ8.dll",
   "client.x64.equ8.dll.bootstrap",
   "equ8.cfg",
   "equ8.db",
   "Manifest_DebugFiles_Win64.txt",
   "Manifest_NonUFSFiles_Win64.txt",
   "libowgameevents.dll",
   "vivoxsdk.dll",
   "GfeSDK.dll",
   "juice.dll",
   "installscript.vdf",
   "Splash.bmp",
   "AnselSDK64.dll",
   "xaudio2_9redist.dll",
   "libvorbisfile_64.dll",
   "libvorbis_64.dll",
   "APEX_Clothing_x64.dll",
   "APEX_Legacy_x64.dll",
   "ApexFramework_x64.dll",
   "NvCloth_x64.dll",
   "PhysX3_x64.dll",
   "PhysX3Common_x64.dll",
   "PhysX3Cooking_x64.dll",
   "PxFoundation_x64.dll",
   "PxPvdSDK_x64.dll",
   "libogg_64.dll",
   "dbghelp.dll"
]; 

Game.KillMutex = ["EQU8_TITLE_RUNNING_36"];


Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = false;
Game.SymlinkFolders = false;
Game.LauncherExe = "equ8-launcher.exe";
Game.ExecutableName = "PortalWars-Win64-Shipping.exe";
Game.SteamID = "677620";
Game.GUID = "Splitgate";
Game.GameName = "Splitgate";
Game.MaxPlayers = 12;
Game.MaxPlayersOneMonitor = 12;
Game.BinariesFolder = "PortalWars\\Binaries\\Win64";
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "PortalWars";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll","xinput9_1_0.dll"];
Game.Description =
  "IMPORTANT: You need to have started the game and changed any graphics settings once before using this handler.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;

Game.RefreshWindowAfterStart = true; 
Game.SetWindowHook = true;
Game.UseGoldberg = true; 
Game.GoldbergExperimental = true;
Game.GoldbergIgnoreSteamAppId = true; 



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

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = true;
// Game.ProtoInput.GetCursorPosHook = true;
// Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = true;
Game.ProtoInput.GetAsyncKeyStateHook = true;
Game.ProtoInput.GetKeyboardStateHook = true;
// Game.ProtoInput.CursorVisibilityHook = true;
// Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
//Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;


// Game.ProtoInput.RawInputFilter = true;
// Game.ProtoInput.MouseMoveFilter = false;
// Game.ProtoInput.MouseActivateFilter = true;
// Game.ProtoInput.WindowActivateFilter = true;
// Game.ProtoInput.WindowActvateAppFilter = true;
// Game.ProtoInput.MouseWheelFilter = true;
// Game.ProtoInput.MouseButtonFilter = true;
// Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = false;
Game.ProtoInput.UseOpenXinput = false;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  var Args = (Context.Args = " -windowed " + " -AlwaysFocus " + " -ResX= " + Context.Width + " -ResY= " + Context.Height);

  Context.StartArguments = Args;

//   if (Context.IsKeyboardPlayer) {
//     Game.ProtoInput.RawInputFilter = true;
//     Game.ProtoInput.MouseMoveFilter = false;
//     Game.ProtoInput.MouseActivateFilter = true;
//     Game.ProtoInput.WindowActivateFilter = true;
//     Game.ProtoInput.WindowActvateAppFilter = true;
//     Game.ProtoInput.MouseWheelFilter = true;
//     Game.ProtoInput.MouseButtonFilter = true;
//     Game.ProtoInput.KeyboardButtonFilter = true;
//     Game.ProtoInput.DrawFakeCursor = true;
//     Game.ProtoInput.CursorVisibilityHook = true;
// Game.ProtoInput.ClipCursorHook = true;
// Game.ProtoInput.GetCursorPosHook = true;
// Game.ProtoInput.SetCursorPosHook = true;
//   } else {
//     Game.ProtoInput.RawInputFilter = false;
//     Game.ProtoInput.MouseMoveFilter = false;
//     Game.ProtoInput.MouseActivateFilter = false;
//     Game.ProtoInput.WindowActivateFilter = false;
//     Game.ProtoInput.WindowActvateAppFilter = false;
//     Game.ProtoInput.MouseWheelFilter = false;
//     Game.ProtoInput.MouseButtonFilter = false;
//     Game.ProtoInput.KeyboardButtonFilter = false;
//     Game.ProtoInput.DrawFakeCursor = false;
//     Game.ProtoInput.CursorVisibilityHook = false;
// Game.ProtoInput.ClipCursorHook = false;
// Game.ProtoInput.GetCursorPosHook = false;
// Game.ProtoInput.SetCursorPosHook = false;
    
//   }
};
