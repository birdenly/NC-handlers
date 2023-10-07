Game.ExecutableContext = [
  "Unturned_Data"
];

var answers1 = ["Official steam version", "unturned 1.0"];
Game.AddOption("Choose what version you will play", "Official steam version is for the latest unturned version, choose the server options below for it.\n\nNow for Unturned 1.0 (https://github.com/Unturned/client/releases):\n\nWhen the game starts, host a server in one instance and connect with others. After you get in game, in the process picker window select unturned. If you go back to the main menu the resolution will break and make it unplayable, only go to it after you are done playing to save your progress. \n\nYou can use Rewasd or xpadder to play with controllers (or other similar apps). After all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.", "version", answers1);

var answers2 = [
  "Germany",
  "PEI",
  "Russia",
  "Washington",
  "Yukon",
  "Alpha Valley",
  "Destruction",
  "Monolith",
  "Paintball Arena",

  
];
Game.AddOption(
  "Select the map you want to start on.",
  '',
  "map",
  answers2
);

var answers3 = [
  "Easy",
  "Normal",
  "Hard"
  
];
Game.AddOption(
  "Select the difficulty you want to start on.",
  '',
  "dif",
  answers3
);

var answers4 = [
  "Yes",
  "No"
  
];
Game.AddOption(
  "Enable Cheats for the admin?",
  'The first player is the admin. The steamID of the first player is 76561199023125438, other players just add +1, for example: player2 is 76561199023125439, player3 is 76561199023125440 and etc. (if you changed the steamID in nucleus it will be different)\n\nSite with most or everything you can do as admin: https://unturnedhub.com/commands',
  "cheat",
  answers4
);

Game.GamePlayBeforeGameSetup = true;


Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt","Unturned_server.bat","Commands.dat","steam_api.dll","Config.json"];

Game.UseGoldberg = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.ExecutableName = "Unturned.exe";
Game.SteamID = "304930";
Game.GUID = "Unturned";
Game.GameName = "Unturned";
Game.MaxPlayers = 30;
Game.MaxPlayersOneMonitor = 30;
Game.LauncherTitle = "";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Unturned";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled =false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.BlockRawInput = false;
Game.Description =
  'If you will play unturned 1.0 read the notes under the "choose what version you will play" in the next section(if you play unturned 1.0 and want to change to latest steam version, or vice versa, you will need to delete the nucleus content folder, doing so will delete your save for that version.), read here if you are playing the latest steam version.\n\nIMPORTANT: You must have unturned and unturned dedicated server downloaded, copy the folder "U3DS" (name of the dedicated server folder of unturned) and place the folder inside your unturned main folder.\n\nTo join the server go into Play > Servers > LAN/Internet. To keep the progress of the server, all players need to return to the main menu than you can ctrl+Q, to close nucleus. \n\nYou can use Rewasd or xpadder to play with controllers (or other similar apps). After all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.\n\nFOR WORKSHOP MAPS: run Unturned with nucleus once, copy the map folder (the one with the numbers), right click the game in nucleus and press "Open Content folder",In instace0 go into U3DS > Servers > Nucleus coop > Workshop > Maps and paste the map folder.\n\n(The part below can be done before even playing with nucleus, so it applies to all automatically, just follow it like its your main game) Open the workshop map folder you just pasted and copy the folder with the map name, go into Instace0 (will need to be done to Instace1, Instace2 and others if you have them) > Maps and paste the folder. At last just copy the name of the folder you just pasted right click the game in nucleus and press "Open game handler", inside the [] where there are other maps add your map with the name you just copied for exemple: "Rio de Janeiro"';
Game.KeepSymLinkOnExit = true;
Game.PauseBetweenStarts = 20;

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
// Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
// Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;
// Game.ProtoInput.DontShowCursorWhenImageUpdated = false;

// Game.ProtoInput.RawInputFilter =false;
// Game.ProtoInput.MouseMoveFilter = false;
// Game.ProtoInput.MouseActivateFilter = false;
// Game.ProtoInput.WindowActivateFilter =false;
// Game.ProtoInput.WindowActvateAppFilter = true;
// Game.ProtoInput.MouseWheelFilter = true;
// Game.ProtoInput.MouseButtonFilter = true;
// Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;

// Game.ProtoInput.EnableFocusMessageLoop = false;

Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  var Args = (Context.Args = " -screen- fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;
  
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Smartly Dressed Games\\Unturned", "Screenmanager Fullscreen mode_h3630240806", 3, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Smartly Dressed Games\\Unturned", "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Smartly Dressed Games\\Unturned", "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Smartly Dressed Games\\Unturned", "Screenmanager Resolution Use Native_h1405027254", 0, Nucleus.RegType.DWord);

  var VERSION = Context.Options["version"];

  if(VERSION =="Official steam version"){

    Game.PlayerSteamIDs = ["76561199023125438"]; 
    Game.FakeFocus = true;
    Game.FakeFocusInterval = 7000;
    Game.SendFakeFocusMsg = true;
    Game.SetForegroundWindowElsewhere = true;

    Game.ProtoInput.CursorVisibilityHook = false;
    Game.ProtoInput.DrawFakeCursor = false;
    Game.ProtoInput.DontShowCursorWhenImageUpdated = false;

    Game.ProtoInput.RawInputFilter =false;
    Game.ProtoInput.MouseMoveFilter = false;
    Game.ProtoInput.MouseActivateFilter = false;
    Game.ProtoInput.WindowActivateFilter =false;
    Game.ProtoInput.WindowActvateAppFilter = true;
    Game.ProtoInput.MouseWheelFilter = true;
    Game.ProtoInput.MouseButtonFilter = true;
    Game.ProtoInput.KeyboardButtonFilter = true;

      var MAP = Context.Options["map"];
      var DIF = Context.Options["dif"];
      var CH = Context.Options["cheat"];

    if (Context.PlayerID == 0) {
    
      if(!System.IO.Directory.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Servers")){

        var filePath = Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Servers";
        System.IO.Directory.CreateDirectory(filePath);	
        
      }

      
      if(!System.IO.Directory.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Servers\\Nucleus coop")){

        var filePath = Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Servers\\Nucleus coop";
        System.IO.Directory.CreateDirectory(filePath);	

      }

      if(!System.IO.Directory.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Servers\\Nucleus coop\\Server")){

        var filePath = Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Servers\\Nucleus coop\\Server";
        System.IO.Directory.CreateDirectory(filePath);	

      }

      if(!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Servers\\Nucleus coop\\Config.json")){

            var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Servers\\Nucleus coop\\Config.json");
            var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Config.json");
            System.IO.File.Copy(savePkgOrigin, savePath, true);

      }

      var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Servers\\Nucleus Coop\\Server\\Commands.dat";
      var lines = [
      "Name Nucleus Coop",
      "Map " + MAP,
      "Port 27015",
      "Mode " + DIF,
      "Owner 76561199023125438",
      "Welcome Have fun with the splitscreen",
      "Maxplayers 30",
      ];
      
      if(CH=="Yes"){
      lines.push("Cheats enabled");
      }

      Context.WriteTextFile(server, lines);

      if(!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Unturned_server.bat")){
        
        var serverBat = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Unturned_server.bat";
        var linesBat = [
        "@echo off",
        'start "" "%~dp0ServerHelper.bat" +LanServer/Nucleus Coop',
        "exit",
        ];
        Context.WriteTextFile(serverBat, linesBat);

      }
    }

      Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\U3DS\\Unturned_server.bat"], false, "", 0, false, false, false, false);
    }
    else{

      Game.SetWindowHook = true;
      Game.ResetWindows = true; 
      Game.RefreshWindowAfterStart = true; 
      Game.HideTaskbar = true;
      Game.SetTopMostAtEnd = true; 
      Game.ForceProcessPick = true;

      Game.ProtoInput.CursorVisibilityHook = true;
      Game.ProtoInput.DrawFakeCursor = true;
      Game.ProtoInput.DontShowCursorWhenImageUpdated = true;

      Game.ProtoInput.RawInputFilter = true;
      Game.ProtoInput.MouseMoveFilter = false;
      Game.ProtoInput.MouseActivateFilter = true;
      Game.ProtoInput.WindowActivateFilter = true;
      Game.ProtoInput.WindowActvateAppFilter = true;
      Game.ProtoInput.MouseWheelFilter = true;
      Game.ProtoInput.MouseButtonFilter = true;
      Game.ProtoInput.KeyboardButtonFilter = true;

      Game.ProtoInput.EnableFocusMessageLoop = true;
      Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
      Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
      Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
      Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
      Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
      Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
      Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE
    }


};
