let arr = ["a", 1, 5, 4, 1, 5]
//index :-  0, 1,2,3,4,5
console.log(arr)

console.log(arr[4])             //access the particular index element
console.log(arr[0])

console.log("length of the array:", arr.length)     //check the length of the array

arr[0] = 9
console.log(arr)            //change the value

console.log(typeof arr)     //in j.s arrays are objects, The typeof operator on arrays return object



/* Array's Methods */

// 1.toString() :- convert into a string
let array = [1, 2, "aman", 7, 8, 9]
console.log("1:-", array.toString())

// 2.join() :- join all the array elements using a seprator
console.log("2:-", array.join("-"))

// 3.pop() :- remove last element from the array
array.pop()
console.log("3:-",array)

// 4.push() :- add a new element at the end of the array
array.push("Choudhary")
console.log("4:-",array)

// 5.shift() :- remove first element and returns it
array.shift()
console.log("5:-",array)
console.log(array.length)

// 6.unshift() :- add the new element at the beginning and return new array length
arr.unshift(199)
console.log("6:-",arr)

// 7.delete :- delete the array element     -- delete is an operator
let d = [101, 102, 103, 104, 105]
delete d[1]
console.log("7:-",d)
console.log(d.length)

// 8.concat() :- use to join arrays to the given array
let a1 = ["A", "M", "A", "n"]
let a2 = [9, 5, 7, 8, 6]
let a3 = ["Mohd Aman", "Choudhary saab"]
let c = a1.concat(a2)
console.log("8:-",c)

// 9.sort() :- sort method is used to sort an array alphabatically  -- numaric value always first
let a = ["a", 1, "m", 7, "f"]
console.log("9:-",a.sort())

// 10.splice() :- splice can be used to add new item to an array
let b = ["Mohammad", "Aman", "Choudhary"]
b.splice(1, 2, "Aiyyoob")   //1-position, 2-no.of element to remove, Aiyyoob-Element to be added
console.log("10:-",b)


// 11.slice() :- slice out a piece from an array. It create a new array
const num = [12,15,7,5]
const No = num.slice(0,2) // 1 is start index where want to start and 3 is end index but include 
console.log("11:-",No)

// negative method of slice()
const string = ["Aman", "Ajaz", "Wild", "Developer"]
const name = string.slice(-3, -1)   //Negative numbers select from the end of the array
console.log("11.1",name)


// 12.reverse() :- reverse the element in the source array
const p = ["My", "Name", "is", "Aman"]
p.reverse()
console.log("12:-",p)


