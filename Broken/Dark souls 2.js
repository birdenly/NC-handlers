Game.FileSymlinkCopyInstead = ["config.json" ,"database.sqlite",
"last_activity.time",
"private.key",
"public.key","Server.exe",
"Injector.config" ,"Injector.dll" ,"Loader.deps.json", "Loader.dll", "Loader.dll.config","Loader.exe", "Loader.pdb", "Loader.runtimeconfig.dev.json", "Loader.runtimeconfig.json","steam_appid.txt","index.html","main.js","dialog-polyfill.js","dialog-polyfill.css","Server.pdb","main.css"
];

// Game.DirSymlinkExclusions = [
//   "Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv153\\Win64",
//   "Engine\\Binaries\\Win64",
//   "WhatTheFog\\Binaries\\Win64"
// ];
Game.KillMutex = ["DarkSoulsIIMutex"];
Game.KillProcessesOnClose = ['server'];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "DarkSoulsII.exe";
Game.LauncherExe = "Loader.exe";
Game.LauncherTitle = "Dark Souls - Open Server Loader";
Game.SteamID = "335300";
Game.GUID = "DarkSoulsII";
Game.GameName = "DarkSoulsII";
Game.SetTopMostAtEnd = true; 
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.BinariesFolder = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "DARK SOULS II";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.Description =
  "";
Game.PauseBetweenProcessGrab = 22;
Game.PauseBetweenStarts = 5;

Game.UseGoldberg = true;
Game.FakeFocus = true;
Game.UseSteamless = true; 
Game.SteamlessArgs = "--quiet --keepbind";
Game.SetWindowHook = true;
Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Roaming\\DarkSoulsII";

Game.Play = function() {
  // Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder)); //can comment out
  // Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder)+"\\mod\\Server");//can comment out

  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mod\\Server\\steam_interfaces.txt";
  var lines = [
    "SteamClient017",
    "SteamClient020",
    "SteamGameServer013",
    "SteamGameServerStats001",
    "SteamUser021",
    "SteamFriends017",
    "SteamUtils010",
    "SteamMatchMaking009",
    "SteamMatchMakingServers002",
    "STEAMUSERSTATS_INTERFACE_VERSION012",
    "STEAMAPPS_INTERFACE_VERSION008",
    "SteamNetworking006",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION014",
    "STEAMSCREENSHOTS_INTERFACE_VERSION003",
    "STEAMHTTP_INTERFACE_VERSION003",
    "STEAMUGC_INTERFACE_VERSION015",
    "STEAMAPPLIST_INTERFACE_VERSION001",
    "STEAMMUSIC_INTERFACE_VERSION001",
    "STEAMMUSICREMOTE_INTERFACE_VERSION001",
    "STEAMHTMLSURFACE_INTERFACE_VERSION_005",
    "STEAMINVENTORY_INTERFACE_V003",
    "SteamController008",
    "STEAMVIDEO_INTERFACE_V002"
  ];
  Context.WriteTextFile(interfaces, lines);
  
  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_interfaces.txt";
  var lines = [
    "SteamClient012",
    "SteamGameServer011",
    "SteamGameServerStats001",
    "SteamUser016",
    "SteamFriends013",
    "SteamUtils005",
    "SteamMatchMaking009",
    "SteamMatchMakingServers002",
    "STEAMUSERSTATS_INTERFACE_VERSION011",
    "STEAMAPPS_INTERFACE_VERSION005",
    "SteamNetworking005",
    "STEAMREMOTESTORAGE_INTERFACE_VERSION010",
    "STEAMSCREENSHOTS_INTERFACE_VERSION002",
    "STEAMHTTP_INTERFACE_VERSION002",
    "STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001"
  ];
  Context.WriteTextFile(interfaces, lines);

  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mod\\Server\\DLC.txt";
  var lines = [
    "271942=Dark Souls™ II Crown of the Sunken King",
    "271943=DARK SOULS™ II Crown of the Old Iron King",
    "271944=DARK SOULS™ II Crown of the Ivory King",
  ];
  Context.WriteTextFile(interfaces, lines);
  
  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\DLC.txt";
  var lines = [
    "271942=Dark Souls™ II Crown of the Sunken King",
    "271943=DARK SOULS™ II Crown of the Old Iron King",
    "271944=DARK SOULS™ II Crown of the Ivory King",
  ];
  Context.WriteTextFile(interfaces, lines);

  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mod\\Server\\user_steam_id.txt";
  var lines = [
    "76561199023125333"
  ];
  Context.WriteTextFile(interfaces, lines);

  
  var interfaces = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mod\\Server\\account_name.txt";
  var lines = [
    "AAAAAAAAA1"
  ];
  Context.WriteTextFile(interfaces, lines);

  Context.RunAdditionalFiles(
    ["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mod\\Server\\Server.exe"],
    false,
    "Press 'ok' after the server is loaded. (shows 'Loading level : 100%' when its loaded) ",
    1,
    false,
    false,
    true,
    false
  );

  var cfgpath = Context.EnvironmentPlayer + Context.UserProfileSavePath + "\\GraphicsConfig_SOFS.xml";
      var dict = [
        Context.FindLineNumberInTextFile(cfgpath, '<config><Resolution-WindowScreenWidth>', Nucleus.SearchType.StartsWith) + '|<config><Resolution-WindowScreenWidth>'+Context.Width+'</Resolution-WindowScreenWidth>',
        Context.FindLineNumberInTextFile(cfgpath, '<Resolution-WindowScreenHeight>', Nucleus.SearchType.StartsWith) + '|<Resolution-WindowScreenHeight>'+Context.Height +'</Resolution-WindowScreenHeight>',
        Context.FindLineNumberInTextFile(cfgpath, '<ChangeAllSettings>', Nucleus.SearchType.StartsWith) + '|<ChangeAllSettings>CUSTOM</ChangeAllSettings>',
        Context.FindLineNumberInTextFile(cfgpath, '<FullScreen>', Nucleus.SearchType.StartsWith) + '|<FullScreen>OFF</FullScreen>'
      ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

};
