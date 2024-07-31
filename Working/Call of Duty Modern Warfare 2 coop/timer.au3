#NoTrayIcon
Do
Sleep(1000)
Until WinExists("P1")
Sleep(8000)
ControlSend("P1", "", 101, "coop_lobbyTimeout 900")
ControlSend("P1", "", 101, "{ENTER}", 0)
Do
Sleep(1000)
Until WinExists("P2")
Sleep(8000)
ControlSend("P2", "", 101, "coop_lobbyTimeout 900")
ControlSend("P2", "", 101, "{ENTER}", 0)
