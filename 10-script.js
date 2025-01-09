// First method by chatgpt

function nameGenerator() {
// Strings of words separated by spaces
let adjectives = "Crazy Amazing Fire";
let nouns = "Engine Foods Garments";
let extras = "Limited Bros Hub";

// Convert string to individual words using split(" ")
let adj = adjectives.split(" ")[Math.floor(Math.random() * 3)];
let noun = nouns.split(" ")[Math.floor(Math.random() * 3)];
let extra = extras.split(" ")[Math.floor(Math.random() * 3)];

return `${adj} ${noun} ${extra}`;
}

console.log(nameGenerator());
