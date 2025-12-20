Game.FileSymlinkExclusions = [
    "d3d9.dll",
    "d3d9.ini",
    "steam_api.dll",
    "steam_interfaces.txt",
    "local_save.txt"
];

Game.SteamID = "203250";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "ST.exe";
Game.GUID = "Star Trek 2013";
Game.GameName = "Star Trek 2013";
Game.MaxPlayers = 16;
Game.MaxPlayersOneMonitor = 16;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Star Trek";
Game.ResetWindows = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled = false;
Game.Description = "Wait for the game to resize, menus arent correct in split, but in game they are fine and correct aspect ratio. Make a custom match and join in with the second player. In case the mouse is going to one of the screens, press END to balance focus and make the mouse stop."; 

Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.UseGoldberg = true;
Game.GoldbergNoLocalSave = true;
Game.RefreshWindowAfterStart = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\StarTrekPC";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\55100";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;

Game.ProtoInput.EnableFocusMessageLoop = true; 
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02A3, 0x02A1]; //Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE.

Game.Play = function () {

    Context.CopyFolder(Context.ScriptFolder, Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

    var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Tools\\steam_interfaces.txt";
    var lines = [
    "STEAMAPPS_INTERFACE_VERSION005",
    "SteamClient012",
    "SteamFriends011",
    "SteamGameServerStats001",
    "SteamGameServer011",
    "SteamMatchMakingServers002",
    "SteamMatchMaking009",
    "SteamNetworking005",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION006",
    "STEAMSCREENSHOTS_INTERFACE_VERSION001",
    "SteamUser016",
    "STEAMUSERSTATS_INTERFACE_VERSION010",
    "SteamUtils005"
    ];
    Context.WriteTextFile(autoExec, lines);

};