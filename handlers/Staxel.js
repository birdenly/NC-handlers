Game.FileSymlinkCopyInstead = ["options.config",
"controlBindings.json",
"graphicsautodetected.config",
"lastCharacter.json",
"stats.json"
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "Staxel.Client.exe";
Game.LauncherExe = "Staxel.SteamLauncher.exe";
Game.LauncherTitle = "Staxel Launcher for Steam";
Game.SteamID = "405710";
Game.GUID = "Staxel";
Game.GameName = "Staxel";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "bin";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Staxel - Staxel 1.5.63 (210927a)";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "Run your main game once before.\n\nWhen a instance starts, click on it and move/press one of your controllers, so it locks to that screen\n\nGo into single player and create a world and allow friends to join than start the world, now all others can go into multiplayer > type 'localhost' in the server address > join server to connect\n\nTo control the instances alt+tab to each of them and click with your mouse on them or you can also press END to give them focus (works sometimes)\n\nThe game fails to run at any resolution wider than 2048 pixels";
Game.PauseBetweenProcessGrab = 35;
Game.PauseBetweenStarts = 10;


Game.UseGoldberg = true;
Game.Hook.SDL2Enabled = true; 
Game.BackupFolders = ["LocalContent"]; 

Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.FocusHooks = true;

Game.Play = function() {

  var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\LocalContent\\options.config";
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, '  "WindowMode":', Nucleus.SearchType.StartsWith) + '|  "WindowMode": 2,',
    Context.FindLineNumberInTextFile(cfgpath, '  "WindowHeight":', Nucleus.SearchType.StartsWith) + '|  "WindowHeight": ' + Context.Height + ',',
    Context.FindLineNumberInTextFile(cfgpath, '  "WindowWidth":', Nucleus.SearchType.StartsWith) + '|  "WindowWidth": ' + Context.Width + ',',
    Context.FindLineNumberInTextFile(cfgpath, '  "FullScreenHeight":', Nucleus.SearchType.StartsWith) + '|  "FullScreenHeight": ' + Context.Height + ',',
    Context.FindLineNumberInTextFile(cfgpath, '  "FullScreenWidth":', Nucleus.SearchType.StartsWith) + '|  "FullScreenWidth": ' + Context.Width + ',',
    Context.FindLineNumberInTextFile(cfgpath, '  "ScaleUIWithResolution":', Nucleus.SearchType.StartsWith) + '|  "ScaleUIWithResolution": true,',
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  if (Context.PlayerID == 0) {
    var dict1 = [
      Context.FindLineNumberInTextFile(cfgpath, '  "MusicMasterVolume":', Nucleus.SearchType.StartsWith) + '|  "MusicMasterVolume": 33,',
    ];
  }else{
    var dict1 = [
      Context.FindLineNumberInTextFile(cfgpath, '  "MusicMasterVolume":', Nucleus.SearchType.StartsWith) + '|  "MusicMasterVolume": 0,',
    ];
  }
  Context.ReplaceLinesInTextFile(cfgpath, dict1);

  var dict2 = [
    Context.FindLineNumberInTextFile(cfgpath, '  "EnableController":', Nucleus.SearchType.StartsWith) + '|  "EnableController": true,',
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict2);

};
