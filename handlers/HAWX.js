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
Game.UserProfileConfigPath = "Saved Games\\Tom Clancy's H.A.W.X\\Profiles";
Game.Description = "Create a server in all instances (same settings). Close the lobby in all instancecs besides the last one, now you will be able to join in the last player lobby\n\nThe consistent freezing is a game problem: https://www.pcgamingwiki.com/wiki/Tom_Clancy%27s_H.A.W.X#Consistent_freezing"; 
Game.PauseBetweenStarts = 10;
Game.SetWindowHook = true;

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
////////////////////////////////////////
  Context.PatchFileFindPattern( //X prepare
    System.IO.Path.Combine(Context.RootFolder, "HAWX.exe"),
    System.IO.Path.Combine(Context.RootFolder, "HAWX.exe"),
    "7D 08 83 65 F0 00 83 65 FC 00 0F B6 45 0B A3 3C BF DE",
    "90 90 90 90 90 90 0F B6 45 0B A3 3C BF DE 00 B8" + "99 99",
    true
  );
  Context.Wait(300); //Y prepare
  Context.PatchFileFindPattern(
    System.IO.Path.Combine(Context.RootFolder, "HAWX.exe"),
    System.IO.Path.Combine(Context.RootFolder, "HAWX.exe"),
    "8B 45 EC A3 1C BF DE 00 8B 45 E8",
    "00 A3 1C BF DE 00 B8" + "88 88" + "00 00",
    true
  );
  Context.PatchFileFindPattern( //X apply
    System.IO.Path.Combine(Context.RootFolder, "HAWX.exe"),
    System.IO.Path.Combine(Context.RootFolder, "HAWX.exe"),
      "0B A3 3C BF DE 00 B8 99 99",
      Context.Width,
      8,
      true
  );
  Context.PatchFileFindPattern( //Y apply
    System.IO.Path.Combine(Context.RootFolder, "HAWX.exe"),
    System.IO.Path.Combine(Context.RootFolder, "HAWX.exe"),
      "00 A3 1C BF DE 00 B8 88 88 00 00",
      Context.Height,
      8,
      true
  );
  Context.Wait(300);
}