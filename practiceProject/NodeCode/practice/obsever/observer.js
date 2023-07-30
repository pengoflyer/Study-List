// 观察者模式
var ObserverPerson = /** @class */ (function () {
    function ObserverPerson() {
        this.observers = new Array();
    }
    Object.defineProperty(ObserverPerson.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
            this.noticeObservers();
        },
        enumerable: false,
        configurable: true
    });
    ObserverPerson.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    // 通知监听的观察者，名字改变
    ObserverPerson.prototype.noticeObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.nameChange(this._name);
        }
    };
    return ObserverPerson;
}());
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.nameChange = function (newName) {
        console.log("Player \u76D1\u542C\u5230\u73A9\u5BB6\u540D\u5B57\u6539\u53D8\u3002\u65B0\u540D\u5B57".concat(newName));
    };
    return Player;
}());
var NearPlayer = /** @class */ (function () {
    function NearPlayer() {
    }
    NearPlayer.prototype.nameChange = function (newName) {
        console.log("NearPlayer \u76D1\u542C\u5230\u73A9\u5BB6\u540D\u5B57\u6539\u53D8\u3002\u65B0\u540D\u5B57".concat(newName));
    };
    return NearPlayer;
}());
function test_observer() {
    var op = new ObserverPerson();
    op.addObserver(new Player());
    op.addObserver(new NearPlayer());
    op.name = "曾国藩";
}
test_observer();
