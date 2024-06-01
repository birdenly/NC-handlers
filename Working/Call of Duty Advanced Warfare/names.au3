#NoTrayIcon
Do
    Sleep(1000)
Until WinExists("S1 Console")
    Sleep(5000)
WinSetTitle("S1 Console", "", "HOST")
WinSetState ( "HOST", "",@SW_MINIMIZE)
Do
    Sleep(1000)
Until WinExists("S1 Console")
    Sleep(5000)
WinSetTitle("S1 Console", "", "P2")
WinSetState ( "P2","", @SW_MINIMIZE )
Do
    Sleep(1000)
Until WinExists("S1 Console")
    Sleep(5000)
WinSetTitle("S1 Console", "", "P3")
WinSetState ( "P3","", @SW_MINIMIZE )
Do
    Sleep(1000)
Until WinExists("S1 Console")
    Sleep(5000)
WinSetTitle("S1 Console", "", "P4")
WinSetState ( "P4","", @SW_MINIMIZE )
Do
    Sleep(1000)
Until WinExists("S1 Console")
    Sleep(5000)
WinSetTitle("S1 Console", "", "P5")
WinSetState ( "P5","", @SW_MINIMIZE )