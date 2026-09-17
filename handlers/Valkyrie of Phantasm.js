Game.FileSymlinkExclusions = [
  "steam_api64.dll",
  "steam_appid.txt",
  "Rewired_DirectInput.dll"
];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "VOP.exe";
Game.SteamID = "2015620";
Game.GUID = "Valkyrie of Phantasm";
Game.GameName = "Valkyrie of Phantasm";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Valkyrie of Phantasm 1.10a";
Game.HasDynamicWindowTitle = true;
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "IMPORTANT: THIS IS STILL FULLY ONLINE! YOU CAN JOIN ONLINE GAMES IN SPLIT SCREEN OR OTHER STEAM PLAYERS CAN JOIN YOUR MATCH\nIt can be patched at any momment by the devs.\n\nHorizontal split doesnt work well, so avoid using it.\n\nOn multiplayer use the same region and create/join with lobby browser/random lobby. Again as it is fully online, add a password if you want.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 10;

Game.UseGoldberg = true;
Game.GoldbergNoLocalSave = true;
Game.SteamlessPatch = ["false", "", "5000"];

Game.SetWindowHookStart = true;
Game.UseNucleusEnvironment = true;
Game.RefreshWindowAfterStart = true;
Game.UserProfileSavePath = "AppData\\LocalLow\\AreaZero";
Game.UserProfileSavePath = "AppData\\Roaming\\Goldberg SteamEmu Saves\\2015620";

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 15000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.Play = function() {
  Context.StartArguments = "-screen-fullscreen 0 -screen-width " + Context.Width + " -screen-height " + Context.Height;

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\AreaZero\\VOP", "Screenmanager Fullscreen mode_h3630240806", 3, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\AreaZero\\VOP", "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\AreaZero\\VOP", "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\AreaZero\\VOP", "Screenmanager Resolution Window Height_h1684712807", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\AreaZero\\VOP", "Screenmanager Resolution Window Width_h2524650974", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\AreaZero\\VOP", "Screenmanager Resolution Use Native_h1405027254", 0, Nucleus.RegType.DWord);
};
