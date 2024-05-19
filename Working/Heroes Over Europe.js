Game.KillMutex = ["Heroes2"];
Game.FileSymlinkExclusions = ["GraphicsSettings.ini", "transmission_games.wmv", "ubisoft.wmv", "presents.wmv", "presents_english.wmv", "presents_french.wmv", "presents_german.wmv", "presents_italian.wmv", "presents_spanish.wmv"];
Game.UseNucleusEnvironment = true;
Game.HandlerInterval = 100;
Game.SymlinkGame = true;
Game.ExecutableName = "heroes2.exe";
Game.GUID = "Heroes Over Europe";
Game.GameName = "Heroes Over Europe";
Game.MaxPlayers = 16;
Game.MaxPlayersOneMonitor = 16;
Game.HideTaskbar = true;
Game.FakeFocus = true;
Game.RefreshWindowAfterStart = true;
Game.Hook.ForceFocusWindowName = "Heroes over Europe";
Game.HasDynamicWindowTitle = true;
Game.Hook.CustomDllEnabled = false;
Game.Description = "Tested with abandonware version of the game (aka CD version): https://www.myabandonware.com/game/heroes-over-europe-qml , probably works with the old steam version\n\nWait until all instances have resized and repositioned. Go into Multiplayer > LAN > Login. Use alt-tab and the keyboard to type a name for each user. Host a game with one instance and join with the others.";
Game.UserProfileSavePath = "AppData\\Roaming\\Ubisoft\\Heroes Over Europe";
Game.PauseBetweenStarts = 10;

Game.UseSteamless = true;
Game.SteamlessArgs = "--quiet --keepbind";

Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.Play = function() {
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\videos\\transmission_games.wmv");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "replace.wmv");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\videos\\ubisoft.wmv");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "replace.wmv");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\videos\\presents.wmv");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "replace.wmv");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\videos\\presents_english.wmv");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "replace.wmv");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\videos\\presents_french.wmv");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "replace.wmv");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\videos\\presents_german.wmv");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "replace.wmv");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\videos\\presents_italian.wmv");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "replace.wmv");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\videos\\presents_spanish.wmv");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "replace.wmv");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var cfgPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\GraphicsSettings.ini";
  var lines = [
	'"key","value"',
	'"ScreenWidth","' + Context.Width + '"',
	'"ScreenHeight","' + Context.Height + '"',
	'"FullScreen","0"',
	'"SuperSampleQuality","2"',
	'"LightingQuality","1"',
	'"PostProcessingQuality","1"',
	'"CityScapeShadowsQuality","1"',
	'"LandmarksShadowsQuality","1"',
	'"TerrainShadowsQuality","1"',
	'"PlanesShadowsQuality","1"',
	'"ReflectionsQuality","1"',
	'"LandmarksDetail","1"',
	'"PlanesDetail","1"',
	'"LittlePeopleDetail","1"',
	'"CityscapeLODDistance","1"',
	'"MonoChromeQuality","1"',
	'"InverseQuality","1"',
	'"VBlurQuality","1"',
	'"HBlurQuality","1"',
	'"BrightPassQuality","1"',
	'"CombineQuality","1"',
	'"DownScaleQuality","1"',
	'"UpScaleQuality","1"',
	'"RBlurQuality","1"',
	'"DepthOfFieldQuality","1"',
	'"VignettingQuality","1"',
	'"GlareQuality","1"',
	'"BloomQuality","1"',
	'"TerrainTexturesQuality","1"',
	'"PlaneTexturesDroppedMipMaps","0"',
	'"LandmarkTexturesDroppedMipMaps","0"',
	'"CityscapeTexturesDroppedMipMaps","0"',
	'"VehicleTexturesDroppedMipMaps","0"'
  ];
  Context.WriteTextFile(cfgPath, lines);

  var filePath = (Context.SavePath = Context.EnvironmentPlayer + Context.UserProfileSavePath);
  System.IO.Directory.CreateDirectory(filePath);	

  var savePath = (Context.SavePath = Context.EnvironmentPlayer + Context.UserProfileSavePath + "\\HOESAVE.DAT");
  if (Context.PlayerID > 0) {
	var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "p1.dat");
  } else {
	var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "p0.dat");
  }
  System.IO.File.Copy(savePkgOrigin, savePath, true);
};
