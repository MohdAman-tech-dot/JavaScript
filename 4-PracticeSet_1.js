// Que:1 Create a variable of type string and try to add a number to it
let str = "Mohd Aman"
let add = str+8441
console.log("Answer:1-",add)

// Que:2 Use typeof operator to find the datatype of the string in last question


// Que:3 Create a const object in javascript, Can you change it to hold a number later
const string = {
    name: "Mohd Aman"
}
string.age = 22
console.log("Answer:2-",string)

// Que:4 Try to add a new key to the const object in problem 3
let key = ""
let element = string[key]
console.log("Answer:3-",element)

// Que:5 write a j.s program to create a word meaning dictionary with 5 words
const dictionary = {
    "serene": "calm, peaceful, and untroubled",
    "meticulous": "showing great attention to detail; very careful and precise",
    "ephemeral": "lasting for a very short time",
    "lucid": "expressed clearly; easy to understand",
    "tenacious": "tending to keep a firm hold of something; persistent and determined"
};

console.log("Answer:5-",dictionary["lucid"]);  // Accessing meaning of "lucid"
