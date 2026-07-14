Game.FileSymlinkCopyInstead = [
"prefs.cs",
"config.cs",
"menu_threads.cs",
"init.cs"
];
Game.ExecutableContext = ["buccaneer"];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "T3D.exe";
Game.ExecutableToLaunch = "launch.bat";
Game.GUID = "Buccaneer The Pursuit of Infamy";
Game.GameName = "Buccaneer The Pursuit of Infamy";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Buccaneer: The Pursuit of Infamy";
Game.ResetWindows = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled = false;
Game.Description = "Make a LAN game, put a server name/captain name and start the game. Join in with others.\n\nPress END so each player can have their own K/M, you may need to press it twice for focus to work.\n\nIf you change settings, the window will reset, press CTRL+R to go back to normal. EXIT NORMALLY FROM THE MENUS, ALT+F4 OR CTRL+Q WILL NOT SAVE ANYTHING."; 	
Game.PauseBetweenProcessGrab = 15;
Game.PauseBetweenStarts = 15;

Game.KeepSymLinkOnExit = true; 
Game.RefreshWindowAfterStart = true;
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
Game.ProtoInput.DrawFakeCursor = true;
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

  var config = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\buccaneer\\client\\prefs.cs";
  var dict = [
      Context.FindLineNumberInTextFile(config, "$pref::Video::Resolution =", Nucleus.SearchType.StartsWith) + '|$pref::Video::Resolution = "'+Context.Width + ' '+Context.Height+ ' 32";',
      Context.FindLineNumberInTextFile(config, "$pref::Video::mode =", Nucleus.SearchType.StartsWith) + '|$pref::Video::mode = "'+Context.Width + ' '+Context.Height+ ' false 32 60 0";',
      Context.FindLineNumberInTextFile(config, "$pref::Video::fullScreen =", Nucleus.SearchType.StartsWith) + '|$pref::Video::fullScreen = "0";',
      Context.FindLineNumberInTextFile(config, "$pref::Video::displayDevice =", Nucleus.SearchType.StartsWith) + '|$pref::Video::displayDevice = "D3D";',
      Context.FindLineNumberInTextFile(config, "$pref::Video::allowD3D =", Nucleus.SearchType.StartsWith) + '|$pref::Video::allowD3D = 1;',
      Context.FindLineNumberInTextFile(config, "$pref::Input::MouseEnabled =", Nucleus.SearchType.StartsWith) + '|$pref::Input::MouseEnabled = 1;',
      Context.FindLineNumberInTextFile(config, "$pref::Net::DisplayOnMaster =", Nucleus.SearchType.StartsWith) + '|$pref::Net::DisplayOnMaster = "Never";',
  ];
  Context.ReplaceLinesInTextFile(config, dict);
};