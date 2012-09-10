単体テスト勉強会
=================

2012/09/13（木）開催の単体テスト勉強会用リポジトリです。

開催概要
---------

* 時間: 2012/09/13 （木） 19:00 - 21:00
* 場所: 函館市 中央図書館 2F 中研修室 [地図](http://goo.gl/maps/HcGZq)

開催趣旨
---------

* 単体テストとはなんぞ？
* 自動テストってなんぞ？
* 単体テストを実際に書いてみよう！（ハンズオン）
** JavaScript を使って、実際に単体テストをみんなで書いてみる
* 自動テストを動かしてみる（not ハンズオン）

*注意*

JavaScript を使用しますが、言語のひとつとして使用するだけです。
そのため、 JavaScript の単体テストの奥深くを紹介するわけではありません。

ディレクトリ構成
----------------

    ├── jasmine-1.2.0                        --- jasmine-standalone-1.2.0.zip を展開したディレクトリです。
    │   ├── lib                                  --- Jasmine のライブラリ群です
    │   │   └── jasmine-1.2.0
    │   │       ├── jasmine.css
    │   │       ├── jasmine.js
    │   │       ├── jasmine-html.js
    │   │       └── MIT.LICENSE
    │   ├── spec                                 --- テストコードです。 spec というのに見慣れない方も多いと思いますが、 ruby の rspec の系統です。
    │   │   ├── PlayerSpec.js
    │   │   └── SpecHelper.js
    │   ├── SpecRunner.html                      --- テストを実行するための html です。ブラウザで開くと、テストが実行されます。
    │   └── src                                  --- テスト対象のソースコードです。
    │       ├── Player.js
    │       └── Song.js
    ├── README.md
    └── zipfiles                              --- 各種アーカイブを入れたディレクトリです
        ├── env-js-1.2.13.zip                     --- Envjs という JavaScript でエミュレートするブラウザです。 Jenkins で自動テストするときに使います。
        ├── jasmine-reporters-0.2.1.zip           --- Jasmine のテスト結果を、 JUnit XML 形式などで出力するためのライブラリです。これも Jenkins で自動テストするときに使います。
        └── jasmine-standalone-1.2.0.zip          --- Jasmine 本体です。ハンズオンでは、これだけを使います。

参加するための準備
-------------------

自動テストもハンズオンしようと思ったのですが、
環境の差異を考慮して周到に準備するのが難しいので、あきらめます。

なので、各自のブラウザで Jasmine のサンプルテスト (SpecRunner.html) が正常に動くことを確認してください。

手順
^^^^^^

# このリポジトリの [zip 版](https://github.com/comutt/unittest-study/zipball/v0.0.1) をダウンロード 
# 展開
# jasmine-1.2.0/lib/SpecRunner.html をブラウザで開きます。
# 以下のように、テストが正常に実行されればOKです。
  ![Jasmineのテスト結果](https://raw.github.com/comutt/unittest-study/master/images/jasmine-result.png)
