console.log(document.body.innerHTML)                            //innerHTML
console.log(document.body.querySelector(".cont").outerHTML)    //outerHTML

console.log(document.body.querySelector(".cont").innerText)   //innerText

console.log(document.body.querySelector(".cont").tagName)    //tagName

console.log(document.body.querySelector(".dkd").nodeName)    //nodeName

console.log(document.body.querySelector(".dkd").textContent)    //textContent

console.log(document.body.querySelector(".dkd").hidden = "false")    //hidden attribute

console.log(document.body.querySelector(".box").innerHTML = "People are fake")    //change the innerHTML content

console.log(document.querySelector(".box").hasAttribute("style"))           //hasAttribute to check given attribute is present or not

console.log(document.querySelector(".box").getAttribute("style"))           //getAttribute to check which attribute is present

console.log(document.querySelector(".box").setAttribute("style", "color: red"))        //setAttribute to update or change the attritube

//console.log(document.querySelector(".box").removeAttribute("style"))        //removeAttribute to remove the attribute

//console.log(document.querySelector(".box").hasAttribute("style"))  //again check given attribute is present or not after removeAttribute

console.log(document.querySelector(".box").attributes)                  //to know all the attributes of a element or class

console.log(document.designMode = "on")             //You can change website content using ' designMode = "on" '

const q = document.body.getElementsByClassName("box")
console.log(q[1].dataset)