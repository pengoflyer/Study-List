class Point {
    X: number;
    Y: number;
    static Z: number;

    // 构造方法
    constructor(X: number = 0, Y: number = 0) {
        this.X = X
        this.Y = Y
    }

    print() {
        console.log("X:", this.X, "Y:", this.Y)
    }
}

function test_point() {
    let p = new Point(1, 3)
    p.print()
    Point.Z = p.X + p.Y
}
test_point() 

function test_for() {
    for (let i: number = 0; i < 3; i++) {
        console.log(i)
    }

    let arr: number[] = [1,2,3]

    for (let index in arr) {
        console.log(index, arr[index])
    }

    for (let val of arr) {
        console.log(val)
    }
}

test_for()

