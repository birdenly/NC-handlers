#NoTrayIcon
Hotkeyset("{F4}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
    Sleep(50)
Until $binFlag = True
ControlSend("COD MWR HOST", "", 0, "set scr_game_hodgepodgeMode 9")
ControlSend("COD MWR HOST", "", 0, "{ENTER}", 0)
Dim $binFlag = False

WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc