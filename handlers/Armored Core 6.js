var answers = ["No Change", "Low", "Medium", "High", "Maximum"];
Game.AddOption("Graphics preset", "Reduce GPU power required by using lower settings.", "gfx", answers);
Game.AddOption("Texture quality", "Reduce Vram required by using lower settings.", "txq", answers);
var answers2 = ["No Change", "30", "60", "90", "120"];
Game.AddOption("FPS Cap", "", "fps", answers2);
var answers3 = ["0", "1", "2"];
Game.AddOption("Enable friendly fire?", "0 = Disabled | 1 = Enabled (no lock-on) | 2 = Enabled (with lock-on)\n\nTo change other settings go to the coop ini file itself.", "ff", answers3);
Game.KillMutex = ["Ac6Mutex"];

Game.ExecutableContext = ["AC6Coop", "ac6_for_coop_launcher.exe"];

Game.DirSymlinkExclusions = ["AC6Coop","AC6Coop\\locale"];
Game.FileSymlinkExclusions = [
"steam_api64.dll",
"steam_appid.txt",
];

Game.FileSymlinkCopyInstead = [
"ac6_for_coop_launcher.exe",
"ac6_coop.dll",
"ac6_coop_settings.ini",
"brazilian.json",
"english.json",
"german.json",
"japanese.json",
"latam.json",
"russian.json",
"schinese.json",
"spanish.json",
"tchinese.json",
]

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "armoredcore6.exe";
Game.ExecutableToLaunch = "ac6_for_coop_launcher.exe";
Game.SteamID = "1888160";
Game.GUID = "ARMORED CORE VI FIRES OF RUBICON";
Game.GameName = "ARMORED CORE VI FIRES OF RUBICON";
Game.MaxPlayers = 5;
Game.MaxPlayersOneMonitor = 5;
Game.UseGoldberg = true;
// Game.GoldbergExperimental = true; // manual
Game.BinariesFolder = "";
Game.LauncherTitle = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "ARMORED CORE™ VI FIRES OF RUBICON™";
Game.HideTaskbar = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.CustomDllEnabled = false;
Game.Hook.XInputReroute = false;
Game.PauseBetweenContextAndLaunch = 3;
Game.PauseBetweenProcessGrab = 8;
Game.PauseBetweenStarts = 5;
Game.UserProfileConfigPath = "AppData\\Roaming\\ArmoredCore6";
Game.Description =
  'IMPORTANT: The handler NEEDS "Armored Core Coop Mod" by LukeYui: https://www.nexusmods.com/armoredcore6firesofrubicon/mods/3 ALREADY INSTALLED AND WORKING\n\nAlso Disable any overlays that are attaching to the game (discord,steam or any other)\n\nMultiplayer: Unlock the multiplayer menu of the game, select START SQUAD > when created press SHIFT+TAB > an overlay will appear press INVITE ALL > all players will be in the group, close the overlay and now just select a mission.\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, alt+tab to the Nucleus Co-op screen than press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.';

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
// Game.ProtoInput.SetWindowStyleHook = true;
// Game.ProtoInput.SetWindowPosHook = true;
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
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
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

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));
  
  var gfx = Context.Options["gfx"];
  if (gfx == "Maximum") {
    var QualitySetting = "MAX";
    var Antialiasing = "HIGH";
    var SSAO = "MAX";
    var DepthOfField = "MAX";
    var MotionBlur = "MAX";
    var ShadowQuality = "MAX";
    var LightingQuality = "MAX";
    var EffectsQuality = "MAX";
    var ReflectionQuality = "MAX";
    var WaterSurfaceQuality = "HIGH";
    var ShadeQuality = "HIGH";
    var VolumetricEffectQuality = "MAX";
    var GIDataQuality = "HIGH";
  }
  if (gfx == "High") {
    var QualitySetting = "HIGH";
    var Antialiasing = "HIGH";
    var SSAO = "HIGH";
    var DepthOfField = "HIGH";
    var MotionBlur = "HIGH";
    var ShadowQuality = "HIGH";
    var LightingQuality = "HIGH";
    var EffectsQuality = "HIGH";
    var ReflectionQuality = "HIGH";
    var WaterSurfaceQuality = "HIGH";
    var ShadeQuality = "HIGH";
    var VolumetricEffectQuality = "HIGH";
    var GIDataQuality = "HIGH";
  }
  if (gfx == "Medium") {
    var QualitySetting = "MEDIUM";
    var Antialiasing = "HIGH";
    var SSAO = "MEDIUM";
    var DepthOfField = "MEDIUM";
    var MotionBlur = "MEDIUM";
    var ShadowQuality = "MEDIUM";
    var LightingQuality = "MEDIUM";
    var EffectsQuality = "MEDIUM";
    var ReflectionQuality = "HIGH";
    var WaterSurfaceQuality = "HIGH";
    var ShadeQuality = "MEDIUM";
    var VolumetricEffectQuality = "MEDIUM";
    var GIDataQuality = "MEDIUM";
  }
  if (gfx == "Low") {
    var QualitySetting = "LOW";
    var Antialiasing = "DISABLE";
    var SSAO = "DISABLE";
    var DepthOfField = "DISABLE";
    var MotionBlur = "DISABLE";
    var ShadowQuality = "LOW";
    var LightingQuality = "LOW";
    var EffectsQuality = "LOW";
    var ReflectionQuality = "DISABLE";
    var WaterSurfaceQuality = "DISABLE";
    var ShadeQuality = "LOW";
    var VolumetricEffectQuality = "LOW";
    var GIDataQuality = "LOW";
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

  var path = Context.NucleusUserRoot + "\\AppData\\Roaming\\ArmoredCore6\\GraphicsConfig.xml";
  Context.BackupFile(path, true);


  if (gfx != "No Change") {
    Context.ChangeXmlNodeInnerTextValue(path, "//QualitySetting", QualitySetting);
    Context.ChangeXmlNodeInnerTextValue(path, "//Antialiasing", Antialiasing);
    Context.ChangeXmlNodeInnerTextValue(path, "//SSAO", SSAO); 
    Context.ChangeXmlNodeInnerTextValue(path, "//DepthOfField", DepthOfField);
    Context.ChangeXmlNodeInnerTextValue(path, "//MotionBlur", MotionBlur);
    Context.ChangeXmlNodeInnerTextValue(path, "//ShadowQuality", ShadowQuality);
    Context.ChangeXmlNodeInnerTextValue(path, "//LightingQuality", LightingQuality);
    Context.ChangeXmlNodeInnerTextValue(path, "//EffectsQuality", EffectsQuality);
    Context.ChangeXmlNodeInnerTextValue(path, "//ReflectionQuality", ReflectionQuality);
    Context.ChangeXmlNodeInnerTextValue(path, "//WaterSurfaceQuality", WaterSurfaceQuality);
    Context.ChangeXmlNodeInnerTextValue(path, "//ShadeQuality", ShadeQuality);
    Context.ChangeXmlNodeInnerTextValue(path, "//VolumetricEffectQuality", VolumetricEffectQuality);
    Context.ChangeXmlNodeInnerTextValue(path, "//RaytracingQuality", "DISABLE");
    Context.ChangeXmlNodeInnerTextValue(path, "//GIDataQuality", GIDataQuality);
  }
  if (txq != "No Change") {
    Context.ChangeXmlNodeInnerTextValue(path, "//TextureQuality", txqp);
  }
  Context.ChangeXmlNodeInnerTextValue(path, "//ScreenMode", "WINDOW");
  Context.ChangeXmlNodeInnerTextValue(path, "//Resolution-WindowScreenWidth", Context.Width);
  Context.ChangeXmlNodeInnerTextValue(path, "//Resolution-WindowScreenHeight", Context.Height);
  Context.ChangeXmlNodeInnerTextValue(path, "//Auto-detectBestRenderingSettings", "OFF");

  var fps = Context.Options["fps"];
  var option = "30";
  if (option == "30") {
    option = "Type0";
  }
  if (option == "60") {
    option = "Type1";
  }
  if (option == "90") {
    option = "Type2";
  }
  if (option == "120") {
    option = "Type3";
  }
  if (fps != "No Change") {
    Context.ChangeXmlNodeInnerTextValue(path, "//FpsType", option);
  }

  Context.PatchFileFindPattern(
    System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "armoredcore6.exe"),
    System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "armoredcore6.exe"),
    "1A 04 00 00 80 07",
    Context.Width,
    5,
    true
  );

  Context.PatchFileFindPattern(
    System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "armoredcore6.exe"),
    System.IO.Path.Combine(Context.GetFolder(Nucleus.Folder.InstancedGameFolder), "armoredcore6.exe"),
    "38 04 00 00 80 07",
    Context.Height,
    1,
    true
  );

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\auto_accept_invite.txt";
  var lines = [
    "76561199023125438",
    "76561199023125439",
    "76561199023125440",
    "76561199023125441",
    "76561199023125442",
  ];
  Context.WriteTextFile(autoExec, lines);

  if (Context.PlayerID != 0) {
    var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\disable_overlay.txt";
    var lines = [
    ];
    Context.WriteTextFile(autoExec, lines);

    var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\disable_overlay_achievement_notification.txt";
    var lines = [
    ];
    Context.WriteTextFile(autoExec, lines);

    var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\disable_overlay_friend_notification.txt";
    var lines = [
    ];
    Context.WriteTextFile(autoExec, lines);
  }


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
