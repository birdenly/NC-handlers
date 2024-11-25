var answers1 = ["Yes","No"];
Game.AddOption("Fix the resolution for horizontal split?", "'Yes' will make the game use the exact window resolution but menus become zoomed in but in-game will be better visually.\n'No' will make the game use your monitor resolution but menus are fully visible but in-game will be worst visually.\n", "fix", answers1);
var answers2 = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
Game.AddOption("Amount of bots to be added.", "The game has a 3 bots limit with this it can go above that limit", "bots", answers2);
Game.FileSymlinkCopyInstead = [
"Colors.xml",
"ItemDrops.xml",
"Misc.xml",
"Multiplayer.xml",
"Objectives.xml",
"Singleplayer.xml",
];
Game.FileSymlinkExclusions = ["Config-7.cfg"];
Game.UseGoldberg = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "ApotheonArena.exe";
Game.SteamID = "417890";
Game.GUID = "Apotheon Arena";
Game.GameName = "Apotheon Arena";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Apotheon Arena";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: Before playing split screen go to your main game and make it windowed and apply\n\nTo connect: Host a match in one instance and on the other go to Join > Enter IP > Type '1' than press ENTER or A on your controller.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 5;

Game.SetWindowHookStart = true;
Game.ProtoInput.InjectStartup = true;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 10000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  var fix = Context.Options["fix"];
  var bots = Context.Options["bots"];
  let fixW;
  let fixH;
  if(fix == "No"){
    fixW = PlayerList[Context.PlayerID].Owner.MonitorBounds.Width;
    fixH = PlayerList[Context.PlayerID].Owner.MonitorBounds.Height;
  }
  else{
    fixW = Context.Width
    fixH = Context.Height
  }
  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Content\\Config-7.cfg")) {

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Content\\Config-7.cfg";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Config-7.cfg");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

  }

  var xml = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Content\\Settings\\Misc.xml";
  var Width = Context.FindLineNumberInTextFile(xml, '  <ResolutionOptions>', Nucleus.SearchType.StartsWith) + 2;
  var Height = Context.FindLineNumberInTextFile(xml, '  <ResolutionOptions>', Nucleus.SearchType.StartsWith) + 3;
  Context.ReplaceLinesInTextFile(xml, [
    Width + '|      <Width>'+fixW+'</Width>',
    Height + '|      <Height>'+fixH+'</Height>'
  ]);


  if (Context.PlayerID == 0) {
    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Content\\Config-7.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, '  <MusicVolume>', Nucleus.SearchType.StartsWith) + '|  <MusicVolume>100</MusicVolume>',
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  } 
  else {
    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Content\\Config-7.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, '  <MusicVolume>', Nucleus.SearchType.StartsWith) + '|  <MusicVolume>0</MusicVolume>',
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  }
  

  var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Content\\Config-7.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, '  <TutorialCompleted>', Nucleus.SearchType.StartsWith) + '|  <TutorialCompleted>true</TutorialCompleted>',
    Context.FindLineNumberInTextFile(cfgpath, '  <PlayerName>', Nucleus.SearchType.StartsWith) + '|  <PlayerName>'+Context.Nickname+'</PlayerName>',
    Context.FindLineNumberInTextFile(cfgpath, '  <GamepadMode>', Nucleus.SearchType.StartsWith) + '|  <GamepadMode>true</GamepadMode>',
    Context.FindLineNumberInTextFile(cfgpath, '  <Height>', Nucleus.SearchType.StartsWith) + '|  <Height>'+fixH+'</Height>',
    Context.FindLineNumberInTextFile(cfgpath, '  <Width>', Nucleus.SearchType.StartsWith) + '|  <Width>'+fixW+'</Width>',
    Context.FindLineNumberInTextFile(cfgpath, '  <FullScreen>', Nucleus.SearchType.StartsWith) + '|  <FullScreen>false</FullScreen>',
    Context.FindLineNumberInTextFile(cfgpath, '  <MPBots>', Nucleus.SearchType.StartsWith) + '|  <MPBots>'+bots+'</MPBots>',
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

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
