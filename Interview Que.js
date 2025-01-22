//  Question No.1
// function abc() {
//     console.log(abc.xyz)
// }
// abc()
// abc.xyz = 400
// abc.xyz = 200
// abc()                //output - undefined and 200

// Question No.2
// const arr = [1,2,3,4]
// arr[100] = 500
// console.log(arr)     //output - [1,2,3,4, <96 empty items>, 500]

// Question No.3
// console.log(typeof typeof 100)   //output - stirng

// Question No.4
// const ar = [..."Aman"]  // {...} its a spread operator  spread(फैलाना)
// console.log(ar) //spread each charactor of the string into individual elements: output-['A', 'm', 'a', 'n']

// Question No.5
// let a = parseInt("10+2")
// console.log(a)      //typeof is number and output = 10

// Question No.6
// let b = parseInt("7FM")
// console.log(typeof b)   //typeof is number and output = 7

// Question No.7
// let c = parseInt("M7F")
// console.log(c)   //typeof is number and output = NaN

// Question No.8
// console.log([1,2].map(num=>{
//     if (num>0)
//         return;
//     return num*2
// }))  	             //output = [undefined, undefined] two times bcause given 2 array elements [1,2]

// Question No.9
// function abc() {
//     return
// }
// console.log(abc())          //undefined

// Question No.10
// 'use stricts'       //no effect of this
// {
//     function pqr () {
//         console.log("Aman")
//     }
// }           //nothing any impact of braces { } on this
// pqr()       //output - Aman

// function r(a,b) {
//     'use strict'
//    a = 100
//    b = 200
//     return arguments[0] + arguments[1]
//     console.log(a+b)
// }
// console.log(r(300,400))      //output - 700 bcause of 'use strict' 
                                // 'use strict' enforces stricter parsing and error handling in JavaScript.One of the restrictions is that assigning new values to a or b does not affect the arguments object.

// const arr = [1,2,3,4,5,6,7,8]                            
// const newArr = arr.find((num) => num > 4)
// console.log(newArr)           //output - 5, bcause find method finds the greater than num after the 4

// let AR = [1,2,3,4,5,6,7,8]
// let newAR = AR.filter((num) => num > 4)
// console.log(newAR)      //output - [5,6,7,8]

// const aR =  [1,2,3,4,5,6,7,8]
// let newaR = aR.map((num) => num > 4)
// console.log(newaR)  
