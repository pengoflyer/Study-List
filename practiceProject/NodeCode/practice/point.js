var Point = /** @class */ (function () {
    // 构造方法
    function Point(X, Y) {
        if (X === void 0) { X = 0; }
        if (Y === void 0) { Y = 0; }
        this.X = X;
        this.Y = Y;
    }
    Point.prototype.print = function () {
        console.log("X:", this.X, "Y:", this.Y);
    };
    return Point;
}());
function test_point() {
    var p = new Point(1, 3);
    p.print();
    Point.Z = p.X + p.Y;
}
test_point();
function test_for() {
    for (var i = 0; i < 3; i++) {
        console.log(i);
    }
    var arr = [1, 2, 3];
    for (var index in arr) {
        console.log(index, arr[index]);
    }
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var val = arr_1[_i];
        console.log(val);
    }
}
test_for();
