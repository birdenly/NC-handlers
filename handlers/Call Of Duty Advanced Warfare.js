var answers1 = ["No Change","30", "45", "60", "75", "90", "120"];
Game.AddOption("Select the FPS cap.", "Select 'No Change' to use the previous or default settings", "fps", answers1);

var answers6 = ["No Change","60", "65","70","75","80","85", "90","95","100"];
Game.AddOption("Select the FOV.", "Select 'No Change' to use the previous or default settings", "fov", answers6);

var answers2 = ["multiplayer", "zombies" ,"survival"];
Game.AddOption("Select the mode you will play.", "", "mode", answers2);

var answers3 = ["No Change","Yes","No"];
Game.AddOption("Enable music only in the first instance?", "Select 'No' to use your main game settings", "Mus", answers3);

var answers5 = ['No Change', 'Low', 'Normal', 'High', 'Extra'];
Game.AddOption('Graphics settings', 'Choose your graphics settings.\nPlease read the handlers note the page before for aspect ratio.', 'Graph', answers5);

Game.KillProcessesOnClose = ["F2 Host","F2 Guest","Names",'F3 Restart',"F4 unlock", 'cmd', 'JoyToKey',"aspectRatio"]; 
Game.FileSymlinkExclusions = ["s1-mod.exe","tlsdll.dll","runner.exe"];
Game.FileSymlinkCopyInstead = ["config_mp.cfg","bink2w64.dll","ControllerManager.dll","XGamepad.dll","settings_c.zip.s1", "settings_m.zip.s1", "keys_mp.cfg","s1_sp64_ship.exe"];
Game.DirExclusions = ["s1","players2","data"];


Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.KeepSymLinkOnExit = true;
Game.GameName = "Call of Duty Advanced Warfare";
Game.GUID = "Call of Duty Advanced Warfare";
Game.ExecutableName = "s1_mp64_ship.exe";
Game.ExecutableToLaunch = "s1-mod.exe";
Game.MaxPlayers = 5;
Game.HandlerInterval = 100;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Call of Duty®: Advanced Warfare Multiplayer";
Game.HasDynamicWindowTitle = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.Description = "IMPORTANT: THIS IS MADE FOR LEGIT STEAM VERSION WITH ALL DLCS, ANY OTHER VERSION YOU WILL HAVE PROBLEMS --DONT ASK FOR HELP WITH THEM--\n\nIf you get squares when loading to a map than a crash, it means you dont have it installed (you dont have that DLC)\n\nYou might need to change your game languange to english\n\nWhen playing zombies or survival, wait in round 1 while others are connecting to the game\n\nOnce all the instances have finished resizing and repositioning, go into 'play online' in all instances, in the first instance start a private match than press 'F2' for all the others to connect to the game or pressing and holding the START button on your controller.\n\nOnce all the players have connected you can quickly restart the match by pressing F3 or by pressing and holding the SELECT button on your controller.\n\nYou can press 'F4' to unlock everything it can and level up to 50\n\nWhile using horizontal split screen you can use press 'F5' to change the aspect ratio of those screens, one mode will have the whole menu visible and the other in-game aspect ratio will be perfect\n\nThe sumpersampling graphic option WILL DESTROY your fps, disable it or keep it really low.\n\nIf you have keyboards and mice player alt+tab to their screen to interact with it, the keyboard/mouse player will have more FPS than other screen, so lock the FPS to lower amounts to prevent that";	
Game.PauseBetweenStarts = 5
Game.PauseBetweenProcessGrab = 15;
Game.PauseBetweenContextAndLaunch = 5;
 
Game.HookFocus = true;
Game.SetWindowHook = true;
Game.ResetWindows = true;
Game.HideTaskbar = true;
Game.SupportsKeyboard = true;
Game.SetForegroundWindowElsewhere = true;

//bad
Game.Play = function() {
    Game.ExecutableName = "s1-mod.exe";

    var FPS = Context.Options["fps"];
    var FOV = Context.Options["fov"];
    var MODE = Context.Options["mode"];
    var GRAPH = Context.Options["Graph"];

    Context.StartArguments = "-nosteam -" + MODE

    
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\names.exe"], false, 10);
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\JoyToKey.exe"], false, 10);
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\F3 Restart.exe"], false, 10);
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\F4 unlock.exe"], false, 10);
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\aspectRatio.exe"], false, 10);
    Context.RunAdditionalFiles([Context.ScriptFolder + "\\F2 Host.exe"], false, 10);

    var timese = Context.ScriptFolder + "\\delete.bat";
    var lines = [
      'del *.txt'
    ];
    Context.WriteTextFile(timese, lines);

    Context.RunAdditionalFiles([Context.ScriptFolder + "\\delete.exe"], false, 10);

    
    var players2 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players2'
    if (!System.IO.Directory.Exists(players2)) {
        System.IO.Directory.CreateDirectory(players2);
    }

    var Mus = Context.Options["Mus"];
    
    if(Mus=="No Change"){
      
    }
    if (Mus == "Yes") {
      if (Context.PlayerID == 0) {
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_c.zip.s1";
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "settings_c.zip_music.s1");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_m.zip.s1";
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "settings_m.zip_music.s1");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      
          } else {
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_c.zip.s1";
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "settings_c.zip_nomusic.s1");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_m.zip.s1";
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "settings_m.zip_nomusic.s1");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
      
      }
      }
      else {
        if ((!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_c.zip.s1") || !System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_m.zip.s1")) && System.IO.Directory.Exists(Context.RootInstallFolder + "players2")){
      
          var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_c.zip.s1";
          var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "players2\\settings_c.zip.s1");
          System.IO.File.Copy(savePkgOrigin, savePath, true);
      
          var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_m.zip.s1";
          var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "players2\\settings_m.zip.s1");
          System.IO.File.Copy(savePkgOrigin, savePath, true);
      
          
      
        }
      }

    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\s1-mod.exe")) {

      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\s1-mod.exe");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "s1-mod.exe");
      System.IO.File.Copy(savePkgOrigin, savePath, true);

    }

    if (System.IO.File.Exists(Context.RootInstallFolder + '\\steam_api64.dll')) {
      var cfgpath = Context.HandlersFolder + "\\Call Of Duty Advanced Warfare.js";
      var dict = [
        Context.FindLineNumberInTextFile(cfgpath, '//here', Nucleus.SearchType.StartsWith) + '|//good',
      ];
      Context.ReplaceLinesInTextFile(cfgpath, dict);
    }else{
      var cfgpath = Context.HandlersFolder + "\\Call Of Duty Advanced Warfare.js";
      var dict = [
        Context.FindLineNumberInTextFile(cfgpath, '//here', Nucleus.SearchType.StartsWith) + '|//bad',
      ];
      Context.ReplaceLinesInTextFile(cfgpath, dict);
    }

    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg")){
      
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "config_mp_low.cfg");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
  
    }
    if(GRAPH=="Low"){

      var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_depthPrepass', Nucleus.SearchType.StartsWith) + '|seta r_depthPrepass "none"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_dlightForceLimit', Nucleus.SearchType.StartsWith) + '|seta r_dlightForceLimit "2"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_dof_limit', Nucleus.SearchType.StartsWith) + '|seta r_dof_limit "0"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip', Nucleus.SearchType.StartsWith) + '|seta r_picmip "3"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_bump', Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "3"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_spec', Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "3"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_postAA', Nucleus.SearchType.StartsWith) + '|seta r_postAA "None"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_ssaoLimit', Nucleus.SearchType.StartsWith) + '|seta r_ssaoLimit "0"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_sssLimit', Nucleus.SearchType.StartsWith) + '|seta r_sssLimit "0"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta fx_marks', Nucleus.SearchType.StartsWith) + '|seta fx_marks "0"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_texFilterAnisoMin', Nucleus.SearchType.StartsWith) + '|seta r_texFilterAnisoMin "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta sm_enable', Nucleus.SearchType.StartsWith) + '|seta sm_enable "0"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta sm_tileResolution', Nucleus.SearchType.StartsWith) + '|seta sm_tileResolution "Normal"',
      ];
      Context.ReplaceLinesInTextFile(cfgpath, dict);

    }
    if(GRAPH=="Normal"){

      var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_depthPrepass', Nucleus.SearchType.StartsWith) + '|seta r_depthPrepass "none"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_dlightForceLimit', Nucleus.SearchType.StartsWith) + '|seta r_dlightForceLimit "4"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_dof_limit', Nucleus.SearchType.StartsWith) + '|seta r_dof_limit "2"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip', Nucleus.SearchType.StartsWith) + '|seta r_picmip "2"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_bump', Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "2"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_spec', Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "2"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_postAA', Nucleus.SearchType.StartsWith) + '|seta r_postAA "FXAA"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_ssaoLimit', Nucleus.SearchType.StartsWith) + '|seta r_ssaoLimit "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_sssLimit', Nucleus.SearchType.StartsWith) + '|seta r_sssLimit "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta fx_marks', Nucleus.SearchType.StartsWith) + '|seta fx_marks "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_texFilterAnisoMin', Nucleus.SearchType.StartsWith) + '|seta r_texFilterAnisoMin "8"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta sm_enable', Nucleus.SearchType.StartsWith) + '|seta sm_enable "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta sm_tileResolution', Nucleus.SearchType.StartsWith) + '|seta sm_tileResolution "High"',
      ];
      Context.ReplaceLinesInTextFile(cfgpath, dict);

    }
    if(GRAPH=="High"){

      var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_depthPrepass', Nucleus.SearchType.StartsWith) + '|seta r_depthPrepass "All"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_dlightForceLimit', Nucleus.SearchType.StartsWith) + '|seta r_dlightForceLimit "4"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_dof_limit', Nucleus.SearchType.StartsWith) + '|seta r_dof_limit "2"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip', Nucleus.SearchType.StartsWith) + '|seta r_picmip "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_bump', Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_spec', Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_postAA', Nucleus.SearchType.StartsWith) + '|seta r_postAA "FXAA"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_ssaoLimit', Nucleus.SearchType.StartsWith) + '|seta r_ssaoLimit "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_sssLimit', Nucleus.SearchType.StartsWith) + '|seta r_sssLimit "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta fx_marks', Nucleus.SearchType.StartsWith) + '|seta fx_marks "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_texFilterAnisoMin', Nucleus.SearchType.StartsWith) + '|seta r_texFilterAnisoMin "8"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta sm_enable', Nucleus.SearchType.StartsWith) + '|seta sm_enable "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta sm_tileResolution', Nucleus.SearchType.StartsWith) + '|seta sm_tileResolution "High"',
      ];
      Context.ReplaceLinesInTextFile(cfgpath, dict);

    }
    if(GRAPH=="Extra"){
      
      var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
      var dict = [
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_depthPrepass', Nucleus.SearchType.StartsWith) + '|seta r_depthPrepass "All"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_dlightForceLimit', Nucleus.SearchType.StartsWith) + '|seta r_dlightForceLimit "4"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_dof_limit', Nucleus.SearchType.StartsWith) + '|seta r_dof_limit "2"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip', Nucleus.SearchType.StartsWith) + '|seta r_picmip "0"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_bump', Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "0"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_picmip_spec', Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "0"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_postAA', Nucleus.SearchType.StartsWith) + '|seta r_postAA "FXAA"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_ssaoLimit', Nucleus.SearchType.StartsWith) + '|seta r_ssaoLimit "3"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_sssLimit', Nucleus.SearchType.StartsWith) + '|seta r_sssLimit "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta fx_marks', Nucleus.SearchType.StartsWith) + '|seta fx_marks "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta r_texFilterAnisoMin', Nucleus.SearchType.StartsWith) + '|seta r_texFilterAnisoMin "16"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta sm_enable', Nucleus.SearchType.StartsWith) + '|seta sm_enable "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'seta sm_tileResolution', Nucleus.SearchType.StartsWith) + '|seta sm_tileResolution "Extra"',
      ];
      Context.ReplaceLinesInTextFile(cfgpath, dict);

    }

    if(FPS =="No Change"){
    }
    else{
        var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
        var dict = [
        Context.FindLineNumberInTextFile(cfgpath, 'seta com_maxfps', Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + FPS  + '"',
        ];
        Context.ReplaceLinesInTextFile(cfgpath, dict);
    }

    if(FOV =="No Change"){
    }
    else{
        var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
        var dict = [
        Context.FindLineNumberInTextFile(cfgpath, 'seta cg_fov', Nucleus.SearchType.StartsWith) + '|seta cg_fov "' + FOV  + '"',
        ];
        Context.ReplaceLinesInTextFile(cfgpath, dict);
    }

    if (Context.IsKeyboardPlayer) {


      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
      Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
        new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", ""),
        new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", ""),
        new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", ""),
        new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", "")
      ]);
      
    }else{   

      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
      Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller1", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller2", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller3", Context.GamepadId),
      new Nucleus.IniSaveInfo("ControllerNumber", "Controller4", Context.GamepadId)
    ]);

    }

    if (Context.AspectRatioDecimal > 2) {
        var timese = Context.ScriptFolder + "\\" + Context.PlayerID +".txt";
        var lines = [
        ];
        Context.WriteTextFile(timese, lines);
    }

    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'seta intro', Nucleus.SearchType.StartsWith) + '|seta intro "0"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta name ', Nucleus.SearchType.StartsWith) + '|seta name "' + Context.Nickname  + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta r_aspectRatio', Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "auto"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta r_mode', Nucleus.SearchType.StartsWith) + '|seta r_mode "' + Context.Width + "x" + Context.Height + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta sv_hostname', Nucleus.SearchType.StartsWith) + '|seta sv_hostname "' + Context.Nickname  + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta vid_height', Nucleus.SearchType.StartsWith) + '|seta vid_height "' + Context.Height  + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta vid_width', Nucleus.SearchType.StartsWith) + '|seta vid_width "' + Context.Width  + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta vid_xpos', Nucleus.SearchType.StartsWith) + '|seta vid_xpos "' + Context.PosX  + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta vid_ypos', Nucleus.SearchType.StartsWith) + '|seta vid_ypos "' + Context.PosY  + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreen', Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta r_fullscreenWindow', Nucleus.SearchType.StartsWith) + '|seta r_fullscreenWindow "0"',
      Context.FindLineNumberInTextFile(cfgpath, 'seta ui_autodetectGamepad', Nucleus.SearchType.StartsWith) + '|seta ui_autodetectGamepad "1"',
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);



}
