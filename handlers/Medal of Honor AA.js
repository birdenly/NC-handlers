var answers1 = [
    "30",
    "60",
    "90",
    "120",
    "144",
    "165",
    "200"
  ];
  Game.AddOption(
    "Select the FPS cap.",
    '',
    "fps",
    answers1
  );

  var answers2 = [
    "Breakthrough Multiplayer",
    "Co-op Mod"
  ];
  Game.AddOption(
    "What will you play?",
    '',
    "mode",
    answers2
  );

Game.KillMutex = ["Medal of Honor Allied Assault(TM) Breakthrough"];

 Game.FileSymlinkExclusions = [
"Configure.exe",
"autoexec.cfg",
"zzzzzz_co-op_hzm_mod_mohaa",
"zzzzzz_co-op_hzm_mod_mohaa_callvote",
"PK3_Fixes_BT_2.40_(101231).dpk3",
"pak9_coop_AA_BT.pk3"


];

Game.FileSymlinkCopyInstead = [
    "unnamedsoldier.cfg",
    "moh_breakthrough.exe",
    "moh_spearhead.exe",
    "newconfig.cfg",
    "MOHAA.exe",
    "unnamedsoldier.cfg"
];

Game.GameName = "Medal of Honor Allied Assault Breakthrough";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "moh_breakthrough.exe";
Game.SteamID = "";
Game.GUID = "Medal of Honor Allied Assault Breakthrough";
Game.MaxPlayers = 64;
Game.MaxPlayersOneMonitor = 64;
Game.BinariesFolder = "";
Game.LauncherTitle = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Medal of Honor Allied Assault(TM) Breakthrough";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled= false;
Game.Description = "IMPORTANT: This handler works with the 'Medal of Honor Allied Assault(TM) Breakthrough' DLC as it supports Co-op mods and multiplayer.\n\nTested with these Co-op Mods: https://www.moddb.com/mods/medal-of-honor-cooperative-gameplay and https://www.moddb.com/mods/medal-of-honor-coop-hazardmoddinghttps://www.moddb.com/mods/medal-of-honor-coop-hazardmodding. \n\nYou will need to rebind whatever key is bindend to the key 'ctrl' to something else.\n\nYou can use Rewasd or xpadder to play with controllers (or other similar apps).\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.PauseBetweenProcessGrab = 15;
Game.PauseBetweenStarts = 25;
Game.HideTaskbar = true;

Game.SetWindowHookStart = true;
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
Game.ProtoInput.GetAsyncKeyStateHook = true;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;

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

    var FPS = Context.Options["fps"];

    var autoexec1 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\main\\autoexec.cfg";
    var lines1 = [
    'seta r_customwidth "' + Context.Width + '"',
    'seta r_customheight "' + Context.Height + '"',
    'seta r_mode "-1"',
    'seta m_filter "1"',
    'seta in_mouse "-1"',
    'seta com_maxfps "' + FPS +'"',
    'seta ui_console "1"',
    'seta developer "1"',
    'seta cl_playintro "0"',
    'seta r_fullscreen "0"'
    ];
    Context.WriteTextFile(autoexec1, lines1);

    var autoexec2 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\maintt\\autoexec.cfg";
    var lines2 = [
    'seta r_customwidth "' + Context.Width + '"',
    'seta r_customheight "' + Context.Height + '"',
    'seta r_mode "-1"',
    'seta m_filter "1"',
    'seta in_mouse "-1"',
    'seta com_maxfps "' + FPS +'"',
    'seta ui_console "1"',
    'seta developer "1"',
    'seta cl_playintro "0"',
    'seta r_fullscreen "0"'
    ];
    Context.WriteTextFile(autoexec2, lines2);

    var savePath1 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\maintt\\newconfig.cfg";
    Context.ModifySaveFile(savePath1, savePath1, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("", "a", "a"),
      new Nucleus.IniSaveInfo("", "b", "b"),
      new Nucleus.IniSaveInfo("", "c", "c"),
      new Nucleus.IniSaveInfo("", "d", "d"),
      new Nucleus.IniSaveInfo("", "e", "e"),
      new Nucleus.IniSaveInfo("", "f", "f"),
      new Nucleus.IniSaveInfo("", "g", "g"),
      new Nucleus.IniSaveInfo("", "h", "h"),
      new Nucleus.IniSaveInfo("", "i", "i")
    ]);

    var txtPath1 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\maintt\\newconfig.cfg";
    var dict1 = [
      Context.FindLineNumberInTextFile(txtPath1, "[]", Nucleus.SearchType.StartsWith) + '|seta r_customwidth "' + Context.Width + '"',
      Context.FindLineNumberInTextFile(txtPath1, "a=a", Nucleus.SearchType.StartsWith) + '|seta r_customheight "' + Context.Height + '"',
      Context.FindLineNumberInTextFile(txtPath1, "b=b", Nucleus.SearchType.StartsWith) + '|seta r_mode "-1"',
      Context.FindLineNumberInTextFile(txtPath1, "c=c", Nucleus.SearchType.StartsWith) + '|seta in_mouse "-1"',
      Context.FindLineNumberInTextFile(txtPath1, "d=d", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS +'"',
      Context.FindLineNumberInTextFile(txtPath1, "e=e", Nucleus.SearchType.StartsWith) + '|seta ui_console "1"',
      Context.FindLineNumberInTextFile(txtPath1, "f=f", Nucleus.SearchType.StartsWith) + '|seta developer "1"',
      Context.FindLineNumberInTextFile(txtPath1, "g=g", Nucleus.SearchType.StartsWith) + '|seta cl_playintro "0"',
      Context.FindLineNumberInTextFile(txtPath1, "h=h", Nucleus.SearchType.StartsWith) + '|seta m_filter "1"',
      Context.FindLineNumberInTextFile(txtPath1, "i=i", Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
    ];
    Context.ReplaceLinesInTextFile(txtPath1, dict1);

    var savePath2 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\maintt\\configs\\unnamedsoldier.cfg";
    Context.ModifySaveFile(savePath2, savePath2, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("", "a", "a"),
      new Nucleus.IniSaveInfo("", "b", "b"),
      new Nucleus.IniSaveInfo("", "c", "c"),
      new Nucleus.IniSaveInfo("", "d", "d"),
      new Nucleus.IniSaveInfo("", "e", "e"),
      new Nucleus.IniSaveInfo("", "f", "f"),
      new Nucleus.IniSaveInfo("", "g", "g"),
      new Nucleus.IniSaveInfo("", "h", "h"),
      new Nucleus.IniSaveInfo("", "i", "i"),
    ]);

    var txtPath2 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\maintt\\configs\\unnamedsoldier.cfg";
    var dict2 = [
      Context.FindLineNumberInTextFile(txtPath2, "[]", Nucleus.SearchType.StartsWith) + '|seta r_customwidth "' + Context.Width + '"',
      Context.FindLineNumberInTextFile(txtPath2, "a=a", Nucleus.SearchType.StartsWith) + '|seta r_customheight "' + Context.Height + '"',
      Context.FindLineNumberInTextFile(txtPath2, "b=b", Nucleus.SearchType.StartsWith) + '|seta r_mode "-1"',
      Context.FindLineNumberInTextFile(txtPath2, "c=c", Nucleus.SearchType.StartsWith) + '|seta m_filter "1"',
      Context.FindLineNumberInTextFile(txtPath2, "d=d", Nucleus.SearchType.StartsWith) + '|seta in_mouse "-1"',
      Context.FindLineNumberInTextFile(txtPath2, "e=e", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS +'"',
      Context.FindLineNumberInTextFile(txtPath2, "f=f", Nucleus.SearchType.StartsWith) + '|seta ui_console "1"',
      Context.FindLineNumberInTextFile(txtPath2, "g=g", Nucleus.SearchType.StartsWith) + '|seta developer "1"',
      Context.FindLineNumberInTextFile(txtPath2, "h=h", Nucleus.SearchType.StartsWith) + '|seta cl_playintro "0"',
      Context.FindLineNumberInTextFile(txtPath2, "i=i", Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
      Context.FindLineNumberInTextFile(txtPath2, "seta vid_ypos", Nucleus.SearchType.StartsWith) + '|seta vid_ypos "' + Context.PosY + '"',
      Context.FindLineNumberInTextFile(txtPath2, "seta vid_xpos", Nucleus.SearchType.StartsWith) + '|seta vid_xpos "' + Context.PosX + '"',
    ];
    Context.ReplaceLinesInTextFile(txtPath2, dict2);

    var MODE = Context.Options["mode"];
    if(MODE=="Co-op Mod"){
       if (System.IO.File.Exists((Context.RootInstallFolder + "\\maintt\\pak9_coop_AA_BT.pk3"))) {

          var savePath = Context.RootInstallFolder + "\\maintt\\pak9_coop_AA_BT.pk3";
          var savePkgOrigin =  Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\maintt\\pak9_coop_AA_BT.pk3";
          System.IO.File.Copy(savePath, savePkgOrigin, true);

        }

        if (System.IO.File.Exists((Context.RootInstallFolder + "\\maintt\\PK3_Fixes_BT_2.40_(101231).dpk3"))) {

          var savePath = Context.RootInstallFolder + "\\maintt\\PK3_Fixes_BT_2.40_(101231).dpk3";
          var savePkgOrigin = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\maintt\\PK3_Fixes_BT_2.40_(101231).dpk3";
          System.IO.File.Copy(savePath, savePkgOrigin, true);

        }

        if (System.IO.File.Exists((Context.RootInstallFolder + "\\maintt\\zzzzzz_co-op_hzm_mod_mohaa"))) {

          var savePath = Context.RootInstallFolder + "\\maintt\\zzzzzz_co-op_hzm_mod_mohaa";
          var savePkgOrigin = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\maintt\\zzzzzz_co-op_hzm_mod_mohaa";
          System.IO.File.Copy(savePath, savePkgOrigin, true);

        }

        if (System.IO.File.Exists((Context.RootInstallFolder + "\\maintt\\zzzzzz_co-op_hzm_mod_mohaa_callvote"))) {

          var savePath = Context.RootInstallFolder + "\\maintt\\zzzzzz_co-op_hzm_mod_mohaa_callvote";
          var savePkgOrigin = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\maintt\\zzzzzz_co-op_hzm_mod_mohaa_callvote";
          System.IO.File.Copy(savePath, savePkgOrigin, true);

        }
     }else{

     }

}
