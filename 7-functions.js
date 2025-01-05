function sub(a, b) {
    console.log("addition=", a - b)
}
sub(7, 1)

// use for chage the name to many lines
function name(a) {
    console.log("Hey," + a + "Never gone lose hope and never give up")
    console.log("Hey," + a + "You are the best developer")
    console.log("Hey," + a + "Always be polite with everyone")
    console.log("Hey," + a + "Never show attitude")
}
name(" 'Mohd Aman Choudhary'- ")

// function with return
function sum(x, y, z = 2) {
    return x + y + z
}
result1 = sum(9, 2)
result2 = sum(4, 1)
result3 = sum(7, 5)

console.log("Substraction=", result1)
console.log("Substraction=", result2)
console.log("Substraction=", result3)

// Arrow function
const func1 = (x) => {
    console.log("Hey, I'm a arrow function:", x)
}

func1(24)
func1(12)
func1(65)