// vim: ts=4 sts=4 sw=4 et ai si :

// コンストラクタ
function Apple(count) {
    this._count = count;
}

Apple.prototype.getName = function() {
    return "りんご";
};

Apple.prototype.getCount = function() {
    return this._count;
};
