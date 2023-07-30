var Npc1 = /** @class */ (function () {
    function Npc1() {
    }
    Npc1.prototype.cacu = function (num1, num2) {
        return num1 + num2;
    };
    return Npc1;
}());
var Npc2 = /** @class */ (function () {
    function Npc2() {
    }
    Npc2.prototype.cacu = function (num1, num2) {
        return num1 - num2;
    };
    return Npc2;
}());
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.GetNum = function (num1, num2) {
        var result = this.delegate.cacu(num1, num2);
        console.log("result = ", result);
    };
    person.prototype.setDelegate = function (delegate) {
        this.delegate = delegate;
    };
    return person;
}());
function test_delegate() {
    var p = new person();
    p.setDelegate(new Npc1());
    p.GetNum(4, 1);
    p.setDelegate(new Npc2());
    p.GetNum(4, 1);
}
test_delegate();
