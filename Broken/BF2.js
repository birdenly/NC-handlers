Game.KillMutexType = "Mutant";
Game.KillMutex = ["Battlefield2_Instance_Mutex"];

Game.ChangeExe = true;
Game.NeedsSteamEmulation = false;          
Game.UseGoldberg = false;		   
Game.HandlerInterval = 100;                 
Game.SymlinkGame = false;                    
Game.SymlinkExe = false;
Game.KeepSymLinkOnExit = false;                     
Game.SupportsKeyboard = true;                
Game.ExecutableName = "BF2.exe";         
Game.SteamID = "12345";                    
Game.GUID = "Battlefield 2";                     
Game.GameName = "Battlefield 2";                
Game.MaxPlayers = 4;                       
Game.MaxPlayersOneMonitor = 4;              
Game.BinariesFolder = "Battlefield 2";                   
Game.WorkingFolder = "";                    
Game.HideTaskbar = true;                    
Game.StartArguments = "+restart +fullscreen 0";                   
Game.ForceFinishOnPlay = true;              
Game.LauncherExe = "";                      
Game.LauncherTitle = "BF2";                    
Game.SupportsPositioning = true;              
Game.Hook.ForceFocus = true;                
Game.Hook.ForceFocusWindowName = "BF2";        
Game.Hook.DInputEnabled = true;           
Game.Hook.DInputForceDisable = false;        
Game.Hook.XInputEnabled = true;             
Game.Hook.XInputReroute = false;            
Game.Hook.XInputNames = [];  
Game.XInputPlusDll = ["dinput.dll", "xinput1_4.dll"];    
Game.Hook.BlockKeyboardEvents = false;       
Game.Hook.BlockMouseEvents = false;          
Game.Hook.BlockInputEvents = false;          
Game.Hook.CustomDllEnabled = false;         
Game.PauseBetweenStarts = 20;               
Game.LockMouse = false;  
Game.SetWindowHook = true; 
Game.PromptBetweenInstances = true;
Game.FakeFocus = true; 
Game.FakeFocusInterval = 5;   


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
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = false;
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
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.SetWindowPosHook = true;

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
Game.ProtoInput.XinputHook = false;
Game.ProtoInput.UseOpenXinput = false;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;

Game.ProtoInput.EnableFocusMessageLoop = false;
// Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
// Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function () { 
}; 