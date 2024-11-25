Game.KillMutex = ["DarkSector"];
Game.FileSymlinkExclusions = [
  "apyr720.avi"
];
Game.FileSymlinkCopyInstead = ["DS.cfg", "Editor.cfg","defbind.cfg"];
Game.NeedsSteamEmulation = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "DS.exe";
Game.ExecutableToLaunch = "launch.bat";
Game.SteamID = "29900";
Game.GUID = "Dark Sector";
Game.GameName = "Dark Sector";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.BinariesFolder = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Dark Sector";
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "Start a LAN game in one instance and join in with others\n\nTo control the instances alt+tab to each of them and click with your mouse on them or you can also press END to give them focus (works sometimes)";
Game.PauseBetweenProcessGrab = 8;
Game.PauseBetweenStarts = 10;
Game.SetWindowHook = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\Dark Sector";

Game.UseSteamless = true; 
Game.SteamlessArgs = "--quiet --keepbind";
Game.HookFocus = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.Play = function() {

  Context.CopyFolder(Context.ScriptFolder, Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\launch.bat";
  var lines = [
    "@echo off",
    "AutoRebindInjector32.exe DS.exe",
  ];
  Context.WriteTextFile(timese, lines);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Configs\\DS.cfg";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Windows_Config,/Types/Config", "Graphics.FullScreen", 0),
    new Nucleus.IniSaveInfo("Windows_Config,/Types/Config", "Graphics.DisplayAspectRatio", "FullScreen4x3"),
  ]);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Configs\\Editor.cfg";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("MainGameWindowed,/Editor/WinRect", "SizeX", Context.Width),
    new Nucleus.IniSaveInfo("MainGameWindowed,/Editor/WinRect", "SizeY", Context.Height),
  ]);

  if (Context.AspectRatioDecimal > 2.2) {
    Context.PatchFile(
    System.IO.Path.Combine(Context.RootFolder, "DS.exe"),
    System.IO.Path.Combine(Context.RootFolder, "DS.exe"),
    [0x00, 0x08, 0x00, 0x00, 0x89, 0x07],
    [0x00, 0x10, 0x00, 0x00, 0x89, 0x07]
    );

    Context.PatchFile(
      System.IO.Path.Combine(Context.RootFolder, "DS.exe"),
      System.IO.Path.Combine(Context.RootFolder, "DS.exe"),
      [0x3D, 0x00, 0x00, 0x40, 0x3F],
      [0x3D, 0x00, 0x00, 0xD6, 0x3E]
    );

    Context.PatchFile(
      System.IO.Path.Combine(Context.RootFolder, "DS.exe"),
      System.IO.Path.Combine(Context.RootFolder, "DS.exe"),
      [0x00, 0x00, 0x82, 0x42, 0x46],
      [0x00, 0x00, 0xD0, 0x42, 0x46]
    );

    Context.PatchFile(
      System.IO.Path.Combine(Context.RootFolder, "DS.exe"),
      System.IO.Path.Combine(Context.RootFolder, "DS.exe"),
      [0x40, 0x00,0x00,0x00,0x00,0x00,0x00, 0xF0, 0x3F],
      [0x40, 0x00,0x00,0x00,0x00,0x00,0x00, 0xF5, 0x3F]
    );
  }

  Game.ProtoInput.OnInputLocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 10, true, true, true, true, true);

      System.Threading.Thread.Sleep(1000);

      ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
    }
  };
};
