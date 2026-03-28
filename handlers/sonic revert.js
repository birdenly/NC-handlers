Game.FileSymlinkCopyInstead = [
  "UnityPlayer.dll",
  "globalgamemanagers"
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "Sonic Revert.exe";
Game.GUID = "Sonic Revert";
Game.GameName = "Sonic Revert";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Sonic Revert";
Game.HasDynamicWindowTitle = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: launch your game once and change any settings before trying split screen. YOU NEED INTERNET CONNECTION, IT IS STILL ONLINE.\nHorizontal split makes some of the menu go beyond the screen.\n\nSimply host a lobby and join in with others\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.HideTaskbar = true;
Game.SetWindowHookStart = true;

Game.UserProfileSavePath = "AppData\\LocalLow\\Taldius";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.FocusHooks = true;

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

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 15000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {

  Context.StartArguments = " -screen-fullscreen 0 -screen-width " + Context.Width + " -screen-height " + Context.Height;
  
  var fillPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Sonic Revert_Data\\globalgamemanagers";

  var base = Context.Nickname;
  var og_Path = "Sonic Revert";
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

  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Taldius\\"+newPath, "Screenmanager Fullscreen mode_h3630240806", 3, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Taldius\\"+newPath, "Screenmanager Fullscreen mode Default_h401710285", 3, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Taldius\\"+newPath, "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKeyNoBackup("HKEY_CURRENT_USER", "SOFTWARE\\Taldius\\"+newPath, "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);
};
