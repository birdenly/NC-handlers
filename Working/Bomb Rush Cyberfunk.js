Hub.Handler.Version = 1; // Released at https://hub.splitscreen.me/ on Thu Sep 14 2023 22:00:33 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "X8agrgjLQphLAWnEd";
Hub.Maintainer.Name = "birden";
Hub.Maintainer.Id = "rRycxSn253ZCjQy5C";

var answers1 = ["Online", "LAN"];
Game.AddOption(
  "Online will connect to the main server(MAX OF 2 PLAYERS and USE UNIQUE NAMES) and LAN will need to have a server running locally in the background\n\nIf you want the server creation to be started by nucleus create a folder called 'server' in your main game folder and place the server files in there",
  "",
  "lan",
  answers1
);

Game.KillProcessesOnClose = ["SlopCrew.Server"];

Game.ExecutableContext = ["Bomb Rush Cyberfunk_Data"];
Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt"];
Game.FileSymlinkCopyInstead = [
  "doorstop_config.ini",
  "UnityCrashHandler64.exe",
  "UnityPlayer.dll",
  "winhttp.dll",
  "BepInEx.cfg",
  "LogOutput.log",
  "SlopCrew.Plugin.cfg",
  "Newtonsoft.Json.dll",
  "SlopCrew.Common.dll",
  "SlopCrew.Common.pdb",
  "SlopCrew.Plugin.dll",
  "SlopCrew.Plugin.pdb",
  "websocket-sharp.dll",
  "System.ValueTuple.dll",
  "SlopCrew.API.dll",
  "SlopCrew.API.pdb",
  "EmbedIO.dll",
  "Graphite.dll",
  "Serilog.dll",
  "Serilog.Sinks.Console.dll",
  "SlopCrew.Server.deps.json",
  "SlopCrew.Server.dll",
  "SlopCrew.Server.exe",
  "SlopCrew.Server.pdb",
  "SlopCrew.Server.runtimeconfig.json",
  "Swan.Lite.dll",
  "Tomlyn.dll"
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "Bomb Rush Cyberfunk.exe";
Game.SteamID = "1353230";
Game.GUID = "Bomb Rush Cyberfunk";
Game.GameName = "Bomb Rush Cyberfunk";
Game.MaxPlayers = 32;
Game.MaxPlayersOneMonitor = 32;
Game.LauncherTitle = "";
Game.HideTaskbar = false;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Bomb Rush Cyberfunk";
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: Download SlopCrew (https://github.com/SlopCrew/SlopCrew/blob/main/INSTALL.md) and do all the installation steps under 'GOG/Manual installs' than start the game with nucleus, if you will make a LAN server also download the server files.\n\nEvery instance that starts press any buttom/key to get it to the menu, than press 'ok' on the prompt to start the next instance.\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked. ";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;

Game.UseGoldberg = true;
Game.GoldbergNoLocalSave = true;
Game.SetWindowHook = true;
Game.RefreshWindowAfterStart = true;
Game.PromptBetweenInstances = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\1353230\\remote";

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

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.DontShowCursorWhenImageUpdated = true;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  var Args = (Context.Args = " -screen-fullscreen 0 " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Team Reptile\\Bomb Rush Cyberfunk", "Screenmanager Fullscreen mode_h3630240806", 0, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Team Reptile\\Bomb Rush Cyberfunk", "Screenmanager Fullscreen mode Default_h401710285", 0, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Team Reptile\\Bomb Rush Cyberfunk", "Screenmanager Resolution Width Default_h680557497", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Team Reptile\\Bomb Rush Cyberfunk", "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Team Reptile\\Bomb Rush Cyberfunk", "Screenmanager Resolution Height Default_h1380706816", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Team Reptile\\Bomb Rush Cyberfunk", "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Team Reptile\\Bomb Rush Cyberfunk", "Screenmanager Resolution Use Native Default_h1405981789", 0, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Team Reptile\\Bomb Rush Cyberfunk", "Screenmanager Resolution Use Native_h1405027254", 0, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Team Reptile\\Bomb Rush Cyberfunk", "Screenmanager Window Position X_h4088080503", Context.PosX, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Team Reptile\\Bomb Rush Cyberfunk", "Screenmanager Window Position Y_h4088080502", Context.PosY, Nucleus.RegType.DWord);

  var LAN = Context.Options["lan"];

  String[0] = "lmaobox.n2.pm:1337";

  if (LAN == "LAN") {
    String[0] = "127.0.0.1:42069";

    if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server\\SlopCrew.Server.exe")) {
      Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server\\SlopCrew.Server.exe"], false, 1, false, false);
    }
  }

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\BepInEx\\config\\SlopCrew.Plugin.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "Username =", Nucleus.SearchType.StartsWith) + "|Username = " + Context.Nickname,
    Context.FindLineNumberInTextFile(txtPath, "Address =", Nucleus.SearchType.StartsWith) + "|Address = ws://" + String[0] + "/"
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

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
