#NoTrayIcon
$num = 1
While  $num > 0
		Sleep(1000)
		If WinExists("[Class:#32770]") Then
				Sleep(1000)
				ControlSend("[Class:#32770]", "", 0, "{right}", 0)
				Sleep(1000)
				ControlSend("[Class:#32770]", "", 0, "{ENTER}", 0)
		Else
			$num = 1
		EndIf
WEnd