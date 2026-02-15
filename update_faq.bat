@echo off
setlocal enabledelayedexpansion

echo [1/3] Importing CSV to JSON...
python maintenance\import_faq.py
if %ERRORLEVEL% neq 0 (
    echo Error during import.
    pause
    exit /b %ERRORLEVEL%
)

echo [2/3] Generating FAQ Site...
python generate_site.py
if %ERRORLEVEL% neq 0 (
    echo Error during site generation.
    pause
    exit /b %ERRORLEVEL%
)

echo [3/3] Saving backup to Git...
git add faq_source.json ../sunnet-renewal/faq/
set TIMESTAMP=%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set TIMESTAMP=%TIMESTAMP: =0%
git commit -m "Auto-backup FAQ update on %TIMESTAMP%"

echo.
echo ========================================
echo FAQ Update Successful!
echo ========================================
pause
