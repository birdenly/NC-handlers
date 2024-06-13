var answers1 = ["No", "Yes"];
var answers2 = ["-", "60", "50", "45", "40", "30",];
var answers4 = ["Default", "Low", "Med", "High"];
var answers5 = ["No","Yes"];
Game.AddOption("Select your preferred graphic settings", "Default will use the previous or default settings", "opt", answers4)
Game.AddOption("Select the FPS Cap the game will use", "Select '-' to retain default or previously selected settings", "FPS", answers2);
Game.AddOption("Unlock all classes and weapons", "", "unlock", answers1);
Game.AddOption("Enable music only in the first instance?", "Select 'No' to use the previous or default settings", "Mus", answers5);

var answers6 = ["-","60", "65","70","75","80","85", "90","95","100"];
Game.AddOption("Select the FOV.", "Select '-' to use the previous or default settings. (distance from the enviroment)", "fov", answers6);
var answers7 = ["-","0.8","0.9","1.0", "1.1","1.2","1.3","1.4","1.5","1.6","1.7","1.8","1.9","2"];
Game.AddOption("Select the FOV Scale.", "Select '-' to use the previous or default settings. (distance from your gun)", "fovscale", answers7);
Game.DirSymlinkExclusions = ['h1-mod', 'players2'];
Game.FileSymlinkExclusions = ['xinput1_3.dll', 'xinputplus.ini', 'h1-mod.exe', 'keys_mp.cfg', 'config_mp.cfg', 'config_mp.cfg', 'language', "settings_c.zip.h1", "settings_m.zip.h1", "upshd.dat", "commondata", "mpdata"];
Game.FileSymlinkCopyInstead = ["steam_api.dll", "steam_api.ini", "h1_sp64_ship.exe", "Steam.dll", "steam_api.dll", "steam_api64.dll", "SteamAPIUpdater.dll", "steamclient.dll", "XGamepad.dll"]
Game.GameName = 'Call of Duty Modern Warfare Remastered';
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = 'h1_mp64_ship.exe';
Game.LauncherExe = 'h1-mod.exe';
Game.LauncherExeIgnoreFileCheck = true;
Game.LaunchAsDifferentUsers = false;
Game.BinariesFolder = '';
Game.SteamID = '393080';
Game.GUID = 'Call of Duty Modern Warfare Remastered';
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = false;
Game.SupportsPositioning = true;
Game.ForceFinishOnPlay = false;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = 'Call of Duty®: Modern Warfare® Remastered Multiplayer';
Game.HasDynamicWindowTitle = false;
Game.FakeFocus = false;
Game.HookFocus = false;
Game.BlockRawInput = false;
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = true;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.InjectHookXinput = false;
Game.Hook.CustomDllEnabled = false;
Game.Hook.UseAlpha8CustomDll = false;
Game.SetForegroundWindowElsewhere = true;
Game.ProcessChangesAtEnd = false;
Game.KillProcessesOnClose = ['Start', 'F2 Host', 'F3 Restart', 'Unlock', 'cmd', 'JoyToKey','close',"F4 Prop"];
Game.DontResize = false;
Game.DontRemoveBorders = false;
Game.DontReposition = false;
Game.PreventWindowDeactivation = false;
Game.KeyboardPlayerSkipPreventWindowDeactivate = false;
Game.ResetWindows = true;
Game.RefreshWindowAfterStart = true;
Game.StartArguments = '-nosteam -multiplayer';
Game.HideTaskbar = true;
Game.UseForceBindIP = true;
Game.ForceBindIPNoDummy = true;
Game.PauseBetweenStarts = 10;
Game.PauseBetweenProcessGrab = 30;
Game.Description =
  "IMPORTANT: THIS IS MADE FOR LEGIT STEAM VERSION WITH ALL DLCS, ANY OTHER VERSION YOU WILL HAVE PROBLEMS --DONT ASK FOR HELP WITH THEM--\n\nIf you get stuck in the lobby when you try to start a map, it means you dont have it installed (you dont have that DLC), you will need to restart everything.\n\nYou might need to change your game languange to english\n\nOnce all the instances have finished resizing and repositioning, have the first player create a private/custom game and the other players join by pressing F2 or pressing and holding the START button on your controller.\n\nOnce all the players have connected you can quickly restart the match by pressing F3 or by pressing and holding the SELECT button on your controller.\n\nFor PropHunt: go into the private match menu and press F4 that will make the game mode be PropHunt, choose a map and start the match. Remove the bots if there is any. Changing the game mode will remove propHunt\n\nThese shortcuts will only work while input is unlocked.\n\nIf you use keyboards and mice after all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";
Game.SetWindowHook = true;

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
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];


Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = false;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;

Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = false;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.OnInputLocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];

      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);
  
      //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
  
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
  
      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
    }
  };
  
  Game.ProtoInput.OnInputUnlocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];
  
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);
      
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
  
      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
    }
  };

//good
Game.Play = function() {
  
  Game.ExecutableName = 'h1-mod.exe';

  Context.RunAdditionalFiles([Context.ScriptFolder + "\\Start.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2 Host.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\F3 Restart.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\F4 Prop.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\JoyToKey.exe"], false, 0);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\close.exe"], false, 10);

  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, 'h1-mod.exe');
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\h1-mod.exe');
  System.IO.File.Copy(savePkgOrigin, savePath, true);
  
  var players2 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2'
  if (!System.IO.Directory.Exists(players2)) {
    System.IO.Directory.CreateDirectory(players2);
  }

  var Mus = Context.Options["Mus"];
  var FOV = Context.Options["fov"];
  var FOVSCALE = Context.Options["fovscale"];

  if (Mus == "Yes") {
    if (Context.PlayerID == 0) {
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_m.zip.h1";
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "settings_m.zip_audio.h1");
      System.IO.File.Copy(savePkgOrigin, savePath, true);

    } else {
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_m.zip.h1";
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "settings_m.zip_noaudio.h1");
      System.IO.File.Copy(savePkgOrigin, savePath, true);

    }
  }
  else {
    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_c.zip.s1")){
  
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_m.zip.h1";
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "players2\\settings_m.zip.h1");
      System.IO.File.Copy(savePkgOrigin, savePath, true);

    }
  }

  var unlock = Context.Options["unlock"];
  if (unlock == "Yes") {
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\Unlock.exe"], false, 10);
  }else{

  }

  if (System.IO.File.Exists(Context.RootInstallFolder + '\\steam_api64.dll')) {
    var cfgpath = Context.HandlersFolder + "\\Call of Duty Modern Warfare Remastered.js";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, '//here', Nucleus.SearchType.StartsWith) + '|//good',
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  }else{
    var cfgpath = Context.HandlersFolder + "\\Call of Duty Modern Warfare Remastered.js";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, '//here', Nucleus.SearchType.StartsWith) + '|//bad',
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  }

  var opt = Context.Options["opt"];
  if (opt == "Default") {

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg")) {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Config\\config_mp_low_opt.cfg");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  }
  if (opt == "Low") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Config\\config_mp_low_opt.cfg");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (opt == "Med") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Config\\config_mp_med_opt.cfg");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (opt == "High") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Config\\config_mp_high_opt.cfg");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  if(FOVSCALE =="-"){
  }
  else{
      var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
      var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'seta 0x79A1090F', Nucleus.SearchType.StartsWith) + '|seta 0x79A1090F "' + FOVSCALE  + '"',
      ];
      Context.ReplaceLinesInTextFile(cfgpath, dict);
  }

  if(FOV =="-"){
  }
  else{
      var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
      var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'seta 0x8572B2C7', Nucleus.SearchType.StartsWith) + '|seta 0x8572B2C7 "' + FOV  + '"',
      ];
      Context.ReplaceLinesInTextFile(cfgpath, dict);
  }

  var FPS = Context.Options["FPS"];
  if (FPS == "-") {
  }else{
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg';
    Context.ReplaceLinesInTextFile(txtPath, [
    Context.FindLineNumberInTextFile(txtPath, 'seta 0xF264C46C', Nucleus.SearchType.StartsWith) + '|seta 0xF264C46C "' + FPS + '"'
    ], 'utf-8');
  }

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2\\config_mp.cfg';
  Context.ReplaceLinesInTextFile(txtPath, [
  Context.FindLineNumberInTextFile(txtPath, 'seta 0xCE3A6324', Nucleus.SearchType.StartsWith) + '|seta 0xCE3A6324 "' + Context.Nickname + '"',
  Context.FindLineNumberInTextFile(txtPath, 'seta 0x6E536C59', Nucleus.SearchType.StartsWith) + '|seta 0x6E536C59 "' + Context.Width + '"',
  Context.FindLineNumberInTextFile(txtPath, 'seta 0xF5470D48', Nucleus.SearchType.StartsWith) + '|seta 0xF5470D48 "' + Context.Height + '"',
  Context.FindLineNumberInTextFile(txtPath, 'seta 0x623EFE27', Nucleus.SearchType.StartsWith) + '|seta 0x623EFE27 "auto"', //aspectratio
  Context.FindLineNumberInTextFile(txtPath, 'seta 0x72C6D8D9', Nucleus.SearchType.StartsWith) + '|seta 0x72C6D8D9 "0"', // windowed		
  ], 'utf-8');	

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

}
