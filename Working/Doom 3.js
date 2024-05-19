var answers1 = ["dhewm3" ,"dhewm3 librecoop","dhewm3 librecoop Resurrection of Evil Addon"];
Game.AddOption("What will you play?", "Select 'dhewm3' for the base game without any mods. ALL OTHERS REQUIRE THE MOD INSTALLED CORRECTLY READ THE HANDLERS NOTE.", "mode", answers1);

var answers2 = ["90" ,"95","100","105","110"];
Game.AddOption("Select your FOV", "", "fov", answers2);

Game.FileSymlinkExclusions = [
  "dxgi.ini","dxgi.dll","SDL2.dll", "zlib1.dll",
];

Game.FileSymlinkCopyInstead = ["DoomConfig.cfg",
"base.dll",
 "d3xp.dll",
 "libcurl-4.dll",
 "OpenAL32.dll",
 "SDL2.dll",
 "zlib1.dll",
 "gamepad.cfg",
 "gamepad-d3xp.cfg"

];
Game.DirSymlinkExclusions = ["d3xp","base"];

Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
// Game.KeepSymLinkOnExit = true;
Game.GameName = "Doom 3";
Game.GUID = "Doom 3";
Game.ExecutableName = "dhewm3.exe";
Game.MaxPlayers = 8;
Game.HandlerInterval = 100;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "dhewm3 1.5.3";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description = "The handler uses dhewm3 (https://dhewm3.org/) LOOK INTO HOW TO INSTALL IT RIGHT, remember you need pak000 to pak008 for the base game and pak000 and pak001 for the DLC.\n\nFor coop: Download the files from here https://www.moddb.com/mods/librecoop-dhewm3-coop/downloads/librecoop-alpha-15-windows-32bits and place the files you downloaded in the dhewm3 folder.\n\nwhen you connect normally with the coop mod, it resets the window, to avoid that 1 player (the one that will host for everyone else) will stay in the menu while others will start a server (better to be the same map and same mode), than disconnect, now start the match with the player that was in the menu and join in with the others.\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard (DO IT EVEN WHEN PLAYING CONTROLLERS ONLY). You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)";	
Game.PauseBetweenStarts = 8;
Game.PauseBetweenProcessGrab = 8;

// Game.SupportsKeyboard = true;
Game.DontRemoveBorders = true;
Game.DontResize = true; 
Game.ResetWindows = true; 
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\My Games\\dhewm3";

Game.HideTaskbar = true;
// Game.SetWindowHookStart = true;

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
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

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
// Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;


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

// Game.ProtoInput.EnableFocusMessageLoop = true;
// Game.ProtoInput.FocusLoopIntervalMilliseconds = 15000;
// Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
// Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.ProtoInput.OnInputLocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 100, true, false, false, true, true);

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


Game.Play = function() {
  
    Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

    let width;
  let height;
  if (Context.AspectRatioDecimal > 1.8) {
    width = Math.ceil((Context.Width * 100.85)/100);
    height = Math.ceil((Context.Height * 107.8)/100);
  }
  else if(Context.AspectRatioDecimal < 1.3){
    width = Math.ceil((Context.Width * 101.85)/100);
    height = Math.ceil((Context.Height * 103.8)/100);
  }
  else{
    width = Math.ceil((Context.Width * 101.85)/100);
    height = Math.ceil((Context.Height * 107.8)/100);
  }

  // let width = Context.Width + 16;
  // let height = Context.Height + 40;
  let start = " +disconnect +set ui_name " + Context.Nickname + " +set r_windowWidth " + width + " +set r_windowHeight " + height + " +set r_windowY " + Context.PosY + " +set r_windowX " + Context.PosX;
  let MODE = Context.Options["mode"];
  let FOV = Context.Options["fov"];

  start += " +set g_fov " + FOV;

  switch (MODE) {
    case 'dhewm3 librecoop':
      start  += " +set fs_game librecoop";
    break;
    case 'dhewm3 librecoop Resurrection of Evil Addon':
      start  += " +set fs_game_base d3xp +set fs_game librecoopd3xp";
    break;
    default:
      start  += "";
  }

  if (Context.IsKeyboardPlayer) {
    start += ' +set in_useGamepad "0"';

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dxgi.ini";
    Context.ReplaceLinesInTextFile(
    txtPath,
    [
      Context.FindLineNumberInTextFile(txtPath, "Manage", Nucleus.SearchType.StartsWith) + "|Manage=true",
      Context.FindLineNumberInTextFile(txtPath, "FixMouseCoords", Nucleus.SearchType.StartsWith) + "|FixMouseCoords=true",
      
    ]);


  }else{
    start += ' +set in_useGamepad "1"';

    if(MODE == "dhewm3 librecoop Resurrection of Evil Addon"){
      start += " +exec gamepad-d3xp.cfg";
    }else{
      start += " +exec gamepad.cfg";
    }

  }

  var cfgpath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\dhewm.cfg";
  if (!System.IO.File.Exists(cfgpath)) {

    var filePath = Context.EnvironmentPlayer + "My Games";
    System.IO.Directory.CreateDirectory(filePath);
    
    var filePath = Context.EnvironmentPlayer + "My Games\\dhewm3";
    System.IO.Directory.CreateDirectory(filePath);

    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dhewm.cfg");
    System.IO.File.Copy(savePkgOrigin, cfgpath, true);

  }
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreenDesktop', Nucleus.SearchType.StartsWith) + '|seta r_fullscreenDesktop "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "-1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta ui_name', Nucleus.SearchType.StartsWith) + '|seta ui_name "' + Context.Nickname  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customHeight', Nucleus.SearchType.StartsWith) + '|seta r_customHeight "' + height  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customWidth', Nucleus.SearchType.StartsWith) + '|seta r_customWidth "' + width + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "-1"',
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  var cfgpath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\base\\dhewm.cfg";
  if (!System.IO.File.Exists(cfgpath)) {

    var filePath = Context.EnvironmentPlayer + "My Games";
    System.IO.Directory.CreateDirectory(filePath);
    
    var filePath = Context.EnvironmentPlayer + "My Games\\dhewm3";
    System.IO.Directory.CreateDirectory(filePath);

    var filePath = Context.EnvironmentPlayer + "My Games\\dhewm3\\base";
    System.IO.Directory.CreateDirectory(filePath);

    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dhewm.cfg");
    System.IO.File.Copy(savePkgOrigin, cfgpath, true);

  }
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreenDesktop', Nucleus.SearchType.StartsWith) + '|seta r_fullscreenDesktop "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "-1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta ui_name', Nucleus.SearchType.StartsWith) + '|seta ui_name "' + Context.Nickname  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customHeight', Nucleus.SearchType.StartsWith) + '|seta r_customHeight "' + height  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customWidth', Nucleus.SearchType.StartsWith) + '|seta r_customWidth "' + width + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "-1"',
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  var cfgpath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\librecoop\\dhewm.cfg";
  if (!System.IO.File.Exists(cfgpath)) {

    var filePath = Context.EnvironmentPlayer + "My Games";
    System.IO.Directory.CreateDirectory(filePath);
    
    var filePath = Context.EnvironmentPlayer + "My Games\\dhewm3";
    System.IO.Directory.CreateDirectory(filePath);

    var filePath = Context.EnvironmentPlayer + "My Games\\dhewm3\\librecoop";
    System.IO.Directory.CreateDirectory(filePath);

    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dhewm.cfg");
    System.IO.File.Copy(savePkgOrigin, cfgpath, true);

  }
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreenDesktop', Nucleus.SearchType.StartsWith) + '|seta r_fullscreenDesktop "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "-1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta ui_name', Nucleus.SearchType.StartsWith) + '|seta ui_name "' + Context.Nickname  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customHeight', Nucleus.SearchType.StartsWith) + '|seta r_customHeight "' + height  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customWidth', Nucleus.SearchType.StartsWith) + '|seta r_customWidth "' + width  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "-1"',
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  var cfgpath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\demo\\dhewm.cfg";
  if (!System.IO.File.Exists(cfgpath)) {

    var filePath = Context.EnvironmentPlayer + "My Games";
    System.IO.Directory.CreateDirectory(filePath);
    
    var filePath = Context.EnvironmentPlayer + "My Games\\dhewm3";
    System.IO.Directory.CreateDirectory(filePath);

    var filePath = Context.EnvironmentPlayer + "My Games\\dhewm3\\demo";
    System.IO.Directory.CreateDirectory(filePath);

    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dhewm.cfg");
    System.IO.File.Copy(savePkgOrigin, cfgpath, true);

  }
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreenDesktop', Nucleus.SearchType.StartsWith) + '|seta r_fullscreenDesktop "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "-1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta ui_name', Nucleus.SearchType.StartsWith) + '|seta ui_name "' + Context.Nickname  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customHeight', Nucleus.SearchType.StartsWith) + '|seta r_customHeight "' + height  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customWidth', Nucleus.SearchType.StartsWith) + '|seta r_customWidth "' + width  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "-1"',
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  var cfgpath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\librecoopd3xp\\dhewm.cfg";
  if (!System.IO.File.Exists(cfgpath)) {

    var filePath = Context.EnvironmentPlayer + "My Games";
    System.IO.Directory.CreateDirectory(filePath);
    
    var filePath = Context.EnvironmentPlayer + "My Games\\dhewm3";
    System.IO.Directory.CreateDirectory(filePath);

    var filePath = Context.EnvironmentPlayer + "My Games\\dhewm3\\librecoopd3xp";
    System.IO.Directory.CreateDirectory(filePath);

    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dhewm.cfg");
    System.IO.File.Copy(savePkgOrigin, cfgpath, true);

  }
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreenDesktop', Nucleus.SearchType.StartsWith) + '|seta r_fullscreenDesktop "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "-1"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta ui_name', Nucleus.SearchType.StartsWith) + '|seta ui_name "' + Context.Nickname  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customHeight', Nucleus.SearchType.StartsWith) + '|seta r_customHeight "' + height  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_customWidth', Nucleus.SearchType.StartsWith) + '|seta r_customWidth "' + width  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "-1"',
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\base\\autoexec.cfg";
  var lines = [
    "seta r_windowY " + Context.PosY + '"',
    "seta r_windowX " + Context.PosX + '"'
  ];
  Context.WriteTextFile(timese, lines);

  Context.StartArguments = start;

}