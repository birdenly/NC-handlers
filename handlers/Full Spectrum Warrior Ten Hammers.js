Game.FileSymlinkCopyInstead = [
"language.cfg",
];
Game.FileSymlinkExclusions = [
  "xinput9_1_0.dll",
  "d3d9.dll",
  "d3d9.ini",
  "dinput8.dll",
  "FullSpectrumWarriorTenHammersFOVFix.asi",
  "FullSpectrumWarriorTenHammersFOVFix.ini",
];
Game.KillMutex = ["Full Spectrum Warrior 2"];
Game.ExecutableName = "fsw2.exe";
Game.GameName = "Full Spectrum Warrior Ten Hammers";
Game.GUID = "Full Spectrum Warrior Ten Hammers";
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = false;
Game.MaxPlayers = 4;
Game.HandlerInterval = 100;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Full Spectrum Warrior: Ten Hammers";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput9_1_0.dll", "xinput1_4.dll", "Dinput.dll","Dinput8.dll"];
Game.Description = "Make a profile for each player and WAIT for the screen to resize into place before selecting one of them.\n\nGo to the controller config menu and set the controller axis and other controllers as they are all over the place.\n\nUse LAN to connec to each other.";	

Game.PauseBetweenStarts = 10;
Game.PauseBetweenProcessGrab = 10; 

Game.UserProfileSavePath = "AppData\\Roaming\\FSW2";
Game.SteamlessPatch = ["false", "--quiet --keepbind", "5000"];
Game.SetWindowHook = true;
Game.HookFocus = true;	

Game.Play = function () {

Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  	if ( Context.PlayerID == 0) {
		var FIP = "7F 00 00 01";
	}
	if ( Context.PlayerID == 1) {
		var FIP = "7F 00 00 02";
	}
	if ( Context.PlayerID == 2) {
		var FIP = "7F 00 00 03";
	}
	if ( Context.PlayerID == 3) {
		var FIP = "7F 00 00 04";
	}

	//IPs
	Context.PatchFileFindPattern(
	System.IO.Path.Combine(Context.RootFolder, "fsw2.exe"),
	System.IO.Path.Combine(Context.RootFolder, "fsw2.exe"),
	"C7 44 24 14 00 00 00 00 E8 80 01 DD FF 8B 0E 66",
	"C7 44 24 14"  + FIP +  "E8 80 01 DD FF 8B 0E 66",
	true
  	);
	Context.PatchFileFindPattern(
	System.IO.Path.Combine(Context.RootFolder, "fsw2.exe"),
	System.IO.Path.Combine(Context.RootFolder, "fsw2.exe"),
	"C7 44 24 18 00 00 00 00 E8 6A 3C DD FF 8B 16 6A",
	"C7 44 24 18"  + FIP +  "E8 6A 3C DD FF 8B 16 6A",
	true
  	);
	Context.PatchFileFindPattern(
	System.IO.Path.Combine(Context.RootFolder, "fsw2.exe"),
	System.IO.Path.Combine(Context.RootFolder, "fsw2.exe"),
	"00 00 00 00 E8 89 FE DD FF 8B 0E 66 89 44 24 0E",
	FIP +  "E8 89 FE DD FF 8B 0E 66 89 44 24 0E",
	true
  	);
	Context.PatchFileFindPattern(
	System.IO.Path.Combine(Context.RootFolder, "fsw2.exe"),
	System.IO.Path.Combine(Context.RootFolder, "fsw2.exe"),
	"C7 44 24 18 00 00 00 00 E8 E9 3B DD FF 8B 16 6A",
	"C7 44 24 18"  + FIP +  "E8 E9 3B DD FF 8B 16 6A",
	true
  	);
  
  //no reg found. needs any reg patch also
    Context.PatchFileFindPattern(
    System.IO.Path.Combine(Context.RootFolder, "fsw2.exe"),
    System.IO.Path.Combine(Context.RootFolder, "fsw2.exe"),
    "74 1B 8B 14 24 52 FF 15 10 00 87 00 32 C0 8B 4C",
    "EB 1B 8B 14 24 52 FF 15 10 00 87 00 32 C0 8B 4C",
    true
	);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\FullSpectrumWarriorTenHammersFOVFix.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Settings", "Width", Context.Width),
    new Nucleus.IniSaveInfo("Settings", "Height", Context.Height)
  ]);

	  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("X2DInput", "EnableX2Dinput", true),
    new Nucleus.IniSaveInfo("X2DInput", "RS_X", "X_Rot"),
    new Nucleus.IniSaveInfo("X2DInput", "RS_Y", "Z_Axis"),
    new Nucleus.IniSaveInfo("X2DInput", "LT", "Button5"),
    new Nucleus.IniSaveInfo("X2DInput", "RT", "Button6"),
    new Nucleus.IniSaveInfo("X2DInput", "LB", "POV_DOWN"),
    new Nucleus.IniSaveInfo("X2DInput", "RB", "POV_LEFT"),
  ]);

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
  ]);
  

}