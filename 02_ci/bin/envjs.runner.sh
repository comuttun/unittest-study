#!/bin/bash

MYDIR=$(dirname "$0")
MYDIR_FULLPATH=$(cd ${MYDIR} && pwd)
ROOTDIR_FULLPATH=$(cd ${MYDIR}/../ && pwd)
EXTLIB_DIR="${ROOTDIR_FULLPATH}/extlib"
LIB_DIR="${ROOTDIR_FULLPATH}/lib"
BOOTSTRAP_JS="${LIB_DIR}/envjs.bootstrap.js"
MAIN_CLASS=org.mozilla.javascript.tools.shell.Main 

# If your path doesn't include java, or you wanna to specify the other one, 
# please customize the following lines.

### If you wanna to override JAVA_HOME, it's required to unset current JAVA_HOME

# unset JAVA_HOME

SYSTEM=$(uname -s)

CYGWIN=0
MAC=0
LINUX=0

if [[ "${SYSTEM}" =~ ^CYGWIN ]]; then
    CYGWIN=1
    MY_JAVA_HOME="C:\\Program Files (x86)\\Java\\jdk1.6.0_35"
elif [[ "${SYSTEM}" =~ ^Darwin ]]; then
    MAC=1 
    MY_JAVA_HOME=/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
else
    # Assume the other is Linux, yes I know this is too rough.
    LINUX=1
    MY_JAVA_HOME=/usr/java/jdk1.6.0_35
fi


export JAVA_HOME=${JAVA_HOME:-${MY_JAVA_HOME}}

if [ ${CYGWIN} -eq 1 ]; then
    CLASSPATH=$(cygpath -w "${EXTLIB_DIR}/js.jar")
    ROOTDIR_FULLPATH_WIN=$(cygpath -w "${ROOTDIR_FULLPATH}")
    JAVA=$(cygpath "${JAVA_HOME}\\bin\\java")
    "${JAVA}" -cp "${CLASSPATH}" ${MAIN_CLASS} -opt -1 "${LIB_DIR}/envjs.bootstrap.js" "${ROOTDIR_FULLPATH_WIN}" "$@"
else
    CLASSPATH=${EXTLIB_DIR}/js.jar
    TARGET=$1
    JAVA=${JAVA_HOME}/bin/java
    ${JAVA} -cp "${CLASSPATH}" ${MAIN_CLASS} -opt -1 "${LIB_DIR}/envjs.bootstrap.js" "${ROOTDIR_FULLPATH}" "$@"
fi

