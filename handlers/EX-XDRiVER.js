Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt"
];
Game.FileSymlinkCopyInstead = [
  "UnityPlayer.dll",
  "globalgamemanagers"
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "XDRV.exe";
Game.SteamID = "2636020";
Game.GUID = "EX-XDRiVER";
Game.GameName = "EX-XDRiVER";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "XDRV";
Game.HasDynamicWindowTitle = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: Start your main game once and change some settings to generate the config files.\n\nSadly the game doesnt really like custom res or extreme aspect ratios (menus become unusable), so the game will need to stay stretched, you can still up the resolution in game settings.\n\nCreate/Select a profile, Host a public Lobby, refresh the list with other players than join in.\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 15;

Game.HideTaskbar = true;		
Game.SetWindowHookStart = true;
Game.UserProfileConfigPath = "AppData\\LocalLow\\EX-XDRiVER";
Game.UserProfileSavePath = "AppData\\Roaming\\GSE Saves\\2636020";
Game.SetForegroundWindowElsewhere = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {

  Context.StartArguments = " -screen-fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height;

  Context.CopyFolder(Context.ScriptFolder, Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XDRV_Data\\Plugins\\x86_64\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);
  
  var fillPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XDRV_Data\\globalgamemanagers";

  var base = Context.Nickname;
  var og_Path = "XDRV";
  // Create newPath by rearranging characters from base
  var newPath = og_Path.substring(0, og_Path.length - 3) + base.charAt(0) + base.charAt(base.length - 1) + base.length;

  // Ensure newPath is at least as long as og_Path
  if (newPath.length < og_Path.length) {
    while (newPath.length < og_Path.length) {
      newPath += base.charAt(base.length - 1);
    }
  } else if (og_Path.length < newPath.length) {
    // Ensure og_Path is at least 3 characters long
    newPath = newPath.substring(0, og_Path.length);
  }

  Context.PatchFile(fillPath, fillPath, og_Path, newPath);

  var jsonFilePath = Context.NucleusUserRoot + "\\AppData\\LocalLow\\EX-XDRiVER\\"+newPath+"\\Data\\resolutionSettings.json";
  Context.ReplacePartialLinesInTextFile(
    jsonFilePath,
    [
      '1|"Fullscreen":\\d+|"Fullscreen":0',
      '1|"Width"\\d+|"Width"'+ Context.Width,
      '1|"Height":\\d+|"Height":'+ Context.Height,
    ]
  );

    
  if (Context.PlayerID != 0) {
    var jsonFilePath = Context.NucleusUserRoot + "\\AppData\\LocalLow\\EX-XDRiVER\\"+newPath+"\\Data\\volumeSettings.json";
    Context.ReplacePartialLinesInTextFile(
      jsonFilePath,
      [
        '1|"MusicVolume"\\d+|"MusicVolume"0'
      ]
    );
  }

  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\EX-XDRiVER\\"+newPath, "Screenmanager Fullscreen mode_h3630240806", 0, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\EX-XDRiVER\\"+newPath, "Screenmanager Fullscreen mode Default_h401710285", 0, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\EX-XDRiVER\\"+newPath, "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\EX-XDRiVER\\"+newPath, "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\EX-XDRiVER\\"+newPath, "Screenmanager Resolution Use Native_h1405027254", 0, Nucleus.RegType.DWord);
};
