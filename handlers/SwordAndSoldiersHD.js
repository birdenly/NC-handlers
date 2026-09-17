Game.FileSymlinkCopyInstead = [
"All.settings",
"Levels.settings",
"LocalizationAsian.settings",
"LocalizationAztec.settings",
"LocalizationOther.settings",
"LocalizationPC.settings",
"LocalizationViking.settings",
"Menu.settings",
"Screen.settings",
"Sound.settings",
"SoundInstanceLimits.settings",
"version.settings",
"Save.txt"
];
Game.FileSymlinkExclusions = ["config.txt"]
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.SteamID = "63500";
Game.ExecutableName = "Swords and Soldiers.exe";
Game.GUID = "Swords and Soldiers HD";
Game.GameName = "Swords and Soldiers HD";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Swords and Soldiers";
Game.Description = "Start your main game once to create config files.\n\nUse search to join each other\n\nPress END so each player can have their own K/M, you may need to press it twice for focus to work. sometimes at start your mouse will get stuck, moving fixes it."
Game.PauseBetweenProcessGrab = 8;
Game.PauseBetweenStarts = 8;

Game.UseGoldberg = true;
Game.GoldbergNoLocalSave = true;
Game.SteamlessPatch = ["false", "", "5500"];
Game.BackupFiles = ["Data\\Save.txt"];
Game.BackupFolders = ["Data\\Settings"];

Game.UseNucleusEnvironment = true; 
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\63500";

//USS deprecated options:

Game.HookSetCursorPos = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = false;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = false;
Game.SendNormalKeyboardInput = false;
Game.SendScrollWheel = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = false;
Game.HookReRegisterRawInputMouse = false;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = false;

//ProtoInput:

Game.SupportsMultipleKeyboardsAndMice = true;

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

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = true;
Game.ProtoInput.GetAsyncKeyStateHook = true;
Game.ProtoInput.GetKeyboardStateHook = true;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHook = true;
// Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.DontShowCursorWhenImageUpdated = true;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = true;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, false, false, false, true);
    System.Threading.Thread.Sleep(500);
    ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
  }
};

Game.Play = function () {
  
  Context.CopyFolder(Context.ScriptFolder, Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\config.txt";
  var lines = [
    Context.Width,
    Context.Height,
    'High'
  ];
  Context.WriteTextFile(timese, lines);

  var config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Data\\Settings\\Screen.settings";
  var dict = [
      Context.FindLineNumberInTextFile(config, "fullscreen", Nucleus.SearchType.StartsWith) + '|//fullscreen'
  ];
  Context.ReplaceLinesInTextFile(config, dict);

  
};