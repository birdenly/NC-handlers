var answers1 = ["30", "60", "90", "120", "144", "0"];
Game.AddOption("Select the FPS cap.", "0 is for unlimited FPS", "fps", answers1);

Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt","EOSSDK-Win64-Shipping.dll"];
Game.DirSymlinkExclusions = ["Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv155\\Win64", "SMALLAND\\Binaries\\Win64\\RedpointEOS", "SMALLAND\\Binaries\\Win64"];
Game.FileSymlinkCopyInstead = [
"tbb12.dll","OpenImageDenoise.dll","xaudio2_9redist.dll","nvngx_dlss.dll",
"AkHarmonizer.dll",
"AkImpacter.dll",
"AkMatrixReverb.dll",
"AkParametricEQ.dll",
"AkPeakLimiter.dll",
"AkPitchShifter.dll",
"AkRecorder.dll",
"AkRoomVerb.dll",
"AkSilenceGenerator.dll",
"AkSineTone.dll",
"AkSoundEngineDLL.dll",
"AkStereoDelay.dll",
"AkSynthOne.dll",
"AkTimeStretch.dll",
"AkToneGen.dll",
"AkTremolo.dll",
"AkAudioInput.dll",
"AkCompressor.dll",
"AkDelay.dll",
"AkExpander.dll",
"AkFlanger.dll",
"AkGain.dll",
"AkGuitarDistortion.dll",
"NvBlast_x64.dll",
"NvBlastExtAuthoring_x64.dll",
"NvBlastGlobals_x64.dll",
"APEX_Clothing_x64.dll",
"APEX_Legacy_x64.dll",
"ApexFramework_x64.dll",
"NvCloth_x64.dll",
"PhysX3_x64.dll",
"PhysX3Common_x64.dll",
"PhysX3Cooking_x64.dll",
"PxFoundation_x64.dll",
"PxPvdSDK_x64.dll",
"GFSDK_Aftermath_Lib.x64.dll"
];
Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "SMALLAND-Win64-Shipping.exe";
Game.SteamID = "768200";
Game.GUID = "Smalland Survive the Wilds";
Game.GameName = "Smalland Survive the Wilds";
Game.MaxPlayers = 10;
Game.MaxPlayersOneMonitor = 10;
Game.BinariesFolder = "SMALLAND\\Binaries\\Win64";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "SMALLAND";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: Start your game once and change any settings.\n\nMake a character then turn on ONLINE and DONT make the server private, others settings choose whatever and start your world. For others going into Join tab and wait for the server to appear. And remember to save just in case.\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor, keyboard and FOCUS. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 15;
Game.PauseBetweenStarts = 15;

Game.SteamlessPatch = ["false", "", "8000"];
Game.RefreshWindowAfterStart = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\SMALLAND\\Saved\\Config";
Game.UserProfileSavePath = "AppData\\Local\\SMALLAND\\Saved\\SaveGames";

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
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHook = false;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;

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

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
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

    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 10, true, false, false, true, true);
    System.Threading.Thread.Sleep(1000);
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

  // var launch = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\SMALLAND\\Binaries\\Win64\\steamless.bat";
  // var lines = [
  // '"' + Context.NucleusFolder  + '\\utils\\Steamless\\Steamless.CLI.exe" ' + '"' + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\SMALLAND\\Binaries\\Win64\\SMALLAND-Win64-Shipping.exe"',
  // 'move /y "SMALLAND-Win64-Shipping.exe.unpacked.exe" "SMALLAND-Win64-Shipping.exe"'
  // ];
  // Context.WriteTextFile(launch, lines);

  // Context.RunAdditionalFiles(["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\SMALLAND\\Binaries\\Win64\\steamless.bat"], false, 1);
  // Context.Wait(8000);

  errorPath = Context.EnvironmentPlayer + "\\AppData\\Roaming\\NemirtingasEpicEmu\\831ec62c44424917a0fb315de2b5dc1"+ + Context.PlayerID + "\\SmallandSurviveTheWilds\\remote\\__EOS__\\PDSFriends.db"
  if (System.IO.File.Exists(errorPath)) {
    System.IO.File.Delete(errorPath);
  }

  var FPS = Context.Options["fps"];

  Context.StartArguments = " -windowed -ResX= " + Context.Width + " -ResY= " + Context.Height;

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  Context.Wait(1000);
  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv155\\Win64\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\SMALLAND\\Binaries\\Win64\\nepice_settings\\NemirtingasEpicEmu.json";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, '      "EpicId":', Nucleus.SearchType.StartsWith) + '|      "EpicId": "831ec62c44424917a0fb315de2b5dc1' + Context.PlayerID + '",',
    Context.FindLineNumberInTextFile(txtPath, '      "Language":', Nucleus.SearchType.StartsWith) + '|      "Language": "' + Context.EpicLang + '",',
    Context.FindLineNumberInTextFile(txtPath, '      "UserName":', Nucleus.SearchType.StartsWith) + '|      "UserName": "' + Context.Nickname + '"'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);
  

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\WindowsNoEditor\\GameUserSettings.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("/Script/SMALLAND.SLUserSettings", "ResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/SMALLAND.SLUserSettings", "ResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/SMALLAND.SLUserSettings", "LastUserConfirmedResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/SMALLAND.SLUserSettings", "LastUserConfirmedResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/SMALLAND.SLUserSettings", "FullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/SMALLAND.SLUserSettings", "LastConfirmedFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/SMALLAND.SLUserSettings", "FrameRateLimit", FPS + ".000000")
  ]);

  if (Context.PlayerID == 0) {
    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\WindowsNoEditor\\GameUserSettings.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("/Script/SMALLAND.SLUserSettings", "SoundVolumeMusic", "1.000000"),
    ]);
  }else{
    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\WindowsNoEditor\\GameUserSettings.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("/Script/SMALLAND.SLUserSettings", "SoundVolumeMusic", "0.200000"),
    ]);
  }

};