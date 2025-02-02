var add = document.querySelector("#add");
var h4 = document.querySelector("h4");
var remove = document.querySelector("#remove");
 add.addEventListener("click",function(){
    h4.innerHTML = "FRIENDS";
    h4.style.color = "greenyellow";
    add.innerHTML = "ADDED";
    remove.innerHTML = "REMOVE";
 })
 remove.addEventListener("click",function(){
    remove.innerHTML = "Removed";
    add.innerHTML = "ADD FRIEND";
    h4.innerHTML = "STRANGER";
    h4.style.color = "red";
 })

