Hub.Handler.Version = 2; // Released at https://hub.splitscreen.me/ on Sat May 20 2023 01:17:53 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "edoK4FZvFLh33WpT5";
Hub.Maintainer.Name = "birden";
Hub.Maintainer.Id = "rRycxSn253ZCjQy5C";

var answers1 = ["MULTIPLAYER", "Assault Co-op", "Contest Isle Co-op"];
var answers2 = ["YES", "NO"];
Game.AddOption(
  "Choose the mode you will play.",
  "Multiplayer will go to multiplayer with bots, while the other 2 are Co-op mods that have their own pros and cons, read the handler notes.",
  "Coop",
  answers1
);
Game.AddOption("Is your monitor set to 100% scale?", "You can find out in Windows Configuration>System>Display.", "scale", answers2);

Game.ExecutableContext = ["binkw32.dll"];
Game.DirSymlinkExclusions = ["Bin32", "Bin64", "FCData", "Languages\\Movies\\English", "Profiles\\server"];
Game.FileSymlinkExclusions = ["ZZZScripts150.pak", "999time_server.cfg", "AMD64.avi", "Crytek.bik", "sandbox.bik", "Ubi.bik"];
Game.FileSymlinkCopyInstead = ["game.cfg", "log.txt", "system.cfg", "rc.ini", "rc_presets_pc.ini"];
Game.NeedsSteamEmulation = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.KeepSymLinkOnExit = false;
Game.ExecutableName = "FarCry.exe";
Game.SteamID = "13520";
Game.GUID = "Far Cry";
Game.GameName = "Far Cry";
Game.BinariesFolder = "Bin32";
Game.MaxPlayers = 32;
Game.MaxPlayersOneMonitor = 32;
Game.LauncherTitle = "";
Game.HideTaskbar = false;
Game.SetTopMostAtEnd = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "- Far Cry";
Game.DPIHandling = Nucleus.DPIHandling.InvScaled;
Game.HasDynamicWindowTitle = true;
Game.RefreshWindowAfterStart = true;
Game.SetWindowHook = false;
Game.ResetWindows = false;
Game.HookInit = true;
Game.HookFocus = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "IMPORTANT: For this handler to work you need to install the Unofficial Far Cry Patch 1.505 in your clean game files without any mods first: https://www.moddb.com/mods/farcry-addon-mod-fcam/downloads/unofficial-farcry-patch-1505.                                                    Also install the Bot Map Pack that fixes bots in multiplayer maps: https://www.moddb.com/mods/farcry-addon-mod-fcam/downloads/bot-map-pack.                                                    This handler also supports the Assault Co-op Mod: https://www.moddb.com/mods/assault-coop/downloads/asssault-coop-v30-beta and the Contest Island Co-op mod with the patch: https://www.moddb.com/games/far-cry/addons/contest-island-invasion-v22295 , https://www.moddb.com/games/far-cry/addons/contest-isle-coop-patch/ .                                                       Install this FarOut Widescreen mod if you want the horizontal instances to look better in splitscreen multiplayer (hud and fov): https://www.moddb.com/mods/farout-widescreen/downloads/farout-widescreen-10-final, ONLY select the widescreen fix when installing or it won't work or the bots option will get removed.                                                    Host a LAN game in one instance and join in the others. In case you can not change the time limit go into load profile and load the 999time profile. If one of the instances cursors is not moving alt+tab to the window and click it. After all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.                                                    The game only supports keyboards/mice but it can be played with controllers with apps like Rewasd and Xpadder, use this config for Rewasd: https://www.rewasd.com/community/config/far-cry-2-controller-support/acc9a202a7cb7bcdbff723a9064b5c57.";
Game.PauseBetweenProcessGrab = 5;
Game.PauseBetweenStarts = 25;

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
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = false;
Game.ProtoInput.DrawFakeCursor = false;
//Game.ProtoInput.SetWindowPosHook = true;
Game.ProtoInput.SetWindowStyleHook = true;
Game.ProtoInput.FindWindowHook = false;

Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = false;
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
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008]; // Blocks WM_KILLFOCUS

Game.Play = function() {
  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\system.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "r_Fullscreen", Nucleus.SearchType.StartsWith) + '|r_Fullscreen = "0"',
    Context.FindLineNumberInTextFile(txtPath, "r_Width =", Nucleus.SearchType.StartsWith) + '|r_Width = "' + Context.Width + '"',
    Context.FindLineNumberInTextFile(txtPath, "r_Height =", Nucleus.SearchType.StartsWith) + '|r_Height = "' + Context.Height + '"'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  Context.HideTaskBar();

  var COOP = Context.Options["Coop"];
  var SCALE = Context.Options["scale"];

  if (COOP == "Assault Co-op") {
    Context.StartArguments = "-MOD:AssaultCoop";
  }
  if (COOP == "Contest Isle Co-op") {
    Context.StartArguments = "-MOD:ContestIsle";
  }

  if (COOP == "MULTIPLAYER") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\FCData\\ZZZScripts150.pak");
    var savePkgOrigin = System.IO.Path.Combine(Context.OrigRootFolder, "FCData\\ZZZScripts150.pak");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

    if (Context.AspectRatioDecimal > 1.8) {
      if (System.IO.File.Exists(Context.OrigRootFolder + "\\Mods\\FarOut_Widescreen\\ZZZ FarOut Widescreen 1.0 Final.pak")) {
        Context.StartArguments = "-MOD:FarOut_Widescreen";
      }
    } else if (Context.AspectRatioDecimal < 1.2) {
    } else {
    }
  }

  if (SCALE == "YES") {
    Game.ProtoInput.SetWindowPosHook = true;
  }
  if (SCALE == "NO") {
    Game.ProtoInput.SetWindowPosHook = false;
  }

  var timese = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Profiles\\server\\999time_server.cfg";
  var lines = [
    'g_GameType      = "ASSAULT"',
    'gr_FriendlyFire = "1.000000"',
    'gr_MinTeamLimit = "1.000000"',
    'gr_MaxTeamLimit = "16.000000"',
    'sv_maxplayers   = "16.000000"',
    'gr_NextMap      = "mp_airstrip"',
    'sv_ServerType   = "LAN"',
    'sv_password     = ""',
    'sv_name         = "Nucleus Co-op server"',
    'gr_RespawnTime  = "20.000000"',
    'gr_TimeLimit    = "999.000000"',
    'sv_punkbuster   = "0.000000"',
    'sv_maxrate_lan  = "100000"'
  ];
  Context.WriteTextFile(timese, lines);
};
