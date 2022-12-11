"use strict"

let links = document.querySelectorAll('a[href*="://"]');

for(let link of links){
    link.style.color = "orange";
}