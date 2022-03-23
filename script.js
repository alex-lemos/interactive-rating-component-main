"use strict";

// GLOBAL

let num = document.querySelectorAll(".rate__num");

let btn = document.querySelector(".c-rate__btn");

let value

let rate = document.querySelector(".c-thanks--rate");



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

    value = e.innerText;

    console.log(value);

}

function thanksPageRedirect(){

    localStorage.removeItem("rate");
    
    if (value != null){

        localStorage.getItem("rate", value)

        location.href = "thanks.html"

    }
    
}

