Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt"];
Game.FileSymlinkCopyInstead = [
"options.ini",
"input_config.ini",
"StrategyGuideFullMap.png", "Steamworks_x64.dll"
]
Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "Crimson Capes.exe";
Game.SteamID = "2488540";
Game.GUID = "Crimson Capes";
Game.GameName = "Crimson Capes";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Crimson Capes";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll", "xinput1_4.dll", "xinput9_1_0.dll"];
Game.Description =
  "Start your main game once before playing split screen.\n\nThe game aspect ratio will usually stretch when you get in-game, press ctrl+t twice and it will be correct again. If you prefer streatched, just leave it be.\n\nHost a lobby and join in. Joining takes ~10s.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.SetWindowHook = true;
Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Roaming\\GSE Saves\\2488540";
Game.HideTaskbar = true;	
Game.HookFocus = true;	

Game.Play = function() {

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
  new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
  new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
  new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId),
  ]);

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  Context.Wait(1500);
  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\options.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("GRAPHICS", "fullscreen", '"0.000000"')
  ]);
};
