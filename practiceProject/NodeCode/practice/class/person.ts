
class Person {
    name:string = ""

    constructor(name: string) {
        this.name = name
    }

    say() {
        console.log(this.name+" say...")
    }
}

// 继承
class Teacher extends Person {
    tclass: string = "数学"

    constructor(tclass: string, name :string) {
        super(name)
        this.tclass = tclass
    }

    say() {
        super.say()
        console.log(this.name + " teach " + this.tclass)
    }
}

function test() {
    let t = new Teacher("英语", "大王")
    t.say()
}
// test()

// 泛型
function add<T>(num: T):T {
    if (typeof(num) == "number") {
        num++
        return num
    }
    return num
}

function test_generic_add() {
    console.log(add<number>(1))
}
test_generic_add()