// vim: ts=4 sts=4 sw=4 et ai si :

// この js ファイルにテストコードを記述する

describe("Greeting", function(){

    // テスト対象クラスのインスタンス
    var greeter;


    // 各テスト実行前に必ず実行される前処理
    beforeEach(function() {
        // 毎回インスタンスを生成する
        greeter = new Greeter();
    });

    // TODO: 以下にテストを記述

    describe("getGreeting()", function() {
        // テストケース1個目
        it("午前", function() {
            expect(greeter.getGreeting('morning')).toEqual('おはよう');
        });

        // テストケース2個目

        // テストケース3個目
    });
});
