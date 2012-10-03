// vim: ts=4 sts=4 sw=4 et ai si :

// 果物名前空間の定義
var fruit = {};

// 果物クラスを名前空間内に登録
function registerFruitClass(className) {
    $.getScript('src/fruits/' + className + '.js', function(data, textStatus, jqxhr) {
        fruit[className] = eval(className);
    });
}

registerFruitClass('Apple');

