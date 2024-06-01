#NoTrayIcon
Hotkeyset("{F3}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
Sleep(50)
Until $binFlag = True
ControlSend("HOST", "", 101, "map_restart")
ControlSend("HOST", "", 101, "{ENTER}", 0)
Dim $binFlag = False

WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc