#NoTrayIcon
Hotkeyset("{F2}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do

Sleep(50)
Until $binFlag = True
$File = "Connect.txt"
ClipPut(FileRead($File))
ControlSend("P2", "", 0, "'")
Sleep(1500)
ControlSend("P2", "", 0, "^v")
Sleep(1000)
ControlSend("P2", "", 0, "{ENTER}", 0)
ControlSend("P2", "", 0, "'")
Sleep(1500)
ControlSend("P3", "", 0, "'")
Sleep(1500)
ControlSend("P3", "", 0, "^v")
Sleep(1000)
ControlSend("P3", "", 0, "{ENTER}", 0)
ControlSend("P3", "", 0, "'")
Sleep(1500)
ControlSend("P4", "", 0, "'")
Sleep(1500)
ControlSend("P4", "", 0, "^v")
Sleep(1000)
ControlSend("P4", "", 0, "{ENTER}", 0)
ControlSend("P4", "", 0, "'")
Sleep(1500)
ControlSend("P5", "", 0, "'")
Sleep(1500)
ControlSend("P5", "", 0, "^v")
Sleep(1000)
ControlSend("P5", "", 0, "{ENTER}", 0)
ControlSend("P5", "", 0, "'")
Sleep(1500)
ControlSend("P6", "", 0, "'")
Sleep(1500)
ControlSend("P6", "", 0, "^v")
Sleep(1000)
ControlSend("P6", "", 0, "{ENTER}", 0)
ControlSend("P6", "", 0, "'")
Sleep(1500)
ControlSend("P7", "", 0, "'")
Sleep(1500)
ControlSend("P7", "", 0, "^v")
Sleep(1000)
ControlSend("P7", "", 0, "{ENTER}", 0)
ControlSend("P7", "", 0, "'")
Sleep(1500)
ControlSend("P8", "", 0, "'")
Sleep(1500)
ControlSend("P8", "", 0, "^v")
Sleep(1000)
ControlSend("P8", "", 0, "{ENTER}", 0)
ControlSend("P8", "", 0, "'")
Sleep(1500)

Sleep(50)
Dim $binFlag = False

WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc