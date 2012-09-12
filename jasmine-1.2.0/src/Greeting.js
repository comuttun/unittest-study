// vim: ts=4 sts=4 sw=4 et ai si :

// 挨拶クラス
function Greeter() {}

// 時間に適した挨拶を返す
Greeter.prototype.getGreeting = function(greetingTime, name) {

    var greeting = "";

    // TODO: 下記を適切に実装する
    if (greetingTime == 'morning') {
        greeting = undefined;
    } else if (greetingTime == 'afternoon') {
        greeting = undefined;
    } else if (greetingTime == 'evening') {
        greeting = undefined;
    } else {
        greeting = undefined;
    }

    return greeting;
};

// 時間に適した挨拶をダイアログ表示する
Greeter.prototype.showGreeting = function() {
    var greetingTime = $('input[name=greetingTime]:checked').val();
    var name = $('#personName').val();

    alert(this.getGreeting(greetingTime, name));
};

// Greeter のインスタンス化
var greeter = new Greeter();
