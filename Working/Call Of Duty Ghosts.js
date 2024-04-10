var answers = ['No Change', 'Low', 'Normal', 'High', 'Extra'];
Game.AddOption('Textures', 'Reduce RAM required by using lower settings.', 'tex', answers);
var answers2 = ['No Change', 'Very Low', 'Low', 'Normal', 'High', 'Extra'];
Game.AddOption('Image Quality', 'Reduce GPU power required by using lower settings.', 'img', answers2);
var answers3 = ['No Change',"91","75","60", "50", "45", "40", "30", "0"];
Game.AddOption("Select the FPS Cap the game will use", "", "fps", answers3);
var answers4 = ["-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "200"];
Game.AddOption("For LAN and only for Guest PC, select the last digits of the host IP", "", "lan", answers4);

Game.DirSymlinkExclusions = ['iw6x', 'iw6x\\recipes', 'players2', 'players2\\user'];
Game.FileSymlinkExclusions = ['xinput1_3.dll', 'xinputplus.ini', 'iw6x.exe', 'cmr_history', 'mpdata', 'mpdataex', 'config_mp.cfg', 'settings_s.zip.iw6', 'config_mp.cfg', 'keys_mp.cfg', 'settings_c.zip.iw6', 'settings_m.zip.iw6', 'iw6_md202ef8d.bak_11000010000000c.stat', 'iw6_md202ef8d_0_0.bak_11000010000000c.stat', 'iw6_md202ef8d_0_0_11000010000000c.stat', 'iw6_md202ef8d_11000010000000c.stat', 'keys.cfg', 'settings_s.zip.iw6', 'server.cfg', 'start.bat', '__iw6x'];
Game.GameName = 'Call of Duty Ghosts';
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.KeepSymLinkOnExit = true;
Game.SupportsKeyboard = false;
Game.ExecutableName = 'iw6mp64_ship.exe';
Game.ExecutableToLaunch = "iw6x.exe";
Game.BinariesFolder = '';
Game.SteamID = '209160';
Game.GUID = 'Call of Duty Ghosts';
Game.MaxPlayers = 9;
Game.MaxPlayersOneMonitor = 9;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = 'Call of Duty® Ghosts Multiplayer';
Game.HasDynamicWindowTitle = false;
Game.SetForegroundWindowElsewhere = true;
Game.StartArguments = '-multiplayer';
Game.PauseBetweenStarts = 10;
Game.PauseBetweenProcessGrab = 5;
Game.ForceProcessSearch = true;
Game.KillProcessesOnClose = ['start', 'connect', 'F2 Host','F2 Guest', 'F3 Restart','joytokey',"F4","F5", 'cmd'];
Game.ResetWindows = true;
Game.Description = "IMPORTANT: THIS IS MADE FOR LEGIT STEAM VERSION WITH ALL DLCS, ANY OTHER VERSION YOU WILL HAVE PROBLEMS --DONT ASK FOR HELP WITH THEM--\n\nIf you get squares when loading to a map than a crash, it means you dont have it installed (you dont have that DLC)\n\nYou might need to change your languange to english, some DLC's will only work in english\n\nAfter all screens are resized/positionedd correctly, click on them once to be able to move it, than click 'END' if you have a keyboard/mouse player.\n\nThe saves per instance are stored inside Nucleus Co-op content folder so if you delete Nucleus or the game content folder, your Nucleus saves for this game will be lost(not your main game save).\n\nGo into play online in all instances, in the first instance start a private match than press 'F2' for all the others to connect to the game or pressing and holding the START button on your player1 controller.\n\nOnce all the players have connected you can quickly restart the match by pressing F3 or by pressing and holding the SELECT button on your player1  controller.(THIS FEATURE WAS ADDED BACK BY ME, AS IT WAS REMOVED BY THE DEVS FOR A REASON, SO IT MIGHT GIVES ERRORS/CRASH)\n\nyou can go into third person by pressing F4.\n\nYou can press 'F5' to unlockall in all instances.\n\nF2,F3, F4 and F5 commands will only work while input is unlocked.\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";

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

    Game.ExecutableName = "iw6x.exe";

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\iw6x.exe");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "iw6x.exe");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
    
    var filePath = Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\iw6x";
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

    var lan = Context.Options["lan"];
    if (lan == "-") {

    Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2 Host.exe"], false, 10);

    }

    if (lan >= 0) {
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2 Guest.exe"], false, 10);

    var txtPath = Game.Folder + '\\Local IP.txt';
    var dict = ['192.168.1.' + lan + '      ',];
    Context.WriteTextFile(txtPath, dict); 
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
