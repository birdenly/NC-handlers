Game.UseSteamless = true;
Game.SteamlessArgs = "--quiet --keepbind";     
Game.UseGoldberg = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "arma3_x64.exe";
Game.GUID = "Arma III";
Game.SteamID = "107410";
Game.GameName = "Arma III";
Game.MaxPlayers = 16;
Game.MaxPlayersOneMonitor = 4;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Arma 3";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusOldDll = true;
Game.XInputPlusDll = ["xinput1_3.dll","dinput8.dll"];
Game.Hook.CustomDllEnabled = false;
Game.StartArguments = ""; 
Game.Description = "IMPORTANT: Get in game and change any graphics once before playing with nucleus.\n\nWait until the screen gets to the main menu and click it, you should hear a bleep sound, now in the process picker prompt select arma3_x64 and hit ok.\n\nFOR MODS: right click arma 3 in nucleus,click 'open game handler', in line 181 Put -mod=@modname;@modname2; in the parameters. Steam scenarios wont work, follow Gunters youtube video on how to extract there PBO.\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 20;
Game.PauseBetweenStarts = 30;

Game.SetWindowHookStart = true; 
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\Arma 3";
Game.RefreshWindowAfterStart = true;
Game.ForceProcessPick = true;   



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
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];


Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; //Blocks WM_KILLFOCUS

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

    //ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5000, true, true, true, true, true);

    
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

Game.Play = function() {

  var Args = (Context.Args = " -noLauncher -useBE -skipintro -noSplash -world=empty -noPause -noPauseAudio -window -name=" + Context.Nickname+ " -mod=");

  Context.StartArguments = Args;

//can always change the player screen size
var config = Context.DocumentsPlayer + "\\Arma 3 - Other Profiles\\"+Context.Nickname+"\\"+Context.Nickname+".Arma3Profile";
if(System.IO.File.Exists(config)){

  var change = [
    Context.FindLineNumberInTextFile(config, "fovTop", Nucleus.SearchType.StartsWith) + '|',
    Context.FindLineNumberInTextFile(config, "fovLeft", Nucleus.SearchType.StartsWith) + '|',
    Context.FindLineNumberInTextFile(config, "uiTopLeftX", Nucleus.SearchType.StartsWith) + '|',
    Context.FindLineNumberInTextFile(config, "uiTopLeftY", Nucleus.SearchType.StartsWith) + '|',
    Context.FindLineNumberInTextFile(config, "uiBottomRightX", Nucleus.SearchType.StartsWith) + '|',
    Context.FindLineNumberInTextFile(config, "uiBottomRightY", Nucleus.SearchType.StartsWith) + '|',
    Context.FindLineNumberInTextFile(config, "uiTopLeftX", Nucleus.SearchType.StartsWith) + '|'
  ];
  Context.ReplaceLinesInTextFile(config, change);

}

  var txtPath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Arma3.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "displayMode", Nucleus.SearchType.StartsWith) + '|displayMode=0;',
    Context.FindLineNumberInTextFile(txtPath, "winWidth", Nucleus.SearchType.StartsWith) + '|winWidth=' + Context.Width + ';',
    Context.FindLineNumberInTextFile(txtPath, "winHeight", Nucleus.SearchType.StartsWith) + '|winHeight=' + Context.Height + ';',
    Context.FindLineNumberInTextFile(txtPath, "renderWidth", Nucleus.SearchType.StartsWith) + '|renderWidth=' + Context.Width + ';',
    Context.FindLineNumberInTextFile(txtPath, "renderHeight", Nucleus.SearchType.StartsWith) + '|renderHeight=' + Context.Height + ';',

  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  var filePath = Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings";
	System.IO.Directory.CreateDirectory(filePath);	

        var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\DLC.txt";
        var lines = [
        "1681170=Arma 3 Creator DLC: Western Sahara",
        "1325500=Arma 3 Art of War",
        "1294440=Arma 3 Creator DLC: CSLA Iron Curtain",
        "1227700=Arma 3 Creator DLC: S.O.G. Prairie Fire",
        "1175380=Arma 3 Creator DLC: Spearhead 1944",
        "1042220=Arma 3 Creator DLC: Global Mobilization - Cold War Germany",
        "1021790=Arma 3 Contact",
        "798390=Arma 3 Tanks",
        "744950=Arma 3 Tac-Ops Mission Pack",
        "639600=Arma 3 Malden",
        "612480=Arma 3 DLC Bundle 2",
        "601670=Arma 3 Jets",
        "571710=Arma 3 Laws of War",
        "395180=Arma 3 Apex",
        "390500=Arma Arma 3 Samples",
        "332350=Arma 3 Marksmen",
        "304400=Arma 3 DLC Bundle 1",
        "304380=Arma 3 Helicopters",
        "288520=Arma 3 Karts",
        "275700=Arma 3 Zeus",
        "249862=Arma 3 Tactical Guide",
        "249861=Arma 3 Maps"
		
        ];

        Context.WriteTextFile(autoExec, lines);
			

  if (Context.IsKeyboardPlayer) {
    Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
    Game.ProtoInput.RegisterRawInputHook =  false;
    Game.ProtoInput.GetRawInputDataHook = false;
    Game.ProtoInput.MessageFilterHook = true;
    Game.ProtoInput.GetCursorPosHook = false;
    Game.ProtoInput.SetCursorPosHook = false;
    Game.ProtoInput.GetKeyStateHook = false;
    Game.ProtoInput.GetAsyncKeyStateHook =  false;
    Game.ProtoInput.GetKeyboardStateHook =  false;
    Game.ProtoInput.CursorVisibilityHook = false;
    Game.ProtoInput.ClipCursorHook = true;
    Game.ProtoInput.FocusHooks = false;
    Game.ProtoInput.DrawFakeCursor = false;

    Game.ProtoInput.RawInputFilter =  true;
    Game.ProtoInput.MouseMoveFilter = false;
    Game.ProtoInput.MouseActivateFilter =  true;
    Game.ProtoInput.WindowActivateFilter =  true;
    Game.ProtoInput.WindowActvateAppFilter =  true;
    Game.ProtoInput.MouseWheelFilter =  true;
    Game.ProtoInput.MouseButtonFilter =  true;
    Game.ProtoInput.KeyboardButtonFilter =  true;

    Game.ProtoInput.SendMouseWheelMessages = true;
    Game.ProtoInput.SendMouseButtonMessages = true;
    Game.ProtoInput.SendMouseMovementMessages = true;
    Game.ProtoInput.SendKeyboardButtonMessages = true;
    // Game.ProtoInput.GetKeyStateHook = true;
    // Game.ProtoInput.GetAsyncKeyStateHook = true;
    // Game.ProtoInput.GetKeyboardStateHook = true;

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", "")
    ]);
  } else {
    // Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false; 
    // Game.ProtoInput.RegisterRawInputHook = false;
    // Game.ProtoInput.ClipCursorHook = false;

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("X2DInput", "EnableX2Dinput", true),
      new Nucleus.IniSaveInfo("X2DInput", "LT", "Button11"),
      new Nucleus.IniSaveInfo("X2DInput", "RT", "Button12")
    ]);	

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
    ]);
    
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

};