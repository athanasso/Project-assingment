const popup = document.querySelector(".full-screen");

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

const icon = document.querySelector(".nav-toggle .bi");

function showPopup(){
  popup.classList.remove("hidden");
}

function closePopup(){
  popup.classList.add("hidden");
}

navToggle.addEventListener("click", ()=> {
  links.classList.toggle("show-links");
});

function toggleIcon() {
  if (icon.classList.contains("bi-arrow-up-square-fill")) {
    icon.classList.remove("bi-arrow-up-square-fill");
    icon.classList.add("bi-arrow-down-square-fill");
  }
  else {
    icon.classList.remove("bi-arrow-down-square-fill");
    icon.classList.add("bi-arrow-up-square-fill");
  }
}