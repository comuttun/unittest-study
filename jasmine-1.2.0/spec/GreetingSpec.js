// vim: ts=4 sts=4 sw=4 et ai si :

// この js ファイルにテストコードを記述する

describe("Greeting", function() {

    // テスト対象クラスのインスタンス
    var greeter;


    // 各テスト実行前に必ず実行される前処理
    beforeEach(function() {
        // 毎回インスタンスを生成する
        greeter = new Greeter();
    });

    // TODO: 以下にテストを記述

    describe("getGreeting()", function() {
        // 正常系テストケース1個目
        it("午前", function() {
            expect(greeter.getGreeting('morning')).toEqual('おはよう');
        });

        // 正常系テストケース2個目
        it("午後", function() {
            expect(greeter.getGreeting('afternoon')).toEqual('こんにちは');
        });

        // 正常系テストケース3個目
        it("夕方", function() {
            expect(greeter.getGreeting('evening')).toEqual('こんばんは');
        });

        // 異常系テストケース3個目
        it("未定義時刻文字列", function() {
            expect(greeter.getGreeting('不明な文字列')).toEqual(undefined);
        });

        // 仕様 ver.2 で追加となった仕様のテストケース
        it("午前、名前指定", function() {
            expect(greeter.getGreeting('morning', '山本')).toEqual('山本さん、おはよう');
        });

        it("午後、名前指定", function() {
            expect(greeter.getGreeting('afternoon', '田中')).toEqual('田中さん、こんにちは');
        });

        it("夕方、名前指定", function() {
            expect(greeter.getGreeting('evening', '石井')).toEqual('石井さん、こんばんは');
        });

        it("未定義時刻文字列、名前指定", function() {
            expect(greeter.getGreeting('不明な文字列', '石井')).toEqual(undefined);
        });
    });
});
