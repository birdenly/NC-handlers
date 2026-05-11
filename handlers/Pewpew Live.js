Game.FileSymlinkExclusions = ["steam_api64.dll", "SDL2.dll"];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "pewpew-live.exe";
Game.SteamID = "2074980";
Game.GUID = "PewPew Live";
Game.GameName = "PewPew Live";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "PewPew Live";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: On your main game, go into settings and make the game windowed. If you dont, when the game opens fullscreen while in nucleus go to settings and make it windowed there (if the instances arent resizing/repositing press CTRL+R).\n\nGo into multiplayer and use LAN to play together, DONT USE ONLINE.";
Game.PauseBetweenProcessGrab = 15;
Game.PauseBetweenStarts = 15;
Game.ResetWindows = true;
Game.SetWindowHookStart = true;
Game.UseNucleusEnvironment = true; 
Game.UserProfileSavePath = "AppData\\Roaming\\PewPew Live";
Game.Hook.SDL2Enabled = true; 
Game.FakeFocus = true;
Game.HookFocus = true

Game.Play = function() {

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  Context.Wait(1500);
  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);

}
