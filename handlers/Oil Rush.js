Game.FileSymlinkCopyInstead = ["OilRush_x86.dll", "OilRush_steam_x86.dll",];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "OilRush.exe";
Game.BinariesFolder = "bin";
Game.SteamID = "200390";
Game.GUID = "Oil Rush";
Game.GameName = "Oil Rush";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Oil Rush";
Game.ResetWindows = true;
Game.Description = "Create a lobby and join in with others.\n\nAfter all instances are resized correctly press END to control them.";
Game.PauseBetweenProcessGrab = 10;
Game.PauseBetweenStarts = 10;

Game.UseGoldberg = true; 
Game.GoldbergNoLocalSave = true;
Game.UseNucleusEnvironment = true; 
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\200390";
Game.UserProfileConfigPath = "OilRush"; //lol

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

//ProtoInput:

Game.SupportsMultipleKeyboardsAndMice = true;

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

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = true;
Game.ProtoInput.GetAsyncKeyStateHook = true;
Game.ProtoInput.GetKeyboardStateHook = true;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.PutMouseInsideWindow = true; 

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = true;
Game.ProtoInput.MouseActivateFilter = true;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, false, false, true, true);
    System.Threading.Thread.Sleep(500);
    ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
  }
};	

Game.Play = function () {

  Context.StartArguments = ' -project_name OilRush -sound_app openal -video_app auto -option_anti_aliasing 0 -data_path ../ -system_script oilrush/unigine.cpp -engine_config '+Context.DocumentsPlayer +'/../OilRush/oilrush.cfg -video_mode -1 -video_width '+Context.Width+' -video_height '+Context.Height+' -video_fullscreen 0 -video_vsync 1 -option_graphics_quality 1 -option_textures_quality 1 -extern_plugin OilRush_steam -console_command "render_manager_create_meshes 1 && render_manager_create_shaders 1 && show_visualizer 0 && show_fps 0 && render_restart" -extern_define CAMPAIGN"';

  if(!System.IO.Directory.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bin\\steam_settings")){

    var filePath = Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bin\\steam_settings";
    System.IO.Directory.CreateDirectory(filePath);
    
  }

  var autoExec = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bin\\steam_settings\\DLC.txt";
  var lines = [
  "200396=Oil Rush DLC TD"
  ];
  Context.WriteTextFile(autoExec, lines);

  var inter = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\bin\\steam_interfaces.txt";
  var lines = [
  "SteamClient012",
  "SteamGameServer011",
  "SteamGameServerStats001",
  "SteamUser016",
  "SteamFriends013",
  "SteamUtils005",
  "SteamMatchMaking009",
  "SteamMatchMakingServers002",
  "STEAMUSERSTATS_INTERFACE_VERSION011",
  "STEAMAPPS_INTERFACE_VERSION005",
  "SteamNetworking005",
  "STEAMREMOTESTORAGE_INTERFACE_VERSION010",
  "STEAMSCREENSHOTS_INTERFACE_VERSION002",
  "STEAMHTTP_INTERFACE_VERSION002",
  "STEAMUNIFIEDMESSAGES_INTERFACE_VERSION001",
  ];

  Context.WriteTextFile(inter, lines);
};