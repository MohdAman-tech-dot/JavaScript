let random = Math.random()
console.log(random)
let a = prompt("Enter the first number")
let c = prompt("Enter the operation")
let b = prompt("Enter the second number")

let obj = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*"
}


if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}