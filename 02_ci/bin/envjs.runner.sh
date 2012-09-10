#!/bin/bash

MYDIR=$(dirname $0)
MYDIR_FULLPATH=$(cd ${MYDIR} && pwd)
ROOTDIR_FULLPATH=$(cd ${MYDIR}/../ && pwd)
EXTLIB_DIR="${ROOTDIR_FULLPATH}/extlib"
LIB_DIR="${ROOTDIR_FULLPATH}/lib"

os=$(uname -o)


if [ "${os}" = "Cygwin" ]; then
    CLASSPATH=$(cygpath -w "${EXTLIB_DIR}/js.jar")
    CLASSPATH="${CLASSPATH};$(cygpath -w ${EXTLIB_DIR}/jline.jar)"
    ROOTDIR_FILEURL="file:///$(cygpath -w ${ROOTDIR_FULLPATH} | sed -e 's,\\,/,g')"
    FILES=''
    for f in $@; do
       dir=$(cd $(dirname ${f}) && pwd)
       FILES="${FILES} file:///$(cygpath -w ${dir}/$(basename ${f}) | sed -e 's,\\,/,g')"
    done
else
    CLASSPATH=${EXTLIB_DIR}/js.jar:${EXTLIB_DIR}/jline.jar
    ROOTDIR_FILEURL="file:///${ROOTDIR_FULLPATH}"
    FILES="$@"
fi

java -cp "${CLASSPATH}" org.mozilla.javascript.tools.shell.Main -opt -1 ${LIB_DIR}/envjs.bootstrap.js ${ROOTDIR_FILEURL} $FILES
