// vim: ts=4 sts=4 sw=4 et ai si :

describe("Apple", function() {

    describe("getName", function() {
        var target = new Apple(0); 
        it("正常系", function() {
            expect(target.getName()).toEqual("りんご");
        });
    });

    describe("getCount", function() {
        it("5", function() {
            var target = new Apple(5); 
            expect(target.getCount()).toEqual(5);
        });
        it("10", function() {
            var target = new Apple(10); 
            expect(target.getCount()).toEqual(10);
        });
    });

});
