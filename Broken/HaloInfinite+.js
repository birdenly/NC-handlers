var answers1 = [
    "60",
    "30",
    "45",
    "75",
    "90",
    "120"
  ];
  Game.AddOption(
    "Select the FPS cap.",
    '',
    "fps",
    answers1
  );

Game.ExecutableContext = [ 
        "Arbiter.dll",
];


Game.FileSymlinkExclusions = [
    "steam_appid.txt",
    "dinput8.dll",
    "XInputUap.dll",
    "server.bat"
];
Game.FileSymlinkCopyInstead = [
    "Arbiter.dll",
    "CommonEventLoggingLibrary_Release.dll",
    "discord_game_sdk.dll",
    "DumpTool.exe",
    "DumpToolException_6068.bin",
    "GdkSupport_Release.dll",
    "HaloInfinite.exe.asr",
    "i343ETWProvider_Release.dll",
    "libcrypto-1_1-x64.dll",
    "libcurl.dll",
    "libssl-1_1-x64.dll",
    "PackageFeautures.xml",
    "PartyWin.dll",
    "PartyXboxLive.dll",
    "pck_list.bin",
    "steam_api64.dll",
    "SteamGame.Config",
    "version.txt",
    "XalClockSkew.json",
    "XsapiThunks_Release.dll",
    ];


Game.DirSymlinkExclusions = ["game"];
Game.DirExclusions = ["game\\steam_settings"];
Game.KillProcessesOnClose = ["cmd","start","mutex"];

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "HaloInfinite.exe";
Game.BinariesFolder = "game";
Game.LauncherExe = "launch.bat";
Game.LauncherExeIgnoreFileCheck = true; 
Game.GUID = "Halo Infinite";
Game.GameName = "Halo Infinite";
Game.SteamID = "1240440";
Game.CreateSteamAppIdByExe = true;
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Halo Infinite";
Game.WindowStyleValues = ["~0xC00000", "~0x40000", "~0x20000000", "~0x20000", "~0x80000", "0x40000000"];
Game.ExtWindowStyleValues = ["~0x00000001", "~0x00000200", "~0x00020000"];
Game.ResetWindows = true;
Game.HookFocus = true;
Game.Hook.DInputEnabled = false;
Game.UseDInputBlocker = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = ["XInputUap.dll"];
Game.Hook.CustomDllEnabled = false;
Game.Description = "IMPORTANT: YOU NEED STEAM OPEN.\n\nTHIS HANDLER IS FOR MULTIPLAYER ONLY.\n\nTHE MAX PLAYER/BOT AMOUNT IS 8.\n\nSETTINGS IN LAN WONT VISUALLY CHANGE, BUT THEY ARE BEING CHANGED. THATS A ISSUE WITH THE GAME NOT THE HANDLER.\n\nThe handler changes your main game settings.\n\nOnce the first instance opens log-in with a microsoft account, log-in using a different microsoft account per instance, if you are already logged-in with the same account in a different instance log-out and log-in with a different one by going into settings and logging out. If you cant type in the microsoft login, just alt+tab to the screen.\n\nAfter all instances resize correctly, alt+tab to the cmd window with the name LAN SERVER CREATION and press ENTER to start the LAN server.\n\nTo connect to the server go to custom game > create game > server > (your PC name) and you will be connected.\n\nThis game is very demanding so reduce graphics settings, lower the resolution scale if you notice texture issues in the open world.";
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\HaloInfinite\\Settings";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 15;
    
Game.SetTopMostAtEnd = true; 
Game.SupportsKeyboard = true; 
Game.SetWindowHook = true;
Game.UseGoldberg = true;
Game.GoldbergExperimental = true;

Game.Play = function () {

    var FPS = Context.Options["fps"];
    
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\mutex.exe"], false, "", 5, false, true, false,false);
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\start.exe"], false, "", 5, false, false, false,false);

    var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\launch.bat";
    var lines = [
        'echo off',
        'HaloInfinite.exe',
        'exit'

    ];
    Context.WriteTextFile(timese, lines);

    // var appid = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\steam_appid.txt";
    // var lines = ["1240440"];
    // Context.WriteTextFile(appid, lines);

    var appid = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_appid.txt";
    var lines = ["1240440"];
    Context.WriteTextFile(appid, lines);

// var appid = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\disable_lan_only.txt";
    // var lines = [""];
    // Context.WriteTextFile(appid, lines);

    var filePath = Context.EnvironmentPlayer + "\\Documents\\My Mods";
    System.IO.Directory.CreateDirectory(filePath);

    var filePath = Context.EnvironmentPlayer + "\\Documents\\My Mods\\SpecialK";
    System.IO.Directory.CreateDirectory(filePath);

    var filePath = Context.EnvironmentPlayer + "\\Documents\\My Mods\\SpecialK\\Global";
    System.IO.Directory.CreateDirectory(filePath);

    var savePath = (Context.SavePath = Context.EnvironmentPlayer + "\\Documents\\My Mods\\SpecialK\\Global\\osd.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "osd.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\dxgi.ini");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dxgi.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\dxgi.dll");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dxgi.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\dxgi.ini";
    Context.ReplaceLinesInTextFile(
    txtPath,
    [
      Context.FindLineNumberInTextFile(txtPath, "OverrideRes=", Nucleus.SearchType.StartsWith) + "|OverrideRes=" + Context.Width + "x" + Context.Height,
      Context.FindLineNumberInTextFile(txtPath, "TargetFPS=", Nucleus.SearchType.StartsWith) + "|TargetFPS=" + FPS,
      Context.FindLineNumberInTextFile(txtPath, "BackgroundFPS=", Nucleus.SearchType.StartsWith) + "|BackgroundFPS=" + FPS,
      Context.FindLineNumberInTextFile(txtPath, "MinRes=", Nucleus.SearchType.StartsWith) + "|MinRes=" + Context.Width + "x" + Context.Height,
      Context.FindLineNumberInTextFile(txtPath, "MaxRes=", Nucleus.SearchType.StartsWith) + "|MaxRes=" + Context.Width + "x" +Context.Height,
     
    ]);


    var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\steam_settings");
    System.IO.Directory.CreateDirectory(filePath);

    System.IO.Directory.CreateDirectory(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\steam_settings\\load_dlls");

    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\steam_settings\\load_dlls\\xlive64.dll");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "xlive64.dll");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
      
    var appid = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\steam_settings\\disable_lan_only.txt";
    var lines = [""];
    Context.WriteTextFile(appid, lines);

    // var appid = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\new_app_ticket.txt";
    // var lines = [""];
    // Context.WriteTextFile(appid, lines);

    // var appid = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\gc_token.txt";
    // var lines = [""];
    // Context.WriteTextFile(appid, lines);

    // var appid = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\steam_settings\\steam_interfaces.txt";
    // var lines = [
    //     "SteamClient017",
    //     "SteamClient020",
    //     "SteamGameServer013",
    //     "SteamGameServerStats001",
    //     "SteamUser020",
    //     "SteamFriends017",
    //     "SteamUtils009",
    //     "SteamMatchMaking009",
    //     "SteamMatchMakingServers002",
    //     "STEAMUSERSTATS_INTERFACE_VERSION011",
    //     "STEAMAPPS_INTERFACE_VERSION008",
    //     "SteamNetworking006",
    //     "STEAMREMOTESTORAGE_INTERFACE_VERSION014",
    //     "STEAMSCREENSHOTS_INTERFACE_VERSION003",
    //     "STEAMHTTP_INTERFACE_VERSION003",
    //     "SteamController007",
    //     "STEAMUGC_INTERFACE_VERSION014",
    //     "STEAMAPPLIST_INTERFACE_VERSION001",
    //     "STEAMMUSIC_INTERFACE_VERSION001",
    //     "STEAMMUSICREMOTE_INTERFACE_VERSION001",
    //     "STEAMHTMLSURFACE_INTERFACE_VERSION_005",
    //     "STEAMINVENTORY_INTERFACE_V003",
    //     "STEAMVIDEO_INTERFACE_V002",
    //     "STEAMPARENTALSETTINGS_INTERFACE_VERSION001",
    //     "STEAMREMOTEPLAY_INTERFACE_VERSION001",
    //     "STEAMTV_INTERFACE_V001",
    //     "SteamInput001",
    //     "SteamMatchGameSearch001",
    //     "SteamNetworkingSockets008",
    //     "SteamNetworkingUtils003",
    //     "SteamParties002"
    // ];
    // Context.WriteTextFile(appid, lines);

    // var appid = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\steam_interfaces.txt";
    // var lines = [
    //     "SteamClient017",
    //     "SteamClient020",
    //     "SteamGameServer013",
    //     "SteamGameServerStats001",
    //     "SteamUser020",
    //     "SteamFriends017",
    //     "SteamUtils009",
    //     "SteamMatchMaking009",
    //     "SteamMatchMakingServers002",
    //     "STEAMUSERSTATS_INTERFACE_VERSION011",
    //     "STEAMAPPS_INTERFACE_VERSION008",
    //     "SteamNetworking006",
    //     "STEAMREMOTESTORAGE_INTERFACE_VERSION014",
    //     "STEAMSCREENSHOTS_INTERFACE_VERSION003",
    //     "STEAMHTTP_INTERFACE_VERSION003",
    //     "SteamController007",
    //     "STEAMUGC_INTERFACE_VERSION014",
    //     "STEAMAPPLIST_INTERFACE_VERSION001",
    //     "STEAMMUSIC_INTERFACE_VERSION001",
    //     "STEAMMUSICREMOTE_INTERFACE_VERSION001",
    //     "STEAMHTMLSURFACE_INTERFACE_VERSION_005",
    //     "STEAMINVENTORY_INTERFACE_V003",
    //     "STEAMVIDEO_INTERFACE_V002",
    //     "STEAMPARENTALSETTINGS_INTERFACE_VERSION001",
    //     "STEAMREMOTEPLAY_INTERFACE_VERSION001",
    //     "STEAMTV_INTERFACE_V001",
    //     "SteamInput001",
    //     "SteamMatchGameSearch001",
    //     "SteamNetworkingSockets008",
    //     "SteamNetworkingUtils003",
    //     "SteamParties002"
    // ];
    // Context.WriteTextFile(appid, lines);
    
    //   var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\disable_lan_only.txt";
    //   var lines = [];
    //   Context.WriteTextFile(timese, lines);
    
    var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\game\\steam_settings\\DLC.txt";
    var lines = [
    "1708091=Halo Infinite (Campaign)"
    ];

    Context.WriteTextFile(autoExec, lines);

	var cfgFilePath = Context.NucleusUserRoot + "\\AppData\\Local\\HaloInfinite\\Settings\\SpecControlSettings.json";
    
        var screenWidthLine = Context.FindLineNumberInTextFile(cfgFilePath, '"spec_control_windowed_display_resolution_x"', Nucleus.SearchType.Contains) + 2;
        var screenHeightLine = Context.FindLineNumberInTextFile(cfgFilePath, '"spec_control_windowed_display_resolution_y"', Nucleus.SearchType.Contains) + 2;
        var windowModeLine = Context.FindLineNumberInTextFile(cfgFilePath, '"spec_control_window_mode"', Nucleus.SearchType.Contains) + 2;
        var muteLine = Context.FindLineNumberInTextFile(cfgFilePath, '"mute_audio_on_loss_of_focus"', Nucleus.SearchType.Contains) + 2;
        var capLine = Context.FindLineNumberInTextFile(cfgFilePath, '"cap_frame_rate_on_loss_of_focus"', Nucleus.SearchType.Contains) + 2;

        var FPSlimit1 = Context.FindLineNumberInTextFile(cfgFilePath, '"spec_control_minimum_framerate"', Nucleus.SearchType.Contains) + 2;
        var FPSlimit2 = Context.FindLineNumberInTextFile(cfgFilePath, '"spec_control_target_framerate"', Nucleus.SearchType.Contains) + 2;

	Context.ReplaceLinesInTextFile(cfgFilePath, [
        screenWidthLine + '|        "value": ' + Context.Width,
        screenHeightLine + '|        "value": ' + Context.Height,
        windowModeLine + '|        "value": 0',
        muteLine + '|        "value": 0',
        capLine + '|        "value": 0',

        FPSlimit1 + '|        "value": '+FPS,
        FPSlimit2 + '|        "value": '+FPS,
        ]);

    if (Context.PlayerID == 0) {
        var cfgFilePath = Context.NucleusUserRoot + "\\AppData\\Local\\HaloInfinite\\Settings\\SpecControlSettings.json";

            var music1 = Context.FindLineNumberInTextFile(cfgFilePath, '"spec_control_music_volume"', Nucleus.SearchType.Contains) + 2;
            var music2 = Context.FindLineNumberInTextFile(cfgFilePath, '"spec_control_dialog_volume"', Nucleus.SearchType.Contains) + 2;
            var music3 = Context.FindLineNumberInTextFile(cfgFilePath, '"spec_control_menu_music_volume"', Nucleus.SearchType.Contains) + 2;
            

        Context.ReplaceLinesInTextFile(cfgFilePath, [
            music1 + '|        "value": 8', //not too loud or quiet
            music2 + '|        "value": 8',
            music3 + '|        "value": 8',
            ]);
    }else{
        var cfgFilePath = Context.NucleusUserRoot + "\\AppData\\Local\\HaloInfinite\\Settings\\SpecControlSettings.json";

            var music1 = Context.FindLineNumberInTextFile(cfgFilePath, '"spec_control_music_volume"', Nucleus.SearchType.Contains) + 2;
            var music2 = Context.FindLineNumberInTextFile(cfgFilePath, '"spec_control_dialog_volume"', Nucleus.SearchType.Contains) + 2;
            var music3 = Context.FindLineNumberInTextFile(cfgFilePath, '"spec_control_menu_music_volume"', Nucleus.SearchType.Contains) + 2;
        

        Context.ReplaceLinesInTextFile(cfgFilePath, [
            music1 + '|        "value": 0',
            music2 + '|        "value": 5',
            music3 + '|        "value": 0',
            ]);

    }

    // if (Context.PlayerID == Context.NumberOfPlayers - 1) {
//
        var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server.bat";
        var lines = [
        "@echo off",
        "echo ONLY PRESS ENTER ON THE WINDOW AFTER ALL INSTANCES ARE RESIZED CORRECTLY. ONLY PRESS ENTER ON THE WINDOW AFTER ALL INSTANCES ARE RESIZED CORRECTLY.",
        "echo ONLY PRESS ENTER ON THE WINDOW AFTER ALL INSTANCES ARE RESIZED CORRECTLY. ONLY PRESS ENTER ON THE WINDOW AFTER ALL INSTANCES ARE RESIZED CORRECTLY.",
        "echo ONLY PRESS ENTER ON THE WINDOW AFTER ALL INSTANCES ARE RESIZED CORRECTLY. ONLY PRESS ENTER ON THE WINDOW AFTER ALL INSTANCES ARE RESIZED CORRECTLY.",
        "TITLE LAN SERVER CREATION",
        "timeout /t -1",
        'HaloInfinite.exe -server -console -lan -lan_sandbox RETAIL',
        ];

        Context.WriteTextFile(server, lines);
        
        Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server.bat"], false, "", 0, false, false, false, false);
    // }
    
};