#NoTrayIcon
Hotkeyset("{F4}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
    Sleep(50)
Until $binFlag = True
ControlSend("HOST", "", 101, "sv_cheats 1")
ControlSend("HOST", "", 101, "{ENTER}", 0)
ControlSend("HOST", "", 101, "camera_thirdperson 1")
ControlSend("HOST", "", 101, "{ENTER}", 0)
ControlSend("P2", "", 101, "sv_cheats 1")
ControlSend("P2", "", 101, "{ENTER}", 0)
ControlSend("P2", "", 101, "camera_thirdperson 1")
ControlSend("P2", "", 101, "{ENTER}", 0)
ControlSend("P3", "", 101, "sv_cheats 1")
ControlSend("P3", "", 101, "{ENTER}", 0)
ControlSend("P3", "", 101, "camera_thirdperson 1")
ControlSend("P3", "", 101, "{ENTER}", 0)
ControlSend("P4", "", 101, "sv_cheats 1")
ControlSend("P4", "", 101, "{ENTER}", 0)
ControlSend("P4", "", 101, "camera_thirdperson 1")
ControlSend("P4", "", 101, "{ENTER}", 0)
ControlSend("P5", "", 101, "sv_cheats 1")
ControlSend("P5", "", 101, "{ENTER}", 0)
ControlSend("P5", "", 101, "camera_thirdperson 1")
ControlSend("P5", "", 101, "{ENTER}", 0)
ControlSend("P6", "", 101, "sv_cheats 1")
ControlSend("P6", "", 101, "{ENTER}", 0)
ControlSend("P6", "", 101, "camera_thirdperson 1")
ControlSend("P6", "", 101, "{ENTER}", 0)
ControlSend("P7", "", 101, "sv_cheats 1")
ControlSend("P7", "", 101, "{ENTER}", 0)
ControlSend("P7", "", 101, "camera_thirdperson 1")
ControlSend("P7", "", 101, "{ENTER}", 0)
ControlSend("P8", "", 101, "sv_cheats 1")
ControlSend("P8", "", 101, "{ENTER}", 0)
ControlSend("P8", "", 101, "camera_thirdperson 1")
ControlSend("P8", "", 101, "{ENTER}", 0)
Dim $binFlag = False
Do
    Sleep(50)
Until $binFlag = True
ControlSend("HOST", "", 101, "sv_cheats 1")
ControlSend("HOST", "", 101, "{ENTER}", 0)
ControlSend("HOST", "", 101, "camera_thirdperson 0")
ControlSend("HOST", "", 101, "{ENTER}", 0)
ControlSend("P2", "", 101, "sv_cheats 1")
ControlSend("P2", "", 101, "{ENTER}", 0)
ControlSend("P2", "", 101, "camera_thirdperson 0")
ControlSend("P2", "", 101, "{ENTER}", 0)
ControlSend("P3", "", 101, "sv_cheats 1")
ControlSend("P3", "", 101, "{ENTER}", 0)
ControlSend("P3", "", 101, "camera_thirdperson 0")
ControlSend("P3", "", 101, "{ENTER}", 0)
ControlSend("P4", "", 101, "sv_cheats 1")
ControlSend("P4", "", 101, "{ENTER}", 0)
ControlSend("P4", "", 101, "camera_thirdperson 0")
ControlSend("P4", "", 101, "{ENTER}", 0)
ControlSend("P5", "", 101, "sv_cheats 1")
ControlSend("P5", "", 101, "{ENTER}", 0)
ControlSend("P5", "", 101, "camera_thirdperson 0")
ControlSend("P5", "", 101, "{ENTER}", 0)
ControlSend("P6", "", 101, "sv_cheats 1")
ControlSend("P6", "", 101, "{ENTER}", 0)
ControlSend("P6", "", 101, "camera_thirdperson 0")
ControlSend("P6", "", 101, "{ENTER}", 0)
ControlSend("P7", "", 101, "sv_cheats 1")
ControlSend("P7", "", 101, "{ENTER}", 0)
ControlSend("P7", "", 101, "camera_thirdperson 0")
ControlSend("P7", "", 101, "{ENTER}", 0)
ControlSend("P8", "", 101, "sv_cheats 1")
ControlSend("P8", "", 101, "{ENTER}", 0)
ControlSend("P8", "", 101, "camera_thirdperson 0")
ControlSend("P8", "", 101, "{ENTER}", 0)
Dim $binFlag = False
WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc