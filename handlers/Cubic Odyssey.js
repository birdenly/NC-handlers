Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt", "EOSSDK-Win64-Shipping.dll","SDL2.dll"];
Game.DirSymlinkExclusions = ["optimized"];
Game.FileSymlinkCopyInstead = ["avcodec-59",
"avformat-59.dll",
"fmod.dll.dll",
"libcurl_64.dll",
"libHttpClient.Win32.dll",
"libpng14.dll",
"msvcp140.dll",
"msvcr100.dll",
"PhysX_64.dll",
"PhysXCommon_64.dll",
"PhysXCooking_64.dll",
"PhysXFoundation_64.dll",
"PlayFabCore.Win32.dll",
"PlayFabServices.Win32.dll",
"sdkencryptedappticket64.dll",
"swresample-4.dll",
"swscale-6.dll",
"ucrtbased.dll",
"vcruntime140.dll",
"VkLayer_api_dump.dll",
"VkLayer_device_simulation.dll",
"VkLayer_gfxreconstruct.dll",
"VkLayer_khronos_validation.dll",
"VkLayer_monitor.dll",
"VkLayer_screenshot.dll",
"VkLayer_vktrace_layer.dll",
"xaudio2_9redist.dll",
"zlib1.dll"
]
Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "CubicOdysseySteam.exe";
Game.SteamID = "3400000";
Game.GUID = "Cubic Odyssey";
Game.GameName = "Cubic Odyssey";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.BinariesFolder = "optimized";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Cubic Odyssey";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: DONT USE HORIZONTAL SPLIT AND START YOUR MAIN GAME ONCE BEFORE TRYING SPLIT SCREEN\n\nPress end in-case your controller cursor keeps reseting\n\nIt takes a while to get into the menu. Each player needs a save created for that specific mode to be able to join each other.\nThe host needs to set 'session type' to 'Online', start the session as PUBLIC, then join in with the other instances (when searching the lobby it will error out and reload again, after that the lobby will appear).\n\nIn the menu adjust frame rate limit, UI scale and text scale for a better experience.";
Game.PauseBetweenProcessGrab = 10;
Game.PauseBetweenStarts = 10;

Game.RefreshWindowAfterStart = true;
Game.SteamlessPatch = ["false", "--quiet --keepbind", "5000"];
Game.HookFocus = true;	

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "Documents\\Cubic Odyssey";

Game.Hook.SDL2Enabled = true; 
Game.ProtoInput.InjectStartup = true;
Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;
Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;
Game.ProtoInput.AdjustWindowRectHook = true; 

Game.Play = function() {

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  Context.Wait(1500);
  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\optimized\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\optimized\\nepice_settings\\NemirtingasEpicEmu.json";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, '      "EpicId":', Nucleus.SearchType.StartsWith) + '|      "EpicId": "831ec62c44424917a0fb315de2b5dc1' + Context.PlayerID + '",',
    Context.FindLineNumberInTextFile(txtPath, '      "Language":', Nucleus.SearchType.StartsWith) + '|      "Language": "' + Context.EpicLang + '",',
    Context.FindLineNumberInTextFile(txtPath, '      "UserName":', Nucleus.SearchType.StartsWith) + '|      "UserName": "' + Context.Nickname + '"'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);
  

  var savePath = Context.DocumentsPlayer + "Cubic Odyssey\\video_settings99.cfg";
  var dict = [
      Context.FindLineNumberInTextFile(savePath, '	width', Nucleus.SearchType.StartsWith) + '|	width                           '+Context.Width, 
      Context.FindLineNumberInTextFile(savePath, '	height', Nucleus.SearchType.StartsWith) + '|	height                          '+Context.Height, 
      Context.FindLineNumberInTextFile(savePath, '	scrMode', Nucleus.SearchType.StartsWith) + '|	scrMode                         0'
  ];	
  Context.ReplaceLinesInTextFile(savePath, dict);	
};
