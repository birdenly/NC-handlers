Game.FileSymlinkCopyInstead = [
    "Steam.dll",
    "steamclient.dll",
    "ROEngine.ini",
   "ROGame.ini",
    "DefaultEngine.ini",
         
]; 

Game.KillProcessesOnClose = ["ROgame1"];
Game.GameName = "Red Orchestra 2";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "ROGame.exe";
Game.SteamID = "35450";
Game.GUID = "Red Orchestra 2";
Game.MaxPlayers = 64;
Game.MaxPlayersOneMonitor = 64;
Game.BinariesFolder = "Binaries\\Win32";
Game.SupportsPositioning = true;
Game.LauncherTitle = "";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "UnrealEngine3";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [ ];
Game.Hook.CustomDllEnabled= false;
Game.HideTaskbar = true;
Game.SetWindowHookStart = true;
Game.Description = "make a folder with the name 'server' and put everything of the dedicated server inside it and change the ROgame.exe of the dedicated server to ROgame1.exe";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 35;
 
// Game.RequiresAdmin = true;
Game.UseGoldberg = true; 

Game.GoldbergWriteSteamIDAndAccount = true; 


// Game.UseNucleusEnvironment = true; 
Game.UserProfileConfigPath = "Documents\\My Games\\RedOrchestra2";
Game.UseDirectX9Wrapper = true;

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

// ProtoInput:

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
// Game.ProtoInput.GetCursorPosHook = true;
// Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = true;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = true;
// Game.ProtoInput.CursorVisibilityHook = true;
// Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
//Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;

// Game.ProtoInput.RawInputFilter = true;
// Game.ProtoInput.MouseMoveFilter = false;
// Game.ProtoInput.MouseActivateFilter = true;
// Game.ProtoInput.WindowActivateFilter = true;
// Game.ProtoInput.WindowActvateAppFilter = true;
// Game.ProtoInput.MouseWheelFilter = true;
// Game.ProtoInput.MouseButtonFilter = true;
// Game.ProtoInput.KeyboardButtonFilter = true;

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

Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 40000;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function () {
        var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\d3d9.ini");
        var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.ini");
        System.IO.File.Copy(savePkgOrigin, savePath, true);

        var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\d3d9.dll");
        var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d9.dll");
        System.IO.File.Copy(savePkgOrigin, savePath, true);

        var FPS = Context.Options["fps"];
        
          var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\d3d9.ini";
          Context.ReplaceLinesInTextFile(
          txtPath,
          [
            Context.FindLineNumberInTextFile(txtPath, "OverrideRes=", Nucleus.SearchType.StartsWith) + "|OverrideRes=" + Context.Width + "x" + Context.Height,
            Context.FindLineNumberInTextFile(txtPath, "TargetFPS=", Nucleus.SearchType.StartsWith) + "|TargetFPS=" + FPS,
            Context.FindLineNumberInTextFile(txtPath, "BackgroundFPS=", Nucleus.SearchType.StartsWith) + "|BackgroundFPS=" + FPS,
            Context.FindLineNumberInTextFile(txtPath, "MinRes=", Nucleus.SearchType.StartsWith) + "|MinRes=" + Context.Width + "x" + Context.Height,
            Context.FindLineNumberInTextFile(txtPath, "MaxRes=", Nucleus.SearchType.StartsWith) + "|MaxRes=" + Context.Width + "x" +Context.Height,
           
          ]);
          if (Context.IsKeyboardPlayer == true) {

            var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\d3d9.ini";
            Context.ReplaceLinesInTextFile(
              txtPath,
              [
                Context.FindLineNumberInTextFile(txtPath, "ConfineCursor=", Nucleus.SearchType.StartsWith) + "|ConfineCursor=true",
                Context.FindLineNumberInTextFile(txtPath, "UnconfineCursor=", Nucleus.SearchType.StartsWith) + "|UnconfineCursor=false"
              ],
              "utf-8"
            );

            var disable0 = "46|DisabledToGame=false";
            var disable1 = "49|DisabledToGame=false";
            var disable2 = "65|DisabledToGame=true";
            var rendback = Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=false";
          } else {
            var disable0 = "46|DisabledToGame=true";
            var disable1 = "49|DisabledToGame=true";
            var disable2 = "65|DisabledToGame=false";
            var rendback = Context.FindLineNumberInTextFile(txtPath, "RenderInBackground=", Nucleus.SearchType.StartsWith) + "|RenderInBackground=true";
          }
          var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\d3d9.ini";
          Context.ReplaceLinesInTextFile(txtPath, [disable0, disable1, disable2, rendback], "utf-8");

          if (!System.IO.Directory.Exists(Context.GetFolder(Nucleus.Folder.Documents) + "\\My Mods\\SpecialK\\Global")) {
            var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.Documents) + "\\My Mods\\SpecialK\\Global");
            System.IO.Directory.CreateDirectory(filePath);
          }
          if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.Documents) + "\\My Mods\\SpecialK\\Global\\osd.ini")) {
            var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.Documents) + "\\My Mods\\SpecialK\\Global\\osd.ini");
            var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "osd.ini");
            System.IO.File.Copy(savePkgOrigin, savePath, true);
          } else {
            var txtPath = Context.GetFolder(Nucleus.Folder.Documents) + "\\My Mods\\SpecialK\\Global\\osd.ini";
            Context.ReplaceLinesInTextFile(txtPath, [Context.FindLineNumberInTextFile(txtPath, "Duration=", Nucleus.SearchType.StartsWith) + "|Duration=0.0"], "utf-8");
          }

        var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\ROGame\\Config\\ROEngine.ini"
        Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
        new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen", "False"),
        new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
        new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height),
        new Nucleus.IniSaveInfo("SystemSettings", "AllowD3D10", "False"),
        new Nucleus.IniSaveInfo("WinDrv.WindowsClient", "StartupFullscreen", "False"),

        // new Nucleus.IniSaveInfo("SystemSettings", "SLSNativeResX", Context.Width),
        // new Nucleus.IniSaveInfo("SystemSettings", "SLSNativeResY", Context.Height),

        // new Nucleus.IniSaveInfo("OnlineSubsystemSteamworks.OnlineSubsystemSteamworks", "bUseVAC", "False"),
     ]);

    if (!System.IO.File.Exists(Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\ROGame\\Config\\ROInput.ini")) {
        var savePath = (Context.SavePath = Context.DocumentsPlayer + Context.UserProfileConfigPath + "\\ROGame\\Config\\ROInput.ini");
        var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "ROInput.ini");
        System.IO.File.Copy(savePkgOrigin, savePath, true);
      }

    // var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server\\ROGame\\Config\\ROGame.ini"
    //     Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    //     new Nucleus.IniSaveInfo("ROGame.ROGameInfo", "bLANServer", "True")
    // ]);

    // var overlay = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\wide.txt"; //in case the resolution isnt right
    // var lines = ["setres " + Context.Width + "x" +  Context.Height];
    // Context.WriteTextFile(overlay, lines);

    

    
    if (Player.IsKeyboardPlayer) {
        Context.StartArguments = "-AlwaysFocus -nosplash -nomoviestartup " + "-resx=" + Context.Width + " -resy= " + Context.Height;
    Context.Hook.ForceFocus = "False";
    Game.ProtoInput.RawInputFilter = true;
    Game.ProtoInput.MouseMoveFilter = false;
    Game.ProtoInput.MouseActivateFilter = true;
    Game.ProtoInput.WindowActivateFilter = true;
    Game.ProtoInput.WindowActvateAppFilter = true;
    Game.ProtoInput.MouseWheelFilter = true;
    Game.ProtoInput.MouseButtonFilter = true;
    Game.ProtoInput.KeyboardButtonFilter = true;
    Game.ProtoInput.DrawFakeCursor = true;
    Game.ProtoInput.CursorVisibilityHook = true;
    Game.ProtoInput.ClipCursorHook = true;
    Game.ProtoInput.GetCursorPosHook = true;
    Game.ProtoInput.SetCursorPosHook = true;

    // var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\XInputPlus.ini";
    // Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", "")
    // ]);

    }
    else {
      Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup " + "-resx=" + Context.Width + " -resy= " + Context.Height;
    Game.ProtoInput.RawInputFilter = false;
    Game.ProtoInput.MouseMoveFilter = false;
    Game.ProtoInput.MouseActivateFilter = false;
    Game.ProtoInput.WindowActivateFilter = false;
    Game.ProtoInput.WindowActvateAppFilter = false;
    Game.ProtoInput.MouseWheelFilter = false;
    Game.ProtoInput.MouseButtonFilter = false;
    Game.ProtoInput.KeyboardButtonFilter = false;
    Game.ProtoInput.DrawFakeCursor = false;
    Game.ProtoInput.CursorVisibilityHook = false;
    Game.ProtoInput.ClipCursorHook = false;
    Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
    Game.ProtoInput.GetCursorPosHook = false;
    Game.ProtoInput.SetCursorPosHook = false;


    // var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\XInputPlus.ini";
    // Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
    //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
    // ]);
    }

        var Bat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server\\RO2ServerNUCLEUS.bat";
        var lines = ['start .\\Binaries\\win32\\rogame1 te-Apartments?minplayers=64?maxplayers=64?adminpassword=123 -brewedloading'];
        Context.WriteTextFile(Bat, lines);
        
        Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server\\RO2ServerNUCLEUS.bat"], false, 0);

        var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Binaries\\Win32\\steam_interfaces.txt";
        var lines = [
        "SteamClient015",
        "SteamGameServer012",
        "SteamGameServerStats001",
        "SteamUser017",
        "SteamFriends014",
        "SteamUtils007",
        "SteamMatchMaking009",
        "SteamMatchMakingServers002",
        "STEAMUSERSTATS_INTERFACE_VERSION011",
        "STEAMAPPS_INTERFACE_VERSION006",
        "SteamNetworking005",
        "STEAMREMOTESTORAGE_INTERFACE_VERSION012",
        "STEAMSCREENSHOTS_INTERFACE_VERSION002",
        "STEAMHTTP_INTERFACE_VERSION002",
        "STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001",
        "STEAMUGC_INTERFACE_VERSION002",
        "STEAMAPPLIST_INTERFACE_VERSION001",
        "STEAMMUSIC_INTERFACE_VERSION001",
        "STEAMMUSICREMOTE_INTERFACE_VERSION001",
        "STEAMCONTROLLER_INTERFACE_VERSION",
        ];

        Context.WriteTextFile(autoExec, lines);

        var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server\\Binaries\\Win32\\steam_interfaces.txt";
        var lines = [
        "SteamClient015",
        "SteamGameServer012",
        "SteamGameServerStats001",
        "SteamUser017",
        "SteamFriends014",
        "SteamUtils007",
        "SteamMatchMaking009",
        "SteamMatchMakingServers002",
        "STEAMUSERSTATS_INTERFACE_VERSION011",
        "STEAMAPPS_INTERFACE_VERSION006",
        "SteamNetworking005",
        "STEAMREMOTESTORAGE_INTERFACE_VERSION012",
        "STEAMSCREENSHOTS_INTERFACE_VERSION002",
        "STEAMHTTP_INTERFACE_VERSION002",
        "STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001",
        "STEAMUGC_INTERFACE_VERSION002",
        "STEAMAPPLIST_INTERFACE_VERSION001",
        "STEAMMUSIC_INTERFACE_VERSION001",
        "STEAMMUSICREMOTE_INTERFACE_VERSION001",
        "STEAMCONTROLLER_INTERFACE_VERSION",
        ];

        Context.WriteTextFile(autoExec, lines);

        // var numPlayers = 0;

        // for (var i = 0; i < PlayerList.Count; i++) {
        // var player = PlayerList[i];
  
        // if (player.IsXInput && player.ScreenIndex !== -1) {
        // numPlayers++;
        // }
        // player.ProtoController1 = (Context.GamepadId);
        // player.ProtoController2 = (Context.GamepadId);
        // player.ProtoController3 = (Context.GamepadId);
        // player.ProtoController4 = (Context.GamepadId);
        // player.ProtoController5 = (Context.GamepadId);
        // player.ProtoController6 = (Context.GamepadId);
        // player.ProtoController7 = (Context.GamepadId);
        // player.ProtoController8 = (Context.GamepadId);
        // player.ProtoController9 = (Context.GamepadId);
        // }

};