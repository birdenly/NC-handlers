#NoTrayIcon
Hotkeyset("{F5}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
Sleep(50)
Until $binFlag = True
If FileExists ("0.txt") = 1 Then
	ControlSend("HOST", "", 101, "r_aspectRatio wide 16:9")
	ControlSend("HOST", "", 101, "{ENTER}", 0)
	ControlSend("HOST", "", 101, "vid_resize")
	ControlSend("HOST", "", 101, "{ENTER}", 0)
EndIf
If FileExists ("1.txt") = 1 Then
	ControlSend("P2", "", 101, "r_aspectRatio wide 16:9")
	ControlSend("P2", "", 101, "{ENTER}", 0)
	ControlSend("P2", "", 101, "vid_resize")
	ControlSend("P2", "", 101, "{ENTER}", 0)
EndIf
If FileExists ("2.txt") = 1 Then
	ControlSend("P3", "", 101, "r_aspectRatio wide 16:9")
	ControlSend("P3", "", 101, "{ENTER}", 0)
	ControlSend("P3", "", 101, "vid_resize")
	ControlSend("P3", "", 101, "{ENTER}", 0)
EndIf
If FileExists ("3.txt") = 1 Then
	ControlSend("P4", "", 101, "r_aspectRatio wide 16:9")
	ControlSend("P4", "", 101, "{ENTER}", 0)
	ControlSend("P4", "", 101, "vid_resize")
	ControlSend("P4", "", 101, "{ENTER}", 0)
EndIf
If FileExists ("4.txt") = 1 Then
	ControlSend("P5", "", 101, "r_aspectRatio wide 16:9")
	ControlSend("P5", "", 101, "{ENTER}", 0)
	ControlSend("P5", "", 101, "vid_resize")
	ControlSend("P5", "", 101, "{ENTER}", 0)
EndIf
If FileExists ("5.txt") = 1 Then
	ControlSend("P6", "", 101, "r_aspectRatio wide 16:9")
	ControlSend("P6", "", 101, "{ENTER}", 0)
	ControlSend("P6", "", 101, "vid_resize")
	ControlSend("P6", "", 101, "{ENTER}", 0)
EndIf
If FileExists ("6.txt") = 1 Then
	ControlSend("P7", "", 101, "r_aspectRatio wide 16:9")
	ControlSend("P7", "", 101, "{ENTER}", 0)
	ControlSend("P7", "", 101, "vid_resize")
	ControlSend("P7", "", 101, "{ENTER}", 0)
EndIf
If FileExists ("7.txt") = 1 Then
	ControlSend("P8", "", 101, "r_aspectRatio wide 16:9")
	ControlSend("P8", "", 101, "{ENTER}", 0)
	ControlSend("P8", "", 101, "vid_resize")
	ControlSend("P8", "", 101, "{ENTER}", 0)

EndIf
Dim $binFlag = False

Do
Sleep(50)
Until $binFlag = True
If FileExists ("0.txt") = 1 Then
	ControlSend("HOST", "", 101, "r_aspectRatio auto")
	ControlSend("HOST", "", 101, "{ENTER}", 0)
	ControlSend("HOST", "", 101, "vid_resize")
	ControlSend("HOST", "", 101, "{ENTER}", 0)
EndIf

If FileExists ("1.txt") = 1 Then
	ControlSend("P2", "", 101, "r_aspectRatio auto")
	ControlSend("P2", "", 101, "{ENTER}", 0)
	ControlSend("P2", "", 101, "vid_resize")
	ControlSend("P2", "", 101, "{ENTER}", 0)
EndIf

If FileExists ("2.txt") = 1 Then
	ControlSend("P3", "", 101, "r_aspectRatio auto")
	ControlSend("P3", "", 101, "{ENTER}", 0)
	ControlSend("P3", "", 101, "vid_resize")
	ControlSend("P3", "", 101, "{ENTER}", 0)
EndIf

If FileExists ("3.txt") = 1 Then
	ControlSend("P4", "", 101, "r_aspectRatio auto")
	ControlSend("P4", "", 101, "{ENTER}", 0)
	ControlSend("P4", "", 101, "vid_resize")
	ControlSend("P4", "", 101, "{ENTER}", 0)
EndIf

If FileExists ("4.txt") = 1 Then
	ControlSend("P5", "", 101, "r_aspectRatio auto")
	ControlSend("P5", "", 101, "{ENTER}", 0)
	ControlSend("P5", "", 101, "vid_resize")
	ControlSend("P5", "", 101, "{ENTER}", 0)
EndIf

If FileExists ("5.txt") = 1 Then
	ControlSend("P6", "", 101, "r_aspectRatio auto")
	ControlSend("P6", "", 101, "{ENTER}", 0)
	ControlSend("P6", "", 101, "vid_resize")
	ControlSend("P6", "", 101, "{ENTER}", 0)
EndIf

If FileExists ("6.txt") = 1 Then
	ControlSend("P7", "", 101, "r_aspectRatio auto")
	ControlSend("P7", "", 101, "{ENTER}", 0)
	ControlSend("P7", "", 101, "vid_resize")
	ControlSend("P7", "", 101, "{ENTER}", 0)
EndIf

If FileExists ("7.txt") = 1 Then
	ControlSend("P8", "", 101, "r_aspectRatio auto")
	ControlSend("P8", "", 101, "{ENTER}", 0)
	ControlSend("P8", "", 101, "vid_resize")
	ControlSend("P8", "", 101, "{ENTER}", 0)
EndIf
Dim $binFlag = False
WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc