var answers1 = ["30", "45", "60", "75", "90", "105", "120", "144", "165", "200"];
Game.AddOption("Select the FPS cap.", "", "fps", answers1);

Game.ExecutableContext = ["D3D12"];

Game.FileSymlinkCopyInstead = ["tbb.dll", "tbbmalloc.dll"];

Game.DirSymlinkExclusions = [
  "Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64",
  "Engine\\Binaries\\Win64",
  "WhatTheFog\\Binaries\\Win64"
];

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "WhatTheFogGame.exe";
Game.SteamID = "2139020";
Game.GUID = "What The Fog";
Game.GameName = "What The Fog";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.BinariesFolder = "WhatTheFog\\Binaries\\Win64";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "WhatTheFog";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.Description =
  "Go into multiplayer > invite a friend > an overlay will appear > right click the other player name > invite to game\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)\n\nDisable any overlays that are attaching to the game (discord,steam or any other)\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard (The invite overlay will only work while its unlocked). You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 5;

Game.UseGoldberg = true;
// Game.GoldbergExperimental = true; //manual

Game.RefreshWindowAfterStart = true;
Game.SetWindowHook = true;
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\WhatTheFog\\Saved\\Config";
Game.UserProfileSavePath = "AppData\\Local\\WhatTheFog\\Saved\\SaveGames";

Game.PlayerSteamIDs = [
  "76561199023125438",
  "76561199023125439",
  "76561199023125440",
  "76561199023125441",
  "76561199023125442",
  "76561199023125443",
  "76561199023125444",
  "76561199023125445",
  "76561199023125446",
  "76561199023125447",
  "76561199023125448",];

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
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
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
  var Args = (Context.Args = " -windowed " + " -AlwaysFocus " + " -ResX= " + Context.Width + " -ResY= " + Context.Height);

  Context.StartArguments = Args;

  var FPS = Context.Options["fps"];

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64");

  if (!System.IO.Directory.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64\\steam_settings")) {
    var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64\\steam_settings");
    System.IO.Directory.CreateDirectory(filePath);
  }

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64\\steam_settings\\auto_accept_invite.txt";
  var lines = [
    "76561199023125438",
    "76561199023125439",
    "76561199023125440",
    "76561199023125441",
    "76561199023125442",
    "76561199023125443",
    "76561199023125444",
    "76561199023125445",
    "76561199023125446",
    "76561199023125447",
    "76561199023125448",
  ];
  Context.WriteTextFile(autoExec, lines);

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Windows\\GameUserSettings.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "ResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "ResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "LastUserConfirmedResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "LastUserConfirmedResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "WindowPosX", Context.PosX),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "WindowPosY", Context.PosY),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "FullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "LastConfirmedFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "PreferredFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "FrameRateLimit", FPS + ".000000"),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "FrameRateLimit_OnBattery", FPS + ".000000"),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "FrameRateLimit_InMenu", FPS + ".000000"),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "FrameRateLimit_WhenBackgrounded", FPS + ".000000"),
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "MobileFrameRateLimit", FPS + ".000000"),
  ]);

  if (Context.PlayerID == 0) {
    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Windows\\GameUserSettings.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "MusicVolume", '1.000000'),
    ]);
  } else {
    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Windows\\GameUserSettings.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("/Script/RelayGame.LyraSettingsLocal", "MusicVolume", '0.000000'),
    ]);
  }

};
