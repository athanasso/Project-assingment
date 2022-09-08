const icon = document.querySelector(".nav-toggle .bi");

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

const navIcon = document.querySelector(".toggle-btn .bi");

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

function togglenavIcon() {
  if (navIcon.classList.contains("bi-list")) {
    navIcon.classList.remove("bi-list");
    navIcon.classList.add("bi-x");
  }
  else {
    navIcon.classList.remove("bi-x");
    navIcon.classList.add("bi-list");
  }
}

navToggle.addEventListener("click", ()=> {
  links.classList.toggle("show-links");
});