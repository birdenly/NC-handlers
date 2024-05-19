
Game.KillMutex = ["Heroes"];
Game.HandlerInterval = 100;
Game.SymlinkGame = true;
Game.ExecutableName = "Heroes.exe";
Game.GUID = "Heroes of the Pacific";
Game.GameName = "Heroes of the Pacific";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.Hook.ForceFocusWindowName = "Heroes of the Pacific";
Game.HasDynamicWindowTitle = true;
Game.Hook.CustomDllEnabled = false;
Game.Description = "Go into multiplayer > LAN > make a name > Create a match in one instance and join in with with others.";
Game.HideTaskbar = true;
Game.FakeFocus = true;
Game.SetWindowHook = true;

Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.Play = function() {

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

	var path = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\dgVoodoo.conf';
	var dict = [
		Context.FindLineNumberInTextFile(path, 'Resolution                          = ', Nucleus.SearchType.Contains) + '|Resolution                          = ' + Context.Width + 'x' + Context.Height,	
	]
	Context.ReplaceLinesInTextFile(path, dict);


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
