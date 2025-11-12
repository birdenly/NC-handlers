var answers1 = ["30", "60", "90", "120", "144"];
Game.AddOption("Select the FPS cap.", "", "fps", answers1);

Game.ExecutableContext = ["cure"];
Game.KillMutex = ["hl2_singleton_mutex","ValvePlatformUIMutex","ValvePlatformWaitMutex"];
Game.DirSymlinkExclusions = ["cure\\cfg"];
Game.FileSymlinkExclusions = ["x360controller.cfg", "autoexec.cfg", "steam_appid.txt"];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.SupportsKeyboard = true;
Game.ExecutableName = "cure.exe";
Game.SteamID = "355180";
Game.GUID = "Codename CURE";
Game.GameName = "Codename CURE";
Game.UseGoldberg = true;
Game.GoldbergNoLocalSave = true;	
Game.MaxPlayersOneMonitor = 5;
Game.MaxPlayers = 5;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Codename CURE";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.PauseBetweenStarts = 10;
Game.XInputPlusDll = ["xinput1_4.dll", "xinput9_1_0.dll", "Dinput8.dll"];
Game.HookFocus = true;
Game.Description =
    "The game has no controller support on the menus.\n\nStart a local server on the first instance. After creating a game on the first instance than accept the prompt to start others and join with the server browser in the LAN tab. If you use the keyboard click/alt-tab on the corresponding keyboard-player instance.";

Game.PromptAfterFirstInstance = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\355180";

Game.Play = function() {

  Context.StartArguments = " -windowed -noborder -game cure -AlwaysFocus -insecure -novid +m_rawinput 1 -w " + Context.Width + " -h " + Context.Height;

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\cure\\cfg\\360controller.cfg");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "360controller.cfg");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var FPS = Context.Options["fps"];

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\cure\\cfg\\autoexec.cfg";
  var lines = [
    "engine_no_focus_sleep 0", // game will not limit fps when is not focused (must used)
    "bind \"F10\" \"toggleconsole\"",
    "fps_max "+FPS // FPS limiter
  ];

  if (Player.IsKeyboardPlayer || Player.IsRawMouse || Player.IsRawKeyboard) {
    lines.push("joystick 0");
    lines.push("exec undo360controller.cfg");
  } else {
    lines.push("exec 360controller.cfg");
  }

  Context.WriteTextFile(autoExec, lines);
};
