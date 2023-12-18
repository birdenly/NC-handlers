Hub.Handler.Version = 1; // Released at https://hub.splitscreen.me/ on Fri Dec 15 2023 04:15:24 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "u83JXygSkHekyffXS";
Hub.Maintainer.Name = "birden";
Hub.Maintainer.Id = "rRycxSn253ZCjQy5C";

var answers1 = ["60", "30", "45", "75", "90"];
var answers2 = ["Default", "Low", "Med", "High"];
Game.AddOption("Select the FPS cap.", "", "fps", answers1);
Game.AddOption("Choose your preferred graphic settings?", "Default will use the previous or default settings", "Config", answers2);

Game.ExecutableContext = ["S9-Win32-F.exe.cfg"];

Game.FileSymlinkExclusions = ["xlive.dll", "xlive.ini", "TeknoXlive.dll", "d3d9.dll", "d3d9.ini"];
Game.FileSymlinkCopyInstead = ["S9.exe", "DefaultGame.ini", "S9Engine.ini"];
Game.KillProcessesOnClose = ["F2 connect", "Names", "cmd", "JoyToKey"];

Game.GameName = "Section 8: Prejudice";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.LauncherExe = "S9.exe";
Game.LauncherTitle = "";
Game.ExecutableName = "S9-Win32-F.exe";
Game.SteamID = "97100";
Game.GUID = "Section 8 Prejudice";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "Binaries\\Win32";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Section 8 Prejudice";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "IMPORTANT: Your Nucleus Co-op nickname cannot have spaces, the GFWL emulator doesnt work with them. also recommend not having any GFWL emulators in your game folder, it will cause conflicts with the one in the handler.\n\nThe saves per instance are stored inside Nucleus Co-op content folder and the nucleus Document config path, so if you delete Nucleus, the game content folder or the document config path, your Nucleus saves for this game will be lost(not your main game save).\n\nIn the first instance main menu go into EXTRAS>SYSTEM LINK and create a match, than with other instances get into the main menu, than press 'F2' for all the others to connect to the game or pressing and holding the START button on your controller(will only work while input is unlocked), In case it doesnt work, the connection command will automatically be copied into your clipboard open the console with ' (key above TAB) and paste it.\n\nThe admin password is '123' if you are asked for one in console commands.\n\nThe bigger the player limit more bots will join to fill the server.\n\nThe handler uses F2 connect.exe and names.exe, they are made for a better experience in split screen, if they get deleted by your AV, just disable your AV when you are downloading it. they are needed else you will be getting a crash at the start.\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;
Game.HideTaskbar = false;

Game.NeedsSteamEmulation = true;
Game.UseSteamless = true;

Game.SetWindowHook = true;
Game.ResetWindows = true;

Game.KeepSymLinkOnExit = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\My Games\\Section 8 Prejudice - PC";
Game.UserProfileConfigPathNoCopy = true;

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
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
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

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

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

    ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
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
  var filePath = Context.EnvironmentPlayer + "\\Documents\\My Mods";
  System.IO.Directory.CreateDirectory(filePath);

  var filePath = Context.EnvironmentPlayer + "\\Documents\\My Mods\\SpecialK";
  System.IO.Directory.CreateDirectory(filePath);

  var filePath = Context.EnvironmentPlayer + "\\Documents\\My Mods\\SpecialK\\Global";
  System.IO.Directory.CreateDirectory(filePath);

  var savePath = (Context.SavePath = Context.EnvironmentPlayer + "\\Documents\\My Mods\\SpecialK\\Global\\osd.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "osd.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var filePath = Context.EnvironmentPlayer + "\\Documents\\My Games";
  System.IO.Directory.CreateDirectory(filePath);

  var filePath = Context.EnvironmentPlayer + "\\Documents\\My Games\\Section 8 Prejudice - PC";
  System.IO.Directory.CreateDirectory(filePath);

  var filePath = Context.EnvironmentPlayer + "\\Documents\\My Games\\Section 8 Prejudice - PC\\S9Game";
  System.IO.Directory.CreateDirectory(filePath);

  var filePath = Context.EnvironmentPlayer + "\\Documents\\My Games\\Section 8 Prejudice - PC\\S9Game\\Config";
  System.IO.Directory.CreateDirectory(filePath);

  Context.RunAdditionalFiles([Context.ScriptFolder + "\\names.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\JoyToKey.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2 connect.exe"], false, 10);

  if (!System.IO.File.Exists(Context.EnvironmentPlayer + "\\Documents\\My Games\\Section 8 Prejudice - PC\\S9Game\\Config\\S9Engine.ini")) {
    var savePath = (Context.SavePath = Context.EnvironmentPlayer + "\\Documents\\My Games\\Section 8 Prejudice - PC\\S9Game\\Config\\S9Engine.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "S9Engine_Med.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  var Config = Context.Options["Config"];

  if (Config == "Default") {
  }
  if (Config == "Low") {
    var savePath = (Context.SavePath = Context.EnvironmentPlayer + "\\Documents\\My Games\\Section 8 Prejudice - PC\\S9Game\\Config\\S9Engine.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "S9Engine_Low.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (Config == "Med") {
    var savePath = (Context.SavePath = Context.EnvironmentPlayer + "\\Documents\\My Games\\Section 8 Prejudice - PC\\S9Game\\Config\\S9Engine.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "S9Engine_Med.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  if (Config == "High") {
    var savePath = (Context.SavePath = Context.EnvironmentPlayer + "\\Documents\\My Games\\Section 8 Prejudice - PC\\S9Game\\Config\\S9Engine.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "S9Engine_High.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  var FPS = Context.Options["fps"];

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\xlive.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "xlive.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\xlive.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "xlive.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\xlive.ini";
  var dict = [Context.FindLineNumberInTextFile(txtPath, "profile name 1", Nucleus.SearchType.StartsWith) + "|profile name 1 = " + Context.Nickname];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\XLiveEmu\\" + Context.Nickname + "\\Achievements\\Achievements.txt")) {
    var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\XLiveEmu");
    System.IO.Directory.CreateDirectory(filePath);

    var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\XLiveEmu\\" + Context.Nickname);
    System.IO.Directory.CreateDirectory(filePath);

    var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\XLiveEmu\\" + Context.Nickname + "\\Achievements");
    System.IO.Directory.CreateDirectory(filePath);

    var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\XLiveEmu\\" + Context.Nickname + "\\Achievements\\Achievements.txt";
    var lines = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "60"
    ];
    Context.WriteTextFile(timese, lines);
  }

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\d3d9.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\d3d9.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\d3d9.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Window.System", "OverrideRes", Context.Width + "x" + Context.Height),
    new Nucleus.IniSaveInfo("Render.FrameRate", "TargetFPS", FPS),
    new Nucleus.IniSaveInfo("Render.FrameRate", "BackgroundFPS", FPS)
  ]);

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\S9game\\Config\\S9Engine.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
    new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height),
    new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen", "False"),
    new Nucleus.IniSaveInfo("SystemSettings", "AllowD3D10", "False")
  ]);

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\S9game\\Config\\S9Engine.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
    new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height),
    new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen", "False"),
    new Nucleus.IniSaveInfo("SystemSettings", "AllowD3D10", "False"),
    new Nucleus.IniSaveInfo("SystemSettings", "AllowD3D10", "False")
  ]);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\S9game\\Config\\DefaultGame.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Engine.AccessControl", "AdminPassword", 123),
    new Nucleus.IniSaveInfo("Engine.GameInfo", "bKickLiveIdlers", false),
    new Nucleus.IniSaveInfo("Engine.GameInfo", "MaxPlayersAllowedListen", 64)
  ]);

  var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CopyPaste.bat";
  var lines = ["echo|set /p=open 127.0.0.1|clip", "quit"];

  Context.WriteTextFile(server, lines);

  Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CopyPaste.bat"], false, 1, false, false);

  if (Player.IsKeyboardPlayer) {
    Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup -NoController " + "-resx=" + Context.Width + " -resy= " + Context.Height;
    Context.Hook.ForceFocus = "False";
  } else {
    Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup -nomouse " + "-resx= " + Context.Width + " -resy= " + Context.Height;
  }

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
