// 工厂模式
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
var enemyType;
(function (enemyType) {
    enemyType[enemyType["Monster"] = 0] = "Monster";
    enemyType[enemyType["Boss"] = 1] = "Boss";
})(enemyType || (enemyType = {}));
var Enemy = /** @class */ (function () {
    function Enemy() {
    }
    Enemy.Create = function (etype) {
        switch (etype) {
            case enemyType.Monster:
                return new Monster();
            case enemyType.Boss:
                return new Boss();
        }
    };
    return Enemy;
}());
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'monster';
        return _this;
    }
    Monster.prototype.print = function () {
        console.log(this.name);
    };
    return Monster;
}(Enemy));
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'boss';
        return _this;
    }
    Boss.prototype.print = function () {
        console.log(this.name);
    };
    return Boss;
}(Enemy));
function test_factory() {
    var monster = Enemy.Create(enemyType.Monster);
    console.log(monster);
    var boss = Enemy.Create(enemyType.Boss);
    console.log(boss);
}
test_factory();
