#NoTrayIcon
Hotkeyset("{F2}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
Sleep(50)
Until $binFlag = True
$File = "Local IP.txt"
ClipPut(FileRead($File))
ControlSend("HOST", "", 101, "connect ")
ControlSend("HOST", "", 101, ClipGet())
ControlSend("HOST", "", 101, "{ENTER}", 0)
ControlSend("P2", "", 101, "connect ")
ControlSend("P2", "", 101, ClipGet())
ControlSend("P2", "", 101, "{ENTER}", 0)
ControlSend("P3", "", 101, "connect ")
ControlSend("P3", "", 101, ClipGet())
ControlSend("P3", "", 101, "{ENTER}", 0)
ControlSend("P4", "", 101, "connect ")
ControlSend("P4", "", 101, ClipGet())
ControlSend("P4", "", 101, "{ENTER}", 0)
ControlSend("P5", "", 101, "connect ")
ControlSend("P5", "", 101, ClipGet())
ControlSend("P5", "", 101, "{ENTER}", 0)
ControlSend("P6", "", 101, "connect ")
ControlSend("P6", "", 101, ClipGet())
ControlSend("P6", "", 101, "{ENTER}", 0)
ControlSend("P7", "", 101, "connect ")
ControlSend("P7", "", 101, ClipGet())
ControlSend("P7", "", 101, "{ENTER}", 0)
ControlSend("P8", "", 101, "connect ")
ControlSend("P8", "", 101, ClipGet())
ControlSend("P8", "", 101, "{ENTER}", 0)
Sleep(50)
Dim $binFlag = False

WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc