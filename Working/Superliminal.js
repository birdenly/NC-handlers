Game.ExecutableContext = [ 
    "SuperliminalSteam_Data"
];
Game.FileSymlinkCopyInstead = [
  "UnityCrashHandler64.exe",
    "UnityPlayer.dll",

];

Game.UseGoldberg = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.BinariesFolder = "";  
Game.ExecutableName = "SuperliminalSteam.exe";
Game.SteamID = "1049410";
Game.GUID = "Superliminal";
Game.GameName = "Superliminal";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "SuperliminalSteam";
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description = "IMPORTANT: handler needs internect connection.\n\nControllers only.\n\nStart a multiplayer lobby in the first instance and join in with others with the lobby code. To type the lobby code just alt + tab to the screen.";

Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 20;

Game.UseNucleusEnvironment = true; 
Game.UserProfileSavePath = "AppData\\LocalLow\\PillowCastle\\SuperliminalSteam";

Game.FakeFocus = true; 
Game.FakeFocusInterval = 10000;
Game.SendFakeFocusMsg = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = []; 
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = true;

 
Game.Play = function() {

  var Args = (Context.Args = " -screen-fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;
  
      var numPlayers = 0;

      for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      if (player.IsXInput && player.ScreenIndex !== -1) {
      numPlayers++;
      }
      player.ProtoController1 = (Context.GamepadId);
      player.ProtoController2 = (Context.GamepadId);
      player.ProtoController3 = (Context.GamepadId);
      player.ProtoController4 = (Context.GamepadId);
      player.ProtoController5 = (Context.GamepadId);
      player.ProtoController6 = (Context.GamepadId);
      player.ProtoController7 = (Context.GamepadId);
      player.ProtoController8 = (Context.GamepadId);
      player.ProtoController9 = (Context.GamepadId);
      }
};