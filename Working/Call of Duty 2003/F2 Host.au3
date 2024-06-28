#NoTrayIcon
Hotkeyset("{F2}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
Sleep(50)
Until $binFlag = True
ControlSend("P2", "", 0, "~")
ControlSend("P2", "", 0, "{BACKSPACE}")
ControlSend("P2", "", 0, "connect 127.0.0.1")
ControlSend("P2", "", 0, "{ENTER}", 0)
ControlSend("P2", "", 0, "~")
ControlSend("P3", "", 0, "~")
ControlSend("P3", "", 0, "{BACKSPACE}")
ControlSend("P3", "", 0, "connect 127.0.0.1")
ControlSend("P3", "", 0, "{ENTER}", 0)
ControlSend("P3", "", 0, "~")
ControlSend("P4", "", 0, "~")
ControlSend("P4", "", 0, "{BACKSPACE}")
ControlSend("P4", "", 0, "connect 127.0.0.1")
ControlSend("P4", "", 0, "{ENTER}", 0)
ControlSend("P4", "", 0, "~")
ControlSend("P5", "", 0, "~")
ControlSend("P5", "", 0, "{BACKSPACE}")
ControlSend("P5", "", 0, "connect 127.0.0.1")
ControlSend("P5", "", 0, "{ENTER}", 0)
ControlSend("P5", "", 0, "~")
ControlSend("P6", "", 0, "~")
ControlSend("P6", "", 0, "{BACKSPACE}")
ControlSend("P6", "", 0, "connect 127.0.0.1")
ControlSend("P6", "", 0, "{ENTER}", 0)
ControlSend("P6", "", 0, "~")
ControlSend("P7", "", 0, "~")
ControlSend("P7", "", 0, "{BACKSPACE}")
ControlSend("P7", "", 0, "connect 127.0.0.1")
ControlSend("P7", "", 0, "{ENTER}", 0)
ControlSend("P7", "", 0, "~")
ControlSend("P8", "", 0, "~")
ControlSend("P8", "", 0, "{BACKSPACE}")
ControlSend("P8", "", 0, "connect 127.0.0.1")
ControlSend("P8", "", 0, "{ENTER}", 0)
ControlSend("P8", "", 0, "~")
Sleep(50)
Dim $binFlag = False

WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc