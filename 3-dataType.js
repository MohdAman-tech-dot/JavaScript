var a = 123
let b = "Mohd Aman"
const c = true
let p = null
let q = undefined
var r = 14.33

console.log(a, b, c, p, q, r)
// data type check with typeof function
console.log(typeof a, typeof b, typeof c, typeof p, typeof q, typeof r)

// ovject
let obj = {
    name: "Mohd Aman",
    "jobe role": "Web Developer",
    "is_handsome": false
}
console.log(obj)

// update with add new thing 
obj.salary = 1200000
console.log(obj)

// update for increase salary
obj.is_handsome = true
obj.salary =  3600000
console.log(obj)