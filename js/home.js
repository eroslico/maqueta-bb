const body = document.querySelector("body"),
  modeToggle = document.querySelector(".mode-toggle"),
  sideBar = document.querySelector("nav"),
  sidebarToggle = document.querySelector(".sidebar-toggle");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const img = document.getElementById("logo");
  img.src.includes("claro")
    ? (img.src = "../css/img/oscuro.png")
    : (img.src = "../css/img/claro.png");
});

sidebarToggle.addEventListener("click", () => {
  sideBar.classList.toggle("close");
});

const profileImg = document.getElementById("profileimg");
const dropDown = document.querySelector(".dropdown");
profileImg.addEventListener("click", () => {
  dropDown.classList.contains("hide")
    ? dropDown.classList.remove("hide")
    : dropDown.classList.add("hide");
});
