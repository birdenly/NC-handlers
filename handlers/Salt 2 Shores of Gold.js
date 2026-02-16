Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt"];
Game.FileSymlinkCopyInstead = [
  "UnityPlayer.dll",
  "globalgamemanagers"
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "Salt2.exe";
Game.SteamID = "1574900";
Game.GUID = "Salt 2 Shores of Gold";
Game.GameName = "Salt 2 Shores of Gold";
Game.MaxPlayers = 6;
Game.MaxPlayersOneMonitor = 6;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Salt 2";
Game.HasDynamicWindowTitle = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "BEFORE EXITING ALL PLAYERS NEED TO SAVE IN THE MENU.\n\nUse the invite code to join or simply invite\n\nIf you get a path is too long error in the start, you will need to remove the game from nucleus and try to reduce the path (copy/paste the game to the root of any drive) and add it again using the new path.\n\nPress END to balance FPS/give focus to all instances.\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.HideTaskbar = true;
Game.SetWindowHookStart = true;
Game.RefreshWindowAfterStart = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Roaming\\GSE Saves\\1574900";
Game.UserProfileSavePath = "AppData\\LocalLow\\Lavaboots";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, false, false, false, false);
    System.Threading.Thread.Sleep(500);
    ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
  }
};

Game.Play = function() {

  Context.StartArguments = " -screen-fullscreen 0 -popupwindow -screen-width " + Context.Width + " -screen-height " + Context.Height;

  Context.CopyFolder(Context.ScriptFolder, Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Salt2_Data\\Plugins\\x86_64\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);
  
  var fillPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Salt2_Data\\globalgamemanagers";

  var base = Context.Nickname;
  var og_Path = "Salt2";
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

  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Lavaboots\\"+newPath, "Screenmanager Fullscreen mode_h3630240806", 3, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Lavaboots\\"+newPath, "Screenmanager Fullscreen mode Default_h401710285", 3, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Lavaboots\\"+newPath, "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Lavaboots\\"+newPath, "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Lavaboots\\"+newPath, "GameSettingFullscreenMode_h2780671745", 3, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Lavaboots\\"+newPath, "Screenmanager Resolution Window Width_h2524650974", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Lavaboots\\"+newPath, "Screenmanager Resolution Window Height_h1684712807", Context.Height, Nucleus.RegType.DWord);

};
