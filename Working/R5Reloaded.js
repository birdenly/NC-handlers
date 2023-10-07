var answers1 = ["30", "45", "60", "75", "90", "105", "120", "144", "165", "200"];
Game.AddOption("Select the FPS cap.", "", "fps", answers1);

var answers2 = ["yes", "no"];
Game.AddOption("Enable ADS Aim Assist? comes disabled by default","Hip fire already has Aim assist", "aim", answers2);

var answers3 = ["agressive", "passive", "none"];
Game.AddOption("How do you want the dummies to act when spawned","You can spawn a dummy by pressing D-PAD DOWN, if you select 'none' the handler wont change anything (keeps it as default)", "dummy", answers3);

var answers4 = ["no", "yes"];
Game.AddOption("Enable wallrunning and double jumping in all game modes that support it?(titanfall movement)","If you enable this and you want your changes from your original playlists_r5_patch.txt, go to handlers folder > R5Reloaded folder inside nucleus and change what you want inside the .txt thats inside the folder.", "titan", answers4);

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
  "area_sonar_scan.raw_hdr" ,
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
Game.DirSymlinkCopyInstead = [ 
    "platform\\cfg",
];

Game.DirSymlinkExclusions = [
  "cfg",
  "bin",
  "platform",
];

Game.DirSymlinkCopyInsteadIncludeSubFolders = true;

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "r5apex.exe";
Game.SteamID = "1172470";
Game.GUID = "R5Reloaded";
Game.GameName = "Apex Legends";
Game.MaxPlayersOneMonitor = 4;
Game.MaxPlayers = 4;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Apex Legends";
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.PauseBetweenStarts = 30;
Game.Description = "You need Apex R5Reloaded with Flowstate installed and working, run it through the launcher.exe once before using the handler. You NEED to have the origin/EA app running in the background, make a second account to use just in case.\n\nAt the start of the handler the connection command will automatically be copied into your clipboard to paste later.(in case you lose it this is the command:\n" +'connect 127.0.0.1:37015;net_setkey "rHWboeNIOa+UzGJHEHOdaA=="' + "\n\nINSTRUCTIONS FOR THE FIRST INSTANCE: After the game starts press 'F10', go to the hosting tab and uncheck 'Load global banned list', set the server visibility to 'offline' and select the mode/map you want, now press 'start server'(or stop server than start server, if the server is already running).\n\nINSTRUCTIONS FOR THE OTHER INSTANCES: Get to the menu (where your character is shown), now press ' (key above TAB) and paste the connection command thats in your clipboard into the console.\n\nTo change character and alot of other stuff press 'esc' and go into the dev menu.\n\nFor vertical splitscreen or non 16:9 instance(if the screen has a black border when started): when the screen opens wait for it to resize into place than get to the main menu and press 'alt+enter' to go fullscreen than press 'alt+enter' again to go back to normal, now the screen should have no borders and the console/server browser should work. I dont recommend using resolutions like this as it will break some stuff in the menus.";
Game.XInputPlusDll = ["xinput1_4.dll","xinput1_3.dll"];
Game.PauseBetweenProcessGrab = 5;

Game.SetWindowHookStart = true;
Game.SetTopMostAtEnd = true; 
Game.FakeFocus = true;
Game.HookFocus = true;
Game.FakeFocusInterval = 5000;


Game.Play = function () {

    var FPS = Context.Options["fps"];

    var Args = (Context.Args = ' -windowed -noborder -ansicolor -dev -devsdk -fnf -multiple -novid -showdevmenu -playlistfile "playlists_r5_patch.txt" -engine_no_focus_sleep 0' + " -w " + Context.Width + " -h " + Context.Height + " +fps_max " + FPS);

    Context.StartArguments = Args;

    var AIM = Context.Options["aim"];
    var TITAN = Context.Options["titan"];
    var DUMMY = Context.Options["dummy"];

    if(AIM=="yes"){
      AIM = 1;
    }else{
      AIM = 0;
    }

    if (TITAN == 'yes') {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\playlists_r5_patch.txt");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "playlists_r5_patch.txt");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }else{

    }

    //disable hud stuff
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\system\\autoexec_client_dev.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, 'cl_showfps', Nucleus.SearchType.StartsWith) + '|cl_showfps                            "0"',
      Context.FindLineNumberInTextFile(txtPath, 'cl_showpos', Nucleus.SearchType.StartsWith) + '|cl_showpos                            "0"  ',
      Context.FindLineNumberInTextFile(txtPath, 'host_speeds', Nucleus.SearchType.StartsWith) + '|host_speeds                           "0"',
      Context.FindLineNumberInTextFile(txtPath, 'cl_showsimstats', Nucleus.SearchType.StartsWith) + '|cl_showsimstats                       "0"',
      Context.FindLineNumberInTextFile(txtPath, 'cl_showgpustats', Nucleus.SearchType.StartsWith) + '|cl_showgpustats                       "0"',
      Context.FindLineNumberInTextFile(txtPath, 'phys_showObjectCount', Nucleus.SearchType.StartsWith) + '|phys_showObjectCount                  "0"',
      Context.FindLineNumberInTextFile(txtPath, 'con_drawnotify', Nucleus.SearchType.StartsWith) + '|con_drawnotify                        "0"',
      Context.FindLineNumberInTextFile(txtPath, 'r_drawrenderboxes', Nucleus.SearchType.StartsWith) + '|r_drawrenderboxes                     "0"',
      Context.FindLineNumberInTextFile(txtPath, 'r_debug_overlay_nodecay', Nucleus.SearchType.StartsWith) + '|r_debug_overlay_nodecay               "0"',
      Context.FindLineNumberInTextFile(txtPath, 'cl_ent_bbox', Nucleus.SearchType.StartsWith) + '|cl_ent_bbox                           "0"',
      Context.FindLineNumberInTextFile(txtPath, 'cl_ent_rbox', Nucleus.SearchType.StartsWith) + '|cl_ent_rbox                           "0"',
      Context.FindLineNumberInTextFile(txtPath, 'cl_ent_absbox', Nucleus.SearchType.StartsWith) + '|cl_ent_absbox                         "0"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\system\\autoexec_server_dev.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, 'sv_showhitboxes', Nucleus.SearchType.StartsWith) + '|sv_showhitboxes              "0"',
      Context.FindLineNumberInTextFile(txtPath, 'sv_showlagcompensation', Nucleus.SearchType.StartsWith) + '|sv_showlagcompensation       "0"',
      Context.FindLineNumberInTextFile(txtPath, 'sv_visualizetraces', Nucleus.SearchType.StartsWith) + '|sv_visualizetraces           "0"',
      Context.FindLineNumberInTextFile(txtPath, 'sv_requireOriginToken', Nucleus.SearchType.StartsWith) + '|sv_requireOriginToken        "0"',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
    
    //bind dummies
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\bind.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, '//// DO NOT SHIP (DEV-ONLY) ////', Nucleus.SearchType.StartsWith) + '|enable_debug_overlays 0',
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    //connection
    if(Context.PlayerID == 0){
      var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\bind.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, '//// UTILITY          ////', Nucleus.SearchType.StartsWith) + '|net_setkey "rHWboeNIOa+UzGJHEHOdaA=="',
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);
    }else{

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\game.cfg";
    var dict = [
        Context.FindLineNumberInTextFile(txtPath, '//////////////////////////', Nucleus.SearchType.StartsWith) + '|platform_user_id ' + 1000 + Context.PlayerID,
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\bind.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, '//// UTILITY          ////', Nucleus.SearchType.StartsWith) + '|platform_user_id ' + 1000 + Context.PlayerID,
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
    }

    var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CopyPaste.bat";
    var lines = [
    'echo|set /p=connect 127.0.0.1:37015;net_setkey "rHWboeNIOa+UzGJHEHOdaA=="|clip',
    'quit'
    ];

    Context.WriteTextFile(server, lines);

    Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CopyPaste.bat"], false, 1, false, false);

    //non 16:9
    if (Context.AspectRatioDecimal < 1.7){

      Game.PromptBetweenInstances = true;

      var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\system\\startup_default.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, '', Nucleus.SearchType.StartsWith) + '|+mat_letterbox_aspect_goal 0; +mat_letterbox_aspect_threshold 0; +building_cubemaps "1"',
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);
      
    }

    //extra
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\playlists_r5_patch.txt";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, '				aimassist_adspull_disabled', Nucleus.SearchType.StartsWith) + '|				aimassist_adspull_disabled                     ' + AIM,
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
    
    if(DUMMY != "none"){

      if(DUMMY=="agressive"){
        DUMMY= 1;
      }else{
        DUMMY = 0;
      }

      var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\cfg\\bind.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, '//////////////////////////', Nucleus.SearchType.StartsWith) + '|bind DOWN "script DEV_SpawnDummyAtCrosshair()"',
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);

      var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\platform\\playlists_r5_patch.txt";
      var dict = [
        Context.FindLineNumberInTextFile(txtPath, '				dummies_agressivedummies', Nucleus.SearchType.StartsWith) + '|				dummies_agressivedummies 						' + DUMMY,
      ];
      Context.ReplaceLinesInTextFile(txtPath, dict);

    }

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId),
    ]);

};