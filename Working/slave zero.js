
Game.NeedsSteamEmulation = false; //probably needed for steam version        
	   
Game.HandlerInterval = 100;                 
Game.SymlinkGame = false;                    
Game.SymlinkExe = false;       
Game.BinariesFolder = "";                                
Game.ExecutableName = "d3d_SlaveZero.exe";         
Game.SteamID = "328470";                    
Game.GUID = "Slave Zero";                     
Game.GameName = "Slave Zero";                
Game.MaxPlayers = 4;                       
Game.MaxPlayersOneMonitor = 4;              
Game.BinariesFolder = "";                   
Game.WorkingFolder = "";
Game.HideTaskbar = true;                                         
Game.StartArguments = "";                               
Game.LauncherExe = "";                      
Game.LauncherTitle = "";                                
Game.Hook.ForceFocus = false;                
Game.Hook.ForceFocusWindowName = "Slave Zero";        
Game.Hook.DInputEnabled = false;           
Game.Hook.DInputForceDisable = false;        
Game.Hook.XInputEnabled = true;             
Game.Hook.XInputReroute = false;    
Game.Hook.XInputNames = [];          
Game.XInputPlusDll = ["xinput1_4.dll","dinput.dll"];        
Game.PauseBetweenStarts = 20; 
Game.Description =
  "IMPORTANT: You wil need the slave zero update: https://community.pcgamingwiki.com/files/file/544-slave-zero-update/, just run the slave zero update .exe . You will also need the Direct3D patch https://community.pcgamingwiki.com/files/file/546-slave-zero-direct3d-patch/, just place the files inside the game folder. If you are in-game with K/M the cursor will go above other players screen but wont interact with it, you cant lock the input of K/M, it will stop working. Create a game with one instance, with the others click 'search for local' and join, if after clicking 'search for local' some times the lobby name doesnt appear just click multiple times at the top left area of the green square of where the lobby name should be. The handler will change some graphics/control settings of the main game too, if you dont like it change it back or dont use the handler"
Game.FakeFocus = true; 
Game.HookFocus = true; 
Game.SupportsKeyboard = true;  


Game.SupportsMultipleKeyboardsAndMice = false;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.ProtoInput.EnableFocusMessageLoop = true; 
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function () { 

   var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\szOptions.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("Settings", "Mouse Capture", 0), 
    new Nucleus.IniSaveInfo("Settings", "Invert Mouse", 1),
    new Nucleus.IniSaveInfo("Settings", "Net Server Address", Context.LocalIP),
    new Nucleus.IniSaveInfo("Settings", "Net Game Name", "LAN SERVER"),
    new Nucleus.IniSaveInfo("Video", "Display Mode Wanted", 9),
    new Nucleus.IniSaveInfo("Video", "Windowed Mode", 1)
  ]);

  
  if (Context.IsKeyboardPlayer) {

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
     new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
     new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", ""),
     ]);

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\szOptions.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [

//default K/M
new Nucleus.IniSaveInfo("Controls", "FIRE1_1", "LEFT_MOUSE"),
new Nucleus.IniSaveInfo("Controls", "FIRE2_1", "RIGHT_MOUSE"),
new Nucleus.IniSaveInfo("Controls", "JUMP_1", "SPACE"),
new Nucleus.IniSaveInfo("Controls", "STRAFE_LEFT_1", "A"),
new Nucleus.IniSaveInfo("Controls", "STRAFE_RIGHT_1", "D"),
new Nucleus.IniSaveInfo("Controls", "TURN_LEFT_1", "LEFT"),
new Nucleus.IniSaveInfo("Controls", "TURN_RIGHT_1", "RIGHT"),
new Nucleus.IniSaveInfo("Controls", "LOOK_UP_1", "UP"),
new Nucleus.IniSaveInfo("Controls", "LOOK_DOWN_1", "DOWN"),
new Nucleus.IniSaveInfo("Controls", "CENTER_LOOK_1", "END"),
new Nucleus.IniSaveInfo("Controls", "FORWARD_1", "W"),
new Nucleus.IniSaveInfo("Controls", "BACKWARD_1", "S"),
new Nucleus.IniSaveInfo("Controls", "CHAT_1", "T"),
new Nucleus.IniSaveInfo("Controls", "PICKUP_1", "CONTROL"),
new Nucleus.IniSaveInfo("Controls", "SWITCH_WEAPON_1", "C"),
new Nucleus.IniSaveInfo("Controls", "STOMP_1", "Q"),  

      //disable everything of controllers
      new Nucleus.IniSaveInfo("Settings", "Input Type", 0),
      new Nucleus.IniSaveInfo("Controls", "FIRE1_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "FIRE2_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "JUMP_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "STRAFE_LEFT_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "STRAFE_RIGHT_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "TURN_LEFT_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "TURN_RIGHT_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "LOOK_UP_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "LOOK_DOWN_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "CENTER_LOOK_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "FORWARD_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "BACKWARD_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "CHAT_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "PICKUP_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "SWITCH_WEAPON_2", "NONE"),
      new Nucleus.IniSaveInfo("Controls", "STOMP_2", "NONE"),      
    ]);
  }
  else{

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
    new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId),
    ]);

    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\szOptions.ini";
    Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      
//disable k/m
new Nucleus.IniSaveInfo("Controls", "FIRE1_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "FIRE2_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "JUMP_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "STRAFE_LEFT_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "STRAFE_RIGHT_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "TURN_LEFT_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "TURN_RIGHT_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "LOOK_UP_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "LOOK_DOWN_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "CENTER_LOOK_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "FORWARD_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "BACKWARD_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "CHAT_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "PICKUP_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "SWITCH_WEAPON_1", "NONE"),
new Nucleus.IniSaveInfo("Controls", "STOMP_1", "NONE"),    

//makes controllers only
new Nucleus.IniSaveInfo("Settings", "Input Type", 1),
      new Nucleus.IniSaveInfo("Controls", "FIRE1_2", "JOYSTICK_AXIS2_ROLL1"),
      new Nucleus.IniSaveInfo("Controls", "FIRE2_2", "JOYSTICK_AXIS1_ROLL2"),
      new Nucleus.IniSaveInfo("Controls", "JUMP_2", "JOYSTICK_BUTTON_1"),
      new Nucleus.IniSaveInfo("Controls", "STRAFE_LEFT_2", "JOYSTICK_AXIS1_LEFT"),
      new Nucleus.IniSaveInfo("Controls", "STRAFE_RIGHT_2", "JOYSTICK_AXIS1_RIGHT"),
      new Nucleus.IniSaveInfo("Controls", "TURN_LEFT_2", "JOYSTICK_AXIS2_LEFT"),
      new Nucleus.IniSaveInfo("Controls", "TURN_RIGHT_2", "JOYSTICK_AXIS2_RIGHT"),
      new Nucleus.IniSaveInfo("Controls", "LOOK_UP_2", "JOYSTICK_AXIS2_FORWARD"),
      new Nucleus.IniSaveInfo("Controls", "LOOK_DOWN_2", "JOYSTICK_AXIS2_BACKWARD"),
      new Nucleus.IniSaveInfo("Controls", "CENTER_LOOK_2", "JOYSTICK_BUTTON_10"),
      new Nucleus.IniSaveInfo("Controls", "FORWARD_2", "JOYSTICK_AXIS1_FORWARD"),
      new Nucleus.IniSaveInfo("Controls", "BACKWARD_2", "JOYSTICK_AXIS1_BACKWARD"),
      new Nucleus.IniSaveInfo("Controls", "CHAT_2", "JOYSTICK_BUTTON_7"),
      new Nucleus.IniSaveInfo("Controls", "PICKUP_2", "JOYSTICK_BUTTON_3"),
      new Nucleus.IniSaveInfo("Controls", "SWITCH_WEAPON_2", "JOYSTICK_BUTTON_4"),
      new Nucleus.IniSaveInfo("Controls", "STOMP_2", "JOYSTICK_BUTTON_2"),   
    ]);

  }
}; 