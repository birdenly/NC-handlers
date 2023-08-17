	   
Game.HandlerInterval = 100;                 
Game.SymlinkGame = false;                    
Game.SymlinkExe = false;                                
Game.ExecutableName = "BF1942.exe";         
Game.SteamID = "12345";                    
Game.GUID = "Battlefield 1942";                     
Game.GameName = "Battlefield 1942";                
Game.MaxPlayers = 64;                       
Game.MaxPlayersOneMonitor = 64;              
Game.BinariesFolder = "";                   
Game.WorkingFolder = "";                    
Game.HideTaskbar = true;                    
Game.StartArguments = "+restart 1";                              
Game.LauncherExe = "";                      
Game.LauncherTitle = "BF1942";                             
Game.Hook.ForceFocus = true;                
Game.Hook.ForceFocusWindowName = "BF1942"; 
Game.HasDynamicWindowTitle = true;        
Game.Hook.DInputEnabled = false;           
Game.Hook.DInputForceDisable = false;        
Game.Hook.XInputEnabled = true;             
Game.Hook.XInputReroute = false;            
Game.XInputPlusDll = ["xinput1_3.dll"];    
Game.Hook.BlockKeyboardEvents = false;       
Game.Hook.BlockMouseEvents = false;          
Game.Hook.BlockInputEvents = false;          
Game.Hook.CustomDllEnabled = false;         
Game.PauseBetweenStarts = 20;               
Game.LockMouse = false;                     
Game.DPIHandling = false;      
Game.FakeFocus = true; 
// Game.FakeFocusInterval = 1; 
                                   


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

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 1;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS


Game.Play = function () { 
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Mods\\bf1942\\Settings\\VideoDefault.con";
    var dict = [
    Context.FindLineNumberInTextFile(txtPath, 'renderer.setFullScreen ', Nucleus.SearchType.StartsWith) + '|renderer.setFullScreen 0'
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
}; 