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
Game.ExecutableName = "Granvir.exe";
Game.SteamID = "2743460";
Game.GUID = "Granvir";
Game.GameName = "Granvir";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Granvir";
Game.HasDynamicWindowTitle = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: launch your game once and change it to windowed mode before trying split screen.\n\nSimply host a lobby and press invite (everyone will be invited automatically to the lobby)\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)\n\nDisable any overlays that are attaching to game (discord,steam or any other)\n\nIf you use keyboards and mice after all instances have launched, resized and positioned correctly, press END key once to lock input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make emulated cursors appear after locking input. Press END key again to unlock input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.HideTaskbar = true;
// Game.RefreshWindowAfterStart = true;
Game.SetWindowHookStart = true;

Game.UserProfileSavePath = "AppData\\LocalLow\\Airborne Games";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = false;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;

Game.Play = function() {

  Context.StartArguments = " -screen-fullscreen 0 -screen-width " + Context.Width + " -screen-height " + Context.Height;

  Context.CopyFolder(Context.ScriptFolder, Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Granvir_Data\\Plugins\\x86_64\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);
  
  var fillPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Granvir_Data\\globalgamemanagers";

  var base = Context.Nickname;
  var og_Path = "Granvir";
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

  var dllPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\UnityPlayer.dll";

  var searchPattern = "57 00 69 00 6E 00 64 00 6F 00 77 00 73 00 2E 00 47 00 61 00 6D 00 69 00 6E 00 67 00 2E 00 49 00 6E 00 70 00 75 00 74 00 2E 00 47 00 61 00 6D 00 65 00 70 00 61 00 64";
  var patchPattern = "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00";

  Context.PatchFileFindPattern(dllPath, dllPath, searchPattern, patchPattern, true);

  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Airborne Games\\"+newPath, "Screenmanager Fullscreen mode_h3630240806", 0, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Airborne Games\\"+newPath, "Screenmanager Fullscreen mode Default_h401710285", 0, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Airborne Games\\"+newPath, "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Airborne Games\\"+newPath, "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Airborne Games\\"+newPath, "Screenmanager Resolution Window Width_h2524650974", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Airborne Games\\"+newPath, "Screenmanager Resolution Window Height_h1684712807", Context.Height, Nucleus.RegType.DWord);
};
