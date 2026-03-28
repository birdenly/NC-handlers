Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt"];
Game.FileSymlinkCopyInstead = [
  "UnityPlayer.dll"
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "delivery-beyond.exe";
Game.SteamID = "3376480";
Game.GUID = "delivery-beyond";
Game.GameName = "delivery-beyond";
Game.MaxPlayers = 5;
Game.MaxPlayersOneMonitor = 5;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "delivery-beyond";
Game.HasDynamicWindowTitle = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "Make a public lobby and join in.\n\nIf the aspect ratio breaks, press ctrl + t twice (happens if you go to settings)\n\nAdd custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, et.)\n\nIf you use keyboards and mice after all instances have launched, resized and positioned correctly, press END key once to lock input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make emulated cursors appear after locking input. Press END key again to unlock input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.SupportsKeyboard = true;
Game.SetTopMostAtEnd = true;  
Game.HideTaskbar = true;
Game.SetWindowHookStart = true;
Game.RefreshWindowAfterStart = true;     
Game.UseNucleusEnvironment = false;
Game.UserProfileSavePath = "AppData\\LocalLow\\HyenaQuest\\delivery-beyond";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;
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
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1];

Game.Play = function() {

  Context.StartArguments = " -screen-fullscreen 0 -screen-width " + Context.Width + " -screen-height " + Context.Height;

  Context.CopyFolder(Context.ScriptFolder, Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\delivery-beyond_Data\\Plugins\\x86_64\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);

  var dllPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\UnityPlayer.dll";

  var searchPattern = "57 00 69 00 6E 00 64 00 6F 00 77 00 73 00 2E 00 47 00 61 00 6D 00 69 00 6E 00 67 00 2E 00 49 00 6E 00 70 00 75 00 74 00 2E 00 47 00 61 00 6D 00 65 00 70 00 61 00 64";
  var patchPattern = "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00";

  Context.PatchFileFindPattern(dllPath, dllPath, searchPattern, patchPattern, true);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\HyenaQuest\\delivery-beyond", "Screenmanager Fullscreen mode_h3630240806", 3, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\HyenaQuest\\delivery-beyond", "Screenmanager Fullscreen mode Default_h401710285", 3, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\HyenaQuest\\delivery-beyond", "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\HyenaQuest\\delivery-beyond", "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\HyenaQuest\\delivery-beyond", "Screenmanager Resolution Window Width_h2524650974", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\HyenaQuest\\delivery-beyond", "Screenmanager Resolution Window Height_h1684712807", Context.Height, Nucleus.RegType.DWord);

  var settingsPath = Context.NucleusUserRoot + "\\" + Context.UserProfileSavePath + "\\"+Context.PlayerSteamID+".json";
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "76.json");
  System.IO.File.Copy(savePkgOrigin, settingsPath, true);

  Context.ReplaceLinesInTextFile(settingsPath, [
    Context.FindLineNumberInTextFile(settingsPath, '    "screenMode":', Nucleus.SearchType.StartsWith) + '|    "screenMode": 3,',
    Context.FindLineNumberInTextFile(settingsPath, '      "width":', Nucleus.SearchType.StartsWith) + '|      "width": ' + Context.Width + ",",
    Context.FindLineNumberInTextFile(settingsPath, '      "height":', Nucleus.SearchType.StartsWith) + '|      "height": ' + Context.Height + ",",
    Context.FindLineNumberInTextFile(settingsPath, '    "muteOnUnfocus":', Nucleus.SearchType.StartsWith) + '|    "muteOnUnfocus": false,'
  ]);
  let audio = 1
  if (Context.PlayerID != 0) {
    audio = 0
  }
  var dict = [Context.FindLineNumberInTextFile(settingsPath, '    "musicVolume":', Nucleus.SearchType.StartsWith) + '|    "musicVolume": '+audio+','];
  Context.ReplaceLinesInTextFile(settingsPath, dict);
};
