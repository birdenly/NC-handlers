Game.DirSymlinkExclusions = [
    "online\\Binaries\\Win32",
    "online\\BmGame\\Config",
    "online"
];
Game.FileSymlinkExclusions = [
    "steam_api.dll",
        "steam_appid.txt",
        "steam_interfaces.txt",
        "steam.dll",
        "steamclient.dll",
        "steamclient64.dll"

];
Game.GameName = "Batman Arkham Origins";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.SupportsKeyboard = true;
Game.ExecutableName = "BatmanOrigins.exe";
Game.SteamID = "209000";
Game.GUID = "Batman Arkham Origins";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.BinariesFolder = "online\\Binaries\\Win32";
Game.UseGoldberg = true;
Game.LauncherTitle = "";
Game.SupportsPositioning = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Batman: Arkham Origins Online (32-bit, DX9)";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [ "xinput1_3.dll" ];
Game.Hook.CustomDllEnabled= false;
Game.HookFocus= true;
Game.SetWindowHookStart = true;
Game.Description = "";
Game.PauseBetweenStarts = 30;

Game.NeedsSteamEmulation = true; 
    

Game.Play = function () {

      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\BmGame\\Config\\BmEngine.ini";
        Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
        new Nucleus.IniSaveInfo("SystemSettings", "Fullscreen", false),
        new Nucleus.IniSaveInfo("SystemSettings", "Borderless", false),
        new Nucleus.IniSaveInfo("SystemSettings", "ResX", Context.Width),
        new Nucleus.IniSaveInfo("SystemSettings", "ResY", Context.Height),
    ]);

    if (Player.IsKeyboardPlayer) {
        Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup -NoController";
    Context.Hook.BlockMouseEvents = "False";
    Context.Hook.BlockKeyboardEvents = "False";
    Context.Hook.BlockInputEvents = "False";
    Context.Hook.ForceFocus = "False";

    }
    else {
        Context.StartArguments = "-windowed -AlwaysFocus -nosplash -nomoviestartup -nomouse";
    Context.Hook.BlockMouseEvents = "True";
    Context.Hook.BlockKeyboardEvents = "True";
    Context.Hook.BlockInputEvents = "True";
    Context.Hook.ForceFocus = "True";
    }

        var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\online\\Binaries\\Win32\\steam_interfaces.txt";
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

}