
function clickFunction(){
    alert("The first one!");
}

function mouseOverFunction(){
    btn.style.background = "red";
}

function mouseLeaveFunction(){
    btn.style.background = null;
}

function resizeFunction(){
    win.style.background = "red";
    win.style.fontFamily = " Indie Flower, cursive";
}

let btn = document.getElementById("btn");
btn.addEventListener("click",clickFunction);
btn.addEventListener("mouseover", mouseOverFunction);
btn.addEventListener("mouseleave", mouseLeaveFunction);


let win = document.getElementById("jsPractice");
console.log(win);
win.addEventListener("resize", resizeFunction);
