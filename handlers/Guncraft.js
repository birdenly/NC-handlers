Game.KillMutex = ["{c23c9b08-8b82-4406-af68-e5cca585493a}"]
Game.HandlerInterval = 500;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "Guncraft.exe";
Game.GUID = "Guncraft"
Game.SteamID = "241720";
Game.GameName = "Guncraft";
Game.MaxPlayers = 12;
Game.MaxPlayersOneMonitor = 12;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Guncraft";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll", "xinput9_1_0.dll"];
Game.Description =
  "Make the game windowed before trying split screen.\n\nYou will get a error on start, ignore it, the handler works on LAN. Go into edit chracter and change your LAN name and anything else you need. Now use the LAN option to host/join each other. You can press ctrl+t twice to fix aspect ratio if you want (you will get black bars)"
Game.PauseBetweenProcessGrab = 8;
Game.PauseBetweenStarts = 8;

Game.FakeFocus = true;
Game.HookFocus = true;	
Game.NeedsSteamEmulation = true;
Game.SetWindowHook = true;		
Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Documents\\Guncraft";
Game.UserProfileSavePath = "AppData\\Roaming\\SmartSteamEmu\\241720";
Game.SupportsKeyboard = true;

Game.Play = function() {
};
