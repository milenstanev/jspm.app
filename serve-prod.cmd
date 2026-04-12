@echo off
cd /d "%~dp0"
echo Production build (jspm bundle + prod index.html)...
node node_modules\gulp\bin\gulp.js prod
if errorlevel 1 exit /b 1
echo.
echo Serving on http://localhost:3000 (SPA fallback enabled)...
echo Press Ctrl+C to stop.
node node_modules\serve\build\main.js . -s -l 3000 -n --no-port-switching
