Hub.Handler.Version = 1; // Released at https://hub.splitscreen.me/ on Sun Feb 11 2024 19:35:57 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "G4f69hFWNnWwLxm3W";
Hub.Maintainer.Name = "birden";
Hub.Maintainer.Id = "rRycxSn253ZCjQy5C";

var answers1 = ["Xbox Icons", "PlayStation Icons"];
Game.AddOption("What gamepad icons to use in-game?", "", "icons", answers1);

var answers2 = ["60", "30", "45", "75", "90", "120"];
Game.AddOption("Select the FPS cap.", "Higher frame rates may cause the game to run faster than usual.", "fps", answers2);

Game.ExecutableContext = ["NFSU_icon.ico"];

Game.FileSymlinkExclusions = [
  "dinput8.dll",
  "news.txt",
  "nfsu.conf",
  "nfsuclient.exe",
  "nfsuserver.exe",
  "nfsuserver_svc.exe",
  "buttons-playstation.tpk",
  "buttons-xbox.tpk",
  "NFSUExtraOptions+.asi",
  "NFSUExtraOptions+Settings.ini",
  "NFSUnderground.WidescreenFix.asi",
  "NFSUnderground.WidescreenFix.dat",
  "NFSUnderground.WidescreenFix.ini",
  "nointro.mad",
  "ZPatchU1.asi",
  "ZPatchU1.ini",
  "d3d9.dll"
];

Game.FileSymlinkCopyInstead = ["NFSU_icon.ico", "00000000.016", "00000000.256", "dimap.dll", "filelist.txt"];

Game.DirExclusions = ["scripts", "1"];

Game.ExecutableContext = ["NFSU_icon.ico"];

Game.KillProcessesOnClose = ["cmd", "nfsuclient", "nfsuserver"];
Game.GameName = "Need for Speed Underground";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "Speed.exe";
Game.SteamID = "";
Game.GUID = "Need for Speed Underground";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "NFS Underground";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "IMPORTANT: LOOK FOR PROMPTS IN YOUR SCREEN FOR INSTRUCTIONS WHILE THE GAME IS OPENNING. IF YOU GET A ERROR SAYING 'it couldn't write to the windows hosts file' START NUCLEUS WITH ADMIN ONCE AND RUN THE HANDLER. ALSO DONT HAVE ANY MODS INSTALLED SOME WILL BREAK RESIZING/RESOLUTION OR THE CONTROLLERS.\n\nVertical split will cause menus/HUDs to be cut off.\n\nThe saves per instance are stored inside Nucleus Co-op content folder so if you delete Nucleus or the game content folder, your Nucleus saves for this game will be lost(not your main game save).\n\nEither use the already created profiles or create a different profile for each instance, than login to it. Go into 'play online' go into 'create new EA account', you can put any name/email after creating it you will be able to use it to go into online. Creating accounts is only done once.\n\nAfter you get into online, each mode will have a 'Global' lobby, join it with each player, after doing so one player can go to the right, create a lobby and all others can join.\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 5;

Game.HideTaskbar = true;
Game.SetWindowHook = true;
Game.FakeFocus = true;

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

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.Play = function() {
  var ICONS = Context.Options["icons"];
  var FPS = Context.Options["fps"];

  Context.RunAdditionalFiles(["1|" + Context.ScriptFolder + "\\nfsuserver.exe"], false, "Press 'ok' when the server starts.", 0, false, false, true, false);
  Context.RunAdditionalFiles(
    ["1|" + Context.ScriptFolder + "\\nfsuclient.exe"],
    false,
    "Press 'ok' on the error that appears. After doing so, press 'Find local servers' a server with the name 'Nucleus Co-op server' will appear, press it and click 'Use server' after doing so press 'ok' on this prompt.",
    5,
    false,
    false,
    true,
    false
  );

  if (!System.IO.Directory.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts")) {
    System.IO.Directory.CreateDirectory(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts");
  }

  if (!System.IO.Directory.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1")) {
    System.IO.Directory.CreateDirectory(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1");
    System.IO.Directory.CreateDirectory(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground");

    if (Context.PlayerID == 0) {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player1.cfg");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player1\\player1.cfg");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player1.opt");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player1\\player1.opt");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player1_autosave.ugd");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player1\\player1_autosave.ugd");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player10.pro");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player1\\player10.pro");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\Profiles.usr");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player1\\Profiles.usr");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    } else if (Context.PlayerID == 1) {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player2.cfg");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player2\\player2.cfg");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player2.opt");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player2\\player2.opt");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player2_autosave.ugd");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player2\\player2_autosave.ugd");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player20.pro");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player2\\player20.pro");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\Profiles.usr");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player2\\Profiles.usr");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    } else if (Context.PlayerID == 2) {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player3.cfg");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player3\\player3.cfg");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player3.opt");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player3\\player3.opt");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player3_autosave.ugd");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player3\\player3_autosave.ugd");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player30.pro");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player3\\player30.pro");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\Profiles.usr");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player3\\Profiles.usr");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    } else if (Context.PlayerID == 3) {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player4.cfg");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player4\\player4.cfg");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player4.opt");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player4\\player4.opt");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player4_autosave.ugd");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player4\\player4_autosave.ugd");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\player40.pro");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player4\\player40.pro");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\1\\NFS Underground\\Profiles.usr");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Player4\\Profiles.usr");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }
  }

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dinput8.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dinput8.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\buttons-playstation.tpk");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "scripts\\buttons-playstation.tpk");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\buttons-xbox.tpk");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "scripts\\buttons-xbox.tpk");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSUExtraOptions+.asi");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "scripts\\NFSUExtraOptions+.asi");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSUExtraOptions+Settings.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "scripts\\NFSUExtraOptions+Settings.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSUnderground.WidescreenFix.asi");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "scripts\\NFSUnderground.WidescreenFix.asi");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSUnderground.WidescreenFix.dat");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "scripts\\NFSUnderground.WidescreenFix.dat");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSUnderground.WidescreenFix.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "scripts\\NFSUnderground.WidescreenFix.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\nointro.mad");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "scripts\\nointro.mad");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSU_XtendedInput.ini");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "scripts\\NFSU_XtendedInput.ini");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSU_XtendedInput.asi");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "scripts\\NFSU_XtendedInput.asi");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  let chosenX;
  let chosenW;
  if (ICONS == "Xbox Icons") {
    chosenX = 0;
    chosenW = 1;
  } else {
    chosenX = 1;
    chosenW = 2;
  }

  var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSUnderground.WidescreenFix.ini";
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, "FPSLimit", Nucleus.SearchType.StartsWith) + "|FPSLimit = " + FPS,
    Context.FindLineNumberInTextFile(cfgpath, "ImproveGamepadSupport", Nucleus.SearchType.StartsWith) + "|ImproveGamepadSupport = " + chosenW,
    Context.FindLineNumberInTextFile(cfgpath, "ResX", Nucleus.SearchType.StartsWith) + "|ResX = " + Context.Width,
    Context.FindLineNumberInTextFile(cfgpath, "ResY", Nucleus.SearchType.StartsWith) + "|ResY = " + Context.Height
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSU_XtendedInput.ini";
  var dict = [Context.FindLineNumberInTextFile(cfgpath, "ControllerIconMode", Nucleus.SearchType.StartsWith) + "|ControllerIconMode = " + chosenX];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

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
