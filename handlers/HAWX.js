Game.FileSymlinkCopyInstead = [
 
        "binkw32.dll", 
		"eax.dll",  
		"setting.lua", 
		"FirewallInstallHelper.dll", 
		"GameuxInstallHelper.dll", 
		"input_filters.cfg",
    "autodetect.ini",
    "settings.ini",
    "MappaingIcons.txt"
		
      
]; 
Game.FileSymlinkExclusions = [ 
    "d3d9.dll",
    "d3d9.ini",
    "xinput1_3.dll",
    "Clancyman_720p.bik",' d_geoeye.bik', 'disclaimers.bik', 'logo_wide.bik','rating.bik', 'teaser_logo.bik', 'UBIPresents.bik'

]; 

Game.KillMutex = [
    "Tom Clancy's H.A.W.X",
];
Game.DirSymlinkExclusions = ['Data\\Settings','Data\\Movies'];

Game.NeedsSteamEmulation = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.SupportsKeyboard = false;
Game.ExecutableName = "HAWX.exe";
Game.SteamID = "";
Game.GUID = "HAWX";
Game.GameName = "Tom Clancy's H.A.W.X";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Tom Clancy's H.A.W.X";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled= false;
Game.XInputPlusDll = ["xinput1_3.dll","xinput1_4.dll","dinput8.dll"];
Game.FakeFocus= true;	
Game.HookFocus = true;
Game.UserProfileConfigPath = "Saved Games\\Tom Clancy's H.A.W.X\\Profiles";
Game.Description = "my attempt on pizzos handler. Go into settings and choose the right resolution. Create a server in both instances (same settings). Close the lobby in one instance and you will be able to join in the other player server"; 
Game.PauseBetweenStarts = 10;
Game.SetWindowHook = true;
Game.ResetWindows = true;


Game.Play = function () {

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.dll");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var cfgpath = Context.NucleusUserRoot +"\\" +Context.UserProfileConfigPath + "\\_settings_0.1.525.ini"; 
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'mode', Nucleus.SearchType.StartsWith) + '|mode = -1',
      Context.FindLineNumberInTextFile(cfgpath, 'windowed', Nucleus.SearchType.StartsWith) + '|windowed = true',
      Context.FindLineNumberInTextFile(cfgpath, 'width', Nucleus.SearchType.StartsWith) + '|width = '+Context.Width,
      Context.FindLineNumberInTextFile(cfgpath, 'height', Nucleus.SearchType.StartsWith) + '|height = '+Context.Height,
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);

    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Data\\Settings\\settings.ini";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'mode', Nucleus.SearchType.StartsWith) + '|mode = -1',
      Context.FindLineNumberInTextFile(cfgpath, 'windowed', Nucleus.SearchType.StartsWith) + '|windowed = true',
      Context.FindLineNumberInTextFile(cfgpath, 'width', Nucleus.SearchType.StartsWith) + '|width = '+Context.Width,
      Context.FindLineNumberInTextFile(cfgpath, 'height', Nucleus.SearchType.StartsWith) + '|height = '+Context.Height,
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.ini";
    Context.ReplaceLinesInTextFile(
    txtPath,
    [
    Context.FindLineNumberInTextFile(txtPath, "OverrideRes=", Nucleus.SearchType.StartsWith) + "|OverrideRes=" + Context.Width + "x" + Context.Height,
    
    ]);

  if (Context.IsKeyboardPlayer) {
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", "")
    ]);
  } else {
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
    ]);
  }

    //enable music only on first instance
    if (Context.PlayerID == 0) {
    var savePath = Context.NucleusUserRoot +"\\"+ Context.UserProfileConfigPath + "\\_settings_0.1.525.ini";  
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [ 
        new Nucleus.IniSaveInfo("Sound", "musicvolume", " 1.000000"),  
    ]); 
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Data\\Settings\\settings.ini";  
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [ 
            new Nucleus.IniSaveInfo("Sound", "musicvolume", "1.000000"),   
    ]); 
    } 
    else {
    var savePath = Context.NucleusUserRoot +"\\"+ Context.UserProfileConfigPath + "\\_settings_0.1.525.ini";  
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [ 
        new Nucleus.IniSaveInfo("Sound", "musicvolume", " 0.000000"),  
    ]);
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Data\\Settings\\settings.ini";  
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [ 
            new Nucleus.IniSaveInfo("Sound", "musicvolume", "0.000000"),   
    ]); 
    }
 
}