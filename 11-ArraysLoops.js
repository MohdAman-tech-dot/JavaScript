//1. for loop
let a = [101,14,52,78,63]
for (let index=0; index<a.length; index++) {
    console.log("I:-",a[index])
}

// 2. for each loop
const b = ["mohd",13,"aman",5,"choudhar",]
b.forEach((value, index, array) => {
    console.log("II:-","Value:",value,  "index:", index,  "Array:",array)
})

// 3. for in loop
let obj = {
    1: "a",
    2: "b",
    3: "c"
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {   //build in properties chodke khud ki properties hee chahiye isliye "hasown" use hota h
        const element = obj[key];
        console.log("III:-",key, element)
    }
}

// 4. for of loop
let p = ["mohd aiyyoob", "mohd aman", "mohd ajaz"]
for (const element of p) {
    console.log("IV:-",element)
}

// performing square using for loop
let A = [8,5,9,6]
let B =[]
for (let index = 0; index < A.length; index++) {
    B.push(A[index]**2)
}
console.log("try:-",B)

// 5. map() :- creates a new array by performing some operation on each element
let q = [5,3,9,4,6]
let newArr = q.map((value, index, array)=>{
    return value**3     //power-3 :- q array's each multiply by 3 times with self 
})
console.log("V:-",newArr)

// 6. filter() :- filters an array with values that passes a test, creates a new array

function checkNum(no) {
    return no>6
}
let r = [5,8,9,6,7,3]

console.log("VI:-",r.filter(checkNum))

// 7. reduce() :- (apne next element se fer next fer next continues operation perform krega)
                    //EX- [2,5,6]=2*5=10 fer 10*6=60
let Arr = [5,2,3,6,7]

const mul = (a,b) => {
    return a*b
}
console.log("VII-Multiply:",Arr.reduce(mul))

// 8. Array.from :- used to create an array from any other object
let name = Array.from("Aman")
console.log(name)