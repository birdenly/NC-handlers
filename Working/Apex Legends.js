Hub.Handler.Version = 3; // Released at https://hub.splitscreen.me/ on Sun Oct 22 2023 21:21:49 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "LNzbgwdX2vuaS9fPa";
Hub.Maintainer.Name = "birden";
Hub.Maintainer.Id = "rRycxSn253ZCjQy5C";

var answers1 = ["30", "45", "60", "75", "90", "105", "120", "144", "165", "200"];
Game.AddOption("Select the FPS cap.", "", "fps", answers1);

var answers2 = ["agressive", "passive", "none"];
Game.AddOption(
  "How do you want the dummies to act when spawned",
  "You can spawn a dummy by pressing D-PAD DOWN, if you select 'none' the handler wont change anything (keeps it as default)",
  "dummy",
  answers2
);

var answers3 = ["no", "yes"];
Game.AddOption(
  "Enable wallrunning and double jumping in all game modes that support it?(titanfall movement)",
  "If you  want your changes from your original playlists_r5_patch.txt, go to handlers folder > R5Reloaded folder inside nucleus and change what you want inside the .txt thats inside the folder. if you choose 'no' change the playlists_r5_patch.txt, if you chose 'yes' change the playlists_r5_patchTITAN.txt",
  "titan",
  answers3
);

Game.ExecutableContext = ["launcher.exe"];
Game.FileSymlinkCopyInstead = [
  "launcher.vdf",
  "autoexec_client_dev.cfg",
  "amd_ags_x64.dll",
  "bink2w64.dll",
  "binkawin64.dll",
  "build.txt",
  "dedicated.dll",
  "gameinfo.txt",
  "gamesdk.dll",
  "gameversion.txt",
  "loader.dll",
  "mileswin64.dll",
  "r5apex_ds.exe",
  "r5apexdata.bin",
  "playlists_r5_patch.txt",
  "bind.cfg",
  "game.cfg",
  "speed.cfg",
  "build_all_vpk.cfg",
  "englishclient_build_vpk.cfg",
  "englishclient_extract_vpk.cfg",
  "englishserver_build_vpk.cfg",
  "englishserver_extract_vpk.cfg",
  "rcon_client.cfg",
  "rcon_client_dev.cfg",
  "rcon_server.cfg",
  "rcon_server_dev.cfg",
  "autoexec.cfg",
  "autoexec_client.cfg",
  "autoexec_client_dev.cfg",
  "autoexec_dev.cfg",
  "autoexec_server.cfg",
  "autoexec_server_dev.cfg",
  "layout.ini",
  "startup_client_dev.cfg",
  "startup_client_retail.cfg",
  "startup_dedi_default.cfg",
  "startup_dedi_dev.cfg",
  "startup_dedi_retail.cfg",
  "startup_default.cfg",
  "startup_dev.cfg",
  "startup_launcher.cfg",
  "startup_retail.cfg",
  "config_default_pc.cfg",
  "video_settings_changed_quit.cfg",
  "st_data.bin",
  "startup.bin",
  "persistent_player_data_manifest.rson",
  "persistent_player_data_version_512.pdef",
  "startup.bin",
  "visquery_ps40.vcs",
  "boxfilter_cs50.vcs",
  "hudscripted_mp.res",
  "clean_sdk.bat",
  "audio.mprj",
  "general.mbnk_digest",
  "LICENSE",
  "thirdpartylegalnotices.txt",
  "__master_color_grade.raw_hdr",
  "ability_hunt_mode.raw_hdr",
  "adrenaline_passive.raw_hdr",
  "area_sonar_scan.raw_hdr",
  "blank.raw_hdr",
  "fx_phase_shift.raw_hdr",
  "gas_cloud.raw_hdr",
  "hueshift_example.raw_hdr",
  "menu.raw_hdr",
  "menu_test.raw_hdr",
  "mp_canyonlands_hdr.raw_hdr",
  "mp_canyonlands_mu2_hdr.raw_hdr",
  "mp_canyonlands_mu2b_hdr.raw_hdr",
  "mp_canyonlands_night_hdr.raw_hdr",
  "mp_olympus.raw_hdr",
  "mp_rr_desertlands_hdr.raw_hdr",
  "mp_rr_desertlands_mu1_hdr.raw_hdr",
  "outside_ring.raw_hdr",
  "shell_shock.raw_hdr",
  "smoke_cloud.raw_hdr",
  "UndoACESToe.raw_hdr",
  "logs go here",
  "movementgym_results_1683215726.txt",
  "about_game_mode.menu",
  "mp_rr_overflow.txt",
  "mp_rr_party_crasher.txt"
];
Game.DirSymlinkCopyInstead = ["platform\\cfg"];

Game.DirSymlinkExclusions = ["cfg", "bin", "platform"];

Game.DirSymlinkCopyInsteadIncludeSubFolders = true;

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "r5apex.exe";
Game.SteamID = "1172470";
Game.GUID = "R5Reloaded";
Game.GameName = "Apex Legends";
Game.MaxPlayersOneMonitor = 60;
Game.MaxPlayers = 60;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Apex Legends";
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.PauseBetweenStarts = 15;
Game.Description =
  "You need Apex R5Reloaded (https://r5reloaded.com/) installed and working, run it through the launcher.exe once before using the handler. You NEED to have the origin/EA app running in the background, and have Apex in your library, make a second account to use just in case.\n\nAt the start of the handler the connection command will automatically be copied into your clipboard to paste later.In case you lose it this is the command:\n" +
  'connect 127.0.0.1:37015;net_setkey "rHWboeNIOa+UzGJHEHOdaA=="' +
  "\n\nIf you have a keyboard/mouse instance you can only interact with the console/F10 menus while input is unlocked, after you get in game or wont do anything with those menus press 'END' to lock the keyboard/mouse to their instance.\n\nINSTRUCTIONS FOR THE FIRST INSTANCE: After the game starts press 'F10', go to the hosting tab and uncheck 'Load global banned list', set the server visibility to 'offline' and select the mode/map you want, now press 'start server'(or stop server than start server, if the server is already running).\n\nINSTRUCTIONS FOR THE OTHER INSTANCES: Get to the menu (where your character is shown), now press ' (key above TAB) and paste the connection command thats in your clipboard into the console.\n\nTo change character and alot of other stuff press 'esc' and go into the dev menu.\n\nFor vertical splitscreen or non 16:9 instance(if the screen has a black border when started): when the screen opens wait for it to resize into place than get to the main menu and press 'alt+enter' to go fullscreen than press 'alt+enter' again to go back to normal, now the screen should have no borders and the console/server browser should work. I dont recommend using resolutions like this as it will break some stuff in the menus.";
Game.PauseBetweenProcessGrab = 5;

Game.SetWindowHookStart = true;
// Game.SetTopMostAtEnd = true;

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
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = false;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = false;

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
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

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
  var FPS = Context.Options["fps"];

  var Args = (Context.Args =
    ' -windowed -noborder -ansicolor -dev -devsdk -fnf -multiple -novid -showdevmenu -wconsole -playlistfile "playlists_r5_patch.txt" -engine_no_focus_sleep 0' +
    " -w " +
    Context.Width +
    " -h " +
    Context.Height +
    " +fps_max " +
    FPS +
    " -x " +
    Context.PosX +
    " -y " +
    Context.PosY);

  Context.StartArguments = Args;

  var TITAN = Context.Options["titan"];
  var DUMMY = Context.Options["dummy"];

  if (TITAN == "yes") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\playlists_r5_patch.txt");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "playlists_r5_patchTITAN.txt");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  } else {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\playlists_r5_patch.txt");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "playlists_r5_patch.txt");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  //disable hud stuff
  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\system\\autoexec_client_dev.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "cl_showfps", Nucleus.SearchType.StartsWith) + '|cl_showfps                            "0"',
    Context.FindLineNumberInTextFile(txtPath, "cl_showpos", Nucleus.SearchType.StartsWith) + '|cl_showpos                            "0"  ',
    Context.FindLineNumberInTextFile(txtPath, "host_speeds", Nucleus.SearchType.StartsWith) + '|host_speeds                           "0"',
    Context.FindLineNumberInTextFile(txtPath, "cl_showsimstats", Nucleus.SearchType.StartsWith) + '|cl_showsimstats                       "0"',
    Context.FindLineNumberInTextFile(txtPath, "cl_showgpustats", Nucleus.SearchType.StartsWith) + '|cl_showgpustats                       "0"',
    Context.FindLineNumberInTextFile(txtPath, "phys_showObjectCount", Nucleus.SearchType.StartsWith) + '|phys_showObjectCount                  "0"',
    Context.FindLineNumberInTextFile(txtPath, "con_drawnotify", Nucleus.SearchType.StartsWith) + '|con_drawnotify                        "0"',
    Context.FindLineNumberInTextFile(txtPath, "r_drawrenderboxes", Nucleus.SearchType.StartsWith) + '|r_drawrenderboxes                     "0"',
    Context.FindLineNumberInTextFile(txtPath, "r_debug_overlay_nodecay", Nucleus.SearchType.StartsWith) + '|r_debug_overlay_nodecay               "0"',
    Context.FindLineNumberInTextFile(txtPath, "cl_ent_bbox", Nucleus.SearchType.StartsWith) + '|cl_ent_bbox                           "0"',
    Context.FindLineNumberInTextFile(txtPath, "cl_ent_rbox", Nucleus.SearchType.StartsWith) + '|cl_ent_rbox                           "0"',
    Context.FindLineNumberInTextFile(txtPath, "cl_ent_absbox", Nucleus.SearchType.StartsWith) + '|cl_ent_absbox                         "0"'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\system\\autoexec_server_dev.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "sv_showhitboxes", Nucleus.SearchType.StartsWith) + '|sv_showhitboxes              "0"',
    Context.FindLineNumberInTextFile(txtPath, "sv_showlagcompensation", Nucleus.SearchType.StartsWith) + '|sv_showlagcompensation       "0"',
    Context.FindLineNumberInTextFile(txtPath, "sv_visualizetraces", Nucleus.SearchType.StartsWith) + '|sv_visualizetraces           "0"',
    Context.FindLineNumberInTextFile(txtPath, "sv_requireOriginToken", Nucleus.SearchType.StartsWith) + '|sv_requireOriginToken        "0"'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  //bind dummies
  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\bind.cfg";
  var dict = [Context.FindLineNumberInTextFile(txtPath, "//// DO NOT SHIP (DEV-ONLY) ////", Nucleus.SearchType.StartsWith) + "|enable_debug_overlays 0"];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  //connection

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\bind.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "///////////////// input_system configuration file.", Nucleus.SearchType.StartsWith) + "|net_usesocketsforloopback 1",
    Context.FindLineNumberInTextFile(txtPath, "// This file is executed automatically on startup.", Nucleus.SearchType.StartsWith) + "|sv_onlineAuthEnable 0"
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  if (Context.PlayerID == 0) {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\bind.cfg";
    var dict = [Context.FindLineNumberInTextFile(txtPath, "//// UTILITY          ////", Nucleus.SearchType.StartsWith) + '|net_setkey "rHWboeNIOa+UzGJHEHOdaA=="'];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  } else {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\game.cfg";
    var dict = [Context.FindLineNumberInTextFile(txtPath, "//////////////////////////", Nucleus.SearchType.StartsWith) + "|platform_user_id " + 1000 + Context.PlayerID];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\bind.cfg";
    var dict = [Context.FindLineNumberInTextFile(txtPath, "//// UTILITY          ////", Nucleus.SearchType.StartsWith) + "|platform_user_id " + 1000 + Context.PlayerID];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CopyPaste.bat";
  var lines = ['echo|set /p=connect 127.0.0.1:37015;net_setkey "rHWboeNIOa+UzGJHEHOdaA=="|clip', "quit"];

  Context.WriteTextFile(server, lines);

  Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CopyPaste.bat"], false, 1, false, false);

  //non 16:9
  if (Context.AspectRatioDecimal < 1.7) {
    Game.PromptBetweenInstances = true;

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\system\\startup_default.cfg";
    var dict = [Context.FindLineNumberInTextFile(txtPath, "", Nucleus.SearchType.StartsWith) + '|+mat_letterbox_aspect_goal 0; +mat_letterbox_aspect_threshold 0; +building_cubemaps "1"'];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  //extra
  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\playlists_r5_patch.txt";
  var dict = [Context.FindLineNumberInTextFile(txtPath, "				waiting_for_players_countdown_seconds", Nucleus.SearchType.StartsWith) + "|				waiting_for_players_countdown_seconds          30"];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  if (DUMMY != "none") {
    if (DUMMY == "agressive") {
      DUMMY = 1;
    } else {
      DUMMY = 0;
    }

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\bind.cfg";
    var dict = [Context.FindLineNumberInTextFile(txtPath, "//////////////////////////", Nucleus.SearchType.StartsWith) + '|bind DOWN "script DEV_SpawnDummyAtCrosshair()"'];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\playlists_r5_patch.txt";
    var dict = [Context.FindLineNumberInTextFile(txtPath, "				dummies_agressivedummies", Nucleus.SearchType.StartsWith) + "|				dummies_agressivedummies 						" + DUMMY];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  // var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
  // Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
  //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
  //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
  //   new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
  // ]);

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
