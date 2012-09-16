@echo off

set MYDIR=%~dp0
echo %MYDIR%
set ROOT_DIR=%MYDIR%..
set EXTLIB_DIR=%ROOT_DIR%\extlib
set LIB_DIR=%ROOT_DIR%\lib
set BOOTSTRAP_JS=%ROOT_DIR%\envjs.bootstrap.js
set MAIN_CLASS=org.mozilla.javascript.tools.shell.Main 

REM Uncomment if you wanna to override JAVA_HOME
REM set JAVA_HOME=

REM Change the following to match your environment
if "%JAVA_HOME%" == "" set JAVA_HOME=C:\Program Files (x86)\Java\jdk1.6.0_35

del /q TEST-*.xml

set CLASSPATH="%EXTLIB_DIR%\js.jar"
set JAVA=%JAVA_HOME:"=%\bin\java
set JAVA="%JAVA%"
set BOOTSTRAP_JS="%LIB_DIR%\envjs.bootstrap.js"
set ROOT_DIR="%ROOT_DIR%"

echo %JAVA% -cp %CLASSPATH% %MAIN_CLASS% -opt -1 %BOOTSTRAP_JS% %ROOT_DIR% %*
%JAVA% -cp %CLASSPATH% %MAIN_CLASS% -opt -1 %BOOTSTRAP_JS% %ROOT_DIR% %*
