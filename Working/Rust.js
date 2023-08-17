Game.ExecutableContext = [
  "RustClient_Data"
];

var answers3 = [
  "NO",
  "YES",
  "NO SERVER"

];
Game.AddOption(
  "choose YES if you are going to create a new server/create your first one, choose NO to not change your existing server or choose NO SERVER, if you have a server already running in the background.",
  '',
  "new",
  answers3
);

var answers1 = [
  "Procedural Map",
  "Barren"
];
Game.AddOption(
  "Select the map you want the server to start on.",
  'no need to choose, if the first option you chose is "NO"',
  "map",
  answers1
);

var answers2 = [
  "1000",
  "2000",
  "3000",
  "4000",
  "5000",
  "6000"

];
Game.AddOption(
  "Choose the size of the map.",
  'no need to choose, if the first option you chose is "NO"',
  "size",
  answers2
);


Game.FileSymlinkCopyInstead = [
  "client.cfg",
  "baselib.dll",
  "GameAssembly.dll",
  "UnityCrashHandler64.exe",
 "Rust.exe",
  "UnityPlayer.dll",
 "RustDedicated.exe",
  "vstdlib_s64.dll",
  "UnityPlayer.dll",
  "tier0_s64.dll",
  "boot.config",
  "globalgamemanagers",
  "globalgamemanagers.assets",
  "level0",
  "resources.assets",
  "resources.assets.resS",
  "resources.resource",
  "RuntimeInitializeOnLoads.json",
  "ScriptingAssemblies.json",
  "sharedassets0.assets",
  "sharedassets0.assets.resS",
  "global-metadata.dat",
  "I18N.CJK.dll-resources.dat",
  "Mono.Data.Sqlite.dll-resources.dat",
  "mscorlib.dll-resources.dat",
  "Newtonsoft.Json.dll-resources.dat",
  "System.Data.dll-resources.dat",
  "GfxPluginDLSSNative.dll",
  "GfxPluginNVIDIAReflex.dll",
  "lib_burst_generated.dll",
  "MidiJackPlugin.dll",
  "msvcp140.dll",
  "nvngx_dlss.dll",
  "RakNet.dll",
  "Renderer.dll",
  "RustNative.dll",
  "sqlite3.dll",
  "vcruntime140.dll",
  "vcruntime140_1.dll",
  "xaudio2_9redist.dll",
  "unity default resources",
  "unity_builtin_extra",
  "EOSSDK-Win64-Shipping.dll"
];
Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt","server.bat"];
// Game.DirSymlinkExclusions = ["cfg", "RustClient_Data\\Plugins\\x86_64", "rust_dedicated\\RustDedicated_Data\\Plugins\\x86_64"];

Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.ExecutableName = "RustClient.exe";
Game.SteamID = "252490";
Game.GUID = "Rust";
Game.GameName = "Rust";
Game.MaxPlayers = 30;
Game.MaxPlayersOneMonitor = 30;
Game.LauncherTitle = "";
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Rust";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled =false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.BlockRawInput = false;
Game.Description =
  "IMPORTANT: Download rust dedicated server from steamCMD, copy the 'rust_dedicated' folder that was downloaded and place it in the main rust folder.\n\nThe server save is stored inside Nucleus Co-op content folder, so if you delete Nucleus or its content folder your server save for this game will be lost.\n\nWait for the server to be started, than press F1 to open the console and type 'client.connect localhost'(if it doesnt work try instead of 'localhost' your IP)\n\nAlso IMPORTANT, when closing the server type in the console 'quit', if you force close it, you might lose progess\n\nTo become an admin type in the server console 'ownerID (steamID) (name you want)' exemple: ownerID 76561199023125438 birden, the steamID can be found in nucleus Co-op settings or in the console when you connect to the server.\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.\n\nYou can play with controllers using programs like rewasd or xpadder.";
Game.KeepSymLinkOnExit = true;
Game.PauseBetweenStarts = 20;

Game.UseGoldberg = true;
Game.GoldbergWriteSteamIDAndAccount = true;



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
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;
Game.ProtoInput.DontShowCursorWhenImageUpdated = true;

Game.ProtoInput.RawInputFilter =false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter =false;
Game.ProtoInput.WindowActvateAppFilter = true;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; // Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE

Game.Play = function() {
  var Args = (Context.Args = " -screen- fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;
  
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Facepunch Studios LTD\\Rust", "Screenmanager Fullscreen mode_h3630240806", 3, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Facepunch Studios LTD\\Rust", "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Facepunch Studios LTD\\Rust", "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Facepunch Studios LTD\\Rust", "Screenmanager Resolution Use Native_h1405027254", 0, Nucleus.RegType.DWord);

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\cfg\\client.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "graphics.screenmode", Nucleus.SearchType.StartsWith) + '|graphics.screenmode "2"'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  var MAP = Context.Options["map"];
  var SIZE = Context.Options["size"];
  var NEW = Context.Options["new"];

if(NEW == "NO SERVER"){
}
else{
  if(NEW == "YES"){
    var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\server.bat";
          var lines = [
          "echo off",
          ":start",
          'RustDedicated.exe -batchmode +server.port 28015 +server.level "'+ MAP +'" +server.seed '+ Context.RandomInt(0,2147483647) +' +server.worldsize '+ SIZE +' +server.maxplayers 30  +server.hostname "Nucleus server" +server.description "NUCLEUS CO-OP" +server.identity "Nucleus" +server.secure 0 +server.encryption 0 +server.eac 0 +antihack.terrain_protection 0',
          ];
  
        Context.WriteTextFile(server, lines);
        
    Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\server.bat"], false, "", 0, false, false, false, false);
  }
  else{
    Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\server.bat"], false, "", 0, false, false, false, false);
  }
}

};
