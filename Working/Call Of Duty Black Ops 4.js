var answers1 = ["READ"];
Game.AddOption("THE LOBBY IS NOT JOINABLE PROBLEM: Open your browser and type 'localhost:8080' and manually disband the lobby. or sometimes just try again.", "", "grph", answers1);
var answers5 = ["No","Yes"];
Game.AddOption("Enable music only in the first instance?", "Select 'No' to use the previous or default settings", "Mus", answers5);
var answers2 = ["No", "Yes"];
Game.AddOption("Unlock all classes and weapons/skins", "", "unlock", answers2);
var answers3 = ["-","30", "40", "45", "50", "60", "70", "80", "90", "100", "110", "120"];
Game.AddOption("Select the FPS Cap the game will use", "Select '-' to use the previous or default settings.", "FPS", answers3);
var answers4 = ["-", "Low", "Medium", "High","Extra"];
Game.AddOption("Select your preferred graphic settings", "Select '-' to use the previous or default settings.", "img", answers4)  
var answers6 = ["-","60", "65","70","75","80","85", "90","95","100","105","110","115","120"];
Game.AddOption("Select the FOV.", "Select '-' to use the previous or default settings.", "fov", answers6);

Game.KillMutex = ["shield_mutex"];
Game.FileSymlinkExclusions = [
  "project-bo4.json",
  "BlackOps4.start",
  "d3d11.dll",
  "UMPDC.dll",
  "project-bo4_updater.bat",
  "project-bo4.exe",
  "Mp.cfg",
  "powrprof.dll",
  "config.ini",
  "project-bo4.log"
];
Game.FileSymlinkCopyInstead = [
  "BlackOps4_boot.exe",
  "bink2w64.dll",
  "d3dcompiler_46.dll",
  "dbghelp.dll",
  "Launcher.db",
  "oo2core_6_win64.dll",
  "ortp_x64.dll",
  "vcruntime140.dll",
  "vivoxsdk.dll",
  "REV.Runtime.dll",
  "imgui.ini",
  "game.icn",
  ".product.db",
  ".build.info",
  ".patch.result",
  "bindings.cfg",
  "mp_loadouts_arena_offline.cgp",
  "mp_loadouts_offline.cgp",
  "recent_players.cgp",
  "shoutcaster_settings.cgp",
  "user_settings.cgp",
  "wz_loadouts_offline.cgp",
  "zm_loadouts_offline.cgp",
];
Game.DirSymlinkExclusions = ["players","project-bo4","project-bo4\\mods"];
Game.DirExclusions = ["project-bo4\\internals","players\\000000008a7c30be","players\\0000000068d9e76d","players\\0000000068d9e76e","players\\0000000068d9e76f","players\\000000008a7c30c0","players\\000000008a7c30c2","players\\000000008a7c30c3","players\\000000008a7c30c4","players\\000000008a7c30c5"];
// Game.DirSymlinkCopyInstead = ["Language","Data\\indices","Data\\config"];
Game.DirExclusions = ["LPC"];
Game.KillProcessesOnClose = ["mini","server"]; 
Game.StartArguments = "";
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.KeepSymLinkOnExit = true;
Game.GameName = "Call of Duty Black Ops 4";
Game.GUID = "Call of Duty Black Ops 4";
Game.ExecutableName = "BlackOps4.exe";
Game.MaxPlayers = 8;
Game.HandlerInterval = 100;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Call of Duty®: Black Ops 4";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description = "IMPORTANT: This uses Project-bo4 client. For a local server download the DW server(https://github.com/bodnjenie14/DWUPDATES/releases) and go to nucleus coop folder > handlers folder > Call Of Duty Black Ops 4 and place it in there. If you download the .rar you will need to create a folder with the name 'DW SERVER' and place the files in there. The in-game server browser wont work with nucleus.\n\nNever quit the lobby with the host first, you will crash\n\nHOW TO CONNECT: only matchmaking works, so search for the same map/mode, let one player get to 'waiting for other players' than start searching with the others players to connect.\n\nFOR CONTROLLERS TO WORK: After all the screens resized correctly press 'END' key 2 times, wait a little between each press, now click with the mouse a 2-3 times on one of the screens while moving the controller until it becomes a controller cursor, now press 'END' one more time and all screens will have controllers working.\n\nWhen your done, if your input is locked press 'END' to unlock it and press ctrl + Q to close nucleus and the server.";	
Game.PauseBetweenStarts = 5;
Game.PauseBetweenProcessGrab = 18;

Game.RefreshWindowAfterStart = true;
Game.SetWindowHookStart = true; 

Game.ProtoInput.InjectStartup = true;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = false;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.OnInputLocked = function()
{
  for (var i = 0; i < PlayerList.Count; i++){
        var player = PlayerList[i];

        ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5, true, false, false, false, false);

        System.Threading.Thread.Sleep(1000);
            
        ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);

        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
        ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
    }
}

Game.ProtoInput.OnInputUnlocked = function()
{
    for (var i = 0; i < PlayerList.Count; i++){
      var player = PlayerList[i];

      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
      ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
    }
}
Game.Play = function() {
  const s = [String.fromCharCode(49, 50, 55),String.fromCharCode(48),String.fromCharCode(48),String.fromCharCode(49)];
  const d = String.fromCharCode(46);
  const u = s.join(d);

  Context.RunAdditionalFiles([Context.ScriptFolder + "\\mini.exe"], false, 10);

  var project = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\project-bo4'
  if (!System.IO.Directory.Exists(project)) {
      System.IO.Directory.CreateDirectory(project);
  }

  var LPC = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\LPC'
  if (!System.IO.Directory.Exists(project)) {
      System.IO.Directory.CreateDirectory(project);
  }
  
  Context.Wait(2000);
  Context.CopyFolder(Context.ScriptFolder + "\\project-bo4", project);
  Context.Wait(2000);
  Context.CopyFolder(Context.ScriptFolder + "\\LPC", LPC);
  Context.Wait(2000);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\d3d11.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "d3d11.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);


  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\project-bo4.json")){
      
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\project-bo4.json");
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "project-bo4.json");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

  }

  var players = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players'
  if (!System.IO.Directory.Exists(players)) {
      System.IO.Directory.CreateDirectory(players);
  }

  if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\config.ini")){
      
    var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\config.ini";
    var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "config.ini");
    System.IO.File.Copy(savePkgOrigin, savePath, true);

  }
  
  var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\config.ini";
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, 'play_intro_movies =', Nucleus.SearchType.StartsWith) + '|play_intro_movies = "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'window_maximized =', Nucleus.SearchType.StartsWith) + '|window_maximized = "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'fullscreen_mode =', Nucleus.SearchType.StartsWith) + '|fullscreen_mode = "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'fullscreen_preferred_mode = ', Nucleus.SearchType.StartsWith) + '|fullscreen_preferred_mode = "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'window_x = ', Nucleus.SearchType.StartsWith) + '|window_x = "' + Context.PosX  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'window_y = ', Nucleus.SearchType.StartsWith) + '|window_y = "' + Context.PosY  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'window_width = ', Nucleus.SearchType.StartsWith) + '|window_width = "' + Context.Width  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'window_height = ', Nucleus.SearchType.StartsWith) + '|window_height = "' + Context.Height  + '"',
    Context.FindLineNumberInTextFile(cfgpath, 'aspect_ratio =', Nucleus.SearchType.StartsWith) + '|aspect_ratio = "window"',
    Context.FindLineNumberInTextFile(cfgpath, 'hdr_display_mode =', Nucleus.SearchType.StartsWith) + '|hdr_display_mode = "-1"',
    Context.FindLineNumberInTextFile(cfgpath, 'automatic_process_priority', Nucleus.SearchType.StartsWith) + '|automatic_process_priority = "0"',
    Context.FindLineNumberInTextFile(cfgpath, 'fullscreen_resolution =', Nucleus.SearchType.StartsWith) + '|fullscreen_resolution = "' + Context.Width + "x" + Context.Height + '"',
  ];
  Context.ReplaceLinesInTextFile(cfgpath, dict);

  var img = Context.Options['img'];
    if (img == 'Low') {
        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players\\config.ini')) {


            var dict = [
              Context.FindLineNumberInTextFile(cfgpath, 'mesh_quality', Nucleus.SearchType.StartsWith) + '|mesh_quality = "2"', 
              Context.FindLineNumberInTextFile(cfgpath, 'texture_filter', Nucleus.SearchType.StartsWith) + '|texture_filter = "0"', 
              Context.FindLineNumberInTextFile(cfgpath, 'texture_quality', Nucleus.SearchType.StartsWith) + '|texture_quality = "3"', 
              Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_fx', Nucleus.SearchType.StartsWith) + '|texture_quality_fx = "3"',
              Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_probes', Nucleus.SearchType.StartsWith) + '|texture_quality_probes = "2"',	

              Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_baked_sun_shadows', Nucleus.SearchType.StartsWith) + '|texture_quality_baked_sun_shadows = "1"',	
              Context.FindLineNumberInTextFile(cfgpath, 'disable_dynamic_light_shadows', Nucleus.SearchType.StartsWith) + '|disable_dynamic_light_shadows = "1"',	
              Context.FindLineNumberInTextFile(cfgpath, 'disable_dynamic_sun_shadows', Nucleus.SearchType.StartsWith) + '|disable_dynamic_sun_shadows = "1"',	
              
              Context.FindLineNumberInTextFile(cfgpath, 'fx_shadows', Nucleus.SearchType.StartsWith) + '|fx_shadows = "0"',	
              Context.FindLineNumberInTextFile(cfgpath, 'spot_shadow_texture_size', Nucleus.SearchType.StartsWith) + '|spot_shadow_texture_size = "512"',	
              Context.FindLineNumberInTextFile(cfgpath, 'omni_shadow_texture_size', Nucleus.SearchType.StartsWith) + '|omni_shadow_texture_size = "256"',
              Context.FindLineNumberInTextFile(cfgpath, 'shadow_filtering', Nucleus.SearchType.StartsWith) + '|shadow_filtering = "0"',
              Context.FindLineNumberInTextFile(cfgpath, 'oit', Nucleus.SearchType.StartsWith) + '|oit = "0"',

              Context.FindLineNumberInTextFile(cfgpath, 'oit_layers', Nucleus.SearchType.StartsWith) + '|oit_layers = "8"',
              Context.FindLineNumberInTextFile(cfgpath, 'ssao_technique', Nucleus.SearchType.StartsWith) + '|ssao_technique = "Disabled"',	
              Context.FindLineNumberInTextFile(cfgpath, 'aa_technique', Nucleus.SearchType.StartsWith) + '|aa_technique = "None"',

              Context.FindLineNumberInTextFile(cfgpath, 'motion_blur', Nucleus.SearchType.StartsWith) + '|motion_blur = "Off"',
              Context.FindLineNumberInTextFile(cfgpath, 'motion_blur_quality', Nucleus.SearchType.StartsWith) + '|motion_blur_quality = "High"',	
              Context.FindLineNumberInTextFile(cfgpath, 'subsurface_scattering', Nucleus.SearchType.StartsWith) + '|subsurface_scattering = "0"',

              Context.FindLineNumberInTextFile(cfgpath, 'ssr', Nucleus.SearchType.StartsWith) + '|ssr = "0"',
              Context.FindLineNumberInTextFile(cfgpath, 'shadow_viewmodel_self', Nucleus.SearchType.StartsWith) + '|shadow_viewmodel_self = "Off"',	
              Context.FindLineNumberInTextFile(cfgpath, 'dedicated_player_shadow', Nucleus.SearchType.StartsWith) + '|dedicated_player_shadow = "Off"',
              Context.FindLineNumberInTextFile(cfgpath, 'auto_cull_radius', Nucleus.SearchType.StartsWith) + '|auto_cull_radius = "1.5"',

              Context.FindLineNumberInTextFile(cfgpath, 'local_ambient_lighting', Nucleus.SearchType.StartsWith) + '|local_ambient_lighting = "1"',
              Context.FindLineNumberInTextFile(cfgpath, 'volumetric_light_quality', Nucleus.SearchType.StartsWith) + '|volumetric_light_quality = "0"',	
              Context.FindLineNumberInTextFile(cfgpath, 'volumetric_light_sample_mult', Nucleus.SearchType.StartsWith) + '|volumetric_light_sample_mult = "0.5"'
            ];
            Context.ReplaceLinesInTextFile(cfgpath, dict);
            
        }
    }
    if (img == 'Medium') {
        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players\\config.ini')) {


            var dict = [
              Context.FindLineNumberInTextFile(cfgpath, 'mesh_quality', Nucleus.SearchType.StartsWith) + '|mesh_quality = "1"', 
              Context.FindLineNumberInTextFile(cfgpath, 'texture_filter', Nucleus.SearchType.StartsWith) + '|texture_filter = "1"', 
              Context.FindLineNumberInTextFile(cfgpath, 'texture_quality', Nucleus.SearchType.StartsWith) + '|texture_quality = "2"', 
              Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_fx', Nucleus.SearchType.StartsWith) + '|texture_quality_fx = "1"',
              Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_probes', Nucleus.SearchType.StartsWith) + '|texture_quality_probes = "1"',	

              Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_baked_sun_shadows', Nucleus.SearchType.StartsWith) + '|texture_quality_baked_sun_shadows = "0"',	
              Context.FindLineNumberInTextFile(cfgpath, 'disable_dynamic_light_shadows', Nucleus.SearchType.StartsWith) + '|disable_dynamic_light_shadows = "1"',	
              Context.FindLineNumberInTextFile(cfgpath, 'disable_dynamic_sun_shadows', Nucleus.SearchType.StartsWith) + '|disable_dynamic_sun_shadows = "1"',	
              
              Context.FindLineNumberInTextFile(cfgpath, 'fx_shadows', Nucleus.SearchType.StartsWith) + '|fx_shadows = "0"',	
              Context.FindLineNumberInTextFile(cfgpath, 'spot_shadow_texture_size', Nucleus.SearchType.StartsWith) + '|spot_shadow_texture_size = "2048"',	
              Context.FindLineNumberInTextFile(cfgpath, 'omni_shadow_texture_size', Nucleus.SearchType.StartsWith) + '|omni_shadow_texture_size = "256"',
              Context.FindLineNumberInTextFile(cfgpath, 'shadow_filtering', Nucleus.SearchType.StartsWith) + '|shadow_filtering = "1"',
              Context.FindLineNumberInTextFile(cfgpath, 'oit', Nucleus.SearchType.StartsWith) + '|oit = "1"',

              Context.FindLineNumberInTextFile(cfgpath, 'oit_layers', Nucleus.SearchType.StartsWith) + '|oit_layers = "8"',
              Context.FindLineNumberInTextFile(cfgpath, 'ssao_technique', Nucleus.SearchType.StartsWith) + '|ssao_technique = "GTAO Medium Quality"',	
              Context.FindLineNumberInTextFile(cfgpath, 'aa_technique', Nucleus.SearchType.StartsWith) + '|aa_technique = "SMAA 1x"',

              Context.FindLineNumberInTextFile(cfgpath, 'motion_blur', Nucleus.SearchType.StartsWith) + '|motion_blur = "Off"',
              Context.FindLineNumberInTextFile(cfgpath, 'motion_blur_quality', Nucleus.SearchType.StartsWith) + '|motion_blur_quality = "High"',	
              Context.FindLineNumberInTextFile(cfgpath, 'subsurface_scattering', Nucleus.SearchType.StartsWith) + '|subsurface_scattering = "0"',

              Context.FindLineNumberInTextFile(cfgpath, 'ssr', Nucleus.SearchType.StartsWith) + '|ssr = "0"',
              Context.FindLineNumberInTextFile(cfgpath, 'shadow_viewmodel_self', Nucleus.SearchType.StartsWith) + '|shadow_viewmodel_self = "Off"',	
              Context.FindLineNumberInTextFile(cfgpath, 'dedicated_player_shadow', Nucleus.SearchType.StartsWith) + '|dedicated_player_shadow = "All"',
              Context.FindLineNumberInTextFile(cfgpath, 'auto_cull_radius', Nucleus.SearchType.StartsWith) + '|auto_cull_radius = "1"',

              Context.FindLineNumberInTextFile(cfgpath, 'local_ambient_lighting', Nucleus.SearchType.StartsWith) + '|local_ambient_lighting = "1"',
              Context.FindLineNumberInTextFile(cfgpath, 'volumetric_light_quality', Nucleus.SearchType.StartsWith) + '|volumetric_light_quality = "0"',	
              Context.FindLineNumberInTextFile(cfgpath, 'volumetric_light_sample_mult', Nucleus.SearchType.StartsWith) + '|volumetric_light_sample_mult = "2"'
            ];
            Context.ReplaceLinesInTextFile(cfgpath, dict);
            
        }
    }
    if (img == 'High') {
        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players\\config.ini')) {

              var dict = [
                Context.FindLineNumberInTextFile(cfgpath, 'mesh_quality', Nucleus.SearchType.StartsWith) + '|mesh_quality = "0"', 
                Context.FindLineNumberInTextFile(cfgpath, 'texture_filter', Nucleus.SearchType.StartsWith) + '|texture_filter = "2"', 
                Context.FindLineNumberInTextFile(cfgpath, 'texture_quality', Nucleus.SearchType.StartsWith) + '|texture_quality = "1"', 
                Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_fx', Nucleus.SearchType.StartsWith) + '|texture_quality_fx = "0"',
                Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_probes', Nucleus.SearchType.StartsWith) + '|texture_quality_probes = "0"',	

                Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_baked_sun_shadows', Nucleus.SearchType.StartsWith) + '|texture_quality_baked_sun_shadows = "0"',	
                Context.FindLineNumberInTextFile(cfgpath, 'disable_dynamic_light_shadows', Nucleus.SearchType.StartsWith) + '|disable_dynamic_light_shadows = "0"',	
                Context.FindLineNumberInTextFile(cfgpath, 'disable_dynamic_sun_shadows', Nucleus.SearchType.StartsWith) + '|disable_dynamic_sun_shadows = "0"',	
                
                Context.FindLineNumberInTextFile(cfgpath, 'fx_shadows', Nucleus.SearchType.StartsWith) + '|fx_shadows = "1"',	
                Context.FindLineNumberInTextFile(cfgpath, 'spot_shadow_texture_size', Nucleus.SearchType.StartsWith) + '|spot_shadow_texture_size = "2048"',	
                Context.FindLineNumberInTextFile(cfgpath, 'omni_shadow_texture_size', Nucleus.SearchType.StartsWith) + '|omni_shadow_texture_size = "256"',
                Context.FindLineNumberInTextFile(cfgpath, 'shadow_filtering', Nucleus.SearchType.StartsWith) + '|shadow_filtering = "1"',
                Context.FindLineNumberInTextFile(cfgpath, 'oit', Nucleus.SearchType.StartsWith) + '|oit = "1"',

                Context.FindLineNumberInTextFile(cfgpath, 'oit_layers', Nucleus.SearchType.StartsWith) + '|oit_layers = "12"',
                Context.FindLineNumberInTextFile(cfgpath, 'ssao_technique', Nucleus.SearchType.StartsWith) + '|ssao_technique = "GTAO High Quality"',	
                Context.FindLineNumberInTextFile(cfgpath, 'aa_technique', Nucleus.SearchType.StartsWith) + '|aa_technique = "Filmic SMAA T2x"',

                Context.FindLineNumberInTextFile(cfgpath, 'motion_blur', Nucleus.SearchType.StartsWith) + '|motion_blur = "Off"',
                Context.FindLineNumberInTextFile(cfgpath, 'motion_blur_quality', Nucleus.SearchType.StartsWith) + '|motion_blur_quality = "High"',	
                Context.FindLineNumberInTextFile(cfgpath, 'subsurface_scattering', Nucleus.SearchType.StartsWith) + '|subsurface_scattering = "1"',

                Context.FindLineNumberInTextFile(cfgpath, 'ssr', Nucleus.SearchType.StartsWith) + '|ssr = "1"',
                Context.FindLineNumberInTextFile(cfgpath, 'shadow_viewmodel_self', Nucleus.SearchType.StartsWith) + '|shadow_viewmodel_self = "All"',	
                Context.FindLineNumberInTextFile(cfgpath, 'dedicated_player_shadow', Nucleus.SearchType.StartsWith) + '|dedicated_player_shadow = "All"',
                Context.FindLineNumberInTextFile(cfgpath, 'auto_cull_radius', Nucleus.SearchType.StartsWith) + '|auto_cull_radius = "0.25"',

                Context.FindLineNumberInTextFile(cfgpath, 'local_ambient_lighting', Nucleus.SearchType.StartsWith) + '|local_ambient_lighting = "0"',
                Context.FindLineNumberInTextFile(cfgpath, 'volumetric_light_quality', Nucleus.SearchType.StartsWith) + '|volumetric_light_quality = "0"',	
                Context.FindLineNumberInTextFile(cfgpath, 'volumetric_light_sample_mult', Nucleus.SearchType.StartsWith) + '|volumetric_light_sample_mult = "2"'
            ];	
            Context.ReplaceLinesInTextFile(cfgpath, dict);
            
        }
    }
    if (img == 'Extra') {
        if (System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + '\\players\\config.ini')) {


            var dict = [
                Context.FindLineNumberInTextFile(cfgpath, 'mesh_quality', Nucleus.SearchType.StartsWith) + '|mesh_quality = "0"', 
                Context.FindLineNumberInTextFile(cfgpath, 'texture_filter', Nucleus.SearchType.StartsWith) + '|texture_filter = "2"', 
                Context.FindLineNumberInTextFile(cfgpath, 'texture_quality', Nucleus.SearchType.StartsWith) + '|texture_quality = "0"', 
                Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_fx', Nucleus.SearchType.StartsWith) + '|texture_quality_fx = "0"',
                Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_probes', Nucleus.SearchType.StartsWith) + '|texture_quality_probes = "0"',	

                Context.FindLineNumberInTextFile(cfgpath, 'texture_quality_baked_sun_shadows', Nucleus.SearchType.StartsWith) + '|texture_quality_baked_sun_shadows = "0"',	
                Context.FindLineNumberInTextFile(cfgpath, 'disable_dynamic_light_shadows', Nucleus.SearchType.StartsWith) + '|disable_dynamic_light_shadows = "0"',	
                Context.FindLineNumberInTextFile(cfgpath, 'disable_dynamic_sun_shadows', Nucleus.SearchType.StartsWith) + '|disable_dynamic_sun_shadows = "0"',	
                
                Context.FindLineNumberInTextFile(cfgpath, 'fx_shadows', Nucleus.SearchType.StartsWith) + '|fx_shadows = "1"',	
                Context.FindLineNumberInTextFile(cfgpath, 'spot_shadow_texture_size', Nucleus.SearchType.StartsWith) + '|spot_shadow_texture_size = "4096"',	
                Context.FindLineNumberInTextFile(cfgpath, 'omni_shadow_texture_size', Nucleus.SearchType.StartsWith) + '|omni_shadow_texture_size = "512"',
                Context.FindLineNumberInTextFile(cfgpath, 'shadow_filtering', Nucleus.SearchType.StartsWith) + '|shadow_filtering = "1"',
                Context.FindLineNumberInTextFile(cfgpath, 'oit', Nucleus.SearchType.StartsWith) + '|oit = "1"',

                Context.FindLineNumberInTextFile(cfgpath, 'motion_blur', Nucleus.SearchType.StartsWith) + '|motion_blur = "Auto"',
                Context.FindLineNumberInTextFile(cfgpath, 'motion_blur_quality', Nucleus.SearchType.StartsWith) + '|motion_blur_quality = "High"',	
                Context.FindLineNumberInTextFile(cfgpath, 'subsurface_scattering', Nucleus.SearchType.StartsWith) + '|subsurface_scattering = "1"',

                Context.FindLineNumberInTextFile(cfgpath, 'ssr', Nucleus.SearchType.StartsWith) + '|ssr = "1"',
                Context.FindLineNumberInTextFile(cfgpath, 'shadow_viewmodel_self', Nucleus.SearchType.StartsWith) + '|shadow_viewmodel_self = "All"',	
                Context.FindLineNumberInTextFile(cfgpath, 'dedicated_player_shadow', Nucleus.SearchType.StartsWith) + '|dedicated_player_shadow = "All"',
                Context.FindLineNumberInTextFile(cfgpath, 'auto_cull_radius', Nucleus.SearchType.StartsWith) + '|auto_cull_radius = "0.25"',

                Context.FindLineNumberInTextFile(cfgpath, 'local_ambient_lighting', Nucleus.SearchType.StartsWith) + '|local_ambient_lighting = "0"',
                Context.FindLineNumberInTextFile(cfgpath, 'volumetric_light_quality', Nucleus.SearchType.StartsWith) + '|volumetric_light_quality = "0"',	
                Context.FindLineNumberInTextFile(cfgpath, 'volumetric_light_sample_mult', Nucleus.SearchType.StartsWith) + '|volumetric_light_sample_mult = "2"'
            ];	
            Context.ReplaceLinesInTextFile(cfgpath, dict);	
            
        }
    }

  var Mus = Context.Options["Mus"];

  if (Mus == "Yes") {
    if (Context.PlayerID == 0) {
      var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\config.ini";
      var dict = [
        Context.FindLineNumberInTextFile(cfgpath, 'music_scale =', Nucleus.SearchType.StartsWith) + '|music_scale = "1"',
        Context.FindLineNumberInTextFile(cfgpath, 'mute_music =', Nucleus.SearchType.StartsWith) + '|mute_music = "0"',
      ];
      Context.ReplaceLinesInTextFile(cfgpath, dict);

      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\user_settings.cgp");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "user_settings_music.cgp");
      System.IO.File.Copy(savePkgOrigin, savePath, true);

    } else {
      var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\config.ini";
      var dict = [
        Context.FindLineNumberInTextFile(cfgpath, 'music_scale =', Nucleus.SearchType.StartsWith) + '|music_scale = "0"',
        Context.FindLineNumberInTextFile(cfgpath, 'mute_music =', Nucleus.SearchType.StartsWith) + '|mute_music = "1"',
      ];
      Context.ReplaceLinesInTextFile(cfgpath, dict);
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\user_settings.cgp");
      var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "user_settings_nomusic.cgp");
      System.IO.File.Copy(savePkgOrigin, savePath, true);

    }
  }

  var FPS = Context.Options["FPS"];
  if (FPS != "-") {
    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\config.ini";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'max_fps =', Nucleus.SearchType.StartsWith) + '|max_fps = "' + FPS  + '"',
      Context.FindLineNumberInTextFile(cfgpath, 'max_fps_menu =', Nucleus.SearchType.StartsWith) + '|max_fps_menu = "' + FPS  + '"',
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  }
  var FOV = Context.Options["fov"];
  if (FOV != "-") {
    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players\\config.ini";
    var dict = [
      Context.FindLineNumberInTextFile(cfgpath, 'fov =', Nucleus.SearchType.StartsWith) + '|fov = "' + FOV  + '"'
    ];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  }

  var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\project-bo4.json";

  Context.RunAdditionalFiles(["1|" + Game.Folder + "\\DW SERVER\\server.exe"], false, 10, false, false);

  var dictID = [
    Context.FindLineNumberInTextFile(cfgpath, '        "xuid":', Nucleus.SearchType.StartsWith) + '|        "xuid": 232339475' + Context.PlayerID + ',', 
  ];
  var dict = [
    Context.FindLineNumberInTextFile(cfgpath, '        "ipv4":', Nucleus.SearchType.StartsWith) + '|        "ipv4": "' + u + '"',
    Context.FindLineNumberInTextFile(cfgpath, '        "name":', Nucleus.SearchType.StartsWith) + '|        "name": "' + Context.Nickname + '"',
  ];

  Context.ReplaceLinesInTextFile(cfgpath, dict);
  Context.ReplaceLinesInTextFile(cfgpath, dictID);

  var UNLOCK = Context.Options["unlock"];
  if (UNLOCK  == "Yes") {
    var all = Context.FindLineNumberInTextFile(cfgpath, '    "unlock": {', Nucleus.SearchType.StartsWith);
    Context.ReplaceLinesInTextFile(cfgpath, [
      (all+1)+ '|        "all": true,',
      (all+2)+ '|        "attachments": true,',
      (all+3)+ '|        "attachmentslot": true,',
      (all+4)+ '|        "backgrounds": true,',
      (all+5)+ '|        "challenges": true,',
      (all+6)+ '|        "classes": true,',
      (all+7)+ '|        "emblems": true,',
      (all+8)+ '|        "itemoptions": true,',
      (all+9)+ '|        "items": true,',
      (all+10)+ '|        "zm_loot": true',
    ]);
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
}
