Hub.Handler.Version = 1; // Released at https://hub.splitscreen.me/ on Mon Sep 22 2025 01:48:14 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "cdkZb8JnpdBL4N2An";
Hub.Maintainer.Name = "birden";
Hub.Maintainer.Id = "rRycxSn253ZCjQy5C";

var answers1 = ["0", "144", "120", "90", "75", "60"];
Game.AddOption("Select the FPS cap.", "0 is for unlimited FPS", "fps", answers1);

Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt", "ac7-ultrawide-for-nucleus.exe", "d3d11.dll", "d3dcompiler_46.dll", "d3dx.ini", "nvapi64.dll"];
Game.DirSymlinkExclusions = ["Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv139\\Win64"];
Game.DirExclusions = ["Mods", "ShaderFixes"];

Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "Ace7Game.exe";
Game.SteamID = "502500";
Game.GUID = "Ace Combat 7 Skies Unknown";
Game.GameName = "Ace Combat 7 Skies Unknown";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "ACE COMBAT™7: SKIES UNKNOWN";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: Start the game once and change some settings before trying split screen. also recommend to verify your steam files if you modded the game before.\n\nTutorial+more info about the mod used: https://www.youtube.com/watch?v=hrqXI2iRWd0 \n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
// Game.PauseBetweenProcessGrab = 15;
Game.PauseBetweenStarts = 20;
Game.PauseBetweenContextAndLaunch = 7;

Game.UseGoldberg = true;
Game.SteamlessPatch = ["false", "--quiet --keepbind", "5000"];
Game.SetTopMostAtEnd = true;

Game.RefreshWindowAfterStart = true;
Game.HookFocus = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\BANDAI NAMCO Entertainment\\ACE COMBAT 7\\Config";
Game.UserProfileSavePath = "AppData\\Local\\BANDAI NAMCO Entertainment\\ACE COMBAT 7\\SaveGames";

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
Game.ProtoInput.FocusHooks = false;
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
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
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
  // Context.Wait(5000);
  var FPS = Context.Options["fps"];

  Context.StartArguments = "-windowed -AlwaysFocus -nosplash -ResX=" + Context.Width + " -ResY=" + Context.Height;
  Context.CopyFolder(Context.ScriptFolder, Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  let aspect = 0;
  if (Context.AspectRatioDecimal <= 0.9) {
    aspect = 1;
  }

  var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ac7-ultrawide-for-nucleus.bat";
  var lines = ["ac7-ultrawide-for-nucleus.exe " + Context.Width + " " + Context.Height + " " + aspect];
  Context.WriteTextFile(timese, lines);

  Context.RunAdditionalFiles(
    ["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ac7-ultrawide-for-nucleus.bat"],
    false,
    "Press 'ok' after the CMD (black screen) dissappiers.",
    1,
    false,
    false,
    true,
    false
  );

  var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv139\\Win64\\steam_settings");
  System.IO.Directory.CreateDirectory(filePath);

  var dlc = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv139\\Win64\\steam_settings\\DLC.txt";
  var lines = [
    "1966880=ACE COMBAT™7: SKIES UNKNOWN - TOP GUN: Maverick Aircraft Set",
    "1692466=ACE COMBAT™7: SKIES UNKNOWN - 25th Anniversary Emblem Set III",
    "1692465=ACE COMBAT™7: SKIES UNKNOWN - 25th Anniversary Skin Set III",
    "1692464=ACE COMBAT™7: SKIES UNKNOWN - MiG-35D Super Fulcrum Set",
    "1692463=ACE COMBAT™7: SKIES UNKNOWN - F-2A -Super Kai- Set",
    "1692462=ACE COMBAT™7: SKIES UNKNOWN - F/A-18F Super Hornet Block III Set",
    "1692460=ACE COMBAT™7: SKIES UNKNOWN 25th Anniversary DLC - Cutting-Edge Aircraft Series Set",
    "1561365=ACE COMBAT™7: SKIES UNKNOWN - 25th Anniversary Emblem Set II",
    "1561364=ACE COMBAT™7: SKIES UNKNOWN - 25th Anniversary Skin Set II",
    "1561363=ACE COMBAT™7: SKIES UNKNOWN - FB-22 Strike Raptor Set",
    "1561362=ACE COMBAT™7: SKIES UNKNOWN - F-15 S/MTD Set",
    "1561361=ACE COMBAT™7: SKIES UNKNOWN - F-16XL Set",
    "1561360=ACE COMBAT™7: SKIES UNKNOWN 25th Anniversary DLC - Experimental Aircraft Series Set",
    "1454770=ACE COMBAT™7: SKIES UNKNOWN - 25th Anniversary DLC - Original Aircraft Series – Set",
    "1421553=ACE COMBAT™7: SKIES UNKNOWN - 25th Anniversary Emblem Set",
    "1421552=ACE COMBAT™7: SKIES UNKNOWN - 25th Anniversary Skin Set",
    "1421551=ACE COMBAT™7: SKIES UNKNOWN – CFA-44 Nosferatu Set",
    "1421550=ACE COMBAT™7: SKIES UNKNOWN – XFA-27 Set",
    "1421540=ACE COMBAT™7: SKIES UNKNOWN – ASF-X Shinden II Set",
    "929106=ACE COMBAT™7: SKIES UNKNOWN - Season Pass",
    "929105=ACE COMBAT™7: SKIES UNKNOWN - Music Player Mode",
    "929104=ACE COMBAT™7: SKIES UNKNOWN - 8 Popular Squadron Emblems",
    "929103=ACE COMBAT™7: SKIES UNKNOWN - F-4E Phantom II + 3 Skins",
    "929102=ACE COMBAT™7: SKIES UNKNOWN - Ten Million Relief Plan",
    "929101=ACE COMBAT™7: SKIES UNKNOWN - Anchorhead Raid",
    "929100=ACE COMBAT™7: SKIES UNKNOWN - Unexpected Visitor",
    "868312=ACE COMBAT™7: SKIES UNKNOWN - ADFX-01 Morgan Set",
    "868311=ACE COMBAT™7: SKIES UNKNOWN - ADF-01 FALKEN Set",
    "868310=ACE COMBAT™7: SKIES UNKNOWN - ADF-11F Raven Set"
  ];
  Context.WriteTextFile(dlc, lines);

  var VideoConfig = Context.EnvironmentPlayer + "\\AppData\\Local\\BANDAI NAMCO Entertainment\\ACE COMBAT 7\\Config\\GameUserSettings.ini";
  Context.ModifySaveFile(VideoConfig, VideoConfig, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("WindowsGraphicsOptions", "FrameLimit", answers1.indexOf(FPS)),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "ResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "ResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "LastUserConfirmedResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "LastUserConfirmedResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "DesiredScreenWidth", Context.Width),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "DesiredScreenHeight", Context.Height),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "FrameRateLimit", FPS + ".000000"),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "FullscreenMode", "2"),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "LastConfirmedFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/Engine.GameUserSettings", "PreferredFullscreenMode", 2)
  ]);
};
