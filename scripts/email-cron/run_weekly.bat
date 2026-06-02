@echo off
REM NEG-AI-TIVE Weekly News Brief Cron
REM Run this via Windows Task Scheduler every Monday at 8:00 AM
REM
REM To install:
REM   1. Open Task Scheduler
REM   2. Create Basic Task > Weekly > Monday 8:00 AM
REM   3. Action: Start a program
REM   4. Program: C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist\scripts\email-cron\run_weekly.bat

cd /d "C:\Users\insig\.copaw\workspaces\wn4ZsX\neg-ai-tive-brutalist"

REM Activate Python environment if needed
REM call C:\Users\insig\.copaw\workspaces\wn4ZsX\.venv\Scripts\activate.bat

REM Run the news brief generator
python scripts\email-cron\weekly_news_brief.py >> email-cron\logs.txt 2>&1

REM Log timestamp
echo %date% %time% >> email-cron\runs.log
echo "Weekly brief generated" >> email-cron\runs.log
echo. >> email-cron\runs.log
