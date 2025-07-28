Game.FileSymlinkExclusions = [
  "steam_api64.dll",
  "steam_appid.txt",
  "EOSSDK-Win64-Shipping.dll"
];
Game.FileSymlinkCopyInstead = [
"UnityPlayer.dll",
"globalgamemanagers",
"WinPixEventRuntime.dll",
"UnityCrashHandler64.exe",
"mono-2.0-bdwgc.dll",
"MonoPosixHelper.dll",
"Rewired_WindowsGamingInput.dll",
"UnityFbxSdkNative.dll",
"Rewired_DirectInput.dll"
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "Tidal Shock.exe";
Game.SteamID = "1262890";
Game.GUID = "Tidal Shock";
Game.GameName = "Tidal Shock";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Tidal Shock";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "Use matchmaking to connect and wait out the timer until the matches starts.\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard AND get focus. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.RefreshWindowAfterStart = true;
Game.UserProfileConfigPath = "AppData\\LocalLow\\Moonray Studios\\Tidal Shock";

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
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.DontShowCursorWhenImageUpdated = true;

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
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = true;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 8000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 10, true, false, true, true, true);

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

    ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);
    
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
  Context.StartArguments = " -screen-fullscreen 0 -screen-width " + Context.Width + " -screen-height " + Context.Height;

  var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steamless.bat";
  var lines = [
  '"' + Context.NucleusFolder  + '\\utils\\Steamless\\Steamless.CLI.exe" --quiet --keepbind ' + '"' + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\Tidal Shock.exe"',
  'move /y "Tidal Shock.exe.unpacked.exe" "Tidal Shock.exe"'
  ];
  Context.WriteTextFile(Bat, lines);

  Context.RunAdditionalFiles(["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steamless.bat"], false, 1);

  Context.CopyFolder(Context.ScriptFolder + "\\game", Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Tidal Shock_Data\\Plugins\\x86_64\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);

  var config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\nepice_settings\\NemirtingasEpicEmu.json";
  var dict = [
    Context.FindLineNumberInTextFile(config, '      "EpicId":', Nucleus.SearchType.StartsWith) + '|      "EpicId": "831ec62c44424917a0fb315de2b5dc1' + Context.PlayerID + '",',
    Context.FindLineNumberInTextFile(config, '      "Language":', Nucleus.SearchType.StartsWith) + '|      "Language": "' + Context.EpicLang + '",',
    Context.FindLineNumberInTextFile(config, '      "UserName":', Nucleus.SearchType.StartsWith) + '|      "UserName": "' + Context.Nickname + '"'
  ];
  Context.ReplaceLinesInTextFile(config, dict);


  var fillPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Tidal Shock_Data\\globalgamemanagers";

  var base = Context.Nickname;
  var og_Path = "Tidal Shock";
  //Create newPath by rearranging characters from base
  var newPath = og_Path.substring(0, og_Path.length - 3) + base.charAt(0) + base.charAt(base.length - 1) + base.length;

  //Ensure newPath is at least as long as og_Path
  if (newPath.length < og_Path.length) {
  while (newPath.length < og_Path.length) {
  newPath += base.charAt(base.length - 1);
  }
  } 
  else if (og_Path.length < newPath.length) {
  //Ensure og_Path is at least 3 characters long
  newPath = newPath.substring(0, og_Path.length);
  }
  Context.PatchFile(fillPath, fillPath, og_Path, newPath);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Moonray Studios\\"+newPath, "Screenmanager Fullscreen mode Default_h401710285", 3, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Moonray Studios\\"+newPath, "Screenmanager Fullscreen mode_h3630240806", 3, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Moonray Studios\\"+newPath, "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Moonray Studios\\"+newPath, "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Moonray Studios\\"+newPath, "Screenmanager Resolution Use Native_h1405027254", Context.Width0, Nucleus.RegType.DWord);
  
  var config = Context.NucleusUserRoot + "\\AppData\\LocalLow\\Moonray Studios\\" + newPath + "\\settings.json";
  if (!System.IO.File.Exists(config)) {
      System.IO.Directory.CreateDirectory(Context.NucleusUserRoot+ "\\AppData\\LocalLow\\Moonray Studios");
      System.IO.Directory.CreateDirectory(Context.NucleusUserRoot+ "\\AppData\\LocalLow\\Moonray Studios\\"+newPath);
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "settings.json");
      System.IO.File.Copy(savePkgOrigin, config, true);
  }

  var dict = [
    Context.FindLineNumberInTextFile(config, '        "x":', Nucleus.SearchType.StartsWith) + '|        "x": ' + Context.Width + ',',
    Context.FindLineNumberInTextFile(config, '        "y":', Nucleus.SearchType.StartsWith) + '|        "y": ' + Context.Height,
    Context.FindLineNumberInTextFile(config, '    "fullScreen":', Nucleus.SearchType.StartsWith) + '|    "fullScreen": 1,'
  ];
  Context.ReplaceLinesInTextFile(config, dict);

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

  Context.Wait(5000);
};
