const title=document.querySelector("#title")

function here(){
    title.innerHTML="The mouse is here!";
    title.style.color="green";
}

function gone(){
    title.innerHTML="The mouse is gone!";
    title.style.color="blue";
}

function right(){
    title.innerHTML="That was a right click!";
    title.style.color="orange";
}

function resize(){
    title.innerHTML="you just resized!";
    title.style.color="purple";
}

title.addEventListener("mouseenter", here); 
title.addEventListener("mouseleave", gone); 
window.addEventListener("contextmenu", right); 
window.addEventListener("resize", resize); 

console.log("hello")