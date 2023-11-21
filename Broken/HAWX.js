Game.FileSymlinkCopyInstead = [
 
        "binkw32.dll", 
		"eax.dll",  
		"setting.lua", 
		"FirewallInstallHelper.dll", 
		"GameuxInstallHelper.dll", 
		"input_filters.cfg",
		
      
]; 
Game.FileSymlinkExclusions = [ 
    "d3d9.dll",
    "d3d9.ini",

]; 

Game.KillMutex = [
    "Tom Clancy's H.A.W.X",
];

Game.NeedsSteamEmulation = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.SupportsKeyboard = false;
Game.UseNucleusEnvironment = true;
Game.ExecutableName = "HAWX.exe";
Game.SteamID = "";
Game.GUID = "HAWX";
Game.GameName = "Tom Clancy's H.A.W.X";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Tom Clancy's H.A.W.X";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled= false;
Game.XInputPlusDll = [];
Game.FakeFocus= false;	
Game.HookFocus = true;
Game.UserProfileConfigPath = "Saved Games\\Tom Clancy's H.A.W.X\\Profiles";
Game.Description = "my attempt on pizzos handler.Create a server in both instances (same settings). Close the lobby in one instance and you will be able to join in the other player server"; 
Game.PauseBetweenStarts = 15;

Game.SetWindowHook = true;
Game.ResetWindows = true;

Game.ProtoInput.InjectStartup = true;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;


Game.Play = function () {

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.dll");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\_settings_0.1.525.ini";  
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [ 
        new Nucleus.IniSaveInfo("Video", "windowed", "true"), 
        new Nucleus.IniSaveInfo("Video", "width", Context.Width), 
        new Nucleus.IniSaveInfo("Video", "height", Context.Height), 
    ]); 
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Data\\Settings\\settings.ini";  
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [ 
        new Nucleus.IniSaveInfo("Video", "windowed", "true"), 
        new Nucleus.IniSaveInfo("Video", "width", Context.Width), 
        new Nucleus.IniSaveInfo("Video", "height", Context.Height), 
    ]); 

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Window.System", "OverrideRes", Context.Width + "x" + Context.Height)
    ]);

    //enable music only on first instance
    if (Context.PlayerID == 0) {
    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\_settings_0.1.525.ini";  
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [ 
        new Nucleus.IniSaveInfo("Sound", "musicvolume", "1.000000"),  
    ]); 
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Data\\Settings\\settings.ini";  
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [ 
            new Nucleus.IniSaveInfo("Sound", "musicvolume", "1.000000"),   
    ]); 
    } 
    else {
    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\_settings_0.1.525.ini";  
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [ 
        new Nucleus.IniSaveInfo("Sound", "musicvolume", "0.000000"),  
    ]);
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Data\\Settings\\settings.ini";  
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [ 
            new Nucleus.IniSaveInfo("Sound", "musicvolume", "0.000000"),   
    ]); 
    }

    var numPlayers = 0;

    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];
  
      if (player.IsXInput && player.ScreenIndex !== -1) {
        numPlayers++;
      }
      player.ProtoController1 = Context.GamepadId;
      player.ProtoController2 = Context.GamepadId;
      player.ProtoController3 = Context.GamepadId;
      player.ProtoController4 = Context.GamepadId;
      player.ProtoController5 = Context.GamepadId;
      player.ProtoController6 = Context.GamepadId;
      player.ProtoController7 = Context.GamepadId;
      player.ProtoController8 = Context.GamepadId;
      player.ProtoController9 = Context.GamepadId;
    }
 
}