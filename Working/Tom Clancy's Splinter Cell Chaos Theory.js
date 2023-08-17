Hub.Handler.Version = 1; // Released at https://hub.splitscreen.me/ on Tue Feb 28 2023 19:13:34 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "AHndRXjKgRSotLzrv";
Hub.Maintainer.Name = "birden";
Hub.Maintainer.Id = "rRycxSn253ZCjQy5C";

Game.ExecutableContext = ["binkw32.dll"];
Game.KillMutex = ["SplinterCell3UnrealIsRunning"];
Game.NeedsSteamEmulation = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = false;
Game.ExecutableName = "splintercell3.exe";
Game.SteamID = "13570";
Game.CreateSteamAppIdByExe = true;
Game.GUID = "Splinter Cell Chaos Theory";
Game.GameName = "Tom Clancy's Splinter Cell Chaos Theory";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 4;
//Game.BinariesFolder = "System";
Game.LauncherTitle = "";
Game.StartArguments = "-nointro";
Game.HideTaskbar = false;
Game.NotTopMost = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Tom Clancy's Splinter Cell Chaos Theory";
Game.SetWindowHook = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = ["xinput1_4.dll", "Dinput8.dll"];
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "IMPORTANT: Only working with the Steam version, make sure it is a clean vanilla install without other mods that could interfere. Select a different co-op profile per instance, create a LAN game in one instance and join in the other. If your gamepads are not working in the menus go to coop/settings/controls/joystick in any instance and set the default joystick controls, save the changes, quit normally and launch again via Nucleus. If you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked. This handler installs these files for windowed in your main game files: https://thirteenag.github.io/wfp#scct, delete them if you do not want windowed in your main game.";
Game.PauseBetweenContextAndLaunch = 3;
Game.PauseBetweenProcessGrab = 10;
Game.PauseBetweenStarts = 25;

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
Game.ProtoInput.XinputHook = false;
Game.ProtoInput.UseOpenXinput = false;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 1;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function() {
  if (!System.IO.File.Exists(Context.OrigRootFolder + "\\d3d9.dll")) {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.dll");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  if (!System.IO.File.Exists(Context.OrigRootFolder + "\\d3d9.ini")) {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  if (!System.IO.File.Exists(Context.OrigRootFolder + "\\msacm32.dll")) {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\msacm32.dll");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "msacm32.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  if (!System.IO.File.Exists(Context.OrigRootFolder + "\\msvfw32.dll")) {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\msvfw32.dll");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "msvfw32.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts");
  System.IO.Directory.CreateDirectory(filePath);

  if (!System.IO.File.Exists(Context.OrigRootFolder + "\\scripts\\SplinterCellChaosTheory.WidescreenFix.asi")) {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\SplinterCellChaosTheory.WidescreenFix.asi");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "SplinterCellChaosTheory.WidescreenFix.asi");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Joysticks.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Joysticks.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\JoysticksDefault.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "JoysticksDefault.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  if (!System.IO.File.Exists(Context.OrigRootFolder + "\\scripts\\SplinterCellChaosTheory.WidescreenFix.ini")) {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\SplinterCellChaosTheory.WidescreenFix.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "SplinterCellChaosTheory.WidescreenFix.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  Context.HideTaskBar();

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d9.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("MAIN", "ForceWindowedMode", 1),
    new Nucleus.IniSaveInfo("FORCEWINDOWED", "CenterWindow", 0),
    new Nucleus.IniSaveInfo("FORCEWINDOWED", "BorderlessFullscreen", 0),
    new Nucleus.IniSaveInfo("FORCEWINDOWED", "AlwaysOnTop", 1),
    new Nucleus.IniSaveInfo("FORCEWINDOWED", "DoNotNotifyOnTaskSwitch", 1)
  ]);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\SplinterCellChaosTheory.WidescreenFix.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [new Nucleus.IniSaveInfo("MAIN", "ResX", Context.Width), new Nucleus.IniSaveInfo("MAIN", "ResY", Context.Height)]);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("X2DInput", "EnableX2Dinput", true),
    new Nucleus.IniSaveInfo("X2DInput", "LT", "Button11"),
    new Nucleus.IniSaveInfo("X2DInput", "RT", "Button12")
  ]);

  if (Context.IsKeyboardPlayer) {
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", "")
    ]);
  } else {
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
    ]);
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

      //ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);
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
