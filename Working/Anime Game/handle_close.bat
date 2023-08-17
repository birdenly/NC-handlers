timeout /t -1
rem find the process ID
for /F "tokens=2" %%T in ('tasklist /FI "ImageName eq GenshinImpact.exe" /fo table /nh') do ( set pid=%%T)

rem set the current dir to where the bat is running from
pushd "%~dp0"

rem find the id of the handle to close
for /F "tokens=6 skip=4" %%T in ('handle64 -p %pid% -a mhyprot2') do ( set mut=%%T)

rem close handle
handle64 -c %mut% -p %pid% -y
