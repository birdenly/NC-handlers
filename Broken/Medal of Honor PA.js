Game.KillMutex = [
    "Medal of Honor Pacific Assault(tm)"          
];
Game.ExecutableContext = [
    "mohpa_server.exe"
  ];
// Game.FileSymlinkCopyInstead = [
//     "vorbisfile.dll"  ,
//     "vorbis.dll"  ,
//     "PhysXExtensions.dll"  ,
//     "NxCooking.dll"  ,
//     "ogg.dll"  ,
//     "FrontlinesGE.dll"  ,
//     "DefaultEngine.ini"  ,
//     "DefaultInput.ini"  ,
//     "DefaultInput_deu.ini"  ,
//     "DefaultInput_fra.ini"  ,
//     "GlobalBanlist.ini"  ,
//     "LocalBanlist.ini"  ,
//     "BaseEngine.ini"  ,
//     "BaseInput.ini",
//     "BaseInput_deu.ini",
//     "BaseInput_fra.ini"
// ];

Game.GameName = "Medal of Honor: Pacific Assault";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "mohpa.exe";
Game.SteamID = "";
Game.GUID = "Medal of Honor Pacific Assault";
Game.MaxPlayers = 32;
Game.MaxPlayersOneMonitor = 32;
Game.BinariesFolder = "";
Game.LauncherTitle = "";
Game.Hook.ForceFocus = true;
Game.StartArguments = "+set cl_playintro 0";
Game.Hook.ForceFocusWindowName = "Medal of Honor Pacific Assault(tm)";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled= false;
Game.Description = "";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 25;
Game.HideTaskbar = true;

Game.SetWindowHookStart = true;
Game.ResetWindows = true;

Game.UseNucleusEnvironment = true; 
Game.UserProfileSavePath = "Documents\\EA Games\\Medal of Honor Pacific Assault(tm)";




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
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

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

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02A3, 0x02A1]; // Blocks WM_KILLFOCUS

Game.Play = function () {

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\D3D9.dll");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "D3D9.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dgVoodoo.conf");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dgVoodoo.conf");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var path = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\dgVoodoo.conf';
	var dict = [
		Context.FindLineNumberInTextFile(path, 'Resolution                          = ', Nucleus.SearchType.Contains) + '|Resolution                          = ' + Context.Width + 'x' + Context.Height,	
	]
	Context.ReplaceLinesInTextFile(path, dict);

    var txtPath = Context.EnvironmentPlayer + Context.UserProfileSavePath + "\\newconfig.cfg"
    var dict = [
        Context.FindLineNumberInTextFile(txtPath, "set r_refreshrate ", Nucleus.SearchType.StartsWith) + '|set r_refreshrate "0"',
        Context.FindLineNumberInTextFile(txtPath, "set r_screenwidth", Nucleus.SearchType.StartsWith) + '|set r_screenwidth "' + Context.Width + '"',
        Context.FindLineNumberInTextFile(txtPath, "r_screenheight", Nucleus.SearchType.StartsWith) + '|r_screenheight "' + Context.Height + '"'
        ,Context.FindLineNumberInTextFile(txtPath, "rset s_speaker_type" + 1, Nucleus.SearchType.StartsWith) + '|set r_first_person_fov_x "70"',
        Context.FindLineNumberInTextFile(txtPath, "rset s_speaker_type" + 2, Nucleus.SearchType.StartsWith) + '|set r_first_person_fov_y "40"',
    ];  
    Context.ReplaceLinesInTextFile(txtPath, dict);

}