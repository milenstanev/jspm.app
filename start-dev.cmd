@echo off
cd /d "%~dp0"
echo Building...
node node_modules\gulp\bin\gulp.js dev
if errorlevel 1 exit /b 1
echo Starting server...
node util\start.js
