#NoTrayIcon
$num = 1
While  $num > 0
		Sleep(1000)
		If WinExists("Project-Bo4:") Then
				Sleep(1000)
				WinSetState ( "Project-Bo4", "",@SW_MINIMIZE)
		Else
			$num = 1
		EndIf
WEnd