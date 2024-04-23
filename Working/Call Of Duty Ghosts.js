var answers = ['No Change', 'Low', 'Normal', 'High', 'Extra'];
Game.AddOption('Textures', 'Reduce RAM required by using lower settings.', 'tex', answers);
var answers2 = ['No Change', 'Very Low', 'Low', 'Normal', 'High', 'Extra'];
Game.AddOption('Image Quality', 'Reduce GPU power required by using lower settings.', 'img', answers2);
var answers3 = ['No Change',"91","75","60", "50", "45", "40", "30", "0"];
Game.AddOption("Select the FPS Cap the game will use", "", "fps", answers3);

Game.DirSymlinkExclusions = ['iw6', 'iw6\\recipes', 'players2', 'players2\\user'];
Game.FileSymlinkExclusions = ['xinput1_3.dll', 'xinputplus.ini', 'iw6-mod.exe', 'cmr_history', 'mpdata', 'mpdataex', 'config_mp.cfg', 'settings_s.zip.iw6', 'config_mp.cfg', 'keys_mp.cfg', 'settings_c.zip.iw6', 'settings_m.zip.iw6', 'iw6_md202ef8d.bak_11000010000000c.stat', 'iw6_md202ef8d_0_0.bak_11000010000000c.stat', 'iw6_md202ef8d_0_0_11000010000000c.stat', 'iw6_md202ef8d_11000010000000c.stat', 'keys.cfg', 'settings_s.zip.iw6', 'server.cfg', 'start.bat', '__iw6-mod'];
Game.GameName = 'Call of Duty Ghosts';
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.KeepSymLinkOnExit = true;
Game.SupportsKeyboard = false;
Game.ExecutableName = 'iw6mp64_ship.exe';
Game.ExecutableToLaunch = "iw6-mod.exe";
Game.BinariesFolder = '';
Game.SteamID = '209160';
Game.GUID = 'Call of Duty Ghosts';
Game.MaxPlayers = 9;
Game.MaxPlayersOneMonitor = 9;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = 'Call of Duty® Ghosts Multiplayer';
Game.HasDynamicWindowTitle = false;
Game.SetForegroundWindowElsewhere = true;
Game.StartArguments = '-nosteam -multiplayer';
Game.PauseBetweenStarts = 10;
Game.PauseBetweenProcessGrab = 5;
Game.ForceProcessSearch = true;
Game.KillProcessesOnClose = ['start', 'connect', 'F2 Host','F2 Guest', 'F3 Restart','joytokey',"F4","F5", 'cmd'];
Game.ResetWindows = true;
Game.Description = "IMPORTANT: THIS IS MADE FOR LEGIT STEAM VERSION WITH ALL DLCS, ANY OTHER VERSION YOU WILL HAVE PROBLEMS --DONT ASK FOR HELP WITH THEM--\n\nIf you get squares when loading to a map than a crash, it means you dont have it installed (you dont have that DLC)\n\nYou might need to change your languange to english, some DLC's will only work in english\n\nAfter all screens are resized/positionedd correctly, click on them once to be able to move it, than click 'END' if you have a keyboard/mouse player.\n\nThe saves per instance are stored inside Nucleus Co-op content folder so if you delete Nucleus or the game content folder, your Nucleus saves for this game will be lost(not your main game save).\n\nGo into play online in all instances, in the first instance start a private match than press 'F2' for all the others to connect to the game or pressing and holding the START button on your player1 controller.\n\nOnce all the players have connected you can quickly restart the match by pressing F3 or by pressing and holding the SELECT button on your player1 controller.(THIS FEATURE WAS ADDED BACK BY ME, AS IT WAS REMOVED BY THE DEVS FOR A REASON, SO IT MIGHT GIVE ERRORS/CRASH)\n\nyou can go into or out of third person by pressing F4.\n\nYou can press 'F5' to unlockall in all instances.\n\nF2,F3, F4 and F5 commands will only work while input is unlocked.\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";

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
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = true;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

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

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 20000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008, 0x0006];

Game.ProtoInput.OnInputLocked = function() {
	for (var i = 0; i < PlayerList.Count; i++) {
		var player = PlayerList[i];
		ProtoInput.DisableMessageBlock(player.ProtoInputInstanceHandle, 0x0006);
		ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, true, true, true, true);
		System.Threading.Thread.Sleep(1000);


        
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);

        
        System.Threading.Thread.Sleep(500);

        ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);

		ProtoInput.EnableMessageBlock(player.ProtoInputInstanceHandle, 0x0006);
		
	}
};
Game.ProtoInput.OnInputUnlocked = function() {
	for (var i = 0; i < PlayerList.Count; i++) {
		var player = PlayerList[i];
        ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
        ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
	}
};

//bad
Game.Play = function() {

    Game.ExecutableName = "iw6-mod.exe";

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\iw6-mod.exe");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "iw6-mod.exe");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
    
    var filePath = Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\iw6";
    System.IO.Directory.CreateDirectory(filePath);	
        
    if (Context.AspectRatioDecimal > 1.8) {
        Context.PatchFile(System.IO.Path.Combine(Context.RootInstallFolder, "iw6mp64_ship.exe"),
        System.IO.Path.Combine(Context.RootFolder, "iw6mp64_ship.exe"),
        [0x39, 0x8E, 0xE3, 0x3F], [0x39, 0x8E, 0x63, 0x40]);
    }
    else {
        Context.PatchFile(System.IO.Path.Combine(Context.RootInstallFolder, "iw6mp64_ship.exe"),
        System.IO.Path.Combine(Context.RootFolder, "iw6mp64_ship.exe"),
        [0x39, 0x8E, 0xE3, 0x3F], [0x39, 0x8E, 0xE3, 0x3F]);
    }
    
	Context.RunAdditionalFiles([Context.ScriptFolder + "\\start.exe"], false, 0);
	Context.RunAdditionalFiles([Context.ScriptFolder + "\\JoyToKey.exe"], false, 10);
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2 Host.exe"], false, 10);
	Context.RunAdditionalFiles([Context.ScriptFolder + "\\F3 Restart.exe"], false, 0);
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\F4.exe"], false, 0);
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\F5.exe"], false, 0);

    var players2 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2'
    if (!System.IO.Directory.Exists(players2)) {
        System.IO.Directory.CreateDirectory(players2);
    }
    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg')) {
        if (System.IO.File.Exists(Context.RootInstallFolder + '\\players2\\config_mp.cfg')) {
            var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, 'players2\\config_mp.cfg');
            var savePath = Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg';
            System.IO.File.Copy(savePkgOrigin, savePath, true);
        }
    }
	
    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";

    if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg')) {
        var dict = [
          Context.FindLineNumberInTextFile(cfgpath, 'seta intro', Nucleus.SearchType.StartsWith) + '|seta intro "0"',
          Context.FindLineNumberInTextFile(cfgpath, 'seta name ', Nucleus.SearchType.StartsWith) + '|seta name "' + Context.Nickname  + '"',
          Context.FindLineNumberInTextFile(cfgpath, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "auto"',
          Context.FindLineNumberInTextFile(cfgpath, 'seta r_aspectRatioCustom', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatioCustom "' + Context.AspectRatioDecimal + '"',
          Context.FindLineNumberInTextFile(cfgpath, 'seta r_displayMode', Nucleus.SearchType.StartsWith) + '|seta r_displayMode "windowed"',
          Context.FindLineNumberInTextFile(cfgpath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "' + Context.Width + "x" + Context.Height + '"',
          Context.FindLineNumberInTextFile(cfgpath, 'seta r_displayMaxHeight', Nucleus.SearchType.StartsWith) + '|seta r_displayMaxHeight "' + Context.Height + '"',
          Context.FindLineNumberInTextFile(cfgpath, 'seta r_displayMaxWidth', Nucleus.SearchType.StartsWith) + '|seta r_displayMaxWidth "' + Context.Width + '"',
          Context.FindLineNumberInTextFile(cfgpath, 'seta r_vsync', Nucleus.SearchType.StartsWith) + '|seta r_vsync "1"',
          Context.FindLineNumberInTextFile(cfgpath, 'seta ui_autodetectGamepad', Nucleus.SearchType.StartsWith) + '|seta ui_autodetectGamepad "1"',	
          Context.FindLineNumberInTextFile(cfgpath, 'seta in_mouse', Nucleus.SearchType.StartsWith) + '|seta in_mouse "1"',
        ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
    }


    var FPS = Context.Options["fps"];
    if(FPS =="No Change"){
    }
    else{

    var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'seta com_maxfps', Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS  + '"',
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
    }

    var tex = Context.Options['tex'];
    if (tex == 'No Change') {}
    if (tex == 'Low') {
        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg')) {


            var dict = [
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip', Nucleus.SearchType.StartsWith) + '|seta r_picmip "3"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_bump', Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "3"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_manual', Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_spec', Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "3"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_water', Nucleus.SearchType.StartsWith) + '|seta r_picmip_water "1"'
            ];
            Context.ReplaceLinesInTextFile(cfgpath, dict);
        }
    }
    if (tex == 'Normal') {
        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg')) {


            var dict = [
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip', Nucleus.SearchType.StartsWith) + '|seta r_picmip "2"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_bump', Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "2"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_manual', Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_spec', Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "2"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_water', Nucleus.SearchType.StartsWith) + '|seta r_picmip_water "1"'		
            ];
            Context.ReplaceLinesInTextFile(cfgpath, dict);
        }
    }
    if (tex == 'High') {
        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg')) {


            var dict = [
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip', Nucleus.SearchType.StartsWith) + '|seta r_picmip "1"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_bump', Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "1"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_manual', Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_spec', Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "1"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_water', Nucleus.SearchType.StartsWith) + '|seta r_picmip_water "0"'
            ];	
            Context.ReplaceLinesInTextFile(cfgpath, dict);		
        }
    }
    if (tex == 'Extra') {
        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg')) {


            var dict = [
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip', Nucleus.SearchType.StartsWith) + '|seta r_picmip "0"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_bump', Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "0"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_manual', Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_spec', Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "0"', 
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_water', Nucleus.SearchType.StartsWith) + '|seta r_picmip_water "0"'	
            ];	
            Context.ReplaceLinesInTextFile(cfgpath, dict);		
        }
    }

    
    if (System.IO.File.Exists(Context.RootInstallFolder + '\\steam_api64.dll')) {
        var cfgpath = Context.HandlersFolder + "\\Call Of Duty Ghosts.js";
        var dict = [
          Context.FindLineNumberInTextFile(cfgpath, '//here', Nucleus.SearchType.StartsWith) + '|//good',
        ];
        Context.ReplaceLinesInTextFile(cfgpath, dict);
    }else{
        var cfgpath = Context.HandlersFolder + "\\Call Of Duty Ghosts.js";
        var dict = [
          Context.FindLineNumberInTextFile(cfgpath, '//here', Nucleus.SearchType.StartsWith) + '|//bad',
        ];
        Context.ReplaceLinesInTextFile(cfgpath, dict);
    }

    var img = Context.Options['img'];
    if (img == 'No Change') {}
    if (img == 'Very Low') {
        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg')) {


            var dict = [
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_imageQuality', Nucleus.SearchType.StartsWith) + '|seta r_imageQuality "1"'
            ];
            Context.ReplaceLinesInTextFile(cfgpath, dict);	
        }
    }
    if (img == 'Low') {
        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg')) {

            
            var dict = [
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_imageQuality', Nucleus.SearchType.StartsWith) + '|seta r_imageQuality "2"'
            ];
            Context.ReplaceLinesInTextFile(cfgpath, dict);	
        }
    }
    if (img == 'Normal') {
        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg')) {

            
            var dict = [
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_imageQuality', Nucleus.SearchType.StartsWith) + '|seta r_imageQuality "3"'
            ];
            Context.ReplaceLinesInTextFile(cfgpath, dict);	
        }
    }
    if (img == 'High') {

        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg')) {

            
            var dict = [
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_imageQuality', Nucleus.SearchType.StartsWith) + '|seta r_imageQuality "4"'
            ];
            Context.ReplaceLinesInTextFile(cfgpath, dict);	
        }
    }
    if (img == 'Extra') {

        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg')) {

        
            var dict = [
                Context.FindLineNumberInTextFile(cfgpath, 'seta r_imageQuality', Nucleus.SearchType.StartsWith) + '|seta r_imageQuality "0"'
            ];
            Context.ReplaceLinesInTextFile(cfgpath, dict);	
        }
    }
    

    var numPlayers = 0;

    for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    if (player.IsXInput && player.ScreenIndex !== -1) {
    numPlayers++;
    }
    player.ProtoController1 = (Context.GamepadId);
    player.ProtoController2 = (Context.GamepadId);
    player.ProtoController3 = (Context.GamepadId);
    player.ProtoController4 = (Context.GamepadId);
    player.ProtoController5 = (Context.GamepadId);
    player.ProtoController6 = (Context.GamepadId);
    player.ProtoController7 = (Context.GamepadId);
    player.ProtoController8 = (Context.GamepadId);	  
    }
};
