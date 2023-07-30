// 代理模式
interface ICacl {
    cacu(num1: number, num2: number): number
}

class Npc1 implements ICacl {
    cacu(num1: number, num2: number): number {
        return num1 + num2
    }
}

class Npc2 implements ICacl {
    cacu(num1: number, num2: number): number {
        return num1 - num2
    }
}

class person {
    delegate: ICacl // 代理

    GetNum(num1: number, num2: number) {
        let result = this.delegate.cacu(num1, num2)
        console.log("result = ", result)
    }

    setDelegate(delegate: ICacl) {
        this.delegate = delegate
    }
}


function test_delegate() {
    let p = new person()

    p.setDelegate(new Npc1())
    p.GetNum(4, 1)

    p.setDelegate(new Npc2())
    p.GetNum(4,1)
}

test_delegate()