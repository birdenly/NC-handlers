Game.FileSymlinkExclusions = [
"d3d9.dll",
"d3d9.ini",
"DW_MM_Splash_a.bik",
"ERSB_AU.dds",
"ERSB_GER.dds",
"ERSB_INT.dds",
"ERSB_JP.dds",
"ERSB_UK.dds",
"R6Vegas.bik",
"SplashReboot.dds",
"Ubilogo.bik",
"utech_sw.dds",
"logos_PC.bik",
"SplashScreen.bik",
"AttrackMovie.bik",
"AttrackMovieFinal.bik"
];
Game.KillMutex = [
  "RainbowSixVegasIsRunning"
];
Game.FileSymlinkCopyInstead = ["User","Core.uppc",
"Engine.uppc",
"R6Game.uppc",
"KellerServerOptions.ini"];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "R6Vegas_Game.exe";
Game.SteamID = "13540";
Game.GUID = "Rainbow Six Vegas";
Game.GameName = "Tom Clancy's Rainbow Six Vegas ";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "Binaries";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Tom Clancy's Rainbow Six Vegas";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "IMPORTANT: LAUNCH YOUR MAIN GAME ONCE, GO TO SETTINGS AND CHANGE THE RESOLUTION ONCE BEFORE TRYING SPLITSCREEN.\nOn first nucleus launch using the keyboard/mouse go to OPTIONS > CONTROLS and set the xbox 360 for windows option to ON. Connect the instances via LAN.\n\nIf you notice that the screen is cut off, try running the handler again.\n\nI noticed quitting the game through the menu to be more reliable to save settings, etc.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 15;

Game.CreateSteamAppIdByExe = true;				
Game.UseSteamless = true; 
Game.SteamlessArgs = "--quiet --keepbind";
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\Ubisoft\\R6Vegas";


Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.FocusHooks = true;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
			
Game.Play = function() {
  Context.Wait(2000);

  Context.CopyFolder(Context.ScriptFolder + "\\general", Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var timese = Context.ScriptFolder + "\\hexEdit.bat";
  var lines = [
    'WildCardHex-FindEdit.exe "' + Context.DocumentsPlayer + 'Ubisoft\\R6Vegas\\R6GameConfig.bin" "01 00 00 00 ?? ?? 00 00 ?? ?? 00 00 1E" "01 00 00 00 \\"'+Context.Width+'\\" 00 00 \\"'+Context.Height+'\\" 00 00 1E"',
  ];
  Context.WriteTextFile(timese, lines);

  Context.RunAdditionalFiles(["all|"+Context.ScriptFolder + "\\hexEdit.bat"], false, 10);
  
  Context.Wait(8000);
  
  var Path = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\User";
  var dict = [
    Context.FindLineNumberInTextFile(Path, 'Name=', Nucleus.SearchType.StartsWith) + '|Name="' + Context.Nickname  + '"',
  ];
  Context.ReplaceLinesInTextFile(Path, dict);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\d3d9.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Window.System", "OverrideRes", Context.Width+"x"+Context.Height),
  ]);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\KellerGame\\Config\\PC\\KellerServerOptions.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Engine.R6ServerOptions", "m_fstrLANName", Context.Nickname),
    new Nucleus.IniSaveInfo("Engine.R6ServerOptions", "m_bPunkBusterCl", "False"),
    new Nucleus.IniSaveInfo("Engine.R6ServerOptions", "m_bPunkBusterSv", "False"),
  ]);
};
