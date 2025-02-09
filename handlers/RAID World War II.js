Game.KillMutex = [
	"Type:Event|Diesel Engine Game x64",
	];
Game.FileSymlinkExclusions = [
	"steam_api64.dll",
	"steam_appid.txt",
	];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "raid_win64_release.exe";
Game.SteamID = "414740";
Game.GUID = "RAID World War II";
Game.GameName = "RAID: World War II";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.HideTaskbar = false;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "RAID: World War II";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_4.dll"];
Game.Description = "***IMPORTANT*** Run the game outside Nucleus at least once for configuration files to be created.\n\nComplete the tutorial (or skip it) so you can unlock online play. Once done, one player can go into PLAY ONLINE to create a lobby and others can join via the server browser.\n\nIf you have a keyboard/mouse player, alt+tab to their screen to control it, also do not click on the other screens when a instance starts.";
Game.PauseBetweenStarts = 15;

Game.SupportsKeyboard = true;
Game.UseGoldberg = true;
Game.GoldbergNoLocalSave = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\RAID WW2";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\414740\\remote";
Game.UserProfileSavePathNoCopy = true;

Game.FakeFocus = true;
Game.FakeFocusInterval = 5000;
Game.KeyboardPlayerSkipFakeFocus = true;

Game.Play = function () {
  var path = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\renderer_settings_dx11.xml";
  Context.ChangeXmlAttributeValue(path, "//d3d_device", "resolution", Context.Width + " " + Context.Height);
  Context.ChangeXmlAttributeValue(path, "//d3d_device", "windowed", "true");
  Context.ChangeXmlAttributeValue(path, "//d3d_device", "borderless", "true");
  Context.ChangeXmlAttributeValue(path, "//d3d_device", "aspect_ratio", Context.AspectRatioDecimal);

  var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings");
  System.IO.Directory.CreateDirectory(filePath);

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\steam_settings\\DLC.txt";
  var lines = [
    "707080=RAID Special Edition",
  ];
  Context.WriteTextFile(autoExec, lines);
}