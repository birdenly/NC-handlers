var answers1 = ["30", "45", "60", "75", "90", "105", "120", "144", "165", "200"];
Game.AddOption("Select the FPS cap.", "", "fps", answers1);

Game.ExecutableContext = ["D3D12"];

Game.FileSymlinkCopyInstead = ["tbb.dll", "tbbmalloc.dll","boost_atomic-vc142-mt-x64-1_70.dll",
   "boost_chrono-vc142-mt-x64-1_70.dll",
   "boost_iostreams-vc142-mt-x64-1_70.dll",
   "boost_program_options-vc142-mt-x64-1_70.dll",
   "boost_python39-vc142-mt-x64-1_70.dll",
   "boost_regex-vc142-mt-x64-1_70.dll",
   "boost_system-vc142-mt-x64-1_70.dll",
   "boost_thread-vc142-mt-x64-1_70.dll",

];

Game.DirSymlinkExclusions = [
  "Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv16\\Win64",
  "SparkingZERO\\Binaries\\Win64"
];

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "SparkingZERO-Win64-Shipping.exe";
Game.SteamID = "1790600";
Game.GUID = "DRAGON BALL Sparking ZERO";
Game.GameName = "DRAGON BALL Sparking ZERO";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.BinariesFolder = "SparkingZERO\\Binaries\\Win64";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "DRAGON BALL Sparking! ZERO";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll","xinput9_1_0.dll"];
Game.Description =
  "";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 5;

Game.UseGoldberg = true;
Game.UseSteamless = true;
Game.SteamlessArgs = "--quiet --keepbind";

Game.RefreshWindowAfterStart = true;
Game.SetWindowHookStart = true;
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\SparkingZERO\\Saved\\Config";

// USS deprecated options:

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

// ProtoInput:

Game.SupportsMultipleKeyboardsAndMice = true;

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

Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.DrawFakeCursor = false;
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

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

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

    //ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5000, true, true, true, true, true);
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
  var Args = (Context.Args = " -windowed -ResX= " + Context.Width + " -ResY= " + Context.Height);

  Context.StartArguments = Args;

  var FPS = Context.Options["fps"];
  
  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64");

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\SparkingZERO\\Binaries\\Win64");

  // Context.PatchFileFindPattern(
  //   System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
  //   System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
  //   "39 8E E3 3F",
  //   Context.AspectRatioDecimal,
  //   1,
  //   true
  // );

  Context.PatchFileFindPattern(
    System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
    System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
    "00 05 00 00 D0 02",
    Context.Width,
    1,
    true
  );

  Context.PatchFileFindPattern(
    System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
    System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
    "00 05 00 00 D0 02",
    Context.Height,
    5,
    true
  );

  
  Context.PatchFileFindPattern(
    System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
    System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
    "00 00 D0 02 00 00 00 05 00 00 20 03",
    Context.Height,
    3,
    true
  );

  // need to find fov in that shit
  // Context.PatchFileFindPattern(
  //   System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
  //   System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
  //   "3B 8E E3 3F",
  //   0.5,
  //   1,
  //   true
  // );

  // Context.PatchFileFindPattern(
  //   System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
  //   System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
  //   "35 FA 0E 3C",
  //   80.0,
  //   1,
  //   false
  // );

  
  // Context.PatchFileFindPattern(
  //   System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
  //   System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "SparkingZERO\\Binaries\\Win64\\SparkingZERO-Win64-Shipping.exe"),
  //   "00 00 70 42",
  //   90.0,
  //   1,
  //   true
  // );

  if (Context.IsKeyboardPlayer) {

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\SparkingZERO\\Binaries\\Win64\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
     new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
     new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", ""),
     ]);
    } else{
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\SparkingZERO\\Binaries\\Win64\\XInputPlus.ini";
      Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", 0),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", 0),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", 0),
      ]);
    }  


  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Windows\\GameUserSettings.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "ResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "ResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "Option_ResolutionX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "Option_ResolutionY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "LastUserConfirmedResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "LastUserConfirmedResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "FullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "LastConfirmedFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "PreferredFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "FrameRateLimit", FPS + ".000000"),
  ]);

};
