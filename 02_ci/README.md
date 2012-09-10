Jenkins で CI しよう
=====================


https://github.com/comutt/unittest-study.git を参照する Free style project を作る
(branch: b_ci)


以下の内容で、 "Execute shell" ステップを登録する

unittest-study/02_ci/bin/envjs.runner.sh unittest-study/02_ci/junit_xml_reporter.html

Windows の場合は、 Cygwin を入れた上で、
以下の内容で "Execute windows batch command" を登録する。

bash -c "unittest-study/02_ci/bin/envjs.runner.sh unittest-study/02_ci/junit_xml_reporter.html"

