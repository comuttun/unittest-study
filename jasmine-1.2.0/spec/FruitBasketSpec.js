// vim: fenc=utf8 ts=4 sts=4 sw=4 et ai si :

describe("FruitBasket", function() {

    beforeEach(function() {
        target = new FruitBasket();

        spyOn($.fn, 'val');
        spyOn($.fn, 'append');
    });

    describe("addFruitFromUI", function() {
        it("正常系", function() {
            expect($.fn.val).toReturn('Apple');
            expect($.fn.mostRecentCall.object.selector).toEqual('#fruitList option:selected');
            expect($.fn.val).toReturn('5');
            expect($.fn.mostRecentCall.object.selector).toEqual('#countToAdd');
            expect($.fn.empty).toHaveBeenCalled();
            expect($.fn.mostRecentCall.object.selector).toEqual('ol#fruitBasket');
            expect($.fn.append).toHaveBeenCalled();
            expect($.fn.mostRecentCall.object.selector).toEqual('ol#fruitBasket');
            //expect($.fn.append.mostRecentCall.args[0]).toHaveBeenCalled();
            target.addFruitFromUI();
        });
    });

});
