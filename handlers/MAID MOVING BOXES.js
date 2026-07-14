Game.FileSymlinkCopyInstead = [
  "override.cfg"
];
Game.FileSymlinkExclusions = [
  "steam_api64.dll"
];
Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "MMB.exe";
Game.SteamID = "3917620";
Game.GUID = "MAID MOVING BOXES";
Game.GameName = "MAID MOVING BOXES";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "MMB";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "Create a public lobby (not local lobby, create one that has the steam option) on one instance and join in with others on the PLAY menu\n\nAlt+tab to the keyboard and mouse instance if you have one to control it\n\nIf FPS is low on some instances, try pressing ctrl+H or limit the FPS.";
Game.PauseBetweenProcessGrab = 15;
Game.PauseBetweenStarts = 15;

Game.SupportsKeyboard = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\Godot\\app_userdata\\MMB";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.FocusHooks = true;

Game.Play = function() {

  Context.StartArguments = " -w -t --resolution " + Context.Width + "x" + Context.Height + " --position " + Context.PosX + "," +Context.PosY;

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
    new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
    new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);

};
