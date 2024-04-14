const meuMenu = document.querySelector(".content");
const menuToggle = document.querySelector(".menu-toggle");
const tres = document.querySelector(".three");
const um = document.querySelector(".one");

menuToggle.addEventListener("click", () => {
  meuMenu.classList.toggle("on");
  if (meuMenu.classList.contains("on")) {
    um.style.transform = "rotate(45deg) translate(5px, -8px)";
    tres.style.transform = "rotate(-45deg) translate(20px, -6px)";
    menuToggle.style.marginTop = "14px"
    menuToggle.style.right = "86px"
  } else {
    um.style.transform = "";
    tres.style.transform = "";
    menuToggle.style.marginTop = ""
    menuToggle.style.right = ""
  }
});