#NoTrayIcon
Hotkeyset("{F2}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
Sleep(50)
Until $binFlag = True
ControlSend("P2", "", 101, "connect 127.0.0.1")
ControlSend("P2", "", 101, "{ENTER}", 0)
ControlSend("P3", "", 101, "connect 127.0.0.1")
ControlSend("P3", "", 101, "{ENTER}", 0)
ControlSend("P4", "", 101, "connect 127.0.0.1")
ControlSend("P4", "", 101, "{ENTER}", 0)
ControlSend("P5", "", 101, "connect 127.0.0.1")
ControlSend("P5", "", 101, "{ENTER}", 0)
Sleep(50)
Dim $binFlag = False

WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc