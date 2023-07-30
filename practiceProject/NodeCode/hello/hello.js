// console.log("hello Node")

class Hello {
    who = ""
    word = "somtyhing... guys!"
    constructor (who, word) {
        this.who = who
        if (word != undefined) {
            this.word = word
        }
    }
    setHello() {
        console.log(this.who + " say " + this.word)
    }
}

function hi() {
    let he = new Hello("jiji")
    he.setHello()
}

hi()

function test_fenhao() {
    // ()前一条语句必须加分号
    var a = 13;
    (function test() {
        console.log("test")
    })()

    // []前一条语句必须加分号
    let b = 4;
    [1, 3].forEach(element => {
        console.log(element)
    })
}

test_fenhao()


function test_data_type() {
    let arr = [1,3]
    console.log(typeof(arr), typeof(test_data_type))    // object function
    console.log(typeof(null))   // object
    console.log(arr instanceof Array, arr instanceof Object)    // true true
    console.log(null === null, undefined === undefined)         // true true
}

test_data_type()