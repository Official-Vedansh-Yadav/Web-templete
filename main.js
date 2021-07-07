console.log("Web-Templete Created by Vedansh Yadav");

var hamburger = document.querySelector(".hamburger");
var links = document.querySelector(".links");


hamburger.addEventListener('click', ()=>{
         links.classList.toggle("visible");
})