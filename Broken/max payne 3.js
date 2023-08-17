
Game.ExecutableContext = ["LANG_README"];

// Game.FileSymlinkCopyInstead = [ //files inside the exe folder
//    "embree.2.14.0.dll",
//    "imgui.ini",
//    "OpenImageDenoise.dll",
//    "steam_appid.txt",
//    "tbb.dll",
//    "tbb12.dll",
//    "tbbmalloc.dll",   
//    "Pandemic.pdb"    
// ]; 

// Game.FileSymlinkExclusions = [
// "steam_api64.dll", "steam_api.dll"
// ];


Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "MaxPayne3.exe";
Game.SteamID = "204100";
Game.GUID = "Max Payne 3";
Game.GameName = "Max Payne 3";
Game.MaxPlayers = 12;
Game.MaxPlayersOneMonitor = 12;
Game.BinariesFolder = "";
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Max Payne 3";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.Description =
  "remove the rockstar launcher";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;

// Game.RefreshWindowAfterStart = true; 
// Game.SetWindowHook = true;
Game.UseGoldberg = true; 
Game.GoldbergWriteSteamIDAndAccount = true;
Game.GoldbergNoLocalSave = true; 





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
// // Game.ProtoInput.GetCursorPosHook = true;
// // Game.ProtoInput.SetCursorPosHook = true;
// Game.ProtoInput.GetKeyStateHook = true;
// Game.ProtoInput.GetAsyncKeyStateHook = true;
// Game.ProtoInput.GetKeyboardStateHook = true;
// // Game.ProtoInput.CursorVisibilityHook = true;
// // Game.ProtoInput.ClipCursorHook = true;
// Game.ProtoInput.FocusHooks = true;
// //Game.ProtoInput.DrawFakeCursor = true;
// Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;


// // Game.ProtoInput.RawInputFilter = true;
// // Game.ProtoInput.MouseMoveFilter = false;
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
// Game.ProtoInput.XinputHook = true;
// Game.ProtoInput.UseOpenXinput = true;
// Game.ProtoInput.UseDinputRedirection = false;
// Game.ProtoInput.DinputDeviceHook = false;
// Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
// Game.ProtoInput.MultipleProtoControllers = true;

// Game.ProtoInput.EnableFocusMessageLoop = true;
// Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
// Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
// Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  // var Args = (Context.Args = " -windowed " + " -AlwaysFocus " + " -ResX= " + Context.Width + " -ResY= " + Context.Height);

  // Context.StartArguments = Args;

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

//         var numPlayers = 0;

//       for (var i = 0; i < PlayerList.Count; i++) {
//       var player = PlayerList[i];

//       if (player.IsXInput && player.ScreenIndex !== -1) {
//       numPlayers++;
//       }
//       player.ProtoController1 = (Context.GamepadId);
//       player.ProtoController2 = (Context.GamepadId);
//       player.ProtoController3 = (Context.GamepadId);
//       player.ProtoController4 = (Context.GamepadId);
//       player.ProtoController5 = (Context.GamepadId);
//       player.ProtoController6 = (Context.GamepadId);
//       player.ProtoController7 = (Context.GamepadId);
//       player.ProtoController8 = (Context.GamepadId);
//       player.ProtoController9 = (Context.GamepadId);
//       }
var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_interfaces.txt";
        var lines = [
        "SteamClient015",
        "SteamGameServer012",
        "SteamGameServerStats001",
        "SteamUser017",
        "SteamFriends014",
        "SteamUtils007",
        "SteamMatchMaking009",
        "SteamMatchMakingServers002",
        "STEAMUSERSTATS_INTERFACE_VERSION011",
        "STEAMAPPS_INTERFACE_VERSION006",
        "SteamNetworking005",
        "STEAMREMOTESTORAGE_INTERFACE_VERSION012",
        "STEAMSCREENSHOTS_INTERFACE_VERSION002",
        "STEAMHTTP_INTERFACE_VERSION002",
        "STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001",
        "STEAMUGC_INTERFACE_VERSION002",
        "STEAMAPPLIST_INTERFACE_VERSION001",
        "STEAMMUSIC_INTERFACE_VERSION001",
        "STEAMMUSICREMOTE_INTERFACE_VERSION001",
        "STEAMCONTROLLER_INTERFACE_VERSION",
        ];

        Context.WriteTextFile(autoExec, lines);

};
