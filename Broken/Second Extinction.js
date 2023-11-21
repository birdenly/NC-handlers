var answers1 = ["Yes", "No"];
Game.AddOption("Vsync", "", "vsync", answers1);
var answers2 = ["No", "Yes"];
Game.AddOption("Dynamic resolution", "", "dres", answers2);
var answers3 = ["60", "30"];
Game.AddOption("Dynamic resolution target fps", "", "drest", answers3);

Game.FileSymlinkCopyInstead = [
"allhashes.hashc",
"background_image_angles.png",
"CacheSim.dll",
"code_data_dependency.txt",
"CrashDialog.exe",
"crashrpt_lang.ini",
"CrashRpt1403.dll",
"CrashRptProbe1403.dll",
"CrashSender1403.exe",
"d3dcompiler_47.dll",
"dbgcore.dll",
"dbghelp.dll",
"EOSSDK-Win64-Shipping.dll",
"FidelityFX_Shaders_sm6_2_Vulkan_F.shader_bundle",
"FidelityFX_Shaders_sm6_Vulkan_F.shader_bundle",
"fmod_studio_F.dll",
"GFSDK_Aftermath_Lib.x64.dll",
"icon.ico",
"Launcher_eos.exe",
"libcrypto-1_1-x64.dll",
"libScePad.dll",
"libssl-1_1-x64.dll",
"mask_angles.png",
"PartyWin.dll",
"renderdoc.dll",
"ShadersVulkan_F.shader_bundle",
"symsrv.dll",
"udis86.dll",
"versions.TallinMilestone.txt",
"WinPixEventRuntime.dll",
"game_filelist.txt",
 "game_hash_names0.txt",
 "game_hash_names1.txt",
 "game_hash_names2.txt",
 "game_hash_names3.txt",
 "game0.arc",
 "game0.tab",
 "game1.arc",
 "game1.tab",
 "game2.arc",
 "game2.tab",
 "game3.arc",
 "game3.tab",

"game_filelist.txt",
 "game_hash_names0.txt",
 "game_hash_names1.txt",
 "game_hash_names2.txt",
 "game_hash_names3.txt",
 "game_hash_names4.txt",
 "game_hash_names5.txt",
 "game0.arc",
 "game0.tab",
 "game1.arc",
 "game1.tab",
 "game2.arc",
 "game2.tab",
 "game3.arc",
 "game3.tab",
 "game4.arc",
 "game4.tab",
 "game5.arc",
 "game5.tab",


];

Game.Description =
  "For multiple mice and keys press END to lock the input when both instances are at the main menu, then click the mouse button for each instance and wait a few seconds and the cursors should appear.";
Game.KillMutex = ["TITLE-39291D0A-900F-4c8d-B051-E0EDF94517A6CATA"];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.SupportsKeyboard = false;
Game.ExecutableName = "SecondExtinctionEOS.exe";
Game.SteamID = "";
Game.GUID = "Second Extinction";
Game.GameName = "Second Extinction";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.LauncherTitle = "";
Game.StartArguments = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Second Extinction";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.PauseBetweenStarts = 30;
Game.SetForegroundWindowElsewhere = true;

Game.UseNemirtingasEpicEmu = true;
Game.EpicEmuArgs = true;

Game.UseNucleusEnvironment = true;
Game.UserProfileConfigPath = "Saved Games\\Avalanche Studios\\Second Extinction\\Epic";
Game.UserProfileSavePath = "Saved Games\\Avalanche Studios\\Second Extinction\\Saves";

Game.SupportsMultipleKeyboardsAndMice = true;

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
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.InjectHookXinput = false;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.InjectStartup = true;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;
Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.EnableFocusMessageLoop = false;
// Game.ProtoInput.FocusLoopIntervalMilliseconds = 10;
// Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
// Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
// Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
// Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x0006];
Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];
Game.LockInputAtStart = false;

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];
    ProtoInput.DisableMessageBlock(player.ProtoInputInstanceHandle, 0x0006);
    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 0, true, true, true, true, true);
    System.Threading.Thread.Sleep(1000);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
    ProtoInput.EnableMessageBlock(player.ProtoInputInstanceHandle, 0x0006);
    ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
  }
};
Game.ProtoInput.OnInputUnlocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
  }
};

Game.Play = function() {

  var vsync = Context.Options["vsync"];
  if (vsync == "No") {
    var vsyncset = 0;
  } else {
    var vsyncset = 1;
  }
  var dres = Context.Options["dres"];
  if (dres == "No") {
    var dresset = 0;
  } else {
    var dresset = 1;
  }
  var drest = Context.Options["drest"];
  var txtPath = Context.EnvironmentPlayer + Context.UserProfileConfigPath + "\\settings.json";
  Context.ReplaceLinesInTextFile(txtPath, [
    Context.FindLineNumberInTextFile(txtPath, '    "DisplayFullscreen"', Nucleus.SearchType.StartsWith) + '|    "DisplayFullscreen": 0,',
    Context.FindLineNumberInTextFile(txtPath, '    "DisplayWidth"', Nucleus.SearchType.StartsWith) + '|    "DisplayWindowedWidth": ' + Context.Width + ",",
    Context.FindLineNumberInTextFile(txtPath, '    "DisplayHeight"', Nucleus.SearchType.StartsWith) + '|    "DisplayWindowedHeight": ' + Context.Height + ",",

    Context.FindLineNumberInTextFile(txtPath, '        "DisplayWindowPosX"', Nucleus.SearchType.StartsWith) + '|    "DisplayWindowPosX": ' + Context.PosX + ",",
    Context.FindLineNumberInTextFile(txtPath, '    "DisplayWindowPosY"', Nucleus.SearchType.StartsWith) + '|    "DisplayWindowPosY": ' + Context.PosY + ",",

    Context.FindLineNumberInTextFile(txtPath, '    "DisplayVSync"', Nucleus.SearchType.StartsWith) + '|    "DisplayVSync": ' + vsyncset + ",",
    Context.FindLineNumberInTextFile(txtPath, '    "DisplayDynamicResolution"', Nucleus.SearchType.StartsWith) + '|    "DisplayDynamicResolution": ' + dresset + ",",
    Context.FindLineNumberInTextFile(txtPath, '    "DisplayDynamicResolutionFPS"', Nucleus.SearchType.StartsWith) + '|    "DisplayDynamicResolutionFPS": ' + drest + ","
  ]);

};