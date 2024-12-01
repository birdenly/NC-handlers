var answers1 = ["60", "30", "45", "75", "90", "120"];
Game.AddOption("Select the FPS cap.", "", "fps", answers1);

Game.FileSymlinkExclusions = ["Controller.cfg", "nzportable64.exe"];

Game.FileSymlinkCopyInstead = ["default.cfg", "fte.cfg"];

Game.GameName = "Nazi Zombies portable";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "nzportable-sdl64.exe";
Game.ExecutableToLaunch = "nzportable64.exe";
Game.SteamID = "";
Game.GUID = "Nazi Zombies portable";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.BinariesFolder = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Nazi Zombies: Portable";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = ["Xinput1_4.dll"];
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "Tested with the win64 version of the game downloaded from here: https://github.com/nzp-team/nzportable/releases/tag/nightly\n\nIn the first instance make a cooperative game. After that click the prompt to launch the rest of the instances.\n\nAlt+tab to the keyboard/mouse screen if you have one, it will work properly when all screens do a soft restart.\n\nIn case one of the instances are in limbo after it joins a match, just restart the match.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 5;

Game.SupportsKeyboard = true;
Game.KeyboardPlayerSkipFakeFocus = true;
Game.HideTaskbar = true;
Game.PromptAfterFirstInstance = true;
Game.RefreshWindowAfterStart = true;
Game.FakeFocus = true;

Game.Play = function() {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\nzportable64.exe");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "nzportable64.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  Game.ExecutableName = "nzportable64.exe";;

  var FPS = Context.Options["fps"];
  var start = "";

  var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\nzp\\nzportable.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, "cl_idlefps", Nucleus.SearchType.StartsWith) + '|cl_idlefps "' + FPS + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'cl_maxfps "', Nucleus.SearchType.StartsWith) + '|cl_maxfps "' + FPS + '"',
    Context.FindLineNumberInTextFile(cfgpath, "show_fps", Nucleus.SearchType.StartsWith) + '|show_fps "1"',
    Context.FindLineNumberInTextFile(cfgpath, "vid_height", Nucleus.SearchType.StartsWith) + '|vid_height "' + Context.Height + '"',
    Context.FindLineNumberInTextFile(cfgpath, "vid_width", Nucleus.SearchType.StartsWith) + '|vid_width "' + Context.Width + '"',
    Context.FindLineNumberInTextFile(cfgpath, "vid_fullscreen", Nucleus.SearchType.StartsWith) + '|vid_fullscreen "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'in_windowed_mouse "1"', Nucleus.SearchType.StartsWith) + '|in_windowed_mouse "1"',
    Context.FindLineNumberInTextFile(cfgpath, "name", Nucleus.SearchType.StartsWith) + '|name "' + Context.Nickname + '"',
    Context.FindLineNumberInTextFile(cfgpath, "seta vid_ultrawide_limiter", Nucleus.SearchType.StartsWith) + '|seta vid_ultrawide_limiter "0"'
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);


  if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\nzp\\user_settings.cfg")) {

    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\nzp\\user_settings.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, "cl_idlefps", Nucleus.SearchType.StartsWith) + '|cl_idlefps "' + FPS + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'cl_maxfps "', Nucleus.SearchType.StartsWith) + '|cl_maxfps "' + FPS + '"',
      Context.FindLineNumberInTextFile(cfgpath, "show_fps", Nucleus.SearchType.StartsWith) + '|show_fps "1"',
      Context.FindLineNumberInTextFile(cfgpath, "vid_height", Nucleus.SearchType.StartsWith) + '|vid_height "' + Context.Height + '"',
      Context.FindLineNumberInTextFile(cfgpath, "vid_width", Nucleus.SearchType.StartsWith) + '|vid_width "' + Context.Width + '"',
      Context.FindLineNumberInTextFile(cfgpath, "vid_fullscreen", Nucleus.SearchType.StartsWith) + '|vid_fullscreen "0"',
      Context.FindLineNumberInTextFile(cfgpath, 'in_windowed_mouse "1"', Nucleus.SearchType.StartsWith) + '|in_windowed_mouse "1"',
      Context.FindLineNumberInTextFile(cfgpath, "name", Nucleus.SearchType.StartsWith) + '|name "' + Context.Nickname + '"',
      Context.FindLineNumberInTextFile(cfgpath, "seta vid_ultrawide_limiter", Nucleus.SearchType.StartsWith) + '|seta vid_ultrawide_limiter "0"'
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);

  }

  if (Context.PlayerID != 0) {
    start += " +connect 127.0.0.1";
  }

  Context.StartArguments = start;
};
