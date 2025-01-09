let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "aqua"

document.getElementById("crimson").style.backgroundColor = "crimson"

document.querySelector(".box").style.color = "SlateBlue"        //to select first element of all same classes to change

document.querySelectorAll(".box").forEach(c =>{
    c.style.backgroundColor = "violet"                         //to select all classes for changind
})

document.getElementsByTagName("div")                        //to find all tags like we want to see all div tags


let a = document.getElementsByTagName("div")

a[2].matches("#box")                                     //to check the selector is present or not (if present than print true else false)


e[3].closest(".container")                              //to check the nearest ancestor that matches the css selector

document.querySelector(".container").contains(e[2])       //to check the element that it contain or not

