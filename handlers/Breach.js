Game.FileSymlinkCopyInstead = [
  "steam_api.dll",
  "Breach.ini",
"HQ_T1.spd",
"HQ_T2.spd",
"Ambient.spd",
"UI_Common.pre",
"Server.ini.example",
"mp_peakredo_convoy.pre",
"mp_ascent_convoy.pre",
"mp_recon_convoy.pre",
"mp_recon_night_convoy.pre",
"mp_pass_convoy.pre",
"peakredo_level.pre",
"ascent_level.pre",
"pass_level_env.pre",
"Eurostile_10.abc",
"Eurostile_12.abc",
"Eurostile_14.abc",
"Eurostile_16.abc",
"Eurostile_18.abc",
"Eurostile_22.abc",
"Eurostile_32.abc",
"Eurostile_36.abc",
"eurostile_new.abc",
"Core_Shaders.pre",
"recon_level_env.pre",
"recon_level.pre",
"RL_CONSOLAS.abc",
"RL_Eurostile_10.abc",
"RL_Eurostile_12.abc",
"RL_Eurostile_14.abc",
"RL_Eurostile_16.abc",
"RL_Eurostile_18.abc",
"RL_Eurostile_22.abc",
"RL_Eurostile_32.abc",
"RL_Eurostile_36.abc",
"RL_Eurostile_new.abc",
"Characters.pre",
"Core.pre",
"CONSOLAS.abc",
"PhysXLoader.dll",
"PhysXDevice.dll",
"NxCharacter.dll",
"Impacts_flesh.psp",
"Eurostile_10.dds",
"PlayerDeath.psp",
"Impacts_wood.psp",
"Knife.psp",
"fmodexp.dll",
"MotionSensor.psp",
"physxcudart_20.dll",
"USP45.psp",
"Dushka.psp",
"Saiga.psp",
"Silencer.psp",
".LibCache.pub",
"ConsoleView_Lua.txt",
"debug.pre",
"TPG1.spd",
"USP45.spd",
"Dushka.spd",
"M40a.spd",
"M490.spd",
"M82A1.spd",
"Recce.spd",
"Saiga.spd",
"M67.spd",
"M2.spd",
"Breach_charge.spd",
"Collapse.spd",
"ConsoleView_AppLua.txt",
"Knife.spd",
"HK416.spd",
"Gameplay.spd",
"Impacts_flesh.spd",
"UI.spd",
"PlayerDeath.spd",
"Impacts_wood.spd",
"RPG.spd",
"M203.spd",
"Vehicles.spd",
"IAR.spd",
"AK103.spd",
"Impacts_concrete.spd",
"MP5.spd",
"M14.spd",
"M4A1.spd",
"M60.spd",
"M240.spd",
"Masada.spd",
"Silencer.spd",
"default.grs.xml",
"profile.grs.xml",
"Impacts_dirt.spd",
"Impacts_whiz.spd",
"T1_V1_World.spd",
"T1_V2_World.spd",
"T2_V1_World.spd",
"Impacts_metal.spd",
"MotionSensor.spd",
".rednalhgih",
"ConsoleView_Chat.txt",
"ConsoleView_Main.txt",
"UI_Bootup.pre",
"ConsoleView_Multiplayer.txt",
"UI_UnLoading.pre",
"Props.spd",
"Sabotaged.spd",
"M18.spd",
"ClientRegistry.blob",
"ignorelicense.txt",
"UI_Loading.pre",
"Xaver.spd",
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "Breach.exe";
Game.SteamID = "72300";
Game.GUID = "Breach";
Game.GameName = "Breach";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Breach";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: START YOUR MAIN GAME ONCE BEFORE, do it so it generates the files needed for split screen. Change your settings in the main game so it applies in split screen. Changing settings in split screen will break the resolution of the game.\n\nGo into 'Help and options' > 'CONTROLS' > Change the input device to controller (choose whatever config you prefer)\n\nMake a PUBLIC match and join in with others."
Game.PauseBetweenProcessGrab = 10;
Game.PauseBetweenStarts = 10;
Game.RefreshWindowAfterStart = true;
Game.NeedsSteamEmulation = true;
Game.SteamlessPatch = ["false", "", "5500"];
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\SmartSteamEmu\\72300";


Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = false;

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];
    
    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, false, false, true, true);
    System.Threading.Thread.Sleep(500);
    ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
  }
};

Game.Play = function() {

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Breach.ini";
  var dict = [
      Context.FindLineNumberInTextFile(savePath, 'Fullscreen=', Nucleus.SearchType.StartsWith) + '|Fullscreen=off', 
      Context.FindLineNumberInTextFile(savePath, 'WindowWidth=', Nucleus.SearchType.StartsWith) + '|WindowWidth='+Context.Width, 
      Context.FindLineNumberInTextFile(savePath, 'WindowHeight=', Nucleus.SearchType.StartsWith) + '|WindowHeight='+Context.Height,
      Context.FindLineNumberInTextFile(savePath, 'VSync=', Nucleus.SearchType.StartsWith) + '|VSync=on', //lock fps
      Context.FindLineNumberInTextFile(savePath, 'PlayerName=', Nucleus.SearchType.StartsWith) + '|PlayerName='+ Context.Nickname,
      Context.FindLineNumberInTextFile(savePath, 'GamePort=', Nucleus.SearchType.StartsWith) + '|GamePort=2701'+Context.PlayerID,
      Context.FindLineNumberInTextFile(savePath, 'SteamCommPort=', Nucleus.SearchType.StartsWith) + '|SteamCommPort=876'+Context.PlayerID, 
      Context.FindLineNumberInTextFile(savePath, 'SteamQueryPort=', Nucleus.SearchType.StartsWith) + '|SteamQueryPort=2701'+Context.PlayerID,
  ];	
  Context.ReplaceLinesInTextFile(savePath, dict);
}
