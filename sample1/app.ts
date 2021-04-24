function logged(constructorFn: Function) {
    console.log("Decorator")
}

@logged
class Person {
    constructor() {
        console.log("Hey")
    }
}

let p = new Person()

function logging(value: boolean) {
    return value ? logged : null
}


// @logging(true)
// class Fruit {

// }


function printable(consFn: Function) {
    consFn.prototype.print = function () {
        console.log(this)
    }
}




