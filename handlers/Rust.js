Game.ExecutableContext = ["RustClient_Data"];

var answers4 = ["30", "45", "60", "75", "90", "120"];
Game.AddOption("Select the FPS cap.", "THE GAME IS HEAVY, RECOMMEND NOT GOING REALLY HIGH", "fps", answers4);

var answers3 = ["NO", "YES", "NO SERVER"];
Game.AddOption(
  "choose YES if you are going to create a new server/create your first one, choose NO to not change your existing server or choose NO SERVER, if you have a server already running in the background.",
  'This option is to start your dedicated server. If you choose "NO" or "NO SERVER", there is no need to choose the server options below.',
  "new",
  answers3
);

var answers1 = [];
Game.AddOption(
  "Type the map you want the server to start on.",
  'Type "Procedural Map" or the name of the custom map.\n\nCustom map example:\nI downloaded the map: CommunityHapisV2.8.0_Nov_Wipe.map , so the name that you will type is "CommunityHapisV2.8.0_Nov_Wipe"\n\nThis was tested with some custom maps and plugins, IT MIGHT NOT WORK FOR ALL MAPS/PLUGINS\n\nINSTRUCTIONS FOR CUSTOM MAP:\nWhen you download your custom map you will have a .map file and Oxide.Ext.RustEdit.dll file (some might not have this .dll). Go into your nucleus main folder > handlers in there you will have a "Rust" folder, place both files from before in there.\n\nINSTRUCTIONS FOR OXIDE PLUGINS:\nWhen you download oxide (https://umod.org/games/rust), you will have a "RustDedicated_Data" folder now go into your nucleus main folder > handlers > Rust > Oxide, place the "RustDedicated_Data" folder in there. Now for the Plugins you want, go into the folder Oxide Plugins > oxide > plugins and place them in there.(for custom .json place in the config folder)',
  "map",
  answers1
);

var answers2 = ["1000", "1500", "2000", "2500", "3000", "3500", "4000", "4500", "5000", "5500", "6000"];
Game.AddOption(
  "Choose the size of the map.",
  "bigger size = alot more resource consuming for the PC. smaller size = might have spawn problems (spawning on the ocean/underground, can easily noclip/TP out).",
  "size",
  answers2
);

var answers3 = ["no", "easy", "medium", "hard"];
Game.AddOption(
  "Enable SpawnNPC plugin? its already included in the handler.",
  "Selecting one of the dificults will enable the plugin.\nYou can see the chat commands and how to use here: https://weoxide.net/index.php?/file/21-spawnnpc/ .\nremember to follow the INSTRUCTIONS FOR OXIDE PLUGINS for this to work.",
  "npc",
  answers3
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
Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt", "server.bat", "Oxide.Ext.RustEdit.dll", "SpawnNPC.cs", "SpawnNPC.json"];
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
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.BlockRawInput = false;
Game.Description =
  "IMPORTANT: Download rust dedicated server from steamCMD, copy the 'rust_dedicated' folder that was downloaded and place it in the main rust folder.\n\nTHIS IS NOT FOR ONLINE AND WONT BE. THIS IS FOR A DEDICATED SERVER CREATED BY YOU.\n\nThe server save is stored inside Nucleus Co-op content folder, so if you delete Nucleus or its content folder your server save for this game will be lost.\n\nWait for the server to be started, than press F1 to open the console and type 'client.connect localhost'(if it doesnt work try instead of 'localhost' your IP)\n\nIf the aspect ratio seems wrong press ctrl+T to minimize the screen and press it again to go back to normal, should now be fixed.\n\nAlso IMPORTANT, when closing the server type in the console 'quit', if you force close it, you might lose progess\n\nTo become an admin type in the server console 'ownerID (steamID) (name you want)' exemple: ownerID 76561199023125438 birden, the steamID can be found in nucleus Co-op settings or in the console when you connect to the server. This command will automatically be copied into your clipboard for player 1 to make it easier.\n\nAfter all the instances have launched, resized and positioned correctly, press the END key once to lock the input for all instances to have their own working cursor and keyboard. You need to left click each mouse to make the emulated cursors appear after locking the input. Press the END key again to unlock the input when you finish playing. You can also use CTRL+Q to close Nucleus and all its instances when the input is unlocked.\n\nYou can play with controllers using programs like rewasd or xpadder.";
Game.KeepSymLinkOnExit = true;
Game.PauseBetweenStarts = 10;

Game.SetWindowHook = true;

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

Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = false;
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
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Facepunch Studios LTD\\Rust", "Screenmanager Is Fullscreen mode_h3981298716", 0, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Facepunch Studios LTD\\Rust", "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Facepunch Studios LTD\\Rust", "Screenmanager Resolution Height Default_h1380706816", Context.Height, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Facepunch Studios LTD\\Rust", "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);
  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Facepunch Studios LTD\\Rust", "Screenmanager Resolution Width Default_h680557497", Context.Width, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\Facepunch Studios LTD\\Rust", "Screenmanager Resolution Use Native_h1405027254", 0, Nucleus.RegType.DWord);

  var FPS = Context.Options["fps"];

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\cfg\\client.cfg";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, "graphics.screenmode", Nucleus.SearchType.StartsWith) + '|graphics.screenmode "2"',
    Context.FindLineNumberInTextFile(txtPath, "client.pushtotalk", Nucleus.SearchType.StartsWith) + '|client.pushtotalk "True"',
    Context.FindLineNumberInTextFile(txtPath, "fps.limitinbackground", Nucleus.SearchType.StartsWith) + '|fps.limitinbackground "True"',
    Context.FindLineNumberInTextFile(txtPath, "fps.limitinmenu", Nucleus.SearchType.StartsWith) + '|fps.limitinmenu "True"',
    Context.FindLineNumberInTextFile(txtPath, "fps.limit", Nucleus.SearchType.StartsWith) + '|fps.limit "' + FPS + '"',
    Context.FindLineNumberInTextFile(txtPath, "graphics.resolution", Nucleus.SearchType.StartsWith) + '|graphics.resolution "0"'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  if (Context.PlayerID != 0) {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\cfg\\client.cfg";
    var dict = [
      Context.FindLineNumberInTextFile(txtPath, "audio.musicvolume", Nucleus.SearchType.StartsWith) + '|audio.musicvolume "0"',
      Context.FindLineNumberInTextFile(txtPath, "audio.musicvolumemenu", Nucleus.SearchType.StartsWith) + '|audio.musicvolumemenu "0"'
    ];
    Context.ReplaceLinesInTextFile(txtPath, dict);
  }

  Context.CopyFolder(Context.ScriptFolder + "\\steam", Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\RustClient_Data\\Plugins\\x86_64");

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\RustClient_Data\\Plugins\\x86_64\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);
  
  Context.CopyFolder(Context.ScriptFolder + "\\steam", Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated");

  Context.CopyFolder(Context.ScriptFolder + "\\steam", Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\RustDedicated_Data\\Plugins\\x86_64");

  var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\RustDedicated_Data\\Plugins\\x86_64\\steam_settings\\configs.user.ini";
  Context.ModifySaveFile(savePath, savePath, Nucleus.SaveType.INI, [
  new Nucleus.IniSaveInfo("user::general", "account_name", Context.Nickname),
  new Nucleus.IniSaveInfo("user::general", "account_steamid", Context.PlayerSteamID),
  new Nucleus.IniSaveInfo("user::general", "language", Context.SteamLang),
  ]);

  if (Context.PlayerID == 0) {
    var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CopyPaste.bat";
    var lines = ["echo|set /p=ownerID " + Context.PlayerSteamID + " " + Context.Nickname + "|clip", "quit"];

    Context.WriteTextFile(server, lines);

    Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\CopyPaste.bat"], false, 1, false, false);

    var MAP = Context.Options["map"];
    var SIZE = Context.Options["size"];
    var NEW = Context.Options["new"];
    var NPC = Context.Options["npc"];

    if (!System.IO.File.Exists(Context.ScriptFolder + "\\" + MAP + ".map")) {
      MAP = "Procedural Map";
    }

    if (NEW == "NO SERVER") {
    } else {
      if (NEW == "YES") {
        if (MAP != "Procedural Map") {
          var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\server.bat";
          var lines = [
            "echo off",
            ":start",
            "RustDedicated.exe -batchmode +server.port 28015 +server.levelurl " +
              Context.ScriptFolder +
              "\\" +
              MAP +
              '.map +server.maxplayers 30  +server.hostname "Nucleus server" +server.description "NUCLEUS CO-OP" +server.identity "Nucleus" +server.secure 0 +server.eac 0 +server.encryption 0 +antihack.terrain_protection 0 +fps.limit 30'
          ];

          Context.WriteTextFile(server, lines);

          if (System.IO.File.Exists(Context.ScriptFolder + "\\Oxide.Ext.RustEdit.dll")) {
            var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\RustDedicated_Data\\Managed\\Oxide.Ext.RustEdit.dll";
            var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Oxide.Ext.RustEdit.dll");
            System.IO.File.Copy(savePkgOrigin, savePath, true);
          }
        } else {
          var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\server.bat";
          var lines = [
            "echo off",
            ":start",
            'RustDedicated.exe -batchmode +server.port 28015 +server.level "' +
              MAP +
              '" +server.seed ' +
              Context.RandomInt(0, 2147483647) +
              " +server.worldsize " +
              SIZE +
              ' +server.maxplayers 30  +server.hostname "Nucleus server" +server.description "NUCLEUS CO-OP" +server.identity "Nucleus" +server.secure 0 +server.encryption 0 +server.eac 0 +antihack.terrain_protection 0 +fps.limit 30'
          ];

          Context.WriteTextFile(server, lines);
        }
      } else {
      }

      //oxideMods
      let Oxide = Context.ScriptFolder + "\\Oxide\\RustDedicated_Data";
      if (System.IO.Directory.Exists(Oxide)) {
        let server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\RustDedicated_Data\\Managed";

        if (System.IO.File.Exists(server + "\\x64")) {
          System.IO.Directory.Delete(server + "\\x64");
        }
        if (System.IO.File.Exists(server + "\\x86")) {
          System.IO.Directory.Delete(server + "\\x86");
        }
        if (System.IO.Directory.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\oxide\\plugins")) {
          var server = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\oxide\\delete.bat";
          var lines = ["rmdir /s /q " + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\oxide\\plugins"];

          Context.WriteTextFile(server, lines);

          Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\oxide\\delete.bat"], false, "", 0, false, false, false, false);
        }
        if (System.IO.File.Exists(server + "\\Assembly-CSharp.dll")) {
          System.IO.File.Delete(server + "\\Assembly-CSharp.dll");
        }
        if (System.IO.File.Exists(server + "\\Facepunch.Console.dll")) {
          System.IO.File.Delete(server + "\\Facepunch.Console.dll");
        }
        if (System.IO.File.Exists(server + "\\Facepunch.Network.dll")) {
          System.IO.File.Delete(server + "\\Facepunch.Network.dll");
        }
        if (System.IO.File.Exists(server + "\\Facepunch.Rcon.dll")) {
          System.IO.File.Delete(server + "\\Facepunch.Rcon.dll");
        }
        if (System.IO.File.Exists(server + "\\Facepunch.Sqlite.dll")) {
          System.IO.File.Delete(server + "\\Facepunch.Sqlite.dll");
        }
        if (System.IO.File.Exists(server + "\\Facepunch.UnityEngine.dll")) {
          System.IO.File.Delete(server + "\\Facepunch.UnityEngine.dll");
        }
        if (System.IO.File.Exists(server + "\\Mono.Data.Tds.dll")) {
          System.IO.File.Delete(server + "\\Mono.Data.Tds.dll");
        }
        if (System.IO.File.Exists(server + "\\MySql.Data.dll")) {
          System.IO.File.Delete(server + "\\MySql.Data.dll");
        }
        if (System.IO.File.Exists(server + "\\Oxide.Common.dll")) {
          System.IO.File.Delete(server + "\\Oxide.Common.dll");
        }
        if (System.IO.File.Exists(Oxide)) {
          System.IO.File.Delete(server + "\\Oxide.Core.dll");
        }
        if (System.IO.File.Exists(server + "\\Oxide.CSharp.dll")) {
          System.IO.File.Delete(server + "\\Oxide.CSharp.dll");
        }
        if (System.IO.File.Exists(server + "\\Oxide.MySql.dll")) {
          System.IO.File.Delete(server + "\\Oxide.MySql.dll");
        }
        if (System.IO.File.Exists(server + "\\Oxide.References.dll")) {
          System.IO.File.Delete(server + "\\Oxide.References.dll");
        }
        if (System.IO.File.Exists(server + "\\Oxide.Rust.dll")) {
          System.IO.File.Delete(server + "\\Oxide.Rust.dll");
        }
        if (System.IO.File.Exists(server + "\\Oxide.SQLite.dll")) {
          System.IO.File.Delete(server + "\\Oxide.SQLite.dll");
        }
        if (System.IO.File.Exists(server + "\\Oxide.Unity.dll")) {
          System.IO.File.Delete(server + "\\Oxide.Unity.dll");
        }
        if (System.IO.File.Exists(server + "\\Rust.Clans.Local.dll")) {
          System.IO.File.Delete(server + "\\Rust.Clans.Local.dll");
        }
        if (System.IO.File.Exists(server + "\\System.Configuration.Install.dll")) {
          System.IO.File.Delete(server + "\\System.Configuration.Install.dll");
        }
        if (System.IO.File.Exists(server + "\\System.Data.dll")) {
          System.IO.File.Delete(server + "\\System.Data.dll");
        }
        if (System.IO.File.Exists(server + "\\System.Data.SQLite.dll")) {
          System.IO.File.Delete(server + "\\System.Data.SQLite.dll");
        }
        if (System.IO.File.Exists(server + "\\System.Drawing.dll")) {
          System.IO.File.Delete(server + "\\System.Drawing.dll");
        }
        if (System.IO.File.Exists(server + "\\System.Runtime.Serialization.dll")) {
          System.IO.File.Delete(server + "\\System.Runtime.Serialization.dll");
        }
        if (System.IO.File.Exists(server + "\\System.Transactions.dll")) {
          System.IO.File.Delete(server + "\\System.Transactions.dll");
        }

        Context.Wait(2000);

        Context.CopyFolder(Oxide, Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\RustDedicated_Data");
        Context.CopyFolder(Oxide, Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\RustDedicated_Data");
        Context.CopyFolder(Context.ScriptFolder + "\\Oxide\\Oxide Plugins", Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated");
      }

      if (NPC == "no") {
      } else {
        let folder = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\oxide\\plugins";
        if (!System.IO.Directory.Exists(folder)) {
          System.IO.Directory.CreateDirectory(folder);
        }
        let folder1 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\oxide\\config";
        if (!System.IO.Directory.Exists(folder1)) {
          System.IO.Directory.CreateDirectory(folder1);
        }

        var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\oxide\\plugins\\SpawnNPC.cs";
        var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "spawnnpc\\plugin\\SpawnNPC.cs");
        System.IO.File.Copy(savePkgOrigin, savePath, true);

        var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\oxide\\config\\SpawnNPC.json";
        var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "spawnnpc\\config\\SpawnNPC " + NPC + ".json");
        System.IO.File.Copy(savePkgOrigin, savePath, true);
      }
      Context.RunAdditionalFiles(["1|" + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\rust_dedicated\\server.bat"], false, "", 0, false, false, false, false); //moved to after server files copied
    }
  }
};
