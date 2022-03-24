"use strict";

// GLOBAL

let num = document.querySelectorAll(".rate__num");

let btn = document.querySelector(".c-rate__btn");

let value

let rate = document.querySelector(".c-thanks--rate");

let cardRate = document.querySelector(".c-rate");

let cardThanks = document.querySelector(".c-thanks");

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
        element.classList.replace("rate__num--selected", "rate_num")
    })
    
    // Save the element I clicked
    let e = this
    
    //I apply the change to the clicked review
    e.classList.toggle("rate__num--selected");

    value = e.innerText;

}

function thanksPageRedirect(){

    // I verify if one rating selected
    if (value != null){
        
        // If yes, rating receive value selected
        rate.innerText = value

        // I hide the rating card
        cardRate.classList.toggle("c--hidden");

        // I make the thank you card visible
        cardThanks.classList.toggle("c--hidden");
        
    } // If not... nothing

}

