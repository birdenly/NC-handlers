var answers2 = ["0", "1", "2", "3", "4", "5"];
Game.AddOption("Custom Playlist Session ID", "0 is the default, has the most maps and works best.\nRead ALL the docs that come with the LAN mod to use this.", "playlist", answers2);

Game.ExecutableContext = ["NFSTR_Server.exe","dinput8.dll","Scripts"];

Game.FileSymlinkExclusions = [
  "server.bat"
];

Game.FileSymlinkCopyInstead = ["dinput8.dll","NFSTR_LANOnlineHelper.asi","NFSTR_LANOnlineHelper.ini","NFSTR_Server.exe"];

Game.KillProcessesOnClose = ["NFSTR_Server"];
Game.GameName = "Need For Speed The Run";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "Need For Speed The Run.exe";
Game.GUID = "Need For Speed The Run";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Need For Speed The Run";
Game.HasDynamicWindowTitle = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.XInputPlusDll = [];
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "IMPORTANT: YOU WILL NEED NFSTR LAN MOD ALREADY INSTALLED IN YOUR GAME FILES: https://nfsmods.xyz/mod/5541 MAKE SURE IT WORKS BEFORE TRYING SPLITSCREEN! Also turn on V-SYNC to not have problems as this is a old game.\n\nThe LAN mod has some broken stuff, so watch out for that, nucleus cant fix or help with them.\n\nGo into display settings and turn on/off FULLSCREEN and the resolution will correct it self.\n\nThe handler has a 80s timer to start the match, go into view car and choose a car, that car will be the one in-game also do everything else before the time ends.\n\nThe handler comes with 100% save file for all players";
Game.PauseBetweenProcessGrab = 8;
Game.PauseBetweenStarts = 8;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\NFSTR";
Game.UserProfileConfigPathNoCopy = true;
Game.HideTaskbar = true;
Game.SetWindowHook = true;

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

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.Play = function() {
  var PLAYLIST = Context.Options["playlist"];

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Scripts\\NFSTR_LANOnlineHelper.ini";

  if(PLAYLIST != "0") {
    Context.ReplaceLinesInTextFile(
    txtPath,
    [
      Context.FindLineNumberInTextFile(txtPath, "ForceCustomPlaylistSessionFirstID =", Nucleus.SearchType.StartsWith) + "|ForceCustomPlaylistSessionFirstID = 1",
      Context.FindLineNumberInTextFile(txtPath, "PlaylistSessionID =", Nucleus.SearchType.StartsWith) + "|PlaylistSessionID = " + PLAYLIST,
      Context.FindLineNumberInTextFile(txtPath, "ForcePlaylistLoading =", Nucleus.SearchType.StartsWith) + "|ForcePlaylistLoading = 1",
    ]);
  }else{
    Context.ReplaceLinesInTextFile(
    txtPath,
    [
      Context.FindLineNumberInTextFile(txtPath, "ForceCustomPlaylistSessionFirstID =", Nucleus.SearchType.StartsWith) + "|ForceCustomPlaylistSessionFirstID = 0",
      Context.FindLineNumberInTextFile(txtPath, "PlaylistSessionID =", Nucleus.SearchType.StartsWith) + "|PlaylistSessionID = 0",
    ]);
  }


  Context.StartArguments = " -Client.ServerIp 127.0.0.1:25200 -Client.QuitGameOnServerDisconnect False"

  var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server.bat";
  var lines = [
    "set GAMEMODELAYER=StartupMode=Game;GameMode=CareerMode",
    "set SERVERNAME=NFSTR_LANScript_v1",
    "set GAMEPORT=25200",
    'start NFSTR_Server.exe -Server.ServerName "%SERVERNAME%" -GamePort %GAMEPORT% -Game.DefaultLayerInclusion %GAMEMODELAYER% -Game.DynamicSubLevels _c4/Levels/FE/FrontEnd/NfsGarage -NfsOnline.Backend Backend_Lan -NfsGame.CarSelectTimer 0.0 -NfsGame.PreLoadTimer 80.0 -NfsGame.ActivityTimer 600.0 -NfsGame.RewardsTimer 25.0 -NfsGame.IntermissionTimer 15.0 -NfsGame.VotingTimer 15.0 -NfsGame.WaitForVotesTimer 2.0 -NfsGame.PostVotingTimer 11.0',
    "exit"
  ];
  Context.WriteTextFile(timese, lines);

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Scripts\\NFSTR_LANOnlineHelper.ini";
  Context.ReplaceLinesInTextFile(
  txtPath,
  [
  Context.FindLineNumberInTextFile(txtPath, "ClientName =", Nucleus.SearchType.StartsWith) + "|ClientName = " + Context.Nickname,
  Context.FindLineNumberInTextFile(txtPath, "GameFastBoot =", Nucleus.SearchType.StartsWith) + "|GameFastBoot = 1",
  Context.FindLineNumberInTextFile(txtPath, "EnableTestConsole =", Nucleus.SearchType.StartsWith) + "|EnableTestConsole = 0",
  
  ]);

  var config = Context.DocumentsPlayer + "NFSTR\\settings";
  if (!System.IO.Directory.Exists(config)) {
    System.IO.Directory.CreateDirectory(config);
  }

  Context.CopyFolder(Context.ScriptFolder+"\\save", Context.DocumentsPlayer + "\\NFSTR\\settings");

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

  Game.OnFinishedSetup = function() {
    Context.RunAdditionalFiles(["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\server.bat"], false, "", 0, false, false, false, false);
  };
};
