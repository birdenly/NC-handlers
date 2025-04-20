Game.KillMutex = ["UnrealEngine4"];

var answers1 = ["30", "60", "90", "120", "144", "0"];
Game.AddOption("Select the FPS cap.", "0 is for unlimited FPS", "fps", answers1);

Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt"];
Game.DirSymlinkExclusions = ["Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64", "LOTF2\\Binaries\\Win64\\RedpointEOS", "LOTF2\\Binaries\\Win64"];

Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "LOTF2-Win64-Shipping.exe";
Game.SteamID = "1501750";
Game.GUID = "Lords of the Fallen";
Game.GameName = "Lords of the Fallen";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.BinariesFolder = "LOTF2\\Binaries\\Win64";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Lords of the Fallen";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll","xinput1_4.dll","xinput9_1_0.dll"];
Game.Description =
  "IMPORTANT: FRIENDS PASS DOESNT WORK, DO NOT TRY RUNNING THIS HANDLER WITH IT.\n\nReduce your graphics in the main game before using the handler, also recommend muting the music of the second instance.\n\nTo join each other finish the tutorial section and reach the altar, interact with it and go into multiplayer and invite the other player\n\nIf you want your main save file in split screen right click the game in nucleus and click 'open userProfile save path', now just copy paste your main save file into there\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor/keyboard/controller. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 12;
Game.PauseBetweenStarts = 20;

// Game.HookFocus = true;
Game.UseSteamless = true;
Game.SteamlessArgs = "--quiet --keepbind";

Game.RefreshWindowAfterStart = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\LOTF2\\Saved\\Config";
Game.UserProfileSavePath = "AppData\\Local\\LOTF2\\Saved\\SaveGames";

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
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = false;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.DrawFakeCursor = true;
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
// Game.ProtoInput.XinputHook = true;
// Game.ProtoInput.UseOpenXinput = true;
// Game.ProtoInput.UseDinputRedirection = false;
// Game.ProtoInput.DinputDeviceHook = false;
// Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
// Game.ProtoInput.MultipleProtoControllers = true;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    if (Context.IsKeyboardPlayer) {
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
    }
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
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

    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, true, true, true, true);
    System.Threading.Thread.Sleep(1000);
    ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);

    ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

    //ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5000, true, true, true, true, true);
  }
};

Game.ProtoInput.OnInputUnlocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    if (Context.IsKeyboardPlayer) {
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
    }
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
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
  Context.Wait(6000);
  var FPS = Context.Options["fps"];

  Context.StartArguments = " -windowed -ResX= " + Context.Width + " -ResY= " + Context.Height;

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  Context.Wait(1500);
  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\LOTF2\\Binaries\\Win64\\nepice_settings\\NemirtingasEpicEmu.json";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, '      "EpicId":', Nucleus.SearchType.StartsWith) + '|      "EpicId": "831ec62c44424917a0fb315de2b5dc1' + Context.PlayerID + '",',
    Context.FindLineNumberInTextFile(txtPath, '      "Language":', Nucleus.SearchType.StartsWith) + '|      "Language": "' + Context.EpicLang + '",',
    Context.FindLineNumberInTextFile(txtPath, '      "UserName":', Nucleus.SearchType.StartsWith) + '|      "UserName": "' + Context.Nickname + '"'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);
  

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Windows\\GameUserSettings.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "ResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "ResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "LastUserConfirmedResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "LastUserConfirmedResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "FullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "LastConfirmedFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "PreferredFullscreenMode", 2),

    new Nucleus.IniSaveInfo("/Script/LOTF2.HexGameUserSettings", "ResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/LOTF2.HexGameUserSettings", "ResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/LOTF2.HexGameUserSettings", "LastUserConfirmedResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/LOTF2.HexGameUserSettings", "LastUserConfirmedResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/LOTF2.HexGameUserSettings", "FullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/LOTF2.HexGameUserSettings", "LastConfirmedFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/LOTF2.HexGameUserSettings", "PreferredFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/LOTF2.HexGameUserSettings", "FrameRateLimit", FPS + ".000000")
  ]);

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Windows\\Engine.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("/Script/EngineSettings.GameMapsSettings", "GameDefaultMap", "/Game/World/Character_Creation/LVL_Char_Creation.LVL_Char_Creation"),
    new Nucleus.IniSaveInfo("EpicOnlineServices", "EnableAntiCheat", "False"),
  ]);
};
