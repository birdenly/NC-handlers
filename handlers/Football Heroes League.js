Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt","EOSSDK-Win64-Shipping.dll"];
Game.DirSymlinkExclusions = ["Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv157\\Win64", "Engine\\Binaries\\Win64", "SuperSoccer\\Binaries\\Win64"];

Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "SuperSoccer-Win64-Shipping.exe";
Game.SteamID = "2593870";
Game.GUID = "Football Heroes League";
Game.GameName = "Football Heroes League";
Game.MaxPlayers = 6;
Game.MaxPlayersOneMonitor = 6;
Game.BinariesFolder = "SuperSoccer\\Binaries\\Win64";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Football Heroes League";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "Reduce your graphics in the main game before using the handler.\n\nFinish the tutorial then go into settings and set all players to the SAME REGION. After doing so, either invite each other or press play to start matchmaking. Let one player/team start hosting a match then search with others. You can play without needing 4 players (for the 2v2), wait in the lobby long enough and it will prompt to start a AI match.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 8;

		
Game.RefreshWindowAfterStart = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Local\\SuperSoccer\\Saved\\Config";
Game.UserProfileSavePath = "AppData\\Local\\SuperSoccer\\Saved\\SaveGames";


Game.ProtoInput.InjectStartup = true;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.FocusHooks = true;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {

  Context.StartArguments = " -windowed -ResX= " + Context.Width + " -ResY= " + Context.Height;

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  Context.Wait(1500);
  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Engine\\Binaries\\ThirdParty\\Steamworks\\Steamv157\\Win64\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\SuperSoccer\\Binaries\\Win64\\nepice_settings\\NemirtingasEpicEmu.json";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, '      "EpicId":', Nucleus.SearchType.StartsWith) + '|      "EpicId": "831ec62c44424917a0fb315de2b5dc1' + Context.PlayerID + '",',
    Context.FindLineNumberInTextFile(txtPath, '      "Language":', Nucleus.SearchType.StartsWith) + '|      "Language": "' + Context.EpicLang + '",',
    Context.FindLineNumberInTextFile(txtPath, '      "UserName":', Nucleus.SearchType.StartsWith) + '|      "UserName": "' + Context.Nickname + '"'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);
  

  var savePath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\Windows\\GameUserSettings.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("/Script/SuperSoccer.SoccerSettingsLocal", "ResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/SuperSoccer.SoccerSettingsLocal", "ResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/SuperSoccer.SoccerSettingsLocal", "LastUserConfirmedResolutionSizeX", Context.Width),
    new Nucleus.IniSaveInfo("/Script/SuperSoccer.SoccerSettingsLocal", "LastUserConfirmedResolutionSizeY", Context.Height),
    new Nucleus.IniSaveInfo("/Script/SuperSoccer.SoccerSettingsLocal", "FullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/SuperSoccer.SoccerSettingsLocal", "LastConfirmedFullscreenMode", 2),
    new Nucleus.IniSaveInfo("/Script/SuperSoccer.SoccerSettingsLocal", "PreferredFullscreenMode", 2)
  ]);

  if (Context.PlayerID == 0) {
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("/Script/SuperSoccer.SoccerSettingsLocal", "MusicVolume", "100.000000"),
    ])
  }else{
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("/Script/SuperSoccer.SoccerSettingsLocal", "MusicVolume", "0.000000"),
    ])
  }

};
