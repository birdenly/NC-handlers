Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "PixelSandSteam.exe";
Game.GUID = "Pixel Sand"
Game.SteamID = "584880";
Game.GameName = "Pixel Sand";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Pixel Sand";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_4.dll", "xinput9_1_0.dll"];
Game.Description =
  "IMPORTANT: Run your main game once fist. Go into multiplayer > type localhost in the IP field > Host, Use connect for other instances. Besides the infinite level, all others you will be a ghost.\n\nMultiplayer has 2 modes: On the infinite level you can interact with each other. On the campaign, players will be a ghost on the other players lobby (each player does their own level, no interaction)";
Game.PauseBetweenProcessGrab = 15;
Game.PauseBetweenStarts = 15;

Game.FakeFocus = true;
Game.HookFocus = true;	
Game.NeedsSteamEmulation = true;
Game.SetWindowHook = true;		
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\PixelSand";
Game.UserProfileSavePath = "AppData\\Roaming\\SmartSteamEmu\\241720";
Game.SupportsKeyboard = true;

Game.Play = function() {

  var cfgpath = Context.DocumentsPlayer + "PixelSand\\Options\\Options.space";
   var dict = [
     Context.FindLineNumberInTextFile(cfgpath, '    Screen =', Nucleus.SearchType.StartsWith) + '|    Screen = [1]',
   ];
   Context.ReplaceLinesInTextFile(cfgpath, dict);
};
