// Que:1 What will do the following print in J.S
console.log("har\"".length)
// Anwer: Find the length of the string including backSlash(\)

// Que:2 Explore the includes, starts with and end with function of string
let str = "Hey,Mohd Aman one day you become a great developer never lose hope"
let startsWith = str.startsWith("Hey",0)
console.log("The word start with the above word or not:-", startsWith)

let endWith = str.endsWith("aman")
console.log("The word end with the above word or notstartsWith:-",endWith)

let Include = str.includes("hope")
console.log("Check the word present in it or not:-",Include)

// Que:3 Write a program to convert a string to lowercase
let lowercase = str.toLowerCase()
console.log("change to lowercase:-",lowercase)

// Que:4 Extract the amount, from this string
let string = "Please give me rupees 1000"
console.log(string.length)
let extract = string.slice(22,27)
console.log("Extract the amount:",extract)

// Que:5 Try to change 4th character of a string
let name = "Mohd Aman"
console.log("Before change:-",name)
let replace = name.replace("d","ammad")
console.log("After change:-",replace)