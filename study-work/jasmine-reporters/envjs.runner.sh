#!/bin/bash

MYDIR=$(dirname $0)
MYDIR_FULLPATH=$(cd ${MYDIR} && pwd)
MYDIR_FILEURL="file://${MYDIR_FULLPATH}"
LIBDIR=${MYDIR}/lib
java -cp ${LIBDIR}/js.jar:${LIBDIR}/jline.jar org.mozilla.javascript.tools.shell.Main -opt -1 ${MYDIR}/envjs.bootstrap.js ${MYDIR_FULLPATH} $@
