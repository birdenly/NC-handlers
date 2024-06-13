#NoTrayIcon
Hotkeyset("{F3}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
Sleep(50)
Until $binFlag = True
ControlSend("COD MWR HOST", "", 0, "map_restart")
ControlSend("COD MWR HOST", "", 0, "{ENTER}", 0)
Sleep(50)
Dim $binFlag = False

WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc