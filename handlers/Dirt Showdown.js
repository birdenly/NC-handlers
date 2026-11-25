Game.FileSymlinkExclusions = ["steam_api.dll", "steam_appid.txt", "steam_interfaces.txt"];
Game.FileSymlinkCopyInstead = [
"win_000.nfs",
 "binkw32.dll",
 "car_monitor_setup.xml",
 "example_benchmark.xml",
 "game_gdf.dll",
 "game_version.xml",
 "install.vdf",
 "ni.mmo",
 "ogg.dll",
 "raceload.jpk",
 "showdown.exe",
 "showdown_avx.exe",
 "surface_materials.xml",
 "vorbis.dll",
 "vorbisfile.dll",
 "wet_materials_remap.xml",
];

Game.KillMutex = ["Codemasters DiRT Showdown"];
Game.SteamID = "201700";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "showdown_avx.exe";
Game.GUID = "DiRT Showdown";
Game.GameName = "DiRT Showdown";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "DiRT Showdown";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "My kofi: https://ko-fi.com/birden\n\nIMPORTANT: launch your main game once and make sure it works.\n\nIgnore the racenet error. Use the online menu, make the session PUBLIC and search on the same game type to connect. Press end to balance FPS/give focus. Also turn down the music on all instances except one (highly recommend)."

Game.PauseBetweenProcessGrab = 8;
Game.PauseBetweenStarts = 8;

Game.UseGoldberg = true;
Game.GoldbergNoLocalSave = true;
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\My Games\\DiRT Showdown\\hardwaresettings";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\201700";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.FocusHooks = true;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;


Game.ProtoInput.OnInputLocked = function() {	
	for (var i = 0; i < PlayerList.Count; i++) {
	  var player = PlayerList[i];
	  
	  ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, false, false, false, false);
	  
	  System.Threading.Thread.Sleep(500);
	  
	  ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
	}
}

Game.Play = function() {

  var path = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\hardware_settings_config.xml";
  Context.ChangeXmlAttributeValue(path, "//resolution", "width", Context.Width);
  Context.ChangeXmlAttributeValue(path, "//resolution", "height", Context.Height);
  Context.ChangeXmlAttributeValue(path, "//resolution", "fullscreen", "false");
  Context.ChangeXmlAttributeValue(path, "//resolution", "vsync", "1");

  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_interfaces.txt";
  var lines = [
    "SteamClient012",
    "SteamGameServer011",
    "SteamGameServerStats001",
    "SteamUser016",
    "SteamFriends011",
    "SteamUtils005",
    "SteamMatchMaking009",
    "SteamMatchMakingServers002",
    "STEAMUSERSTATS_INTERFACE_VERSION010",
    "STEAMAPPS_INTERFACE_VERSION005",
    "SteamNetworking005",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION006",
    "STEAMSCREENSHOTS_INTERFACE_VERSION001",
    "STEAMHTTP_INTERFACE_VERSION001"
  ];

  Context.WriteTextFile(interfaces, lines);
};