const popup = document.querySelector(".full-screen");

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

const body = document.querySelector("body");

function showPopup(){
  popup.classList.remove("hidden");
  body.classList.add("blur");
}

function closePopup(){
  popup.classList.add("hidden");
  body.classList.remove("blur");
}

navToggle.addEventListener("click", ()=> {
  links.classList.toggle("show-links");
});