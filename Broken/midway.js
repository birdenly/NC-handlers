Game.FileSymlinkCopyInstead = [
 
        "options.txt",
		
      
]; 
Game.FileSymlinkExclusions = [ 
    "d3d9.dll",
    "d3d9.ini",
    "xinput1_3.dll",
    "Clancyman_720p.bik",' d_geoeye.bik', 'disclaimers.bik', 'logo_wide.bik','rating.bik', 'teaser_logo.bik', 'UBIPresents.bik'

]; 

Game.KillMutex = [
    "MidwayThreadMutex",
];
Game.DirSymlinkExclusions = ['Data\\Settings','Data\\Movies'];

Game.NeedsSteamEmulation = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.SupportsKeyboard = false;
Game.ExecutableName = "Battlestationsmidway.exe";
Game.SteamID = "";
Game.GUID = "Battlestations Midway";
Game.GameName = "Battlestations Midway";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Battlestations Midway";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled= false;
Game.XInputPlusDll = [];
// Game.FakeFocus= true;	
// Game.HookFocus = true;
// Game.UserProfileConfigPath = "Saved Games\\Tom Clancy's H.A.W.X\\Profiles";
Game.Description = "my attempt on pizzos handler.Create a server in both instances (same settings). Close the lobby in one instance and you will be able to join in the other player server"; 
Game.PauseBetweenStarts = 10;
// Game.SetWindowHook = true;
Game.ResetWindows = true;

// Game.ProtoInput.InjectStartup = true;
// Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
// Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
// Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

// Game.LockInputAtStart = false;
// Game.LockInputSuspendsExplorer = true;
// Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
// Game.LockInputToggleKey = 0x23;

// Game.ProtoInput.XinputHook = true;
// Game.ProtoInput.UseOpenXinput = true;  
// Game.UseForceBindIP = true;  
Game.Play = function () {

  // var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.dll");
  // var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.dll");
  // System.IO.File.Copy(savePkgOrigin, savePath, true);

  // var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.ini");
  // var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.ini");
  // System.IO.File.Copy(savePkgOrigin, savePath, true);

    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\options.txt";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'Fullscreen', Nucleus.SearchType.StartsWith) + '|Fullscreen 0',
      Context.FindLineNumberInTextFile(cfgpath, 'Resolution', Nucleus.SearchType.StartsWith) + '|Resolution '+Context.Width+' '+Context.Height,
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);

 
}