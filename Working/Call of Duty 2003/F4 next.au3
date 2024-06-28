#NoTrayIcon
Hotkeyset("{F4}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
Sleep(50)
Until $binFlag = True
ControlSend("HOST", "",0, "~")
ControlSend("HOST", "",0, "{BACKSPACE}")
ControlSend("HOST", "",0, "map_rotate")
ControlSend("HOST", "", 0, "{ENTER}", 0)
ControlSend("HOST", "", 0, "~")
Sleep(50)
Dim $binFlag = False

WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc