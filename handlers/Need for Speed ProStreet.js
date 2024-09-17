var answers0 = [
  "yes",
  "no"
];
Game.AddOption(
  "Start LAN server?",
  'Select "no" if you already have a server running.',
  "server",
  answers0
);

var answers1 = [
  "yes",
  "no"
];
Game.AddOption(
  "Makes the HUD smaller like the console version?",
  '',
  "console",
  answers1
);

var answers2 = [
  "yes",
  "no",
  ];
Game.AddOption(
  "Cap the FPS to 30 in-game?",
  '',
  "fps",
  answers2
);

Game.FileSymlinkExclusions = [
"dinput8.dll",
"nfs_cursor.cur",
"NFS_XtendedInput.asi",
"NFS_XtendedInput.default.ini",
"NFS_XtendedInput.ini",
"NFSProStreet.GenericFix.asi",
"NFSProStreet.GenericFix.ini",
"XtendedInputButtons.tpk",
"d3d9.dll",
"d3d9.ini"

];

Game.ExecutableContext = ["nfs_icon.ico"];

Game.FileSymlinkCopyInstead = [
"server.cfg",
"bombd.exe",
"lanserver.exe",
"launcher.exe",
"lbkeyxref.txt",
"playerDB.txt",
"playnowconfig.txt",
"rebroadcasterlan.exe",
"rebroadcasterlan.exe.manifest",
"statkeyxref.txt",
"statsdb.bin",
"feed-icon-14x14.png",
];

Game.DirExclusions = ["scripts"];
Game.DirSymlinkExclusions = ['ONLINE', 'GLOBAL'];
Game.KillProcessesOnClose = ['cmd', 'bombd', 'rebroadcasterlan','lanserver'];
Game.GameName = "Need for Speed ProStreet";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "nfsps.exe";
Game.SteamID = "";
Game.GUID = "Need for Speed ProStreet";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Need for Speed™ ProStreet";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled= false;
Game.Description = "IMPORTANT: you need Patch 1.1 for LAN servers, else it wont work (https://www.pcgamingwiki.com/wiki/Need_for_Speed:_ProStreet#Patches). ALSO DONT HAVE ANY MODS INSTALLED SOME WILL BREAK RESIZING/RESOLUTION OR THE CONTROLLERS.\n\nVertical split will cause menus/HUDs to be cut off.\n\nThe saves per instance are stored inside Nucleus Co-op content folder so if you delete Nucleus or the game content folder, your Nucleus saves for this game will be lost(not your main game save).\n\nTo use keyboard without moving all the instances at once: you can press ctrl+T than open one instance at a time and ctrl+T when you are done (good for when you are logging-in to LAN).\n\nWhen you get into the menu go into OPTIONS > GRAPHICS > RESOLUTION and change to the resolution of that instance for better visuals/aspect ratio (you can see the right resolution for each screen in the bottom of nucleus).\n\nTo connect the instances go to LAN PLAY, than create or login to an account (recommend creating in your main game, before playing in split screen) create a lobby/race and join in with others after its created.\n\nRecommended that you add custom resolutions to all your monitors from your AMD/Nvidia/Intel panel (for example if you are using a monitor resolution of 1920x1080 add custom resolutions like 1920x540, 960x1080, 960x540, etc.)";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 5;

Game.HideTaskbar = true;
Game.SetWindowHook = true;
Game.HookFocus = true;
Game.FakeFocus = true;
Game.SetForegroundWindowElsewhere = true;
// Game.UseNucleusEnvironment = true;
// Game.UserProfileSavePath = "Documents\\NFS ProStreet";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.Play = function () {

  var CONSOLE = Context.Options["console"];
  var FPS = Context.Options["fps"];
  var SERVER = Context.Options["server"];

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'LAN_THROTTLE', Nucleus.SearchType.StartsWith) + '|LAN_THROTTLE=6',
    Context.FindLineNumberInTextFile(cfgpath, 'TRUST=', Nucleus.SearchType.StartsWith) + '|TRUST=255.255.255.255',
    Context.FindLineNumberInTextFile(cfgpath, 'TRUST_MATCH', Nucleus.SearchType.StartsWith) + '|TRUST_MATCH=%%bind("' + Context.LocalIP + '")',
    Context.FindLineNumberInTextFile(cfgpath, 'ADDR', Nucleus.SearchType.StartsWith) + '|ADDR=%%bind("' + Context.LocalIP + ":" + (9900 + Context.PlayerID) + '")',

  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  if(FPS == "yes"){
    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSProStreet.GenericFix.ini";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'FramerateUncap', Nucleus.SearchType.StartsWith) + '|FramerateUncap = 0'
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  }

  if(CONSOLE == "yes"){
    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSProStreet.GenericFix.ini";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'ConsoleHUDSize', Nucleus.SearchType.StartsWith) + '|ConsoleHUDSize = 1'
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  }else{
    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\scripts\\NFSProStreet.GenericFix.ini";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'ConsoleHUDSize', Nucleus.SearchType.StartsWith) + '|ConsoleHUDSize = 0'
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  }

  if(SERVER=="yes"){
    Context.RunAdditionalFiles(["1|" + Context.RootInstallFolder + "\\ONLINE\\lanserver.exe"], false, "", 5, false, false, false, false);
}
}
