var a = 15      //var is global variable
a = a+12
console.log(a)
var b = ("Mohd Aman")
var c = true

console.log(a,b,c)
console.log(typeof a, typeof b, typeof c)


// var Example
var p = 89
console.log(p)


// const Example
const x = 23
console.log(x)

// x = x+5              const is a block variabe thats why we can't change the value it is fix
// console.log(x)       


const z = 15
{
    const z = "Mohd"
    // console.log(z)
}
console.log(z)

// let 
let q = "Choudhary"
console.log(q)

// difference between var and let

// var agar global value k just baad console kiya to use print karega and fer block wale ko
// or agar block k baad console kiya to block ko print karega 
var r = true
console.log(r)
{
    var r = false
    console.log(r)
}
console.log(r)

// ------------

// let pehle jo block se bhar value(globaly define) h use hee print karega chahe uske baad console ya block k baad
let s = 456.45
console.log(s)
{
    let s = "Future Developer"
    console.log(s)
}
console.log(s)