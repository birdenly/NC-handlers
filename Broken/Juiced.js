Game.KillMutex = ["JuicedTheGame","JUICEDMUTEX"];

Game.FileSymlinkExclusions = [
"d3d9.dll",
"d3d9.ini",
"dinput8.dll",
"fixes.ini",
"JuicedFixes.asi",
"JuicedWidescreenFix.asi",
"Widescreen.ini",
];


Game.HandlerInterval = 100;
Game.SymlinkGame = true;
Game.ExecutableName = "Juiced.exe";
Game.GUID = "Juiced";
Game.GameName = "Juiced";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.Hook.ForceFocusWindowName = "Juiced";
Game.Hook.CustomDllEnabled = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description = "";
// Game.LaunchAsDifferentUsers = true;
Game.HideTaskbar = true;
// Game.EnableWindows = true; 
Game.PauseBetweenStarts = 5;
Game.PauseBetweenProcessGrab = 5;
Game.HookInit = true;
// Game.FakeFocus = true;
// Game.HookFocus = true; 
Game.PreventWindowDeactivation = true;
Game.Play = function() {

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

};
