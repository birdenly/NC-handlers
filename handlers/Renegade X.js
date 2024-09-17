Hub.Handler.Version = 1; // Released at https://hub.splitscreen.me/ on Fri Jul 07 2023 02:08:48 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "4nF8LQpKrQD3CmBXF";
Hub.Maintainer.Name = "birden";
Hub.Maintainer.Id = "rRycxSn253ZCjQy5C";

var answers1 = [
  "Online",
  "BH-Walls",
  "BH-Daybreak",
  "BH-Field",
  "BH-Snow",
  "BH-Lakeside",
  "BH-Tomb",
  "BH-Under",
  "BH-Steppe",
  "CNC-Arctic_Stronghold",
  "CNC-Canyon",
  "CNC-CliffSide",
  "CNC-Complex",
  "CNC-Crash_Site",
  "CNC-Daybreak",
  "CNC-Desolation",
  "CNC-Eyes",
  "CNC-Field",
  "CNC-Field_X",
  "CNC-Forest",
  "CNC-GoldRush",
  "CNC-Hourglass",
  "CNC-Islands",
  "CNC-Islands_X",
  "CNC-LakeSide",
  "CNC-Oasis",
  "CNC-Outposts",
  "CNC-Reservoir",
  "CNC-Snow",
  "CNC-Snow_X",
  "CNC-Steppe",
  "CNC-Storm",
  "CNC-Tomb",
  "CNC-Toxicity",
  "CNC-Tunnels",
  "CNC-Under",
  "CNC-Uphill",
  "CNC-Volcano",
  "CNC-Walls",
  "CNC-Whiteout",
  "CNC-Xmountain",
  "DEF-DarkNight",
  "DEF-LakeSide",
  "TDM-Caves",
  "TDM-Deck"
];
Game.AddOption(
  "Select the map/gamemode you want to start on or select online, so no local server is created.",
  'DEF = Co-op Survival\nCNC = Command & Conquer               BH = Nod vs Nod\nTDM = Team Deathmatch\n\n(if you want a custom map right click the game in nucleus and click "open game handler" add it after all the others maps in the same way they were added).',
  "map",
  answers1
);
Game.FileSymlinkCopyInstead = [
  "UDKSystemSettings.ini",
  "UDKRenegadeX.ini",
  "UDKGame.ini",
  "UDK.exe.config",
  "steam_appid.txt",
  "steam_api64.dll",
  "UE3ShaderCompileWorker.exe",
  "UnrealLightmass.exe",
  "UDK.com",
  "tbbmalloc.dll",
  "substance_sse2_blend.dll",
  "substance_linker.dll",
  "steam_appid.txt",
  "steam_api64.dll",
  "PhysXLoader64.dll",
  "PhysXExtensions64.dll",
  "PhysXDevice64.dll",
  "PhysXCore64.dll",
  "PhysXCooking64.dll",
  "PhysX3GpuCHECKED_x64.dll",
  "p4dn.dll",
  "NxCharacter64.dll",
  "nvtt_64.dll",
  "libvorbisfile_64.dll",
  "libvorbis_64.dll",
  "libresample_x64.dll",
  "libogg_64.dll",
  "GRBCHECKED_1_1_api2_x64.dll",
  "FxGraphLayout_x64.dll",
  "EasyHook64.dll",
  "dinput8.dll",
  "cudart64_42_9.dll",
  "cudart64_41_22.dll",
  "atc_api.dll",
  "ApexFrameworkCHECKED_x64.dll",
  "APEX_Framework_LegacyCHECKED_x64.dll",
  "APEX_DestructibleCHECKED_x64.dll",
  "APEX_Destructible_LegacyCHECKED_x64.dll",
  "APEX_Common_LegacyCHECKED_x64.dll",
  "APEX_ClothingGPUCHECKED_x64.dll",
  "APEX_ClothingCHECKED_x64.dll",
  "APEX_Clothing_LegacyCHECKED_x64.dll",
  "AgentInterface.dll"
];

Game.ExecutableContext = ["EasyHook64.dll"];
Game.GameName = "Renegade X";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "UDK.exe";
Game.SteamID = "";
Game.GUID = "Renegade X";
Game.MaxPlayers = 64;
Game.MaxPlayersOneMonitor = 64;
Game.BinariesFolder = "Binaries\\Win64";
Game.NeedsSteamEmulation = false;
Game.SupportsPositioning = true;
Game.LauncherTitle = "";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Renegade X";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled = false;
Game.HideTaskbar = true;
Game.SetWindowHookStart = true;
Game.Description =
  "IMPORTANT: In case you play online, use the official servers. Staff/moderators of the game said there was no problem in multiple clients from the same machine joining the official servers, but unofficial servers might not like that.\n\nIf you will play Online, you will need to press ctrl + T and press 'ok' in the prompt or alt + tab to it and hit 'enter'.\n\nMenus can only be used with mouse or keyboard, so to use mouse or keyboard in controllers instances, just alt+tab to it.\n\nGo into multiplayer > local and select the server, if the server isnt showing just go into 'enter IP' and type '127.0.0.1'. To add bots in game press ctrl + V and follow the options from there.\n\nTo change teams, you will need to press ' (the key under esc) on your keyboard to open the console and type 'adminlogin 1234' now you can type '/team (player name here)' or '/team2 (player name here)'. You can also type 'setname (name you want)' in the console to change in-game.\n\nIf you are having problems with FPS or heavy CPU usage, enable framerate smoothing in settings, limit the FPS and change around the settings (do it before starting the game with nucleus).\n\nI have noticed that if you switch from Online to local, or just refresh, the online servers will disappier.\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 25;
Game.ResetWindows = true;

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
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = false;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;

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
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS

Game.Play = function() {
  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\UDKGame\\Config\\UDKSystemSettings.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
    new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height),
    new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen", "False")
  ]);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\UDKGame\\Config\\UDKRenegadeX.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [new Nucleus.IniSaveInfo("RenX_Game.Rx_Game", "TeamMode", 4)]);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\UDKGame\\Config\\UDKGame.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [new Nucleus.IniSaveInfo("Engine.AccessControl", "AdminPassword", 1234)]);

  if (Context.IsKeyboardPlayer) {
    Context.StartArguments = " -windowed -AlwaysFocus -nosplash -nomoviestartup -NoController";
    Context.Hook.ForceFocus = "False";
  } else {
    Context.StartArguments = " -windowed -AlwaysFocus -nosplash -nomoviestartup -nomouse";
    Game.ProtoInput.RegisterRawInputHook = false;
    Game.ProtoInput.GetRawInputDataHook = false;
    Game.ProtoInput.MessageFilterHook = false;
    Game.ProtoInput.GetCursorPosHook = false;
    Game.ProtoInput.SetCursorPosHook = false;
    Game.ProtoInput.GetKeyStateHook = false;
    Game.ProtoInput.GetAsyncKeyStateHook = false;
    Game.ProtoInput.GetKeyboardStateHook = false;
    Game.ProtoInput.CursorVisibilityHook = false;
    Game.ProtoInput.ClipCursorHook = false;
    Game.ProtoInput.FocusHooks = true;
    Game.ProtoInput.DrawFakeCursor = false;
    Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
  }

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

  var MAP = Context.Options["map"];

  if (MAP != "Online") {
    var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server.bat";
    var lines = ["start Binaries\\Win64\\UDK.exe server " + MAP + "?bIsLanMatch=true -nosteam"];

    Context.WriteTextFile(server, lines);

    Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server.bat"], false, "", 0, false, false, false, false);
  } else {
    Game.PromptBetweenInstances = true;
  }

  Game.ProtoInput.OnInputLocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

      //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
      //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);
    }
  };

  Game.ProtoInput.OnInputUnlocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
    }
  };
};
