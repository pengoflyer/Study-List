
// 单例模式
class SingleInstance {
    // 饿汉单例模式（一来就创建）
    // static Instance = new SingleInstance()
    

    // 懒汉单例模式（使用创建）
    private static instance: SingleInstance;
    
    private constructor(){}

    static Instance() {
        if (!SingleInstance.instance) {
            SingleInstance.instance = new SingleInstance()
        }
        return SingleInstance.instance
    }

    say() {
        console.log("SingleInstance")
    }
}

function test_single_instance() {
    // SingleInstance.Instance.say()
    SingleInstance.Instance().say()
}

test_single_instance()