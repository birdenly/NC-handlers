var answers3 = ["Yes", "No"];
var answers4 = ["60", "45", "30", "0"];
var answers7 = ["Default", "Low", "Mid", "High", "Extra"];
var answers5 = ["60", "65","70", "75", "80", "85", "90", "95", "100"];
Game.AddOption("Choose your preferred graphic settings", "Default will use the previous or default settings", "Graphics", answers7);
Game.AddOption("Enable music only in the first instance?", "", "Mus", answers3);
Game.AddOption("Select the FPS Cap the game will use", "", "FPS", answers4);
Game.AddOption("Select the FOV for the game to use", "", "fov", answers5);
Game.FileSymlinkExclusions = [
"codmod.cfg",
"settings_c.zip.iw4",
"settings_s.zip.iw4",
"x_core.iwd",
"a_coop_models.ff",
"x_coop.ff",
"z_customanim.ff",
"iw4sp.hk",
"iw4sp_codmod.exe"
];
Game.FileSymlinkCopyInstead = ["mss32.dll", "binkw32.dll", "localization.txt",];
Game.DirExclusions = ["miles", "userraw", "logs", "players"];
Game.SymlinkGame = true;
Game.KeepSymLinkOnExit = true;
Game.UseNucleusEnvironment = true;
Game.UseGoldberg = true;
Game.HandlerInterval = 100;
Game.ExecutableName = "iw4sp.exe";
Game.ExecutableToLaunch = "iw4sp_codmod.exe"
Game.SteamID = "10180";
Game.GUID = "Call of Duty Modern Warfare 2 Coop";
Game.GameName = "Call of Duty Modern Warfare 2 Coop";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Modern Warfare 2";
Game.HookFocus = true;
Game.Hook.CustomDllEnabled = false;
Game.Hook.UseAlpha8CustomDll = false;
Game.KillProcessesOnClose = ["Prompt", "Prompt2", "Prompt3","name","timer"];
Game.ResetWindows = true;
Game.HideTaskbar = true;
Game.PauseBetweenContextAndLaunch = 5;
Game.Description =
  "The Co-op campaign/Spec Ops Mod can only be played with multiple keyboard/mouse and has a 2 PLAYER MAX.\n\nRequires an original copy of Call of Duty Modern Warfare 2, game files must be in English, Nucleus v2.2.1 and above.\n\nFor Co-op campaign: create a game and choose a map after doing so you will see the option 'Enable SP Co-op' click it and when you choose a map again it will be the campaign missions.\n\nHow to connect SPECIAL OPS: go into create lobby > change Op > choose a map than select difficulty, now on the second player press Join Game.\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.";

Game.SupportsMultipleKeyboardsAndMice = true;

Game.Play = function() {
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
  Game.LockInputSuspendsExplorer = false;
  Game.LockInputToggleKey = 0x23;

  

  Game.ProtoInput.InjectStartup = true;
  Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
  Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
  Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
  // Game.ProtoInput.FindWindowHook = true;
  Game.ProtoInput.SetWindowPosHook = false;
  Game.ProtoInput.SetWindowStyleHook = false;
  Game.ProtoInput.RegisterRawInputHook = false;
  Game.ProtoInput.GetRawInputDataHook = true;
  Game.ProtoInput.MessageFilterHook = false;
  Game.ProtoInput.GetCursorPosHook = false;
  Game.ProtoInput.SetCursorPosHook = false;
  Game.ProtoInput.GetKeyStateHook = false;
  Game.ProtoInput.GetAsyncKeyStateHook = false;
  Game.ProtoInput.GetKeyboardStateHook = false;
  Game.ProtoInput.CursorVisibilityHook = false;
  Game.ProtoInput.ClipCursorHook = false;
  Game.ProtoInput.ClipCursorHookCreatesFakeClip = false;
  Game.ProtoInput.FocusHooks = false;
  Game.ProtoInput.DrawFakeCursor = false;
  Game.ProtoInput.RawInputFilter = false;
  Game.ProtoInput.MouseMoveFilter = false;
  Game.ProtoInput.MouseActivateFilter = false;
  Game.ProtoInput.WindowActivateFilter = false;
  Game.ProtoInput.WindowActvateAppFilter = false;
  Game.ProtoInput.MouseWheelFilter = false;
  Game.ProtoInput.MouseButtonFilter = false;
  Game.ProtoInput.KeyboardButtonFilter = true;
  Game.ProtoInput.SendMouseWheelMessages = true;
  Game.ProtoInput.SendMouseButtonMessages = true;
  Game.ProtoInput.SendMouseMovementMessages = true;
  Game.ProtoInput.SendKeyboardButtonMessages = true;
  Game.ProtoInput.EnableFocusMessageLoop = false;
  Game.ProtoInput.FocusLoopIntervalMilliseconds = 0;
  Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
  Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
  Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
  Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
  Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
  Game.ProtoInput.BlockedMessages = [];
  Game.ProtoInput.RenameHandlesHook = true;
  Game.ProtoInput.RenameHandles = [];
  Game.ProtoInput.RenameNamedPipes = [];

  Game.PauseBetweenProcessGrab = 20;
  Game.PauseBetweenStarts = 5;

  Game.ExecutableName = "iw4sp_codmod.exe";

  Context.CopyFolder(Context.ScriptFolder + "\\files", Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  Context.RunAdditionalFiles([Context.ScriptFolder + "\\name.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\timer.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\Prompt.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\Prompt2.exe"], false, 10);
  Context.RunAdditionalFiles([Context.ScriptFolder + "\\Prompt3.exe"], false, 10);

  var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players");
  System.IO.Directory.CreateDirectory(filePath);

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\codmod.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "seta sys_configSum", Nucleus.SearchType.StartsWith) + '|seta sys_configSum ""',
    Context.FindLineNumberInTextFile(txtPath, "sys_configureGHz", Nucleus.SearchType.StartsWith) + '|sys_configureGHz ""',
    Context.FindLineNumberInTextFile(txtPath, "seta sys_gpu", Nucleus.SearchType.StartsWith) + '|seta sys_gpu ""',
    Context.FindLineNumberInTextFile(txtPath, "seta sys_sysMB", Nucleus.SearchType.StartsWith) + '|seta sys_sysMB ""'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);
  
  var Graphics = Context.Options["Graphics"];
  if (Graphics == "Low") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\codmod.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_usedxgiEx", Nucleus.SearchType.StartsWith) + '|seta r_usedxgiEx "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "3"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_rendererPreference", Nucleus.SearchType.StartsWith) + '|seta r_rendererPreference "Shader model 2.0"',
      Context.FindLineNumberInTextFile(txtPath, "seta snd_outputConfiguration", Nucleus.SearchType.StartsWith) + '|seta snd_outputConfiguration "Stereo"'
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  if (Graphics == "Mid") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\codmod.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_usedxgiEx", Nucleus.SearchType.StartsWith) + '|seta r_usedxgiEx "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_rendererPreference", Nucleus.SearchType.StartsWith) + '|seta r_rendererPreference "Shader model 2.0"',
      Context.FindLineNumberInTextFile(txtPath, "seta snd_outputConfiguration", Nucleus.SearchType.StartsWith) + '|seta snd_outputConfiguration "Stereo"'
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  if (Graphics == "High") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\codmod.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_usedxgiEx", Nucleus.SearchType.StartsWith) + '|seta r_usedxgiEx "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_rendererPreference", Nucleus.SearchType.StartsWith) + '|seta r_rendererPreference "Shader model 2.0"',
      Context.FindLineNumberInTextFile(txtPath, "seta snd_outputConfiguration", Nucleus.SearchType.StartsWith) + '|seta snd_outputConfiguration "Stereo"'
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  if (Graphics == "Extra") {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\codmod.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "seta r_dof_enable", Nucleus.SearchType.StartsWith) + '|seta r_dof_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_aaSamples", Nucleus.SearchType.StartsWith) + '|seta r_aaSamples "4"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_usedxgiEx", Nucleus.SearchType.StartsWith) + '|seta r_usedxgiEx "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip", Nucleus.SearchType.StartsWith) + '|seta r_picmip "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_manual", Nucleus.SearchType.StartsWith) + '|seta r_picmip_manual "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "0"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_specular", Nucleus.SearchType.StartsWith) + '|seta r_specular "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_zFeather", Nucleus.SearchType.StartsWith) + '|seta r_zFeather "1"',
      Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLights", Nucleus.SearchType.StartsWith) + '|seta sm_maxLights "4"',
      Context.FindLineNumberInTextFile(txtPath, "seta r_rendererPreference", Nucleus.SearchType.StartsWith) + '|seta r_rendererPreference "Shader model 2.0"',
      Context.FindLineNumberInTextFile(txtPath, "seta snd_outputConfiguration", Nucleus.SearchType.StartsWith) + '|seta snd_outputConfiguration "Stereo"'
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  var Mus = Context.Options["Mus"];

  if (Mus == "Yes") {
    if (Context.PlayerID == 0) {
      var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles");
      System.IO.Directory.CreateDirectory(filePath);

      if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\milesEq.flt")) {
        var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\milesEq.flt");
        var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\milesEq.flt");
        System.IO.File.Copy(savePkgOrigin, savePath, true);
      }
      if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "miles\\mssds3d.flt")) {
        var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssds3d.flt");
        var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\mssds3d.flt");
        System.IO.File.Copy(savePkgOrigin, savePath, true);
      }
      if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssdsp.flt")) {
        var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssdsp.flt");
        var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\mssdsp.flt");
        System.IO.File.Copy(savePkgOrigin, savePath, true);
      }
      if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\msseax.flt")) {
        var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\msseax.flt");
        var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\msseax.flt");
        System.IO.File.Copy(savePkgOrigin, savePath, true);
      }
      if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssmp3.asi")) {
        var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssmp3.asi");
        var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\mssmp3.asi");
        System.IO.File.Copy(savePkgOrigin, savePath, true);
      }

      if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssvoice.asi")) {
        var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssvoice.asi");
        var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\mssvoice.asi");
        System.IO.File.Copy(savePkgOrigin, savePath, true);
      }
    } else {
      if (System.IO.File.Exists((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\milesEq.flt"))) {
        System.IO.File.Delete((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\milesEq.flt"));
      }
      if (System.IO.File.Exists((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssds3d.flt"))) {
        System.IO.File.Delete((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\mssds3d.flt"));
      }
      if (System.IO.File.Exists((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\\\mssdsp.flt"))) {
        System.IO.File.Delete((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssdsp.flt"));
      }
      if (System.IO.File.Exists((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\msseax.flt"))) {
        System.IO.File.Delete((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\msseax.flt"));
      }
      if (System.IO.File.Exists((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssmp3.asi"))) {
        System.IO.File.Delete((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssmp3.asi"));
      }
      if (System.IO.File.Exists((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssvoice.asi"))) {
        System.IO.File.Delete((Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssvoice.asi"));
      }
    }
  }

  if (Mus == "No") {
    var filePath = (Context.filePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles");
    System.IO.Directory.CreateDirectory(filePath);

    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\milesEq.flt")) {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\milesEq.flt");
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\milesEq.flt");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }
    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "miles\\mssds3d.flt")) {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssds3d.flt");
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\mssds3d.flt");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }
    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssdsp.flt")) {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssdsp.flt");
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\mssdsp.flt");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }
    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\msseax.flt")) {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\msseax.flt");
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\msseax.flt");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }
    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssmp3.asi")) {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssmp3.asi");
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\mssmp3.asi");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }

    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssvoice.asi")) {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\miles\\mssvoice.asi");
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "miles\\mssvoice.asi");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }
  }


    Context.Args = "+r_fullscreen 0";

  var FPS = Context.Options["FPS"];
  var FOV = Context.Options["fov"];
  
  Game.DontReposition = false;
  Game.DontResize = false;
  Game.DontRemoveBorders = true;

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\codmod.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta cg_fov", Nucleus.SearchType.StartsWith) + '|seta cg_fov "' + FOV + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_mode", Nucleus.SearchType.StartsWith) + '|seta r_mode "' + Context.Width + "x" + Context.Height + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_customMode", Nucleus.SearchType.StartsWith) + '|seta r_customMode "' + Context.Width + "x" + Context.Height + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_displayMode", Nucleus.SearchType.StartsWith) + '|seta r_displayMode "windowed (no border)"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_aspectRatio", Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "custom"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_customAspectRatio", Nucleus.SearchType.StartsWith) + '|seta r_customAspectRatio "' + Context.AspectRatioDecimal + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta name", Nucleus.SearchType.StartsWith) + '|seta name "' + Context.Nickname + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta intro", Nucleus.SearchType.StartsWith) + '|seta intro "0"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_usedxgiEx", Nucleus.SearchType.StartsWith) + '|seta r_usedxgiEx "0"',
    Context.FindLineNumberInTextFile(txtPath, "seta vid_xpos", Nucleus.SearchType.StartsWith) + '|seta vid_xpos ""',
    Context.FindLineNumberInTextFile(txtPath, "seta vid_ypos", Nucleus.SearchType.StartsWith) + '|seta vid_ypos ""',
    Context.FindLineNumberInTextFile(txtPath, "seta connect_ip", Nucleus.SearchType.StartsWith) + '|seta connect_ip "127.0.0.1:28960"',
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);
    
  Game.ProtoInput.OnInputLocked = function() {
      for (var i = 0; i < PlayerList.Count; i++) {
        var player = PlayerList[i];
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);

        ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, false, false, true, true);
        System.Threading.Thread.Sleep(500);
        ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, false);
        ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);

        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
        ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
        ProtoInput.EnableMessageBlock(player.ProtoInputInstanceHandle, 0x0008);
      }
  };
  Game.ProtoInput.OnInputUnlocked = function() {
    for (var i = 0; i < PlayerList.Count; i++) {
      var player = PlayerList[i];
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

      ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
      ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, true);

      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
      ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
      ProtoInput.DisableMessageBlock(player.ProtoInputInstanceHandle, 0x0008);
    }
  };
};
