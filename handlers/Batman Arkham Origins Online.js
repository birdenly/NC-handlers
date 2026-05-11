Game.FileSymlinkCopyInstead = [
    "DefaultWBIDVars.ini",
    "BmCompat.ini",
    "BmEditor.ini",
    "BmEditorKeyBindings.ini",
    "BmEditorUserSettings.ini",
    "BmEngine.ini",
    "BmGame.ini",
    "BmInput.ini",
    "BmLightmass.ini",
    "BmNetVars.ini",
    "BmTesting.ini",
    "BmUI.ini",
    "BmWBIDVars.ini",
    "DebugInput.ini",
    "DefaultCamera.ini",
    "DefaultCompat.ini",
    "DefaultEditor.ini",
    "DefaultEditorKeyBindings.ini",
    "DefaultEditorUserSettings.ini",
    "DefaultEngine.ini",
    "DefaultEngineG4WLive.ini",
    "DefaultEngineSteamworks.ini",
    "DefaultGame.ini",
    "DefaultInput.ini",
    "DefaultLightmass.ini",
    "DefaultNetVars.ini",
    "DefaultTesting.ini",
    "DefaultUI.ini",
    "DefaultWBIDVars.ini",
    "DialogueEngine.ini",
    "Game.cfg",
    "Launcher.ini",
    "SaveFormat.json",
    "UserEditor.ini",
    "UserEditorUserSettings.ini",
    "UserEngine.ini",
    "UserGame.ini",
    "UserInput.ini",
];
Game.DirSymlinkExclusions = [
    "Online\\BmGame\\Config",
    "Online\\Binaries\\Win32"
   ];
Game.FileSymlinkExclusions = ["steam_api.dll"]
Game.KillMutex = ["6c6a0267-cdb5-4cf2-ae78-7f29002f212d"];
Game.GameName = "Batman Arkham Origins Online";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "BatmanOriginsOnline.exe";
Game.SteamID = "209000";
Game.GUID = "Batman Arkham Origins Online";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "Online\\Binaries\\Win32";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Batman™: Arkham Origins Online (32-bit, DX9)";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled= false;
Game.Description = 
"Tutorial/showcase: https://www.youtube.com/watch?v=pQek-j9kxY4 (Tested with steam version only)\n\n"+
"This needs a minimum of 3 players to start a match (Hero/2 Merc Teams).\n\n"+
"Download server emu here: https://github.com/KiwifruitDev/ArkhamRevivedSelfHosted/releases/tag/v1.0.1, place it anywhere (doesnt need to be inside the game files) and start it before playing split screen everytime.\n\n"+
"If it is your first time with it, press SETUP > point the server to your main game folder.\n\n"+
"If you use keyboards and mice after all instances have launched, resized and positioned correctly, press END key once to lock input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make emulated cursors appear after locking input. Press END key again to unlock input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when input is unlocked.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 15;
Game.HideTaskbar = true;

Game.UseGoldberg = true; 
Game.GoldbergNoLocalSave = true;	
Game.CreateSteamAppIdByExe = true;	
Game.SteamlessPatch = ["false", "--quiet --keepbind", "5000"];
Game.SetWindowHookStart = true;

Game.UseNucleusEnvironment = true; 
Game.UserProfileConfigPath = "Documents\\WB Games\\Batman Arkham Origins";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\209000";

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

Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = false;
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
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02A3, 0x02A1]; // Blocks WM_KILLFOCUS

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

Game.Play = function () {

    Context.StartArguments = " -windowed -nostartupmovies -resx=" + Context.Width + " -resy= " + Context.Height;

    var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\bmEngine.ini"
        Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
        new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen",0),
        new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
        new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height),
    ]);

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Online\\BmGame\\Config\\bmEngine.ini"
        Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
        new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen",0),
        new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
        new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height),
    ]);


    var inter = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Online\\Binaries\\Win32\\steam_interfaces.txt";
    var lines = [
        "STEAMAPPS_INTERFACE_VERSION005",
        "SteamClient012",
        "SteamFriends013",
        "SteamGameServerStats001",
        "SteamGameServer011",
        "STEAMHTTP_INTERFACE_VERSION002",
        "SteamMatchMakingServers002",
        "SteamMatchMaking009",
        "SteamNetworking005",
        "STEAMREMOTESTORAGE_INTERFACE_VERSION010",
        "STEAMSCREENSHOTS_INTERFACE_VERSION001",
        "SteamUser016",
        "STEAMUSERSTATS_INTERFACE_VERSION011",
        "SteamUtils005"
    ];
    Context.WriteTextFile(inter, lines);

    var DLC = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Online\\Binaries\\Win32\\DLC.txt";
    var lines = [
        "277830=Batman™: Arkham Origins - Cold, Cold Heart",
        "257070=Batman™: Arkham Origins - Season Pass",
        "250960=SteamDB Unknown App 250960 (Knightfall)",
        "237623=Batman: Arkham Origins - Online Supply Drop 2",
        "237622=Batman: Arkham Origins - Online Supply Drop 1",
        "237621=Batman: Arkham Origins - Infinite Earths Skins Pack",
        "237620=Batman: Arkham Origins - New Millennium Skins Pack",
        "237619=Batman: Arkham Origins - Initiation",
        "237618=Batman: Arkham Origins - Black Mask Challenge Pack",
        "237617=Batman: Arkham Origins - Bane's Forces - Online Vanity Pack",
        "237616=Batman: Arkham Origins - Joker's Vandal - Online Vanity Pack",
        "237615=Batman: Arkham Origins - Classic Tim Drake Robin",
        "237614=SteamDB Unknown App 237614 (DLC_SkinsEarth2DK)",
        "237613=Batman: Arkham Origins - Batman Legends Skins Pack"
    ];
    Context.WriteTextFile(DLC, lines);
}