Game.ExecutableContext = [ 
    "engine_x64_rwdi.dll",
    "DW",
];
Game.KillMutex = [
    "ChromeEngine4DIMutex",         
];
Game.UseNucleusEnvironment = true;
Game.SteamlessArgs = "--quiet --keepbind";     
Game.UseSteamless = true;  
Game.UseGoldberg = true;
Game.GoldbergExperimental = true; 
Game.GoldbergExperimentalSteamClient = true; 
Game.UseEACBypass = true; 
Game.GoldbergNoLocalSave = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.ExecutableName = "BadBloodGame.exe";
Game.ExecutableToLaunch = "BadBloodGameLauncher.exe";
Game.SteamID = "239140";
Game.GUID = "Dying Light Bad Blood";
Game.GameName = "Dying Light Bad Blood";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.LauncherTitle = "";
Game.HideTaskbar = false;
Game.StartArguments = "";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Bad Blood";
Game.PreventWindowDeactivation = true;
Game.KeyboardPlayerSkipPreventWindowDeactivate = true;
Game.HookFocus = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = ["xinput1_3.dll", "xinput1_4.dll"];
Game.Hook.CustomDllEnabled = false;
Game.SupportsKeyboard = true;
Game.UserProfileConfigPath = "Documents\\DLBadBlood\\out\\settings";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\766370\\remote";
Game.UserProfileConfigPathNoCopy = false;
Game.UserProfileSavePathNoCopy = true;	
Game.Description = "Run the game from the respective launcher once in order to create the game configuration files. All players must have completed the tutorial in order to unlock multiplayer. When multiplayer is unlocked for all, open the pause menu, set network mode to public and select the player you wanna join in the friends list (bottom right).";
Game.PauseBetweenStarts = 10;

Game.Play = function () {


    
	var cfgpath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\video.scr";
    var dict = [
    Context.FindLineNumberInTextFile(cfgpath, "Resolution", Nucleus.SearchType.StartsWith) + '|Resolution(' + Context.Width + ',' + Context.Height + ')',
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);

	var fsLine = Context.FindLineNumberInTextFile(cfgpath, "Fullscreen", Nucleus.SearchType.StartsWith);
	Context.RemoveLineInTextFile(cfgpath ,fsLine);

	
    var filePath = Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings";
    System.IO.Directory.CreateDirectory(filePath);	

    var dlc = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\DLC.txt";
    var lines = [
    "906860=Dying Light Bad Blood Founders Pack",

    ];
    Context.WriteTextFile(dlc, lines);	


    Context.StartArguments = " -nologos";

    var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\disable_lan_only.txt";
    var lines = [];
    Context.WriteTextFile(timese, lines);
        
}