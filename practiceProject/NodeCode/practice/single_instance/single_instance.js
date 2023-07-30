// 单例模式
var SingleInstance = /** @class */ (function () {
    function SingleInstance() {
    }
    SingleInstance.Instance = function () {
        if (!SingleInstance.instance) {
            SingleInstance.instance = new SingleInstance();
        }
        return SingleInstance.instance;
    };
    SingleInstance.prototype.say = function () {
        console.log("SingleInstance");
    };
    return SingleInstance;
}());
function test_single_instance() {
    // SingleInstance.Instance.say()
    SingleInstance.Instance().say();
}
test_single_instance();
