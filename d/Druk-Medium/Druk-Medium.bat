@ECHO OFF
xcopy /y "Druk-Medium.otf" %systemroot%\fonts

reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Fonts" /v "Druk-Medium (OpenType)" /t REG_SZ /d "Druk-Medium.otf" /f
