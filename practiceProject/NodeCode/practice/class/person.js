var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = "";
        this.name = name;
    }
    Person.prototype.say = function () {
        console.log(this.name + " say...");
    };
    return Person;
}());
// 继承
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(tclass, name) {
        var _this = _super.call(this, name) || this;
        _this.tclass = "数学";
        _this.tclass = tclass;
        return _this;
    }
    Teacher.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log(this.name + " teach " + this.tclass);
    };
    return Teacher;
}(Person));
function test() {
    var t = new Teacher("英语", "大王");
    t.say();
}
// test()
// 泛型
function add(num) {
    if (typeof (num) == "number") {
        num++;
        return num;
    }
    return num;
}
function test_generic_add() {
    console.log(add(1));
}
test_generic_add();
