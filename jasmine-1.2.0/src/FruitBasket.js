// vim: ts=4 sts=4 sw=4 et ai si :

// フルーツバスケットクラス
function FruitBasket() {}

FruitBasket.prototype._fruits = [];

// バスケットに果物を追加
FruitBasket.prototype.addFruit = function(fruit) {
    this._fruits.push(fruit);
};

// バスケットに果物を追加（画面から用）
FruitBasket.prototype.addFruitFromUI = function() {
    var fruitName = $('#fruitList option:selected').val();
    var count = $('#countToAdd').val();
    if (!count) {
        alert('個数を入力してください');
        return;
    }
    this._fruits.push(new fruit[fruitName](parseInt(count)));

    this.displayAllFruitsInfo();
};

// バスケットに入っている果物情報を全て取得する
FruitBasket.prototype.getAllFruitsInfo = function() {
    var info = [];
    for (var i = 0; i < this._fruits.length; i++) {
        var fruit = this._fruits[i];
        info.push("果物名:" + fruit.getName() + " 数量:" + fruit.getCount());
    }

    return info;
};

// バスケットに入っている果物情報を全て表示する
FruitBasket.prototype.displayAllFruitsInfo = function() {
    var list = $('ol#fruitBasket');

    list.empty();
    var allFruitsInfo = this.getAllFruitsInfo();
    for (var i = 0; i < allFruitsInfo.length; i++) {
        var info = allFruitsInfo[i];
        var item = $('<li></li>');
        item.text(info);
        list.append(item);
    }
};

// リスト初期化
FruitBasket.prototype.initializeList = function() {
    var list = $('#fruitList');
    for (var key in fruit) {
        var item = $('<option></option>');
        item.val(key).text(new fruit[key](0).getName());
        list.append(item);
    }
}

// FruitBasket のインスタンス化
var fruitBasket = new FruitBasket();


