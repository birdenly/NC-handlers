#NoTrayIcon
Hotkeyset("{F2}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
    Sleep(50)
Until $binFlag = True
ControlSend("Crysis2DedicatedServer.exe  -mod Crysis2Coop", "", 0, "gl_map terminalcoop")
ControlSend("Crysis2DedicatedServer.exe  -mod Crysis2Coop", "", 0, "{ENTER}")

Dim $binFlag = False
Do
    Sleep(50)
Until $binFlag = True
ControlSend("Crysis2DedicatedServer.exe  -mod Crysis2Coop", "", 0, "gl_map SpearCoop")
ControlSend("Crysis2DedicatedServer.exe  -mod Crysis2Coop", "", 0, "{ENTER}")
Dim $binFlag = False
WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc