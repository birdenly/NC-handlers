Game.FileSymlinkCopyInstead = [
"trrm.dll", "trrm.exe"
];
Game.FileSymlinkExclusions = ["EOSSDK-Win64-Shipping.dll", "steam_api64.dll"];
Game.ExecutableContext = ["trrm.exe"];
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "tomb123.exe";
Game.LauncherExe = "trrm.exe";
Game.LauncherTitle = "";
Game.GUID = "TombRaider123Remastered";
Game.GameName = "TombRaider 123 Remastered";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.HideTaskbar = true;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Tomb Raider 1";
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = [];
Game.Description =
  "Tutorial/Showcase: https://www.youtube.com/watch?v=4wrtKH4I6J4\n\nInstall the MP mod from: https://www.laracrofts.com/downloads/ > drop the exe/dll into the game folder and rename the exe to 'trrm', now you will be able to add the handler. The download also comes with a server exe, launch it before playing splitscreen OR simply dont and use the option 'Burns community server' to play online.\n\nAfter the launcher appears press simply press 'Play Now' > 'Launch' if you are using a local server, if not change the settings around.\n\nOn first launch it will be fullscreen press alt+enter and it will stay windowed forever. Press END for controllers to work correctly"
Game.PauseBetweenProcessGrab = 30;
Game.PauseBetweenStarts = 16;
Game.KillProcessesOnClose = ["trrm"];
Game.SetTopMostAtEnd = true;
Game.SetWindowHook = true;
Game.RefreshWindowAfterStart = true;
Game.HasDynamicWindowTitle = true;
Game.PromptBetweenInstances = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\tomb-raider-remastered-multiplayer";
Game.UserProfileSavePath = "AppData\\Roaming\\TRX_EGS";

Game.FakeFocus = true;

Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.CursorVisibilityHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.DrawFakeCursor = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];
    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 50, true, true, true, true, true);
    System.Threading.Thread.Sleep(1000);
    ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
  }
};

Game.Play = function() {

  Context.CopyScriptFolder(Context.GetFolder(Nucleus.Folder.InstancedGameFolder));

  var json = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\nepice_settings\\NemirtingasEpicEmu.json";
  var dict = [
    Context.FindLineNumberInTextFile(json, '      "EpicId":', Nucleus.SearchType.StartsWith) + '|      "EpicId": "831ec62c44424917a0fb315de2b5dc1' + Context.PlayerID + '",',
    Context.FindLineNumberInTextFile(json, '      "Language":', Nucleus.SearchType.StartsWith) + '|      "Language": "' + Context.EpicLang + '",',
    Context.FindLineNumberInTextFile(json, '      "UserName":', Nucleus.SearchType.StartsWith) + '|      "UserName": "' + Context.Nickname + '"'
  ];
  Context.ReplaceLinesInTextFile(json, dict);

  var txtPath = Context.NucleusUserRoot + "\\AppData\\Roaming\\tomb-raider-remastered-multiplayer\\trrm-launcher.ini";
  var dict = [
    Context.FindLineNumberInTextFile(txtPath, 'username =', Nucleus.SearchType.StartsWith) + '|username = ' + Context.Nickname,
    Context.FindLineNumberInTextFile(txtPath, 'server =', Nucleus.SearchType.StartsWith) + '|server = 127.0.0.1',
    Context.FindLineNumberInTextFile(txtPath, 'serverMode =', Nucleus.SearchType.StartsWith) + '|serverMode = custom',
    Context.FindLineNumberInTextFile(txtPath, 'lobbyMode =', Nucleus.SearchType.StartsWith) + '|lobbyMode = public',
    Context.FindLineNumberInTextFile(txtPath, 'exePath =', Nucleus.SearchType.StartsWith) + '|exePath = ' + Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\tomb123.exe"
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  Context.Wait(3000);

};
