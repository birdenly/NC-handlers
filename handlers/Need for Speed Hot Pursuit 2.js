var answers1 = ["No","Yes"];
Game.AddOption('Enable graphics "mod"?', "This will Increase distance in which particles fade out and have betten reflection\nIf you select no, it will go back to default", "fix", answers1);

var answers2 = ["No Change","30", "45", "60", "75", "90", "120"];
Game.AddOption("Select the FPS cap.", "Select 'No Change' to use the previous or default settings", "fps", answers2);
Game.FileSymlinkExclusions = [
"dinput8.dll",
"d3d8.dll",
"global.ini",
"HP2WSFix.asi",
"HP2WSFix.ini",
"HP2WSFix_LowMem.ini",
"d3d9.ini",
"d3d9.dll",
"defaults.ini",
"definitions.ini",
];
Game.KillMutex = ["hp2.exe_RUNNING_MUTEX"];
Game.FileSymlinkCopyInstead = [
"00000000.016",
"00000000.256",
"DrvMgt.dll",
"filelist.txt",
"memory.TXT",
"RTA84820", "SECDRV.SYS",
"Win2kHook.dll",
"LOD.ini",
"reflection.ini",
];

Game.DirExclusions = ["scripts"];

Game.GameName = "Need for Speed Hot Pursuit 2";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "nfshp2.exe";
Game.GUID = "Need for Speed Hot Pursuit 2";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Need for Speed Hot Pursuit 2";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = ["xinput1_4.dll","dinput.dll","dinput8.dll"];
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "Use you keyboard/mouse to navigate the menus. sometimes the mouse may not work on them, so click the screen and use the keyboard (will happen with resolutions that are only reconized as fullscreen by the game).\n\nHost a LAN multiplayer race in one instance and join in with others on the LAN race list.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 5;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\EA Games\\Need For Speed Hot Pursuit 2";
Game.UserProfileConfigPathNoCopy = true;
Game.HideTaskbar = true;
Game.FakeFocus = true;
Game.ResetWindows = true; 
Game.Play = function() {
  
  if (Context.PlayerID == 0) {var SK = "82497EE384EWTXGA"}
  if (Context.PlayerID == 1) {var SK = "82497EE384EWTXGB"}
  if (Context.PlayerID == 2) {var SK = "82497EE384EWTXGX"}
  if (Context.PlayerID == 3) {var SK = "82497EE384EWTXGJ"}
  // if (Context.PlayerID == 4) {var SK = "82497EE384EWTXGE"}
  // if (Context.PlayerID == 5) {var SK = "82497EE384EWTXGH"}
  // if (Context.PlayerID == 6) {var SK = "82497EE384EWTXGT"}
  // if (Context.PlayerID == 7) {var SK = "82497EE384EWTXGY"}

  Context.EditRegKey("HKEY_LOCAL_MACHINE", "SOFTWARE\\WOW6432Node\\Electronic Arts\\EA Games\\Need For Speed Hot Pursuit 2\\ergc", "", SK, Nucleus.RegType.String);

  var fix = Context.Options["fix"];
  if(fix=="Yes"){
  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Cars\\reflection.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("brightness", "red", 125),
    new Nucleus.IniSaveInfo("brightness", "green", 125),
    new Nucleus.IniSaveInfo("brightness", "blue", 125),
  ]);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\EAGL\\LOD.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("max", "worldParticle.farFadeIn", 960),
    new Nucleus.IniSaveInfo("max", "worldParticle.farFadeOut", 990),
  ]);
  }else{//default back
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Cars\\reflection.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("brightness", "red", 50),
      new Nucleus.IniSaveInfo("brightness", "green", 50),
      new Nucleus.IniSaveInfo("brightness", "blue", 50),
    ]);
  
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\EAGL\\LOD.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("max", "worldParticle.farFadeIn", 325.0),
      new Nucleus.IniSaveInfo("max", "worldParticle.farFadeOut", 350),
    ]);
  }

  if (!Context.IsKeyboardPlayer) {
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId),
      new Nucleus.IniSaveInfo("X2DInput", "LT", "Z_Axis(+)"),
      new Nucleus.IniSaveInfo("X2DInput", "RT", "Z_Axis(-)"),
      new Nucleus.IniSaveInfo("X2DInput", "OverrideDeviceName", "True"),
      new Nucleus.IniSaveInfo("X2DInput", "DeviceName", "Controller (XBOX 360 for Windows)")
    ]);
  } 
  
  Context.StartArguments = "-nofrustration"
  
  var script = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\HP2WSFix.asi";
  if (!System.IO.File.Exists(script)) {
    Context.CopyFolder(Context.ScriptFolder+"\\mods", Context.GetFolder(Nucleus.Folder.InstancedGameFolder));
  }

  var config = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\rendercaps.ini";
  if (!System.IO.File.Exists(config)) {
    System.IO.Directory.CreateDirectory(Context.EnvironmentPlayer + "\\Documents\\EA Games");
    System.IO.Directory.CreateDirectory(Context.EnvironmentPlayer + "\\Documents\\EA Games\\Need For Speed Hot Pursuit 2");

    Context.CopyFolder(Context.ScriptFolder+"\\save", Context.EnvironmentPlayer + Context.UserProfileConfigPath);
  }

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\rendercaps.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Graphics", "Fullscreen", 0),
    new Nucleus.IniSaveInfo("Graphics", "LimitResolution", 0),
    new Nucleus.IniSaveInfo("Graphics", "Width", Context.Width),
    new Nucleus.IniSaveInfo("Graphics", "Height", Context.Height),
    new Nucleus.IniSaveInfo("Graphics", "ScreenModeIndex", "-1"),
    new Nucleus.IniSaveInfo("GraphicsFE", "ScreenModeIndex", "-1"),
    new Nucleus.IniSaveInfo("GraphicsFE", "Width", Context.Width),
    new Nucleus.IniSaveInfo("GraphicsFE", "Height", Context.Height)
  ]);

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\netprefs.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Settings", "playerName", Context.Nickname),
  ]);
  var FPS = Context.Options["fps"];
  if(FPS !="No Change"){
    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.ini";
    var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'FPSLimit', Nucleus.SearchType.StartsWith) + '|FPSLimit = ' + FPS,
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  }
};
