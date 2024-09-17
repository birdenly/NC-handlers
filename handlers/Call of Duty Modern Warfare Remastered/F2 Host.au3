#NoTrayIcon
Hotkeyset("{F2}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
    Sleep(50)
Until $binFlag = True
ControlSend("COD MWR P2", "", 0, "connect 127.0.0.1")
ControlSend("COD MWR P2", "", 0, "{ENTER}", 0)
ControlSend("COD MWR P3", "", 0, "connect 127.0.0.1")
ControlSend("COD MWR P3", "", 0, "{ENTER}", 0)
ControlSend("COD MWR P4", "", 0, "connect 127.0.0.1")
ControlSend("COD MWR P4", "", 0, "{ENTER}", 0)
ControlSend("COD MWR P5", "", 0, "connect 127.0.0.1")
ControlSend("COD MWR P5", "", 0, "{ENTER}", 0)
ControlSend("COD MWR P6", "", 0, "connect 127.0.0.1")
ControlSend("COD MWR P6", "", 0, "{ENTER}", 0)
ControlSend("COD MWR P7", "", 0, "connect 127.0.0.1")
ControlSend("COD MWR P7", "", 0, "{ENTER}", 0)
ControlSend("COD MWR P8", "", 0, "connect 127.0.0.1")
ControlSend("COD MWR P8", "", 0, "{ENTER}", 0)
Dim $binFlag = False

WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc