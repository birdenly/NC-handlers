#NoTrayIcon
Hotkeyset("{F4}", "_Continue")
Dim $binFlag = False

While $binFlag = False

Do
Sleep(50)
Until $binFlag = True
ControlSend("HOST", "", 101, "unlockstats")
ControlSend("HOST", "", 101, "{ENTER}", 0)
ControlSend("HOST", "", 101, "cg_unlockall_classes 1")
ControlSend("HOST", "", 101, "{ENTER}", 0)
ControlSend("HOST", "", 101, "cg_unlockall_items 1")
ControlSend("HOST", "", 101, "{ENTER}", 0)
ControlSend("HOST", "", 101, "cg_unlockall_loot 1")
ControlSend("HOST", "", 101, "{ENTER}", 0)
ControlSend("P2", "", 101, "unlockstats")
ControlSend("P2", "", 101, "{ENTER}", 0)
ControlSend("P2", "", 101, "cg_unlockall_classes 1")
ControlSend("P2", "", 101, "{ENTER}", 0)
ControlSend("P2", "", 101, "cg_unlockall_items 1")
ControlSend("P2", "", 101, "{ENTER}", 0)
ControlSend("P2", "", 101, "cg_unlockall_loot 1")
ControlSend("P2", "", 101, "{ENTER}", 0)
ControlSend("P3", "", 101, "unlockstats")
ControlSend("P3", "", 101, "{ENTER}", 0)
ControlSend("P3", "", 101, "cg_unlockall_classes 1")
ControlSend("P3", "", 101, "{ENTER}", 0)
ControlSend("P3", "", 101, "cg_unlockall_items 1")
ControlSend("P3", "", 101, "{ENTER}", 0)
ControlSend("P3", "", 101, "cg_unlockall_loot 1")
ControlSend("P3", "", 101, "{ENTER}", 0)
ControlSend("P4", "", 101, "unlockstats")
ControlSend("P4", "", 101, "{ENTER}", 0)
ControlSend("P4", "", 101, "cg_unlockall_classes 1")
ControlSend("P4", "", 101, "{ENTER}", 0)
ControlSend("P4", "", 101, "cg_unlockall_items 1")
ControlSend("P4", "", 101, "{ENTER}", 0)
ControlSend("P4", "", 101, "cg_unlockall_loot 1")
ControlSend("P4", "", 101, "{ENTER}", 0)
ControlSend("P5", "", 101, "unlockstats")
ControlSend("P5", "", 101, "{ENTER}", 0)
ControlSend("P5", "", 101, "cg_unlockall_classes 1")
ControlSend("P5", "", 101, "{ENTER}", 0)
ControlSend("P5", "", 101, "cg_unlockall_items 1")
ControlSend("P5", "", 101, "{ENTER}", 0)
ControlSend("P5", "", 101, "cg_unlockall_loot 1")
ControlSend("P5", "", 101, "{ENTER}", 0)
Dim $binFlag = False

WEnd

Func _Continue()
    $binFlag = Not $binFlag
EndFunc