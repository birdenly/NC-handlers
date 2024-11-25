
Game.ExecutableContext = ["mods"];
// Game.UseGoldberg = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = false;
Game.SymlinkFolders = false;
Game.ExecutableName = "HoloCure.exe";
Game.SteamID = "2420510";
Game.CreateSteamAppIdByExe = true;
Game.GUID = "HoloCure Save the Fans";
Game.GameName = "HoloCure Save the Fans";
Game.MaxPlayers = 5;
Game.MaxPlayersOneMonitor = 5;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "HoloCure";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll","xinput1_4.dll","dinput8.dll"];
Game.Description =
  "IMPORTANT: WILL ONLY WORK WITH THE MULTIPLAYER MOD INSTALLED AND MAKE YOUR MAIN GAME WINDOWED BEFORE TRYING SPLIT SCREEN. FOLLOW THE INSTRUCTIONS HERE: https://github.com/PippleCultist/HoloCureMultiplayerMod?tab=readme-ov-file#holocure-multiplayer-mod\n\nYou can have steam open to unlock achievements, but you need to DISABLE STEAM INPUT AND STEAM OVERLAY\n\nThe multiplayer menu doesnt have controller support, use your mouse/keyboard\n\nMake an account name and accept/decline all the prompts on the first start, go into play > Select network adapter > (choose the same for all players) > Host LAN session (or join if you're not the host) > just choose whatever you want.\n\nIf you have a keyboard/mouse player alt+tab to their screen.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 8;
	
Game.HookFocus = true;
Game.SupportsKeyboard = true;
Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Local\\HoloCure";
Game.UserProfileSavePathNoCopy = true;
Game.SetWindowHook = true;
Game.RefreshWindowAfterStart = true; 

Game.Play = function() {
  if (Context.IsKeyboardPlayer) {
    var savePath = Context.RootInstallFolder + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", "")
    ]);
  }else{
    var savePath = Context.RootInstallFolder + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
  ]);
  }
};
