Game.DirSymlinkExclusions = ["Prodeus_Data\\Plugins\\x86_64"];
Game.ExecutableContext = [ 
  "Prodeus_Data",
];
Game.FileSymlinkCopyInstead = [
  "UnityCrashHandler64.exe",
  "UnityPlayer.dll",
  "GameAssembly.dll",
  "baselib.dll"
];

Game.UseGoldberg = true;
Game.GoldbergExperimental = true; 
// Game.GoldbergExperimentalSteamClient = true;  
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = false;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = false;
Game.ExecutableName = "Prodeus.exe";
Game.SteamID = "964800";
Game.GUID = "Prodeus";
Game.GameName = "Prodeus";
Game.MaxPlayers = 32;
Game.MaxPlayersOneMonitor = 32;
Game.LauncherTitle = "";
Game.HideTaskbar = false;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Prodeus";
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description = "";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;

Game.SupportsKeyboard = true;

Game.Play = function() {
};
