// GLOBAL

let num = document.querySelectorAll(".rate__num");

let btn = document.querySelector(".container__btn");

// EVENT

num[0].addEventListener("click", modifyBg);
num[1].addEventListener("click", modifyBg);
num[2].addEventListener("click", modifyBg);
num[3].addEventListener("click", modifyBg);
num[4].addEventListener("click", modifyBg);

btn.addEventListener("click",thanksPageRedirect);

// FUNCTION

function modifyBg(){

    // I reset the rating
    num.forEach(function(element){
        if (element.className != "rate__num"){
            element.className = "rate__num"
        }
    })
    
    // Save the element I clicked
    let e = this
    
    //I apply the change to the clicked review
    if (e.className == "rate__num"){
        e.className = "rate__num--selected";
    } else {
        e.className = "rate__num";
    }

    console.log(e.getAttribute("num"))
}

function thanksPageRedirect(){
    location.href = "thanks.html"
}