Hub.Handler.Version = 1; // Released at https://hub.splitscreen.me/ on Sun Nov 19 2023 03:10:29 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "bphyqxk6tdHjeu5Dy";
Hub.Maintainer.Name = "birden";
Hub.Maintainer.Id = "rRycxSn253ZCjQy5C";

Game.ExecutableContext = ["binkw32.dll"];

Game.FileSymlinkExclusions = ["mgm.bik", "atvi.bik"];
Game.FileSymlinkCopyInstead = ["BizSplash.bik"];
Game.DirSymlinkExclusions = ["ui\\movies"];

Game.NeedsSteamEmulation = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "Bond.exe";
Game.SteamID = "42730";
Game.GUID = "James Bond 007 Blood Stone";
Game.GameName = "James Bond 007 Blood Stone";
Game.MaxPlayers = 16;
Game.MaxPlayersOneMonitor = 16;
Game.BinariesFolder = "";
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.StartArguments = "";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "James Bond 007";
Game.HasDynamicWindowTitle = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description = "Create or use the existing profiles. Go into multiplayer > LAN > create a match and join in with others. If your controllers doesnt work in-game go into settings and enable it.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.HookInit = true;
Game.FakeFocus = true;
Game.HookFocus = true;
Game.UseSteamless = true;
Game.SteamlessArgs = "--quiet --keepbind";

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\bizarre creations\\blood stone";
Game.UserProfileSavePath = "AppData\\Local\\bizarre creations\\blood stone\\profiles";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.Play = function() {
  var config = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\settings.xml";
  var dict = [
    Context.FindLineNumberInTextFile(config, "<shared_graphical_settings ", Nucleus.SearchType.StartsWith) +
      '|<shared_graphical_settings width="' +
      Context.Width +
      '"' +
      ' height="' +
      Context.Height +
      '"' +
      ' x="' +
      Context.PosX +
      '"' +
      ' y="' +
      Context.PosY +
      '"' +
      ' multisample="0" windowed="1" vsync="1" graphical_detail="0"/>'
  ];
  Context.ReplaceLinesInTextFile(config, dict);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ui\\movies\\atvi.bik");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "atvi.bik");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\ui\\movies\\mgm.bik");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "mgm.bik");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

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
