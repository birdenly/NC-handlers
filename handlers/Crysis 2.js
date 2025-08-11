Game.ExecutableContext = ["dinput8.dll"];

var answers1 = ["NO", "YES"];
Game.AddOption("Will you play the CO-OP mode? INSTALL IT CORRECTLY IN YOUR GAME FILES", "The CO-OP mode has only 2 levels(It recommends a maximum of 4 players) and are very unstable and NEEDS a dedicated server running. READ THE HANDLERS NOTE BOTTOM RIGHT AT THE PREVIOUS PAGE", "Coop", answers1);

var answers2 = ["NO", "YES"];
Game.AddOption("Start the dedicated server?", "Needed for coop. opcional for multiplayer as there is ", "server", answers2);

Game.AddOption("Write your OpenSpy username", "This is needed to start a dedicated server. Just make a OpenSpy dummy account to use as server.\nREAD THE HANDLERS NOTE BOTTOM RIGHT AT THE PREVIOUS PAGE","user", []);

Game.AddOption("Write your OpenSpy password", "This is needed to start a dedicated server. Just make a OpenSpy dummy account to use as server.\nREAD THE HANDLERS NOTE BOTTOM RIGHT AT THE PREVIOUS PAGE", "pass", []);

Game.AddOption("Password for the the dedicated server", "", "ServerPass", []);

Game.KillProcessesOnClose = ["Crysis2DedicatedServer","cmd","F2"]; 
Game.FileSymlinkExclusions = ["LevelRotation.xml","dedicated.cfg","Crysis2DedicatedServer.exe","ProtectDedicated.xml","d3d9.dll","d3d9.ini","XInput1_3.dll",
"d3dcompiler_46.dll",
"d3dx.ini",
"nvapi.dll",
"d3d11.dll",
"3dvision2sbs.hlsl",
"mouse.hlsl",
"upscale.hlsl",

];
// Game.DirExclusions = ["Crysis2Coop"];
Game.FileSymlinkCopyInstead = ["dinput8.dll",
"zlib1.dll",
"atimgpud.dll",
"CryRenderD3D9.dll",
"CryRenderD3D11.dll",
"D3DCompiler_42.dll",
"D3DX9_42.dll",
"d3dx10_42.dll",
"d3dx11_42.dll",
"fmod_event.dll",
"fmod_event_net.dll",
"fmodex.dll",
"ijl15.dll",
"jpeg62.dll",
"libtiff3.dll",
"OpenAutomatePlugin.dll",
"SHAllocator.dll",
"system.cfg",
"Version.txt",
"Crysis2Launcher.exe",
"fxc.exe"

];

Game.KillMutex = ["CrytekApplication"];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = false;
Game.ExecutableName = "Crysis2.exe";
Game.SteamID = "108800";
Game.GUID = "Crysis 2";
Game.GameName = "Crysis 2";
Game.MaxPlayers = 16;
Game.MaxPlayersOneMonitor = 16;
Game.BinariesFolder = "Bin32";
Game.HideTaskbar = true;
Game.DPIHandling = Nucleus.DPIHandling.InvScaled;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Crysis 2 (TM)";
Game.SetWindowHookStart = true; 
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.Description =
  "IMPORTANT: This handler NEEDS http://c2community.epicgamer.org/download.html and INTERNET CONNECTION, download it place it in your game folder and run the 'Crysis 2 OpenSpy Launcher.exe' to install the OpenSpy patch.\n\nAlso set your main game to windowed before playing\n\nFor co-op you can download: https://www.moddb.com/mods/crysis-2-co-op/downloads/crysis-2-co-op-latest-version , the mod is unfinished and only has 2 somewhat working levels. When playing co-op, alt+tab to the dedicated server screen and press F2, it will change the current map to the next one (or start a map, if there is none)\n\nBEFORE PLAYING SPLIT SCREEN: Start the game, go into mods and load the OpenSpy mod. You will need to create an account for each player and go THROUGH THE TERMS OF SERVICE, remember the accounts your created. If you need a dedicated server, you need to create an extra account to put into the nucleus options in the next page to be used for the server.\n\nYou can put a random serial key, it will work\n\nUse JOIN MATCH to see the nucleus server\n\nIf you want to change the LevelRotation.xml for other modes, options, change maps around and etc, go into the handlers folder in nucleus > Crysis 2 > either change the file LevelRotation_pvp.xml (MUST KEEP THE SAME NAME LevelRotation_pvp.xml) or just change the content inside the file, dont break it.\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked. ";
Game.PauseBetweenProcessGrab = 10;
Game.PauseBetweenStarts = 10;
Game.RefreshWindowAfterStart = true;

Game.UseSteamless = true; 
Game.SteamlessArgs = "--quiet --keepbind";

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Saved Games\\Crysis2";


Game.SupportsMultipleKeyboardsAndMice = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.FocusHooks = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008];

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
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;


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

Game.Play = function() {

    var id = Context.ConvertToString(Math.floor(Math.random() * (999 - 100 + 1) ) + 100) + Context.ConvertToString(Math.floor(Math.random() * (999 - 100 + 1) ) + 100);

    Context.CopyFolder(Context.ScriptFolder + "\\dedicated", Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

    var COOP = Context.Options["Coop"];
    var SERVER = Context.Options["server"];
    var USER = Context.Options["user"];
    var PASS = Context.Options["pass"];
    var SERVERPASS = Context.Options["ServerPass"];

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder)  + "\\bin32\\d3dx.ini";
    var dict = [
    Context.FindLineNumberInTextFile(txtPath, "width=", Nucleus.SearchType.StartsWith) + "|width=" + Context.Width,
    Context.FindLineNumberInTextFile(txtPath, "height=", Nucleus.SearchType.StartsWith) + "|height=" + Context.Height,
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    if (COOP == "YES") {

        
        Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2.exe"], false, 10);
        Context.StartArguments = "-mod Crysis2Coop";

        if (SERVER == "YES") {

            var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\LevelRotation.xml";
            var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "LevelRotation_coop.xml");
            System.IO.File.Copy(savePkgOrigin, savePath, true);

            var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bin32\\server.bat";
            var lines = ['Crysis2DedicatedServer.exe -mod Crysis2Coop'];
            Context.WriteTextFile(server, lines);

            var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dedicated.cfg";
            var dict = [
            Context.FindLineNumberInTextFile(txtPath, "g_gamespy_unique_nick", Nucleus.SearchType.StartsWith) + '|g_gamespy_unique_nick = "' + USER + '"',
            Context.FindLineNumberInTextFile(txtPath, "g_gamespy_password", Nucleus.SearchType.StartsWith) + '|g_gamespy_password = "' + PASS + '"',
            Context.FindLineNumberInTextFile(txtPath, "sv_servername", Nucleus.SearchType.StartsWith) + '|sv_servername = "Nucleus server' + id + '"',
            Context.FindLineNumberInTextFile(txtPath, "sv_password", Nucleus.SearchType.StartsWith) + '|sv_password = "'+ SERVERPASS + '"',
            ];
            Context.ReplaceLinesInTextFile(txtPath, dict);

            Context.Wait(1000);
            Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bin32\\server.bat"], false, 1, false, false);

        }
    }
    if(COOP=="NO"){

        Context.StartArguments = "-mod OpenSpy";

        if (SERVER == "YES") {

            var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\LevelRotation.xml";
            var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "LevelRotation_pvp.xml");
            System.IO.File.Copy(savePkgOrigin, savePath, true);

            var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dedicated.cfg";
            var dict = [
            Context.FindLineNumberInTextFile(txtPath, "g_gamespy_unique_nick", Nucleus.SearchType.StartsWith) + '|g_gamespy_unique_nick = "' + USER + '"',
            Context.FindLineNumberInTextFile(txtPath, "g_gamespy_password", Nucleus.SearchType.StartsWith) + '|g_gamespy_password = "' + PASS + '"',
            Context.FindLineNumberInTextFile(txtPath, "sv_servername", Nucleus.SearchType.StartsWith) + '|sv_servername = "Nucleus server' + id + '"',
            Context.FindLineNumberInTextFile(txtPath, "sv_password", Nucleus.SearchType.StartsWith) + '|sv_password = "'+ SERVERPASS + '"',
            ];
            Context.ReplaceLinesInTextFile(txtPath, dict);

            var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bin32\\server.bat";
            var lines = ['Crysis2DedicatedServer.exe -mod OpenSpy'];
            Context.WriteTextFile(server, lines);

            Context.Wait(1000);
            Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bin32\\server.bat"], false, 1, false, false);

        } 

    }

    var txtPath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\game.cfg";
    var dict = [
    Context.FindLineNumberInTextFile(txtPath, "r_Fullscreen", Nucleus.SearchType.StartsWith) + "|r_Fullscreen = 0",
    Context.FindLineNumberInTextFile(txtPath, "r_Width =", Nucleus.SearchType.StartsWith) + "|r_Width = " + Context.Width,
    Context.FindLineNumberInTextFile(txtPath, "r_Height =", Nucleus.SearchType.StartsWith) + "|r_Height = " + Context.Height,
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

};