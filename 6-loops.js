// for loop
let a = 5
for (let i=0; i<5; i++) {
    console.log(i)
}

// forin loop
let obj= {
    name: "aman",
    role: "developer",
    salary: 1000000
}
for (let key in obj) {
        let element = obj[key]      // to show output for elements
        console.log(key,element)
}


// forof loop
for (const characters of "Aman") {
    console.log(characters)
}

// while loop
let p = 1
while (p < 6) {
    console.log(p)
    p++
}

// do-while loop
let q = 9
do {
    console.log(q)
    q++
} while (q < 9)