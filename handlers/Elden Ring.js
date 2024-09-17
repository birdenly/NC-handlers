Hub.Handler.Version = 25; // Released at https://hub.splitscreen.me/ on Sun Jun 30 2024 20:03:59 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "CgTFu6jc83pMKPZBy";
Hub.Maintainer.Name = "PoundlandBacon";
Hub.Maintainer.Id = "AdiAjSyfZPMvu3a4M";

var answers = ["No Change", "Low", "Medium", "High", "Maximum"];
Game.AddOption("Graphics preset", "Reduce GPU power required by using lower settings.", "gfx", answers);
Game.AddOption("Texture quality", "Reduce Vram required by using lower settings.", "txq", answers);
var answers2 = ["None", "60", "55", "50", "45", "40", "35", "30", "25", "20", "15"];
Game.AddOption("FPS Cap", "If you already have fps capping software running like RivaTuner do not enable this", "fps", answers2);
var answers3 = ["No", "Yes"];
Game.AddOption("Use mod loader", "", "mod", answers3);
Game.KillMutex = ["SekiroMutex"];

Game.DirExclusions = ["settings"];
Game.DirSymlinkExclusions = ["SeamlessCoop", "steam_settings", "mods"];
Game.FileSymlinkExclusions = [
  "steam_api64.dll",
  "steam_appid.txt",
  "launch_elden_ring_seamlesscoop.exe",
  "elden_ring_seamless_coop.dll",
  "cooppassword.ini",
  "bink2w64.dll",
  "bink2w64Hooked.dll",
  "SUWSF.asi",
  "SUWSF.ini",
  "mod_loader_config.ini",
  "fpslimiter.cfg",
  "dinput8.dll",
  "xinput1_3.dll",
  "mod_loader_log.txt",
  "SkipTheIntro.dll",
  "ersc.dll",
  "ersc_launcher.exe",
  "ersc_settings.ini",
  "seamlesscoopsettings.ini"
];
Game.DirSymlinkCopyInstead = ["mods"];

Game.NeedsSteamEmulation = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.SupportsKeyboard = false;
Game.ExecutableName = "eldenring.exe";
Game.ExecutableToLaunch = "ersc_launcher.exe";
Game.SteamID = "1245620";
Game.GUID = "ELDENRING";
Game.GameName = "Elden Ring";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.UseGoldberg = true;
Game.GoldbergExperimental = true;
Game.BinariesFolder = "";
Game.LauncherTitle = "";
Game.SupportsPositioning = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "ELDEN RING™";
Game.HasDynamicWindowTitle = false;
Game.SetForegroundWindowElsewhere = true;
Game.SetTopMostAtEnd = true;
Game.HideDesktop = false;
Game.HideTaskbar = false;
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = true;
Game.Hook.XInputEnabled = false;
Game.Hook.CustomDllEnabled = false;
Game.Hook.XInputReroute = false;
Game.PauseBetweenContextAndLaunch = 3;
Game.PauseBetweenProcessGrab = 6;
Game.PauseBetweenStarts = 20;
Game.UserProfileConfigPath = "AppData\\Roaming\\EldenRing";
Game.ToggleUnfocusOnInputsLock = true;

Game.Description =
  'This handler uses the Seamless Co-op mod by LukeYui - https://www.nexusmods.com/eldenring/mods/510 and Mod Loader by TechieW - https://www.nexusmods.com/eldenring/mods/117 Let all instances load to the title screen before using inputs. If you are using at least one mouse and keyboard press the END key (default keybinding) to lock/unlock the input. Make sure to alt-tab to a non-game window before locking. The host must use the Tiny Great Pot to create a session. At that point, the other players can join using the Effigy of Meleina. You should spawn in at a point nearby the host. Any player can leave at any time using the Separating Mist - If the host uses this item, the session will be disbanded and all players will disconnect. Make sure to complete the tutorial before attempting to connect the instances. To use Mod Loader simply enable the launch option in Nucleus, as long as your mods are located in the original game folder\'s "mods" folder they should work. If you are upgrading from the first release of the handler you will need to copy the numbered folder from C:\\Users\\YOUR WINDOWS USER NAME\\NucleusCoop\\PLAYER NUMBER OR NICK NAME\\AppData\\Roaming\\EldenRing to C:\\Users\\YOUR WINDOWS USER NAME\\AppData\\Roaming\\EldenRing. You can open the AppData folder by pressing the windows key and r and typing in %appdata% to the prompt that opens. Repeat this process for each player you have been using. Handler by Talos91 and PoundlandBacon, special thanks to LukeYui, TechieW and Mr Goldberg. Support our work here if you can - https://ko-fi.com/talos91';

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
Game.ProtoInput.SetWindowStyleHook = true;
Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.AutoHideTaskbar = false;
Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = false;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;
Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];
Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = true;
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
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;
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
Game.ProtoInput.UseOpenXinput = false;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function() {
  Game.ProtoInput.MultipleProtoControllers = true;
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
  }

  var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "bink2w64.dll");
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bink2w64Hooked.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var VideoConfig = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\SUWSF.ini");
  Context.ModifySaveFile(VideoConfig, VideoConfig, Nucleus.SaveType.INI, [new Nucleus.IniSaveInfo("UserSettings", "Resolution", '"' + Context.Width + "x" + Context.Height + '"')]);

  var mod = Context.Options["mod"];
  if (mod == "No") {
    System.IO.File.Delete(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\load_dlls\\modloader.dll");
    System.IO.File.Delete(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mod_loader_config.ini");
  }

  var fps = Context.Options["fps"];
  if (fps != "None") {
    var cfgFilePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\fpslimiter.cfg";
    Context.ReplaceLinesInTextFile(cfgFilePath, ["1|InitialFps=" + fps, "2|ToggleFps=" + fps]);
  } else {
    System.IO.File.Delete(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\load_dlls\\fpslimiter64.dll");
    System.IO.File.Delete(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\fpslimiter.cfg");
  }

  var gfx = Context.Options["gfx"];
  if (gfx == "Maximum") {
    var gfxp1 = "MAX";
    var gfxp2 = "HIGH";
    var gfxp3 = "MAX";
    var gfxp4 = "MAX";
    var gfxp5 = "HIGH";
    var gfxp6 = "HIGH";
  }
  if (gfx == "High") {
    var gfxp1 = "HIGH";
    var gfxp2 = "HIGH";
    var gfxp3 = "HIGH";
    var gfxp4 = "HIGH";
    var gfxp5 = "HIGH";
    var gfxp6 = "HIGH";
  }
  if (gfx == "Medium") {
    var gfxp1 = "MEDIUM";
    var gfxp2 = "MEDIUM";
    var gfxp3 = "MEDIUM";
    var gfxp4 = "LOW";
    var gfxp5 = "HIGH";
    var gfxp6 = "MEDIUM";
  }
  if (gfx == "Low") {
    var gfxp1 = "LOW";
    var gfxp2 = "OFF";
    var gfxp3 = "MEDIUM";
    var gfxp4 = "LOW";
    var gfxp5 = "LOW";
    var gfxp6 = "LOW";
  }

  var txq = Context.Options["txq"];
  if (txq == "Maximum") {
    var txqp = "MAX";
  }
  if (txq == "High") {
    var txqp = "HIGH";
  }
  if (txq == "Medium") {
    var txqp = "MEDIUM";
  }
  if (txq == "Low") {
    var txqp = "LOW";
  }

  var path = Context.NucleusUserRoot + "\\AppData\\Roaming\\EldenRing\\GraphicsConfig.xml";
  if (gfx != "No Change") {
    Context.ChangeXmlNodeInnerTextValue(path, "//QualitySetting", gfxp1);
    Context.ChangeXmlNodeInnerTextValue(path, "//SSAO", gfxp2);
    Context.ChangeXmlNodeInnerTextValue(path, "//DepthOfField", gfxp2);
    Context.ChangeXmlNodeInnerTextValue(path, "//MotionBlur", gfxp2);
    Context.ChangeXmlNodeInnerTextValue(path, "//ShadowQuality", gfxp1);
    Context.ChangeXmlNodeInnerTextValue(path, "//LightingQuality", gfxp1);
    Context.ChangeXmlNodeInnerTextValue(path, "//EffectsQuality", gfxp1);
    Context.ChangeXmlNodeInnerTextValue(path, "//ReflectionQuality", gfxp4);
    Context.ChangeXmlNodeInnerTextValue(path, "//WaterSurfaceQuality", gfxp5);
    Context.ChangeXmlNodeInnerTextValue(path, "//ShadeQuality", gfxp6);
    Context.ChangeXmlNodeInnerTextValue(path, "//VolumetricEffectQuality", gfxp1);
    Context.ChangeXmlNodeInnerTextValue(path, "//RaytracingQuality", gfxp1);
    Context.ChangeXmlNodeInnerTextValue(path, "//GIDataQuality", gfxp6);
    Context.ChangeXmlNodeInnerTextValue(path, "//GrassQuality", gfxp3);
  }
  if (txq != "No Change") {
    Context.ChangeXmlNodeInnerTextValue(path, "//TextureQuality", txqp);
  }
  Context.ChangeXmlNodeInnerTextValue(path, "//ScreenMode", "WINDOW");
  Context.ChangeXmlNodeInnerTextValue(path, "//Resolution-WindowScreenWidth", Context.Width);
  Context.ChangeXmlNodeInnerTextValue(path, "//Resolution-WindowScreenHeight", Context.Height);
  Context.ChangeXmlNodeInnerTextValue(path, "//Auto-detectBestRenderingSettings", "OFF");

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
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);
      ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
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
};
