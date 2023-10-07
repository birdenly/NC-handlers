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
Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt","steam_emu.ini","steam_api64.cdx"];

Game.UseGoldberg = true;
Game.UseNemirtingasGalaxyEmu = true; 
// Game.GoldbergExperimental = true; 
// Game.GoldbergExperimentalSteamClient = true;  
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
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
  var idg = Context.PlayerID + 6;
var jsonPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ngalaxye_settings\\NemirtingasGalaxyEmu.json"; //The string should be changed so that ngalaxye_settings is in the same folder as it was in Step 6.
var params = [
'{',
'  "api_version": "1.144.1.0",', //Must be changed or the game cannot connect to LAN. API version can be found by right-clicking the original Galaxy64.dll, clicking the 'Details' tab and reading the File Version tag.
'  "enable_overlay": false,',
'  "galaxyid": 14549624462898294' + idg + ',',
'  "language": ' + '"' + Context.GogLang + '",',
'  "productid": 1549165795,', //Must be changed or the game will crash. Product ID can be found by visitng https://www.gogdb.org/
'  "username": ' + '"' + Context.Nickname + '"', //Must always be added and must be the last line or else the emulator will reset all parameters (there is no comma at the end of this line in the json).
'}'
];

Context.WriteTextFile(jsonPath,params);
};
