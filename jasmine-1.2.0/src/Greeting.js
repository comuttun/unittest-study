// vim: ts=4 sts=4 sw=4 et ai si :

// 挨拶クラス
function Greeter() {}

// 時間に適した挨拶を返す
Greeter.prototype.getGreeting = function(greetingTime, name) {

    var greeting = "";


    // TODO: 下記を適切に実装する
    if (greetingTime == 'morning') {
        greeting = "おはよう";
    } else if (greetingTime == 'afternoon') {
        greeting = "こんにちは";
    } else if (greetingTime == 'evening') {
        greeting = "こんばんは";
    } else {
        return undefined;
    }

    if (name) {
        greeting = name + "さん、" + greeting;
    }

    return greeting;
};

// 時間に適した挨拶をダイアログ表示する
Greeter.prototype.showGreeting = function() {
    var greetingTime = $('input[name=greetingTime]:checked').val();
    var name = $('#personName').val();

    var greeting = this.getGreeting(greetingTime, name);
    if (greeting) {
        alert(greeting);
    } else {
        alert('エラー');
    }
};

// Greeter のインスタンス化
var greeter = new Greeter();
