Game.ExecutableContext = ["CHKN_Data"];
Game.FileSymlinkExclusions = [
  "steam_api64.dll",
  "steam_appid.txt"
];
Game.FileSymlinkCopyInstead = [
"UnityPlayer.dll",
"globalgamemanagers",
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = false;
Game.ExecutableName = "CHKN.exe";
Game.SteamID = "420930";
Game.GUID = "CHKN";
Game.GameName = "CHKN";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
// Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "CHKN";
Game.HasDynamicWindowTitle = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "Start a game than open the meny and select 'open world to multiplayer' and make the lobby type PUBLIC\n\nYou can change the controller sensitivity in settings, highly recommend\n\nRemember to save the game before closing everything\n\nWatch out when spawning pets, depending on their size it will lag alot or even crash the game when spawning\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

// Game.HookFocus = true;
Game.UseGoldberg = true;
Game.SetWindowHookStart = true;
// Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\LocalLow\\Katapult\\CHKN";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 8000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  var Args = (Context.Args = " -screen-fullscreen 0 -popupwindow -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;

  var fillPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CHKN_Data\\globalgamemanagers";

  var base = Context.Nickname;
  var og_Path = "CHKN";
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

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Katapult\\"+newPath, "Screenmanager Fullscreen mode_h3630240806", 3, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Katapult\\"+newPath, "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Katapult\\"+newPath, "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Katapult\\"+newPath, "Screenmanager Resolution Use Native_h1405027254", 0, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Katapult\\"+newPath, "ScreenHeight_h1398619894", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Katapult\\"+newPath, "ScreenWidth_h603762863", Context.Width, Nucleus.RegType.DWord);

  if (Context.IsKeyboardPlayer) {
    Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Katapult\\"+newPath, "CHKN.public.CursorEmulation_h4131726892", 0, Nucleus.RegType.DWord);
    Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Katapult\\"+newPath, "CursorEmulation_h2688679875", 0, Nucleus.RegType.DWord);
  }else{
    Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Katapult\\"+newPath, "CHKN.public.CursorEmulation_h4131726892", 1, Nucleus.RegType.DWord);
    Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Katapult\\"+newPath, "CursorEmulation_h2688679875", 1, Nucleus.RegType.DWord);
  }

  // var numPlayers = 0;

  // for (var i = 0; i < PlayerList.Count; i++) {
  //   var player = PlayerList[i];

  //   if (player.IsXInput && player.ScreenIndex !== -1) {
  //     numPlayers++;
  //   }
  //   player.ProtoController1 = Context.GamepadId;
  //   player.ProtoController2 = Context.GamepadId;
  //   player.ProtoController3 = Context.GamepadId;
  //   player.ProtoController4 = Context.GamepadId;
  //   player.ProtoController5 = Context.GamepadId;
  //   player.ProtoController6 = Context.GamepadId;
  //   player.ProtoController7 = Context.GamepadId;
  //   player.ProtoController8 = Context.GamepadId;
  //   player.ProtoController9 = Context.GamepadId;
  // }
};
