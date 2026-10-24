Game.FileSymlinkExclusions = [
"dxwrapper.ini",
"dxwrapper.asi",
"dxwrapper.dll",
"SupremeSnowboardingFOVFix.asi",
"SupremeSnowboardingFOVFix.ini",
"winmm.dll",
"Display_Config.exe",
"Control_Config.txt",
"bcrypt.dll"
];
Game.FileSymlinkCopyInstead = [
"rd_config.txt", "BoarderZ.exe", "Supreme.exe"
];
Game.KillMutex = ["Supreme Snowboarding"];
Game.ExecutableContext = ["Supreme","Display_Config.exe"];
Game.ExecutableNames = ["Supreme.exe", "BoarderZ.exe"];
Game.GameName = "Supreme Snowboarding";
Game.GUID = "Supreme Snowboarding";
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.MaxPlayers = 4;
Game.HandlerInterval = 100;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Boarder Zone ©1999 Infogrames. Designed and developed by Housemarque.";
Game.HasDynamicWindowTitle = true;//supreme gives a different name
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["dinput.dll", "dinput8.dll", "xinput1_3.dll"];
Game.Description = "Press OK fast on the initial error, after doing so the game will open normally. Go into multiplayer, start a server then a network game and join in with others. Use your mouse for menus.\n\nThis handler comes with pre-configured Dxwrapper (https://github.com/elishacloud/dxwrapper) and the FOV fix by AlphaYellow (https://community.pcgamingwiki.com/files/file/3199-supreme-snowboarding-fov-fix/) like its said in the description of the fix really wide resolution can cause visual problems, so avoid horizontal split. Sadly the game is pretty unstable even with the fixes, if you get constant graphical issues, restart the handler.";	
Game.PauseBetweenStarts = 10;
Game.PauseBetweenProcessGrab = 15; 

Game.Play = function () {

  var txtpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rd_config.txt";
  var dict = [
  Context.FindLineNumberInTextFile(txtpath, 'height	=', Nucleus.SearchType.StartsWith) + '|height	= ' + Context.Height + ';',
  Context.FindLineNumberInTextFile(txtpath, 'width	=', Nucleus.SearchType.StartsWith) + '|width	= ' + Context.Width + ';',
  Context.FindLineNumberInTextFile(txtpath, 'fullscreen	=', Nucleus.SearchType.StartsWith) + '|fullscreen	= 0;',
  Context.FindLineNumberInTextFile(txtpath, 'api_name	=', Nucleus.SearchType.StartsWith) + '|api_name	= "DirectX7";'
  ];
  Context.ReplaceLinesInTextFile(txtpath, dict);

  var joystick = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Saved_Data\\Control_Config.txt";
  var lines = [
    'Joystick'
  ];
  Context.WriteTextFile(joystick, lines);

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  Context.Wait(1500);

  var dxwrapper = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dxwrapper.ini";
  Context.ModifySaveFile(dxwrapper, dxwrapper, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("Dd7to9", "DdrawCustomWidth           ", Context.Width),
  new Nucleus.IniSaveInfo("Dd7to9", "DdrawCustomHeight          ", Context.Height),
  new Nucleus.IniSaveInfo("d3d9", "CustomDisplayWidth         ", Context.Width),
  new Nucleus.IniSaveInfo("d3d9", "CustomDisplayHeight        ", Context.Height)
  ]);

  var fix = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\SupremeSnowboardingFOVFix.ini";
  Context.ModifySaveFile(fix, fix, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("Settings", "Width", Context.Width),
  new Nucleus.IniSaveInfo("Settings", "Height", Context.Height)
  ]);

  var xinput = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
  Context.ModifySaveFile(xinput, xinput, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("LeftStick", "InvertX", "True"),
  new Nucleus.IniSaveInfo("LeftStick", "InvertY", "True"),
  new Nucleus.IniSaveInfo("Vibration", "LeftMotor_Strength", 0),
  new Nucleus.IniSaveInfo("Vibration", "RightMotor_Strength", 0),
  new Nucleus.IniSaveInfo("Misc", "UseXInput1_4", "False"),
  new Nucleus.IniSaveInfo("Misc", "UseXInput9_1_0", "False"),
  new Nucleus.IniSaveInfo("X2DInput", "EnableX2Dinput", "True"),
  new Nucleus.IniSaveInfo("X2DInput", "LS_X", "Y_Axis"),
  new Nucleus.IniSaveInfo("X2DInput", "LS_Y", "X_Axis"),
  new Nucleus.IniSaveInfo("X2DInput", "LT", "Slider1"),
  new Nucleus.IniSaveInfo("X2DInput", "RT", "Slider2"),
  ]);

  
}