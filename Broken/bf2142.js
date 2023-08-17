Game.KillMutexType = "Mutant";
Game.KillMutex = ["Battlefield2142_Instance_Mutex"];


Game.ChangeExe = true;
Game.NeedsSteamEmulation = false;          
Game.UseGoldberg = false;		   
Game.HandlerInterval = 100;                 
Game.SymlinkGame = false;                    
Game.SymlinkExe = false;                     
Game.SupportsKeyboard = false;                
Game.ExecutableName = "BF2142.exe";         
Game.SteamID = "12345";                    
Game.GUID = "battlefield 2142";                     
Game.GameName = "battlefield 2142";                
Game.MaxPlayers = 64;                       
Game.MaxPlayersOneMonitor = 64;              
Game.BinariesFolder = "";                   
Game.WorkingFolder = "";                    
Game.HideTaskbar = true;                    
Game.StartArguments = "+fullscreen 0";                   
Game.ForceFinishOnPlay = true;              
Game.LauncherExe = "";                      
Game.LauncherTitle = "";                    
Game.SupportsPositioning = true;              
Game.Hook.ForceFocus = true;                
Game.Hook.ForceFocusWindowName = "BF2142";   
Game.HasDynamicWindowTitle = true;     
Game.Hook.DInputEnabled = false;           
Game.Hook.DInputForceDisable = false;        
Game.Hook.XInputEnabled = true;             
Game.Hook.XInputReroute = false;            
Game.Hook.XInputNames = [];  
Game.XInputPlusDll = ["xinput1_3.dll"];    
Game.Hook.BlockKeyboardEvents = false;       
Game.Hook.BlockMouseEvents = false;          
Game.Hook.BlockInputEvents = false;          
Game.Hook.CustomDllEnabled = false;         
Game.PauseBetweenStarts = 20;               
Game.LockMouse = false;                     
Game.DPIHandling = false;   
Game.SetWindowHook = true;   
Game.PromptBetweenInstances = true;   
// Game.FakeFocus = true; 
// Game.FakeFocusInterval = 5;     
Game.FakeFocusSendActivate = false;
Game.HandlerInterval = 100; 
//Game.HideTaskbar = true;
Game.SetWindowHook = true;        
Game.BlockRawInput = true; 
                     

Game.SupportsMultipleKeyboardsAndMice = true;

// Deprecated options
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
Game.DrawFakeMouseCursor = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

// This hook should always be on, regardless of input lock
Game.ProtoInput.RegisterRawInputHook = true;

// This can always be enabled, since we are going to allow/disallow raw input with the bypass function
Game.ProtoInput.GetRawInputDataHook = true;

// We will be installing/uninstalling the filters manually so there's no need to
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;

// These aren't problematic to leave on, since the external "freeze fake input input" when real input ISN'T locked will prevent these from interfering
Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;

// Handled on input lock/unlock, don't enable this by default
Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;

Game.ProtoInput.DrawFakeCursor = false; // This is set in the input locking

Game.ProtoInput.BlockedMessages = [ 0x0008 ]; // Blocks WM_KILLFOCUS

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

// We can leave these on and not worry about input lock. 
// It doesn't matter if controller input still works since it won't get in the way
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;

// The old Nucleus options. Don't use these with the Xinput hook
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;


Game.ProtoInput.AutoHideTaskbar = true;

Game.ProtoInput.OnInputLocked = function()
{
	for (var i = 0; i < PlayerList.Count; i++)
	{
		var player = PlayerList[i];

		ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
		ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
		ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
		ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
		ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
		ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

		ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);

		ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);

		// Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move moessages
		//ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

		ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
		ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
		ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
		ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
		ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
		ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

		ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, true);

		ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5, true, true, true, true, true);

		// Disable the bypass: let the input be processed by Proto Input
		ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, false);
	}
}

Game.ProtoInput.OnInputUnlocked = function()
{
	for (var i = 0; i < PlayerList.Count; i++)
	{
		var player = PlayerList[i];

		ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
		ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
		ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
		ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
		ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
		ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

		// Intentionally disable focus so all the instances don't respond to input at the same time
		ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);

		ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
		ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
		ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
		ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
		ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
		ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
		ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
		ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

		ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);

		// Intentionally disable focus so all the instances don't respond to input at the same time
		ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);

		// Enable the bypass: allow any raw input to pass
		ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, true);
	}
}

Game.Play = function () { 
}; 