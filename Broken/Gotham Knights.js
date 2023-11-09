Game.KillMutexType = "Semaphore";
Game.KillMutex = ["FRHIFrameFlipTrackingRunnableEngineInitLock","FRHIFrameFlipTrackingRunnableLock"];

Game.FileSymlinkCopyInstead = ["embree.2.14.0.dll", "imgui.ini", "OpenImageDenoise.dll", "steam_appid.txt", "tbb.dll", "tbb12.dll", "tbbmalloc.dll"];


Game.FileSymlinkExclusions = [
"steam_appid.txt",
"steam_interfaces.txt",
"disable_networking.txt",
 "DLC.txt",
 "force_account_name.txt",
 "offline.txt",


 ];

Game.DirSymlinkExclusions = ["Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64","Mercury\\Binaries\\Win64"];

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.LauncherExe = "EOSAuthLauncher.exe";
Game.LauncherTitle = "";
Game.ExecutableName = "GothamKnights-Win64-Shipping.exe";
Game.SteamID = "1496790";
Game.GUID = "Gotham Knights";
Game.GameName = "Gotham Knights";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.BinariesFolder = "Mercury\\Binaries\\Win64";
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Gotham Knights";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description = "";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;

Game.UseGoldberg = true;  
Game.UseNemirtingasEpicEmu = true;
Game.EpicEmuArgs = true;

Game.RefreshWindowAfterStart = true;
Game.SetWindowHookStart = true; 

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\WB Games\\Gotham Knights\\Microsoft Store";
Game.UserProfileSavePath = "AppData\\Local\\Mercury\\Saved\\Config";
Game.UserProfileSavePathNoCopy = true; 

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

Game.SupportsMultipleKeyboardsAndMice = false;

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

Game.ProtoInput.FocusHooks = true;


// Game.ProtoInput.SendMouseWheelMessages = true;
// Game.ProtoInput.SendMouseButtonMessages = true;
// Game.ProtoInput.SendMouseMovementMessages = true;
// Game.ProtoInput.SendKeyboardButtonMessages = true;
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
  var Args = (Context.Args = " -windowed " + " -AlwaysFocus " + " -ResX= " + Context.Width + " -ResY= " + Context.Height);

  Context.StartArguments = Args;

  var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64\\disable_lan_only.txt";
  var lines = [];
  Context.WriteTextFile(timese, lines);

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Mercury\\Binaries\\Win64\\dxgi.dll")) {
    Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Mercury\\Binaries\\Win64");
  }


  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\GameUserSettings.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "ResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "ResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "LastUserConfirmedResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "LastUserConfirmedResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "FullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "LastConfirmedFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "PreferredFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "ResWindowedFullScreenWidth", Context.Width),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "ResWindowedFullScreenHeight", Context.Height),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "ResWindowedWidth", Context.Width),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "ResWindowedHeight", Context.Height),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "PauseOnFocusLoss", "False"),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "DesiredScreenWidth", Context.Width),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "DesiredScreenHeight", Context.Height),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "LastUserConfirmedDesiredScreenWidth", Context.Width),
    new Nucleus.IniSaveInfo("/Script/MercurySaveSystem.MQLOCGameUserSettings", "LastUserConfirmedDesiredScreenHeight", Context.Height),
  ]);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Mercury\\Binaries\\Win64\\dxgi.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Window.System", "OverrideRes", Context.Width + "x" + Context.Height)
  ]);

  // if (Context.IsKeyboardPlayer) {
  //   Game.ProtoInput.RegisterRawInputHook = true;
  //   Game.ProtoInput.GetRawInputDataHook = true;
  //   Game.ProtoInput.MessageFilterHook = true;
  //   Game.ProtoInput.GetCursorPosHook = true;
  //   Game.ProtoInput.SetCursorPosHook = true;
  //   Game.ProtoInput.GetKeyStateHook = true;
  //   Game.ProtoInput.GetAsyncKeyStateHook = true;
  //   Game.ProtoInput.GetKeyboardStateHook = true;
  //   Game.ProtoInput.CursorVisibilityHook = true;
  //   Game.ProtoInput.ClipCursorHook = true;
  //   Game.ProtoInput.DrawFakeCursor = true;
  //   Game.ProtoInput.CursorVisibilityHook = true;

  //   Game.ProtoInput.RawInputFilter = true;
  //   Game.ProtoInput.MouseMoveFilter = false;
  //   Game.ProtoInput.MouseActivateFilter = true;
  //   Game.ProtoInput.WindowActivateFilter = true;
  //   Game.ProtoInput.WindowActvateAppFilter = true;
  //   Game.ProtoInput.MouseWheelFilter = true;
  //   Game.ProtoInput.MouseButtonFilter = true;
  //   Game.ProtoInput.KeyboardButtonFilter = true;
  // } else {
  //   Game.ProtoInput.RawInputFilter = false;
  //   Game.ProtoInput.MouseMoveFilter = false;
  //   Game.ProtoInput.MouseActivateFilter = false;
  //   Game.ProtoInput.WindowActivateFilter = false;
  //   Game.ProtoInput.WindowActvateAppFilter = false;
  //   Game.ProtoInput.MouseWheelFilter = false;
  //   Game.ProtoInput.MouseButtonFilter = false;
  //   Game.ProtoInput.KeyboardButtonFilter = false;
  //   Game.ProtoInput.DrawFakeCursor = false;
  //   Game.ProtoInput.CursorVisibilityHook = true;
  //   Game.ProtoInput.ClipCursorHook = true;
  //   Game.ProtoInput.GetCursorPosHook = false;
  //   Game.ProtoInput.SetCursorPosHook = false;
  // }
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
};
