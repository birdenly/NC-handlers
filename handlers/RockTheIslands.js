Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt"];
Game.FileSymlinkCopyInstead = [
 "globalgamemanagers"
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "RockTheIslands.exe";
Game.SteamID = "2987860";
Game.GUID = "Rock the Islands";
Game.GameName = "Rock the Islands";
Game.MaxPlayers = 5;
Game.MaxPlayersOneMonitor = 5;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "RockTheIslands";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "Make a lobby > join with the code > SAVE before exiting\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working CURSOR and KEYBOARD. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 7;
Game.PauseBetweenStarts = 10;

Game.UseGoldberg = true;
Game.ResetWindows = true;
Game.SetWindowHookStart = true;
Game.UserProfileSavePath = "AppData\\LocalLow\\HYPE GAME LLC";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 25000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1];

Game.Play = function() {
  
  var Args = (Context.Args = " -screen-fullscreen 0 -popupwindow -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;

  var fillPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\RockTheIslands_Data\\globalgamemanagers";

  var base = Context.Nickname;
  var og_Path = "RockTheIslands";
  //Create newPath by rearranging characters from base
  var newPath = og_Path.substring(0, og_Path.length - 3) + base.charAt(0) + base.charAt(base.length - 1) + base.length;

  //Ensure newPath is at least as long as og_Path
  if (newPath.length < og_Path.length) {
  while (newPath.length < og_Path.length) {
  newPath += base.charAt(base.length - 1);
  }
  } 
  else if (og_Path.length < newPath.length) {
  //Ensure og_Path is at least 3 characters long
  newPath = newPath.substring(0, og_Path.length);
  }
  Context.PatchFile(fillPath, fillPath, og_Path, newPath);

}
