var answers1 = ["Official version", "Private server version"];
Game.AddOption(
  "Choose how you will play.",
  "For the Official version you will need 2+ accounts with lv 16 adventurer to play Co-op but THERE IS A POSSIBILITY OF BAN. The Private server version is made for Cultivation launcher, you can Co-op from the start of the game.(it only supports one keyboard and mouse, just alt+tab to the k/m instance to use it. Dont press 'end')\n\n Heres the tutorial for the private version:\n\nPlace Genshin Impact and cultivation launcher in the same folder. PLEASE FOLLOW EVERYTHING AHEAD IN ORDER OR YOU MIGHT GET A ERROR.\n\nGet to in-game once before using the handler and please make sure that the game and your own server is already working.\n\nNow first start a server.\n\nFor every launcher that opens go into config and in 'Set Game Install Path' choose the path: nucleus Co-op folder > content > Anime Game and choose GenshinImpact.exe inside it(one folder for each player so player 1 chooses the .exe inside instace0 folder, player 2 chooses the .exe inside instace1 folder and so on), wait for the window with the name process picker to appear before launching the game.\n\nLogin and get in-game and change the resolution to the right one(Add custom resolutions in your AMD/Nvidia/Intel panel (For example for a 1920x1080 monitor add: 960x1080(vertical), 960x540(4-way splitscreen), 1920x540(horizontal) etc.) so the game can see them and use them.), you can also change the graphics now, doing later will break the screen placement . Now in the process picker window of nucleus choose GenshinImpact.\n\nTo play CO-OP add the grasscutter bot in-game do /help and find the CO-OP commands or do /unlockall and add each other in the friends tab and invite to your world (if one of the players is invisible, try one of these:  1- do /tpall in the bot chat.   2- all players go into your map and teleport to somewhere. 3- one player joins with the friends tab and the other with the Co-op commands.). when in game go into configuration and change the type of input to the one that will control that screen. After you ctrl+Q to close the game/nucleus, close the launchers and servers from cultivation.",
  "version",
  answers1
);

Game.ExecutableContext = ["GenshinImpact_Data"];
Game.FileSymlinkExclusions = ["HoYoKProtect.sys", "mhyprot3.sys", "mhypbase.dll"];
Game.FileSymlinkCopyInstead = [
  "Cultivation.exe",
  "config.ini",
  "UnityCrashHandler64.exe",
  "UnityPlayer.dll",
  "Audio_English(US)_pkg_version",
  "driverError.log",
  "pkg_version",
  "dispatchKey.txt",
  "passwordKey.txt",
  "chs.json",
  "cht.json",
  "de.json",
  "en.json",
  "es.json",
  "fr.json",
  "id.json",
  "ko.json",
  "lv.json",
  "nl.json",
  "pt-br.json",
  "ru.json",
  "vi.json",
  "version.dll"
];
Game.RequiresAdmin = true;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "GenshinImpact.exe";
Game.LauncherTitle = "";
Game.GUID = "Anime Game";
Game.GameName = "Anime Game";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.LauncherTitle = "";
Game.HideTaskbar = true;
Game.SetTopMostAtEnd = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Genshin Impact";
Game.ResetWindows = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.Description =
  "I TAKE NO RESPONSIBILITY FOR ANY POSSIBLE ACCOUNT BANS. USE THIS HANDLER AT YOUR OWN RISK AND WOULD ADVISE EXPERIMENTING ON A SECONDARY/DUMMY ACCOUNT. This handler is made for Genshin Impact downloaded from the official site. Add custom resolutions in your AMD/Nvidia/Intel panel (For example for a 1920x1080 monitor add: 960x1080(vertical), 960x540(4-way splitscreen), 1920x540(horizontal) etc.).\n\nWhen a cmd screen (the black screen) opens, wait until you get to the login screen than click on it and press enter 1-2 times so it disappears than press 'ok' in the launch next instance prompt. Get to in-game once before using the handler so it downloads all the resources the game needs(else it will download for each instance that you open and will take too long).\n\nYou need the same amount of accounts as players, remember that you need an account lv 16 adventurer to CO-OP. To play CO-OP add each other and send a invitation to join the other players through the friends tab in the menu. when in game go into configuration and change the type of input to the one that will control that screen. After that if you have any K/M instance, press 'end' so you can move it. After finishing playing you can press ctrl+Q to close the game/nucleus.";
Game.PauseBetweenProcessGrab = 5;
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

Game.ProtoInput.InjectStartup = true;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = true;
Game.ProtoInput.RenameHandles = ["HoYoG-LGd2lXEMa6B-MSG::100"];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.MultipleProtoControllers = true;

Game.ProtoInput.EnableFocusMessageLoop = true;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 5000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x02a3, 0x02a1]; //Blocks WM_KILLFOCUS, WM_MOUSEHOVER and WM_MOUSELEAVE
Game.GamePlayBeforeGameSetup = false;
Game.PauseBetweenContextAndLaunch = 5;

Game.Play = function() {
  var VERSION = Context.Options["version"];

  if (VERSION == "Private server version") {
    Game.ThirdPartyLaunch = true;
    Game.IgnoreThirdPartyPrompt = true;
    Game.ForceProcessPick = true;

    Context.RunAdditionalFiles(["all|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Cultivation.exe"], false, 1, false, false);

    Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\miHoYo\\Genshin Impact", "Screenmanager Is Fullscreen mode_h3981298716", 0, Nucleus.RegType.DWord);
    Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\miHoYo\\Genshin Impact", "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
    Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\miHoYo\\Genshin Impact", "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);

    Game.ProtoInput.InjectStartup = false;
    Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
    Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
    Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

    Game.ProtoInput.RenameHandlesHook = false;
    Game.ProtoInput.RenameHandles = [];
    Game.ProtoInput.RenameNamedPipes = [];

    Game.ProtoInput.FocusLoopIntervalMilliseconds = 20000;

    if (Context.IsKeyboardPlayer) {
      Game.ProtoInput.RawInputFilter = true;
      Game.ProtoInput.MouseMoveFilter = true;
      Game.ProtoInput.MouseActivateFilter = true;
      Game.ProtoInput.WindowActivateFilter = true;
      Game.ProtoInput.WindowActvateAppFilter = true;
      Game.ProtoInput.MouseWheelFilter = true;
      Game.ProtoInput.MouseButtonFilter = true;
      Game.ProtoInput.KeyboardButtonFilter = true;
    } else {
      Game.ProtoInput.RawInputFilter = false;
      Game.ProtoInput.MouseMoveFilter = false;
      Game.ProtoInput.MouseActivateFilter = false;
      Game.ProtoInput.WindowActivateFilter = false;
      Game.ProtoInput.WindowActvateAppFilter = false;
      Game.ProtoInput.MouseWheelFilter = false;
      Game.ProtoInput.MouseButtonFilter = false;
      Game.ProtoInput.KeyboardButtonFilter = false;
    }
  }

  if (VERSION == "Official version") {
    Game.PromptBetweenInstances = true;

    var Args = (Context.Args = " -screen-fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

    if (System.IO.File.Exists(Context.RootInstallFolder + "\\HoYoKProtect.sys")) {
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "HoYoKProtect.sys");
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\HoYoKProtect.sys");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }

    if (System.IO.File.Exists(Context.RootInstallFolder + "\\mhyprot3.sys")) {
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "mhyprot3.sys");
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mhyprot3.sys");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }

    if (System.IO.File.Exists(Context.RootInstallFolder + "\\mhypbase.dll")) {
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "mhypbase.dll");
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mhypbase.dll");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }

    Context.StartArguments = Args;

    //ProtoInput:
    Game.ProtoInput.RegisterRawInputHook = true;
    Game.ProtoInput.GetRawInputDataHook = true;
    Game.ProtoInput.MessageFilterHook = true;
    Game.ProtoInput.GetCursorPosHook = false;
    Game.ProtoInput.SetCursorPosHook = false;
    Game.ProtoInput.GetKeyStateHook = true;
    Game.ProtoInput.GetAsyncKeyStateHook = false;
    Game.ProtoInput.GetKeyboardStateHook = true;
    Game.ProtoInput.CursorVisibilityHook = true;
    Game.ProtoInput.ClipCursorHook = true;
    Game.ProtoInput.FocusHooks = true;
    Game.ProtoInput.DrawFakeCursor = true;
    Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;
    Game.ProtoInput.EnableToggleFakeCursorVisibilityShortcut = false;
    Game.ProtoInput.DontShowCursorWhenImageUpdated = false;
    Game.ProtoInput.SetWindowPosHook = true;
    Game.ProtoInput.SetWindowStyleHook = true;

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

    if (Context.IsKeyboardPlayer) {
      Game.ProtoInput.CursorVisibilityHook = true;
      Game.ProtoInput.DontShowCursorWhenImageUpdated = true;
      Game.ProtoInput.GetCursorPosHook = true;
      Game.ProtoInput.SetCursorPosHook = true;
      Game.ProtoInput.RawInputFilter = true;
      Game.ProtoInput.MouseMoveFilter = false;
      Game.ProtoInput.MouseActivateFilter = true;
      Game.ProtoInput.WindowActivateFilter = true;
      Game.ProtoInput.WindowActvateAppFilter = true;
      Game.ProtoInput.MouseWheelFilter = true;
      Game.ProtoInput.MouseButtonFilter = true;
      Game.ProtoInput.KeyboardButtonFilter = true;
    } else {
      Game.ProtoInput.CursorVisibilityHook = false;
      Game.ProtoInput.DontShowCursorWhenImageUpdated = false;
      Game.ProtoInput.GetCursorPosHook = false;
      Game.ProtoInput.SetCursorPosHook = false;
      Game.ProtoInput.RawInputFilter = false;
      Game.ProtoInput.MouseMoveFilter = false;
      Game.ProtoInput.MouseActivateFilter = false;
      Game.ProtoInput.WindowActivateFilter = false;
      Game.ProtoInput.WindowActvateAppFilter = false;
      Game.ProtoInput.MouseWheelFilter = false;
      Game.ProtoInput.MouseButtonFilter = false;
      Game.ProtoInput.KeyboardButtonFilter = false;
      Game.ProtoInput.GetCursorPosHook = false;
      Game.ProtoInput.SetCursorPosHook = false;
    }

    if (Context.PlayerID != Context.NumberOfPlayers - 1) {
      Context.RunAdditionalFiles(["all|" + Game.Folder + "\\handle_close.bat"], false, "", 0, false, true, false, false);
    }
  }

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
};
