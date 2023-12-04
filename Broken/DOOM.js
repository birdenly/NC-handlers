
var answers1 = ["no","yes"];
Game.AddOption("Change graphics for each instance? HIGHLY RECOMMENDED IF IT IS THE FIRST RUN (or after deleting your content folder) or you can change it in your main game before playing with nucleus, reduce your graphics so your pc can handle the game", "INSTRUCTIONS: Open a instance, change the graphics you want than select 'DOOMEternalx64vk.exe' in the process picker window that opens.", "grph", answers1);

Game.KillMutex = ["Ghost"];
Game.ExecutableContext = ["base"];

Game.FileSymlinkCopyInstead = [
  "bink2w64.dll",
  "superscriptx64.dll",
  "CChromaEditorLibrary.dll",
];

Game.NeedsSteamEmulation = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
// Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "DOOMx64.exe";
Game.SteamID = "379720";
Game.GUID = "DOOM";
Game.GameName = "DOOM";
Game.MaxPlayers = 32;
Game.MaxPlayersOneMonitor = 32;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "DOOM";
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: The handler uses online-fix and requires internet connection also FULLY CLOSE STEAM BEFORE USING THE HANDLER\n\nEVERYTHING BELOW IS IMPORTANT, READ EVERYTHING: You will need an email thats linked to a bethesda.net account and a Xbox account, HIGHLY RECOMMEND CREATING A DUMMY EMAIL AND ACCOUNTS FOR THIS.\n\nIf you are playing the game without mods you need 3 players to start a match, some mods lets you start with 2 players\n\nONLY PLAY PRIVATE MATCHES.\n\nHow to join each other: go into socials > favorites > favorite code , now add the favorite code of others to invite\n\nYou can skip the battlemode (or other modes by mods) tutorial if you make a party before going into battlemode\n\nThe handler works with EternalModInjector but its not guaranteed that every mod will work, also read how the mod works on their own page\n\nFOR MODS TO WORK: inject the mods before starting the game with nucleus. If you already played DOOM once with nucleus or wants to try other mods, right click the game in nucleus and click 'delete content folder'.\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 10;
Game.PauseBetweenStarts = 20;

Game.UseGoldberg = true;
Game.GoldbergExperimental = true;
Game.NeedsSteamEmulation = true; 
// Game.UseSteamless = true; 
// Game.SteamlessArgs = "--quiet --keepbind";
Game.UseSteamStubDRMPatcher = true;  
Game.SteamStubDRMPatcherArch = "64"; 
Game.SetTopMostAtEnd = true; 

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Saved Games\\id Software\\DOOM";

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

// Game.ProtoInput.RegisterRawInputHook = false;
// Game.ProtoInput.GetRawInputDataHook = false;
// Game.ProtoInput.MessageFilterHook = true;
// Game.ProtoInput.GetCursorPosHook = true;
// Game.ProtoInput.SetCursorPosHook = true;
// Game.ProtoInput.GetKeyStateHook = false;
// Game.ProtoInput.GetAsyncKeyStateHook = false;
// Game.ProtoInput.GetKeyboardStateHook = false;
// Game.ProtoInput.CursorVisibilityHook = false;
// Game.ProtoInput.ClipCursorHook = true;
// Game.ProtoInput.FocusHooks = true;
// Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;

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
// Game.ProtoInput.MultipleProtoControllers = true;

// Game.ProtoInput.EnableFocusMessageLoop = true;
// Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
// Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
// Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

// Game.ProtoInput.OnInputLocked = function() {
//   for (var i = 0; i < PlayerList.Count; i++) {
//     var player = PlayerList[i];

//     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
//     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
//     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
//     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
//     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
//     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
//     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
//     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
//     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

//     //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
//     //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

//     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
//     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
//     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
//     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
//     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
//     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
//     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

//     ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
//   }
// };

// Game.ProtoInput.OnInputUnlocked = function() {
//   for (var i = 0; i < PlayerList.Count; i++) {
//     var player = PlayerList[i];

//     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
//     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
//     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
//     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
//     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
//     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
//     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
//     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
//     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

//     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
//     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
//     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
//     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
//     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
//     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
//     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
//     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

//     ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
//   }
// };



Game.Play = function() {

  var GRPH = Context.Options["grph"];

    // var config = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\base\\DOOMEternalConfig.local";
    // var lines = [
    // 'configVersion 1',
    // 'r_windowHeight "' + Context.Height + '"',
    // 'r_windowWidth "' + Context.Width + '"',
    // 'r_fullscreen "0"'
    // ];
    // Context.WriteTextFile(config, lines);
  
    // var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\DOOMx64.exe");
    // var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "DOOMx64.exe");
    // System.IO.File.Copy(savePkgOrigin, savePath, true);

  if(GRPH == "yes"){
  Game.ForceProcessPick = true;  
  }else{   
  }

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings")) {
        var filePath = Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings";
	      System.IO.Directory.CreateDirectory(filePath);	

        var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\DLC.txt";
        var lines = [
        "559040=DOOM - Bloodfall DLC",
        "527180=DOOM - Hell Followed DLC ",
        "499590=DOOM - Unto The Evil DLC",
        "458020=DOOM Season Pass",
        "446370=DOOM - Demon Multiplayer DLC Pack"
        ];

        Context.WriteTextFile(autoExec, lines);
  }

  var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\disable_lan_only.txt";
  var lines = [];
  Context.WriteTextFile(timese, lines);

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
