var answers1 = [
  "30",
  "45",
  "60",
  "75",
  "91"
];
Game.AddOption(
  "Select the FPS cap.",
  'Multiplayer is capped to 91 fps.',
  "fps",
  answers1
);

var answers2 = [
  "yes",
  "no"
];
Game.AddOption(
  "Start with Multiplayer bots MOD (Meatbot)?",
  'Already included in the handler.',
  "bots",
  answers2
);

var answers3 = [
  "4",
  "2",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20"
];
Game.AddOption(
  "Amount of bots to be added",
  'Will be added to each team the amount chosen',
  "amount",
  answers3
);

var answers4 = [
  "4",
  "1",
  "2",
  "3",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
];
Game.AddOption(
  "Bot skill level (10 = highest, 1 = lowest)",
  '',
  "skill",
  answers4
);

 Game.FileSymlinkExclusions = [
"Controller.cfg",
"dinput.dll",
"winmm.dll",
"Xidi.ini",
"server_listen.cfg",
"z_mbot_uo_v02_client.pk3",
"z_mbot_uo_svr_v02.pk3",
"z_coduo_kp_sound.pk3",
"uoconfig_mp.cfg"
];

Game.FileSymlinkCopyInstead = [
    "config_mp.cfg",
];
Game.DirSymlinkExclusions = ["uo"];

Game.DirExclusions = ["CoDUOMeatBots_RC2"];

Game.KillProcessesOnClose = ["F4 next","F3 Restart","cmd","JoyToKey","names","F2 HOST","safeMode"]; 
Game.GameName = "Call of Duty United Offensive";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "CoDUOMP.exe";
Game.SteamID = "2640";
Game.GUID = "Call of Duty United Offensive";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "CoD:United Offensive Multiplayer";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = ["xinput1_3.dll","dinput.dll","dinput8.dll"];
Game.Hook.CustomDllEnabled= false;
Game.Description = "IMPORTANT: Start the game once before and change setting. Also have a valid CD-KEY already (if you are using CD version).\n\nWhen the instances are starting/resizing do not interact with them.\n\nThis game has minimal controller support (it isnt even known to have controller support), use your mouse to navigate the menus, also the right stick has a high sensitivity, there is no known fixes for it.\n\nIf you ARENT playing with the multiplayer bots enabled, in the first instance that opens start a server than click 'ok' in the prompt to start the rest of the players.\n\nThe shortcuts below are only if the first instance is the host, you can press 'F2' or pressing and holding the START button on your controller for all the others to connect to the hosted server.\n\nOnce all the players have connected you can quickly restart the match by pressing F3 or by pressing and holding the SELECT button on your controller.\n\nYou can press 'F4' to skip the map in a playlist.\n\nThis shortcuts will only work while input is unlocked.\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.).\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 10;
Game.PauseBetweenStarts = 10;

Game.NeedsSteamEmulation = true;
Game.HideTaskbar = true;
Game.SetWindowHookStart = true; 
Game.ResetWindows = true;
Game.SetTopMostAtEnd = true; 

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
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];


Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = false;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;

Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = false;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.MultipleProtoControllers = true;

Game.ProtoInput.OnInputLocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, true, true, true, true);
      System.Threading.Thread.Sleep(1000);

      ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);
  
      //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
      //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
  
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
  
      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
    }
  };
  
  Game.ProtoInput.OnInputUnlocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];
  
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);
  
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
  
      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
    }
  };


Game.Play = function () {

	Context.RunAdditionalFiles([Context.ScriptFolder + "\\JoyToKey.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\F4 next.exe"], false, 10);
	Context.RunAdditionalFiles([Context.ScriptFolder + "\\F3 Restart.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2 HOST.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\safeMode.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\names.exe"], false, 10);

	var XIDIPath2 = (Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Winmm.dll");
  var Xidi2 = System.IO.Path.Combine(Context.NucleusFolder, "utils\\XInputPlus\\winmm\\Winmm.dll");
  System.IO.File.Copy(Xidi2, XIDIPath2, true);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("X2DInput", "EnableX2Dinput", true),
    new Nucleus.IniSaveInfo("X2DInput", "RS_X", "X_Rot"),
    new Nucleus.IniSaveInfo("X2DInput", "RS_Y", "Z_Axis"),
    new Nucleus.IniSaveInfo("X2DInput", "LT", "Button5"),
    new Nucleus.IniSaveInfo("X2DInput", "RT", "Button6"),
    new Nucleus.IniSaveInfo("X2DInput", "LB", "POV_DOWN"),
    new Nucleus.IniSaveInfo("X2DInput", "RB", "POV_LEFT"),
  ]);

  if (Context.IsKeyboardPlayer) {
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", "")
    ]);
  } else {
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
    ]);
  }

  var players = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\uo'
  if (!System.IO.Directory.Exists(players)) {
      System.IO.Directory.CreateDirectory(players);
  }
  

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\uo\\uoconfig_mp.cfg")){
    
    
    if (System.IO.File.Exists(Context.RootInstallFolder + "\\uo\\uoconfig_mp.cfg")){

      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\uo\\uoconfig_mp.cfg";
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "uo\\uoconfig_mp.cfg");
      System.IO.File.Copy(savePkgOrigin, savePath, true);

    }else{
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\uo\\uoconfig_mp.cfg";
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "uoconfig_mp.cfg");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      
    }
      }


  var FPS = Context.Options["fps"];
  var BOTS = Context.Options["bots"];
  var start = ' +bind ~ "toggleconsole" ';

  if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CoDUOMeatBots_RC2\\uoconfig_mp.cfg")) {

    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CoDUOMeatBots_RC2\\uoconfig_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "-1"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta com_maxfps', Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta r_customheight', Nucleus.SearchType.StartsWith) + '|seta r_customheight "' + Context.Height + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta r_customwidth', Nucleus.SearchType.StartsWith) + '|seta r_customwidth  "' + Context.Width + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta r_customaspect', Nucleus.SearchType.StartsWith) + '|seta r_customaspect "' + Context.AspectRatioDecimal + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta com_introplayed', Nucleus.SearchType.StartsWith) + '|seta com_introplayed "1"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta name', Nucleus.SearchType.StartsWith) + '|seta name "' + Context.Nickname + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta cg_noVoiceChats', Nucleus.SearchType.StartsWith) + '|seta cg_noVoiceChats "1"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta cg_noVoiceText', Nucleus.SearchType.StartsWith) + '|seta cg_noVoiceText "1"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta m_filter', Nucleus.SearchType.StartsWith) + '|seta m_filter "1"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta in_mouse', Nucleus.SearchType.StartsWith) + '|seta in_mouse "1"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta in_joystick', Nucleus.SearchType.StartsWith) + '|seta in_joystick "1"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta r_smp', Nucleus.SearchType.StartsWith) + '|seta r_smp "1"',
      Context.FindLineNumberInTextFile(cfgpath, 'r_overBrightBits', Nucleus.SearchType.StartsWith) + '|r_overBrightBits "0"',
      Context.FindLineNumberInTextFile(cfgpath, 'r_ignorehwgamma', Nucleus.SearchType.StartsWith) + '|r_ignorehwgamma "0"',

      Context.FindLineNumberInTextFile(cfgpath, 'bind ~', Nucleus.SearchType.StartsWith) + '|bind ~ "toggleconsole"',

    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);

  }
  var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\uo\\uoconfig_mp.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "-1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta com_maxfps', Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customheight', Nucleus.SearchType.StartsWith) + '|seta r_customheight "' + Context.Height + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customwidth', Nucleus.SearchType.StartsWith) + '|seta r_customwidth  "' + Context.Width + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customaspect', Nucleus.SearchType.StartsWith) + '|seta r_customaspect "' + Context.AspectRatioDecimal + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta com_introplayed', Nucleus.SearchType.StartsWith) + '|seta com_introplayed "1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta name', Nucleus.SearchType.StartsWith) + '|seta name "' + Context.Nickname + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta cg_noVoiceChats', Nucleus.SearchType.StartsWith) + '|seta cg_noVoiceChats "1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta cg_noVoiceText', Nucleus.SearchType.StartsWith) + '|seta cg_noVoiceText "1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta m_filter', Nucleus.SearchType.StartsWith) + '|seta m_filter "1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta in_mouse', Nucleus.SearchType.StartsWith) + '|seta in_mouse "1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta in_joystick', Nucleus.SearchType.StartsWith) + '|seta in_joystick "1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_smp', Nucleus.SearchType.StartsWith) + '|seta r_smp "1"',
    Context.FindLineNumberInTextFile(cfgpath, 'r_overBrightBits', Nucleus.SearchType.StartsWith) + '|r_overBrightBits "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'r_ignorehwgamma', Nucleus.SearchType.StartsWith) + '|r_ignorehwgamma "0"',

    Context.FindLineNumberInTextFile(cfgpath, 'bind ~', Nucleus.SearchType.StartsWith) + '|bind ~ "toggleconsole"',

  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  if (!Context.IsKeyboardPlayer) {
    var savePath =  Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\uo\\Controller.cfg";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Controller.cfg");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    start += " +exec Controller.cfg"
  }

  if(BOTS=="yes"){

    var SKILL = Context.Options["skill"];
    var AMOUNT = Context.Options["amount"];

    var Path = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CoDUOMeatBots_RC2";
    System.IO.Directory.CreateDirectory(Path);

    var savePath =  Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CoDUOMeatBots_RC2\\server_listen.cfg";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "CoDUOMeatBots_RC2\\server_listen.cfg");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath =  Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CoDUOMeatBots_RC2\\z_mbot_uo_v02_client.pk3";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "CoDUOMeatBots_RC2\\z_mbot_uo_v02_client.pk3");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath =  Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CoDUOMeatBots_RC2\\z_mbot_uo_svr_v02.pk3";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "CoDUOMeatBots_RC2\\z_mbot_uo_svr_v02.pk3");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CoDUOMeatBots_RC2\\server_listen.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'set coduo_mbot_amount1', Nucleus.SearchType.StartsWith) + '|set coduo_mbot_amount1 "' + AMOUNT + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'set coduo_mbot_amount2', Nucleus.SearchType.StartsWith) + '|set coduo_mbot_amount2 "' + AMOUNT + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'set coduo_pbot_amount1', Nucleus.SearchType.StartsWith) + '|set coduo_pbot_amount1 "' + AMOUNT + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'set coduo_pbot_amount2', Nucleus.SearchType.StartsWith) + '|set coduo_pbot_amount2 "' + AMOUNT + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'set skill', Nucleus.SearchType.StartsWith) + '|set skill ' + SKILL,
  
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);

    if (Context.PlayerID == 0) {
    start += " +set fs_game CoDUOMeatBots_RC2 +exec server_listen.cfg +map_rotate"
    }else{
      start += " +set fs_game CoDUOMeatBots_RC2"
    }

  }else{
    Game.PromptAfterFirstInstance = true;  
  }

  if (Context.PlayerID != 0) {
    start += " +connect 127.0.0.1"
  }

  Context.StartArguments = start;

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

  

}
