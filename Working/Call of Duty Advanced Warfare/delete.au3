#NoTrayIcon
$num = 1
While  $num > 0
If WinExists("Nucleus Co-op") Then
        $Exists = 1
Else
	Run("delete.bat")
	$num = 0
EndIf
Sleep(500)
WEnd