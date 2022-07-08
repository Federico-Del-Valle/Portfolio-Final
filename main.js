// Menu toggle
const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    const visibility = menu.getAttribute("data-visible");

    if (visibility === "false") {
        menu.setAttribute("data-visible", true);
        toggle.setAttribute("aria-expanded", true);
    } else if (visibility==="true") {
        menu.setAttribute("data-visible", false);
        toggle.setAttribute("aria-expanded", false);
    }
});
// cursor animation
const texttypingspan = document.querySelector(".text-typing");
const textArray = ["Web Developer", "Code lover", "Software Engineer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        texttypingspan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        setTimeout(erase, newTextDelay);
    }
}
function erase() {
    if(charIndex > 0) {
        texttypingspan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    }
    else{
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
});