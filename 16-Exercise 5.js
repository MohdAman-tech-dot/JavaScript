function createCard(title, cName, Views, monthOld, duration, thumbnail) {
    if (Views<1000000) {
        vie = Views/1000 + "K"
    }
    else if (Views>1000000) {
        vie = Views/1000 + "M"
    }
    else {
        vie = Views/1000 +"K"
    }

    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsule">31:20</div>
    </div>
    <div class="text">
        <h2>${title}</h2>
        <p>${cName} . ${vie}views . ${monthOld} months ago</p>
    </div>
  </div>`

  document.querySelector(".container").innerHTML = html + html  
}

createCard ("Installing VS Code & How Website Work | Sigma Web Development Cource - Tutorial #1", "CodeWithHarry", 727000, 2, "31:20","thumbnail.jpg")