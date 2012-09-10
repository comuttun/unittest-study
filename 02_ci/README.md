Jenkins で CI しよう
=====================

Git plugin を Jenkins に入れる

Mange Jenkins -> Configure で、
以下の項目を設定する

* Git plugin
    * Global Config user.name Value
    * Global Config user.email Value

https://github.com/comutt/unittest-study.git を参照する Free style project を作る
(branch: b_ci)

Add build step
----------------


以下の内容で、 "Execute shell" ステップを登録する

`02_ci/bin/envjs.runner.sh unittest-study/02_ci/junit_xml_reporter.html`

Windows の場合は、 Cygwin を入れた上で、
以下の内容で "Execute windows batch command" を登録する。

`bash -c "02_ci/bin/envjs.runner.sh 02_ci/junit_xml_reporter.html"`


Add post-build action
----------------------

* Publish JUnit test result report
    * TEST-*.xml
        * エラーが出ても無視する

