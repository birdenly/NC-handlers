#NoTrayIcon
Hotkeyset("{F5}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
    Sleep(50)
Until $binFlag = True
ControlSend("HOST", "", 101, "unlockstats")
ControlSend("HOST", "", 101, "{ENTER}", 0)
ControlSend("P2", "", 101, "unlockstats")
ControlSend("P2", "", 101, "{ENTER}", 0)
ControlSend("P3", "", 101, "unlockstats")
ControlSend("P3", "", 101, "{ENTER}", 0)
ControlSend("P4", "", 101, "unlockstats")
ControlSend("P4", "", 101, "{ENTER}", 0)
ControlSend("P5", "", 101, "unlockstats")
ControlSend("P5", "", 101, "{ENTER}", 0)
ControlSend("P6", "", 101, "unlockstats")
ControlSend("P6", "", 101, "{ENTER}", 0)
ControlSend("P7", "", 101, "unlockstats")
ControlSend("P7", "", 101, "{ENTER}", 0)
ControlSend("P8", "", 101, "unlockstats")
ControlSend("P8", "", 101, "{ENTER}", 0)
Dim $binFlag = False
WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc