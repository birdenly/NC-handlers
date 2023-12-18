#NoTrayIcon
Hotkeyset("{F2}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
Sleep(50)
Until $binFlag = True
ControlSend("Section 8 P2", "", 0, "'")
ControlSend("Section 8 P2", "", 0, "{BACKSPACE}", 0)
ControlSend("Section 8 P2", "", 0, "open 127.0.0.1")
Sleep(1000)
ControlSend("Section 8 P2", "", 0, "{ENTER}", 0)
ControlSend("Section 8 P2", "", 0, "'")
Sleep(2000)
ControlSend("Section 8 P3", "", 0, "'")
ControlSend("Section 8 P3", "", 0, "{BACKSPACE}", 0)
ControlSend("Section 8 P3", "", 0, "open 127.0.0.1")
Sleep(1000)
ControlSend("Section 8 P3", "", 0, "{ENTER}", 0)
ControlSend("Section 8 P3", "", 0, "'")
Sleep(2000)
ControlSend("Section 8 P4", "", 0, "'")
ControlSend("Section 8 P4", "", 0, "{BACKSPACE}", 0)
ControlSend("Section 8 P4", "", 0, "open 127.0.0.1")
Sleep(1000)
ControlSend("Section 8 P4", "", 0, "{ENTER}", 0)
ControlSend("Section 8 P4", "", 0, "'")
Sleep(2000)
ControlSend("Section 8 P5", "", 0, "'")
ControlSend("Section 8 P5", "", 0, "{BACKSPACE}", 0)
ControlSend("Section 8 P5", "", 0, "open 127.0.0.1")
Sleep(1000)
ControlSend("Section 8 P5", "", 0, "{ENTER}", 0)
ControlSend("Section 8 P5", "", 0, "'")
Sleep(2000)
ControlSend("Section 8 P6", "", 0, "'")
ControlSend("Section 8 P6", "", 0, "{BACKSPACE}", 0)
ControlSend("Section 8 P6", "", 0, "open 127.0.0.1")
Sleep(1000)
ControlSend("Section 8 P6", "", 0, "{ENTER}", 0)
ControlSend("Section 8 P6", "", 0, "'")
Sleep(2000)
ControlSend("Section 8 P7", "", 0, "'")
ControlSend("Section 8 P7", "", 0, "{BACKSPACE}", 0)
ControlSend("Section 8 P7", "", 0, "open 127.0.0.1")
Sleep(1000)
ControlSend("Section 8 P7", "", 0, "{ENTER}", 0)
ControlSend("Section 8 P7", "", 0, "'")
Sleep(2000)
ControlSend("Section 8 P8", "", 0, "'")
ControlSend("Section 8 P8", "", 0, "{BACKSPACE}", 0)
ControlSend("Section 8 P8", "", 0, "open 127.0.0.1")
Sleep(1000)
ControlSend("Section 8 P8", "", 0, "{ENTER}", 0)
ControlSend("Section 8 P8", "", 0, "'")

Sleep(50)
Dim $binFlag = False

WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc