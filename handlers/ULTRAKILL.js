
Game.ExecutableContext = ["ULTRAKILL_Data"];
Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt"];
Game.FileSymlinkCopyInstead = [
"doorstop_config.ini",
"UnityCrashHandler64.exe",
"UnityPlayer.dll",
"winhttp.dll",
"BepInEx.cfg",
"LogOutput.log",
"WinPixEventRuntime.dll",
"Prefs.json",
"LocalPrefs.json",
"steam_autocloud.vdf",
"chainloader_typeloader.dat",
"harmony_interop_cache.dat",
"persistent mod data.json",
"UMM.dll",
"icon.png",
"Jaket.dll",
"jaket-player-doll.bundle",
"manifest.json",
"0Harmony.dll",
"0Harmony.xml",
"0Harmony20.dll",
"BepInEx.dll",
"BepInEx.Harmony.dll",
"BepInEx.Harmony.xml",
"BepInEx.Preloader.dll",
"BepInEx.Preloader.xml",
"BepInEx.xml",
"HarmonyXInterop.dll",
"Mono.Cecil.dll",
"Mono.Cecil.Mdb.dll",
"Mono.Cecil.Pdb.dll",
"Mono.Cecil.Rocks.dll",
"MonoMod.RuntimeDetour.dll",
"MonoMod.RuntimeDetour.xml",
"MonoMod.Utils.dll",
"MonoMod.Utils.xml",

];
Game.DirExclusions = ["Saves"];

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "ULTRAKILL.exe";
Game.SteamID = "1229490";
Game.GUID = "ULTRAKILL";
Game.GameName = "ULTRAKILL";
Game.MaxPlayers = 5;
Game.MaxPlayersOneMonitor = 5;
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "ULTRAKILL";
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: You need to have the Jaket multiplayer mod installed and ALREADY WORKING in your game files.DO THE MANUAL INSTALLATION USING BepInEx. Follow the handler tutorial here: https://www.youtube.com/watch?v=KzKFIallEPE\n\nHighly recommend changing the nucleus shortcuts in settings to the alt key.\n\nFOR FIRST START ONLY: Get past the tutorial, when you get to level 1 quit the level and go back to the main menu and load in to the level again and the multiplayer menu should work.\n\nTo invite get into a level press 'F1' create a lobby and invite the others\n\nIf you have a keyboard/mouse instance alt tab to it to play with it\n\nIf you want your main game save in nucleus copy the Saves folder in your main game > go into nucleus right click ULTRAKILL > Open content folder > open the instance folder you want to have your main game save and paste the folder there.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;

Game.SupportsKeyboard = true;
Game.UseGoldberg = true;
Game.GoldbergExperimental = true;

Game.SetForegroundWindowElsewhere = true;


//ProtoInput:

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
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
// Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  
    var Args = (Context.Args = " -screen-fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;

  
  var txtPath1 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Preferences\\LocalPrefs.json";
  var dict1 = [
    Context.FindLineNumberInTextFile(txtPath1, '  "fullscreen":', Nucleus.SearchType.StartsWith) + '|  "fullscreen": false,',
    Context.FindLineNumberInTextFile(txtPath1, '  "resolutionWidth":', Nucleus.SearchType.StartsWith) + '|  "resolutionWidth": '+ Context.Width +',',
    Context.FindLineNumberInTextFile(txtPath1, '  "resolutionHeight":', Nucleus.SearchType.StartsWith) + '|  "resolutionHeight": '+ Context.Height,
  ];
  Context.ReplaceLinesInTextFile(txtPath1, dict1);

  var numPlayers = 0;

  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    if (player.IsXInput && player.ScreenIndex !== -1) {
      numPlayers++;
    }
    player.ProtoController1 = Context.GamepadId;
    player.ProtoController2 = Context.GamepadId;
    player.ProtoController3 = Context.GamepadId;
    player.ProtoController4 = Context.GamepadId;
    player.ProtoController5 = Context.GamepadId;
    player.ProtoController6 = Context.GamepadId;
    player.ProtoController7 = Context.GamepadId;
    player.ProtoController8 = Context.GamepadId;
    player.ProtoController9 = Context.GamepadId;
  }
};
