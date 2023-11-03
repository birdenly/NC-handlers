// Game.DirSymlinkExclusions = ["GameData\\Maps", "GameData\\Save", "GameData\\System"];
// Game.FileSymlinkExclusions = [
//   "dinput.dll",
//   "dinput8.dll",
//   "xinput1_3.dll",
//   "xinput1_4.dll",

// ];
// Game.FileSymlinkCopyInstead = [
//   "ALAudio.dll",
//   "ALAudio.int",
//   "Core.dll",
//   "Core.int",
//   "Core.u",
//   "D3DDrv.dll",
//   "D3DDrv.int",
//   "Default.ini",
//   "DefOpenAL32.dll",
//   "DefUser.ini",
//   "Destructibles.u",
//   "Engine.dll",
//   "Engine.int",
//   "Engine.u",
//   "Gameplay.dll",
//   "GamePlay.u",
//   "IpDrv.dll",
//   "IpDrv.int",
//   "IpDrv.u",
//   "libexpatw.dll",
//   "License.txt",
//   "msvcp71.dll",
//   "MSVCR71.DLL",
//   "ogg.dll",
//   "Reverb.u",
//   "Setup.exe",
//   "Setup.int",
//   "Startup.int",
//   "ucc.exe",
//   "UCCSystemTray.exe",
//   "vorbis.dll",
//   "vorbisfile.dll",
//   "Weapons.u",
//   "Window.dll",
//   "Window.int",
//   "WinDrv.dll",
//   "WinDrv.int",
//   "zlib1.dll",
//   "ZombieAnimation.u",
//   "ZombieEffects.u",
//   "ZombieEngine.dll",
//   "ZombieEngine.u",
//   "ZombieGame.dll",
//   "ZombieGame.int",
//   "ZombieGame.u",
//   "CBT_BaseMaterials.utx",
//    "CBT_Buildings.utx",
//    "CBT_Decorations.utx",
//    "CBT_DYN.utx",
//    "CBT_DYN_Characters.utx",
//    "CBT_DYN_Fonts.utx",
//    "CBT_DYN_Icons.utx",
//    "CBT_DYN_Interface.utx",
//    "CBT_DYN_Weapons.utx",
//    "CBT_Movie.utx",
//    "CBT_Pawn.utx",
//    "CBT_SFX.utx",
//    "CBT_Vechicles.utx",
//    "EditorFont.utx",
//    "HardwareShaders.utx",
//    "CBS_Building.usx",
//     "CBS_CharacterProp.usx",
//     "CBS_CommonDressing.usx",
//     "CBS_Door.usx",
//     "CBS_DYN.usx",
//     "CBS_DYN_Attachments.usx",
//     "CBS_DYN_Weapon.usx",
//     "CBS_InDoorProp.usx",
//     "CBS_Light.usx",
//     "CBS_Movie.usx",
//     "CBS_OutDoorProp.usx",
//     "CBS_SetSpecificGroup.usx",
//     "CBS_SFX.usx",
//     "CBS_Vegetation.usx",
//     "CBS_Vehicle.usx",
//     "CBS_Whitebox.usx",
//     "CBS_Windows.usx",
//     "DefaultMeshes.usx",
//     "Z_ReviewMeshes_UAYOR.usx",
//     "RagDolls.ka"




// ];
Game.KillMutex = ["UnrealIsRunning"];

Game.NeedsSteamEmulation = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "Iwo.exe";
Game.SteamID = "";
Game.GUID = "World War II Combat Iwo Jima";
Game.GameName = "World War II Combat: Iwo Jima";
Game.MaxPlayers = 16;
Game.MaxPlayersOneMonitor = 16;
Game.BinariesFolder = "System";
Game.LauncherTitle = "";
Game.HideTaskbar = false;
Game.StartArguments = "-windowed";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "WWII Combat: Iwo Jima";
Game.ResetWindows = true;
Game.RefreshWindowAfterStart = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: This requires the Star Wars Republic Commando Fix to be installed in your main game files: https://github.com/SWRC-Modding/CT/releases. Use your mouse cursor to navigate the menus in all instances as there is no gamepad support in menus, make sure to select the auto generated game profile for the gamepads to work correctly. Connect the instances via multiplayer LAN. Press back on gamepad once if your character stops after firing. If you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked. Press the escape key or start in-game if the emulated cursor shows in the center after locking the input. The Nucleus game profiles get saved to the instances folders inside Nucleus content folder in GameData\\Save, so be careful about deleting the content folder.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\Groove Games\\IwoJima";

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
Game.InjectHookXinput = false;

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
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;
Game.ProtoInput.DontShowCursorWhenImageUpdated = false;

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
Game.ProtoInput.MultipleProtoControllers = true;

Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 1;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function() {
  
  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Iwo.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "WindowedViewportX", Context.Width),
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "WindowedViewportY", Context.Height),
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "FullscreenViewportX", Context.Width),
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "FullscreenViewportY", Context.Height),
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "MenuViewportX", Context.Width),
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "MenuViewportY", Context.Height),
      
    ]);

  // var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\System\\XInputPlus.ini";
  // Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  //   new Nucleus.IniSaveInfo("X2DInput", "EnableX2Dinput", true),
  //   new Nucleus.IniSaveInfo("X2DInput", "LT", "Button11"),
  //   new Nucleus.IniSaveInfo("X2DInput", "RT", "Button12")
  // ]);

  if (Context.IsKeyboardPlayer) {
    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Iwo.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "StartupFullscreen", false),
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "UseJoystick", false)
    ]);
  } else {
    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Iwo.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "StartupFullscreen", false),
      new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "UseJoystick", true)
    ]);
  }

  // var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\GameData\\Save\\Profile_" + Context.Nickname);
  // System.IO.Directory.CreateDirectory(filePath);

  // if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\GameData\\Save\\Profile_" + Context.Nickname + "\\User.ini")) {
  //   var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\GameData\\Save\\Profile_" + Context.Nickname + "\\User.ini");
  //   var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "joystick.ini");
  //   System.IO.File.Copy(savePkgOrigin, savePath, true);
  // }



  // var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\GameData\\System\\System.ini";
  // var dict = [Context.FindLineNumberInTextFile(txtPath, ";ServerActors+=IpServer.UdpServerQuery", Nucleus.SearchType.StartsWith) + "|ServerActors+=ModMPGame.AdminControl"];
  // Context.ReplaceLinesInTextFile(txtPath, dict);

  // var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\GameData\\Maps\\DM_Canyon.ctm");
  // var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Maps\\DM_Canyon.ctm");
  // System.IO.File.Copy(savePkgOrigin, savePath, true);


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
      //ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

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
      //ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

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
