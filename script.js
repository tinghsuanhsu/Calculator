let currentValue = 1;

function add(args) {
    const results = args.reduce((total, elem )=> total + elem, 0)
    return results
}

function subtract(args) {
    const results = args.reduce((total, elem )=> total - elem, 0)
    return results
}


function multiply(args) {
    const results = args.reduce((total, elem )=> total * elem, 1)
    return results
}

function divide(args) {
    if (args.every(x => x !== 0)) {
        const results = args.reduce((total, elem )=> total / elem, 0)
        return results
    } 
}

function operate(currentValue, operator, nextValue) {
    switch (operator) {
        case '+' :
            return currentValue + add(nextValue)
        case '-' :
            return currentValue + subtract(nextValue)
        case '*' :
            return currentValue + multiply(nextValue)
        case '/' :
            return currentValue + divide(nextValue)
    }
}

console.log(`current value : ${currentValue}, total : ${currentValue + add([3])}`)
console.log(`current value : ${currentValue}, total : ${currentValue + subtract([3])}`)
console.log(`current value : ${currentValue}, total : ${currentValue + multiply([3])}`)
console.log(`current value : ${currentValue}, total : ${currentValue + divide([0])}`)
console.log(`current value : ${currentValue}, total : ${operate(currentValue, '-', [3])}`)
