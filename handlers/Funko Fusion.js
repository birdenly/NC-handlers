var answers1 = ["30", "60", "90", "120", "144", "0"];
Game.AddOption("Select the FPS cap.", "0 is for unlimited FPS", "fps", answers1);


Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt"];
Game.DirSymlinkExclusions = ["Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv157\\Win64", "FunkoFusion\\Binaries\\Win64"];

Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "FunkoFusion-Win64-Shipping.exe";
Game.SteamID = "1795180";
Game.GUID = "Funko Fusion";
Game.GameName = "Funko Fusion";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.BinariesFolder = "FunkoFusion\\Binaries\\Win64";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Funko Fusion";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: Start the game once and change some settings before trying split screen. THE GAME IS NOT OPTIMIZED AT ALL\n\nGo to one of the multiplayer PCs and start a multiplayer lobby, than invite the other players.\n\nWhen you want to end the game go into the menu and use 'Save and Quit', now you can close nucleus\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 25;
Game.PauseBetweenStarts = 25;

Game.SteamlessPatch = ["false", "--quiet --keepbind", "8000"];
Game.UseGoldberg = true;

Game.RefreshWindowAfterStart = true;
Game.SetWindowHook = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\FunkoFusion\\Saved\\Config";
Game.UserProfileSavePath = "AppData\\Local\\FunkoFusion\\Saved\\SaveGames";

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
Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;

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
Game.ProtoInput.MultipleProtoControllers = false;

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

  Context.Wait(5000);
  var FPS = Context.Options["fps"];

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Windows\\GameUserSettings.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "ResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "ResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "LastUserConfirmedResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "LastUserConfirmedResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "FullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "LastConfirmedFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "PreferredFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "FrameRateLimit", FPS + ".000000"),
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "FrameRateLimit_OnBattery", FPS + ".000000"),
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "FrameRateLimit_InMenu", FPS + ".000000"),
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "FrameRateLimit_WhenBackgrounded", FPS + ".000000"),
    new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "AllowAudioInBackground", "AllSounds"),
  ]);

  if (Context.PlayerID != 0) {
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "MusicVolumeScaler", "0.000000"),
    ]);
  } else {
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("/Script/Merlin.MerlinLocalSettings", "MusicVolumeScaler", "0.800000"),
    ]);
  }

  var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv157\\Win64\\steam_settings");
  System.IO.Directory.CreateDirectory(filePath);

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv157\\Win64\\steam_settings\\DLC.txt";
  var lines = [
  "4023020=Funko Fusion - Fantastik Plastik Pack 4 - T-Bone and El Diablo",
  "4023010=Funko Fusion - Fantastik Plastik Pack 3 - Frank Von Veiner and Cutey Corn",
  "4023000=Funko Fusion - Fantastik Plastik Pack 2 - Rocko Billy and Chet",
  "4022990=Funko Fusion - Fantastik Plastik Pack 1 - Monkey Assassin and Sam",
  "3957700=Funko Fusion - Happy Funkoween Pack",
  "3942910=Funko Fusion - Birthday Pack",
  "3829370=Funko Fusion Deluxe Edition Upgrade",
  "3780210=Funko Fusion - Jurassic World Rebirth Pack 2 - Dr Henry Loomis and Raptor",
  "3780200=Funko Fusion - Jurassic World Rebirth Pack 1 -Zora Bennett and Spinosaurus",
  "3551550=Funko Fusion - Manchester City Pack",
  "3462760=Funko Fusion - Wicked Movie Pack 3",
  "3112750=Funko Fusion - WDC Pack",
  "3268220=Funko Fusion - Kim Pine",
  "3268110=Funko Fusion - Trap Jaw",
  "3268090=Funko Fusion - Jurassic World Bonus Pack",
  "3268060=Funko Fusion - Back to the Future Outfits Pack",
  "3268050=Funko Fusion - Sun Wukong",
  "3172000=Funko Fusion - SpecialEffect's Streamer Bear",
  "3158360=Funko Fusion - Mecha Freddy",
  "3158340=Funko Fusion - Bob's Big Boy",
  "3158330=Funko Fusion - Dilophosaurus (Eddy Variant)",
  "3158320=Funko Fusion - M3GAN (Battle Damaged Variant)",
  "3158300=Funko Fusion - He-Man (Slime Pit Variant)",
  "3112600=Funko Fusion - Bob Ross Pack",
  "3112590=Funko Fusion - KFC Mecha Colonel",
  "3112580=Funko Fusion - KFC Chef Colonel",
  "3037360=Funko Fusion - Team Fortress 2 Pack",
  "3037350=Funko Fusion - The Walking Dead Pack",
  ];

  Context.WriteTextFile(autoExec, lines);
};
