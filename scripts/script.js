const popup = document.querySelector(".full-screen");

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

function showPopup(){
  popup.classList.remove("hidden");
}

function closePopup(){
  popup.classList.add("hidden");
}

navToggle.addEventListener("click", ()=> {
  links.classList.toggle("show-links");
});