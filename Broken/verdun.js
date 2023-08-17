
Game.ExecutableContext = ["Verdun_Data"];
Game.FileSymlinkCopyInstead = ["Player.log", "UnityCrashHandler64.exe", "UnityPlayer.dll", "GameAssembly.dll","AnselPlugin64.dll","AnselSDK64.dll","EOSSDK-Win64-Shipping.dll","fmodstudio.dll","fmodstudiol.dll","M2HDetect.dll","PhotonEncryptorPlugin.dll","resonanceaudio.dll","Rewired_DirectInput.dll"];
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = false;
Game.ExecutableName = "Verdun.exe";
Game.BinariesFolder = "";
Game.SteamID = "242860";
Game.GUID = "Verdun";
Game.GameName = "Verdun";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.LauncherTitle = "";
Game.HideTaskbar = false;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "WW1 game series";
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;

Game.UseNemirtingasEpicEmu = true;
Game.AltEpicEmuArgs = true; //this one makes it take a little longer, might be good or bad dont know


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

Game.ProtoInput.InjectStartup = true;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;
Game.ProtoInput.DontShowCursorWhenImageUpdated = true;

Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = false;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;

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
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  var Args = (Context.Args = " -screen-fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;

  if (Context.IsKeyboardPlayer) {
    Game.ProtoInput.KeyboardButtonFilter = true;
    Game.ProtoInput.CursorVisibilityHook = true;
    Game.ProtoInput.DontShowCursorWhenImageUpdated = true;
    Game.ProtoInput.DrawFakeCursor = true;
  } else {
    Game.ProtoInput.KeyboardButtonFilter = false;
    Game.ProtoInput.CursorVisibilityHook = false;
    Game.ProtoInput.DontShowCursorWhenImageUpdated = false;
    Game.ProtoInput.DrawFakeCursor = false;
  }

  // var eosEmuDestination = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Verdun_Data\\Plugins\\x86_64\\EOSSDK-Win64-Shipping.dll";    
  //       var eosEmuSource = System.IO.Path.Combine(Game.Folder, "EOSSDK-Win64-Shipping.dll");
  //       System.IO.File.Copy(eosEmuSource, eosEmuDestination, true);

  //       Context.StartArguments = "-screen-fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height + "-AUTH_LOGIN=unused -AUTH_PASSWORD=bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb -AUTH_TYPE=exchangecode -epicapp=CrabTest -epicenv=Prod -EpicPortal -epiclocale=" + Context.EpicLang + " -epicusername=" + Context.Nickname + " -epicuserid=0000000000000000000000000player" + Context.PLayerID;

  //       var jsonPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\nepice_settings\\NemirtingasEpicEmu.json";
  //       var params = [
  //       '{',
  //       '"EOSEmu": {',
  //       '"Achievements": {',
  //       ' "OnlineDatabase": ""',
  //       '},',
  //       '"Application": {',
  //       '"AppId": "f653266870894ee1acbb5250e3b04bd1",',
  //       '"DisableOnlineNetworking": false,',
  //       '"LogLevel": "off",',
  //       '"SavePath": "appdata"',
  //       '},',
  //       '"Ecom": {',
  //       '"UnlockDlcs": true',
  //       '},',
  //       '"Plugins": {',
  //       '"Overlay": {',
  //       ' "Enabled": true',
  //       '  }',
  //       ' },',
  //       '"User": {',
  //       '"Language":' + '"' + Context.EpicLang + '"' + ',',
  //       '"UserName": ' + '"' + Context.Nickname + '"', 
  //       '}',
  //       '},',
  //       '"Network": {',
  //       '"IceServers": [],',
  //       '"Plugins": {',
  //       '"Broadcast": {',
  //       '"Enabled": true',
  //       ' },',
  //       '"WebSocket": {',
  //       '"SignalingServers": []',
  //       '}',
  //       ' }',
  //       '}',
  //       '}',
  //       ] ;
  //       Context.WriteTextFile(jsonPath,params);	

  // Game.ProtoInput.OnInputLocked = function() {
  //   for (var i = 0; i < PlayerList.Count; i++) {
  //     var player = PlayerList[i];

  //     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
  //     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
  //     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
  //     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
  //     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
  //     //ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
  //     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
  //     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
  //     //ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

  //     ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);

  //     //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
  //     //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

  //     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
  //     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
  //     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
  //     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
  //     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
  //     ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);

  //     //ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);
  //   }
  // };

  // Game.ProtoInput.OnInputUnlocked = function() {
  //   for (var i = 0; i < PlayerList.Count; i++) {
  //     var player = PlayerList[i];

  //     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
  //     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
  //     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
  //     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
  //     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
  //     //ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
  //     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
  //     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
  //     //ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

  //     ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);

  //     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
  //     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
  //     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
  //     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
  //     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
  //     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
  //     ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);

  //     ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 2000, true, true, false, false, false);

  //     //ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
  //   }
  // };
};
