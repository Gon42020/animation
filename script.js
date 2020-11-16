let interval=null;
function startTriangle() {
    elem=document.getElementById("triangle");
    elem.classList.add("content-triangle");
    elem.style.animationName="triangle-way";

    interval = setTimeout(()=>{
        elem.style.animationName="none";
        elem.classList.remove("content-triangle");
        elem.classList.remove("new-color-triangle");
    },10000);

    console.log(interval);


}
function stopTriangle() {
   clearTimeout(interval);
    elem.style.animationName="none";
    elem.classList.remove("content-triangle");
    elem.classList.remove("new-color-triangle");


}
function changeColorTriangle() {
    elem=document.getElementById("triangle");

    if (interval!=null){
    elem.classList.add("new-color-triangle");
    }
    interval=null;
}
function startCircleRandomColors() {
   let elem=document.getElementById("circle");
    colors=generateColor();
    elem.style.background=colors;
    elem.classList.add("content-circle");
    elem.style.animationName="circle-way";

    // interval = setTimeout(()=>{
    //     elem.style.animationName="none";
    //     elem.classList.remove("content-circle");
    // },5000);

}

function pauseCircle() {
    elem=document.getElementById("circle");
    elem.style.animationPlayState="paused";
}
function runningCicrle() {
    elem=document.getElementById("circle");
    elem.style.animationPlayState="running";
}
function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);

}

