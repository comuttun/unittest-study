単体テスト勉強会
=================

単体テスト勉強会用リポジトリです。

## 開催概要

* ~~時間: 2012/09/13 （木） 19:00 - 21:00 （第一回）~~
* 時間: 2012/10/04 （木） 19:00 - 21:00 （第二回）
* 場所: 函館市 中央図書館 2F 大研修室 [地図](http://goo.gl/maps/HcGZq)
    * 前回の中研修室から場所が変わっていますのでご注意ください。

## 内容

* **おそらく時間通りには進められない気がするので、合計した時間（90分）よりは長くなると思います。**

* 前回の簡単なおさらい（10分程度）
* 前回より詳しく、自動テスト（CI）について（15分程度）
* 実際に自動テスト環境を Jenkins を使って構築してみよう（ハンズオン）（15分程度）
* さらに詳しく単体テストについて（15分程度）
    * モッキング
    * カバレッジ
* モッキングを使ったテストを実践してみよう（ハンズオン）（15分程度）
* カバレッジの実演（10分程度）
* まとめ（10分程度）


**注意**

JavaScript を使用しますが、言語のひとつとして使用するだけです。
そのため、 JavaScript の単体テストの奥深くを紹介するわけではありません。

## ディレクトリ構成

    ├── jasmine-1.2.0                        --- jasmine-standalone-1.2.0.zip を展開したディレクトリです。
    │   ├── lib                                  --- Jasmine のライブラリ群です
    │   │   └── jasmine-1.2.0
    │   │       ├── jasmine.css
    │   │       ├── jasmine.js
    │   │       ├── jasmine-html.js
    │   │       └── MIT.LICENSE
    │   ├── spec                                 --- テストコードです。 spec というのに見慣れない方も多いと思いますが、 ruby の rspec の系統です。
    │   │   ├── GreeterSpec.js
    │   │   ├── PlayerSpec.js
    │   │   └── SpecHelper.js
    │   ├── SpecRunner.html                      --- テストを実行するための html です。ブラウザで開くと、テストが実行されます。
    │   ├── GreetingSpecRunner.html              --- こちらは Greeter.js 用のテスト実行 html です。
    │   └── src                                  --- テスト対象のソースコードです。
    │       ├── Greeter.js
    │       ├── Player.js
    │       └── Song.js
    ├── README.md
    └── zipfiles                              --- 各種アーカイブを入れたディレクトリです
        ├── env-js-1.2.13.zip                     --- Envjs という JavaScript でエミュレートするブラウザです。 Jenkins で自動テストするときに使います。
        ├── jasmine-reporters-0.2.1.zip           --- Jasmine のテスト結果を、 JUnit XML 形式などで出力するためのライブラリです。これも Jenkins で自動テストするときに使います。
        └── jasmine-standalone-1.2.0.zip          --- Jasmine 本体です。ハンズオンでは、これだけを使います。

## 参加するための準備

* 前回使用した知識は、思い出せる程度に確認しておいてください。
    * [JavaScript](https://github.com/comutt/unittest-study/wiki/JavaScript)
    * [Jasmine](https://github.com/comutt/unittest-study/wiki/Jasmine)
    
## 参加するための準備2

途中


