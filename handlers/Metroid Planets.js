Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "Planets v1.33.exe";
Game.GUID = "Metroid Planets";
Game.GameName = "Metroid Planets";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Planets v1.33";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "Host a server and just join in with IP.\n\nKeyboard/mouse player NEEDS to keep his aspect ratio corret to use menus correctly.\n\nThe game resets its aspect ratio with basically anything, if you want to go back to normal aspect ratio press ctrl+t twice or just play with the streatched aspect ratio. (doesnt look bad)";
Game.PauseBetweenProcessGrab = 8;
Game.PauseBetweenStarts = 8;

Game.SupportsKeyboard = true;
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\Metroid";

Game.ProtoInput.InjectStartup = true;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 15000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;

Game.Play = function() {

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Preferences.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("CONNECT", "Join IP", '"127.0.0.1"'),
    new Nucleus.IniSaveInfo("CONNECT", "Name", Context.Nickname),
    new Nucleus.IniSaveInfo("VISUAL", "Widescreen", '"1.000000"'),
    new Nucleus.IniSaveInfo("VISUAL", "Fullscreen", '"0.000000"'),
    new Nucleus.IniSaveInfo("CONNECT", "Join Password", ""),
    new Nucleus.IniSaveInfo("CONNECT", "Host Password", ""),
  ]);

  if (Context.PlayerID != 0) {
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("SOUND", "BGM Volume", '"0.000000"'),
    ]);
  }


};