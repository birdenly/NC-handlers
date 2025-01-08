var answers1 = ["30","60","90","120","144"];
Game.AddOption("Select the FPS cap.", "", "fps", answers1);

Game.KillMutex = ["Game Stock Car_APP_MUTEX_","GIDPlugin"];
Game.FileSymlinkCopyInstead = [
"Config.ini",
"GSC.ini",
"RealFeelPlugin.ini",
"TrackMapPlugin.ini",
"Digital Gamepad.ini",
"keyboard.ini",
"LogitechDFP360Degrees.ini",
"LogitechG25.ini",
"LogitechG27 Stick.ini",
"LogitechG27.ini",
"LogitechWingManFF.ini",
"teclado.ini",
"xbox360 Gamepad.ini",
"KnownRFMs.ini",
"vehicledata.spt",
"bans.txt",
];
Game.FileSymlinkExclusions = [
"antilag.cfg",
"d3d9.dll"
  ];
Game.DirExclusions = ["USERDATA\\player1","USERDATA\\player2","USERDATA\\player3","USERDATA\\player4"];
Game.DirSymlinkExclusions = ["USEDATA"];
Game.BackupFolders = ["USERDATA"];

Game.GameName = "Game Stock Car";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "GSC.exe";
Game.GUID = "Game Stock Car";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Game Stock Car v1.700";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = ["xinput1_4.dll","dinput8.dll","dinput.dll","xinput1_3.dll"];
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "IMPORTANT:Wait for everything to setup before interacting with the screens.\n\nUse you keyboard/mouse to navigate the menus.\n\nIF SOMETHING IS LOADING STAY ON THAT SCREEN OR IT MIGHT CRASH, THE GAME IS REALLY UNSTABLE\n\nHost a LAN multiplayer race in one instance and join in with others, if the match doesnt appear on the list either refresh the list or click the + icon, type 127.0.01 and press OK.\n\nWhen ready, press END to balance FPS\n\nIn case someones car has no model, go back to the garage and go back in the race";
Game.PauseBetweenProcessGrab = 6;
Game.PauseBetweenStarts = 6;
Game.HideTaskbar = true;
Game.ResetWindows = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 10, true, true, true, true, true);

    System.Threading.Thread.Sleep(1000);

    ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
  }
};

Game.Play = function() {

  Game.UseProcessor = (Context.PlayerID + 1);

  var FPS = Context.Options["fps"];

  var config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Config.ini";
  Context.ModifySaveFile(config, config, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("COMPONENTS", "WidescreenUI", 1),
    new Nucleus.IniSaveInfo("COMPONENTS", "WindowedMode", 1),
    new Nucleus.IniSaveInfo("COMPONENTS", "CustomVidRes", "("+ Context.Width + "," + Context.Height +")"),
    new Nucleus.IniSaveInfo("COMPONENTS", "VSync", 0),
  ]);
  
  var multiplayer = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\USERDATA\\player"+ (Context.PlayerID + 1) +"\\Multiplayer.ini";
  if (!System.IO.File.Exists(multiplayer)) {

    let Savefolder = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\USERDATA\\player"+ (Context.PlayerID + 1)

    System.IO.Directory.CreateDirectory(Savefolder);
    Context.CopyFolder(Context.ScriptFolder + "\\files", Savefolder);

    var savePath = Savefolder + "\\player"+(Context.PlayerID + 1)+".PLR";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "player1.PLR");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
    
  }

  Context.ModifySaveFile(multiplayer, multiplayer, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo(" Multiplayer General Options ", "Net Connection Type", "5"),
    new Nucleus.IniSaveInfo(" Multiplayer General Options ", "Multiplayer Enum Type", "0"),
    new Nucleus.IniSaveInfo(" Multiplayer General Options ", "Gamelist AutoRefresh (LAN)", 1),
    new Nucleus.IniSaveInfo(" Multiplayer General Options ", "Default IP Address", "127.0.0.1"),
    new Nucleus.IniSaveInfo(" Multiplayer General Options ", "Enable Voice Chat", "0"),
    new Nucleus.IniSaveInfo(" Multiplayer General Options ", "Lobby Chat Nickname", Context.Nickname),
    new Nucleus.IniSaveInfo(" Multiplayer Server Options ", "Default Game Name", "Nucleus Coop"),
  ]);

  var Path = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\USERDATA\\player"+ (Context.PlayerID + 1) + "\\player"+(Context.PlayerID + 1)+".PLR";
  var dict = [
    Context.FindLineNumberInTextFile(Path, 'Unique ID=', Nucleus.SearchType.StartsWith) + '|Unique ID="'+(6650+Context.PlayerID)+'"',
    Context.FindLineNumberInTextFile(Path, 'Widescreen Overlays=', Nucleus.SearchType.StartsWith) + '|Widescreen Overlays="1"',
    Context.FindLineNumberInTextFile(Path, 'Max Framerate=', Nucleus.SearchType.StartsWith) + '|Max Framerate="'+FPS+'"',

  ];
  Context.ReplaceLinesInTextFile(Path, dict);

  if (Context.PlayerID != 0) {
    var dict = [
      Context.FindLineNumberInTextFile(Path, 'Music=', Nucleus.SearchType.StartsWith) + '|Music="0"',
      Context.FindLineNumberInTextFile(Path, 'Music Volume=', Nucleus.SearchType.StartsWith) + '|Music Volume="0.0"',
    ];
    Context.ReplaceLinesInTextFile(Path, dict);
  }else{
    var dict = [
      Context.FindLineNumberInTextFile(Path, 'Music=', Nucleus.SearchType.StartsWith) + '|Music="1"',
      Context.FindLineNumberInTextFile(Path, 'Music Volume=', Nucleus.SearchType.StartsWith) + '|Music Volume="0.5"',
    ];
    Context.ReplaceLinesInTextFile(Path, dict);
  }
};
