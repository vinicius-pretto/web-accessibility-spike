const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

function openMenu() {
  menu.setAttribute("open", "");
}

function closeMenu() {
  menu.removeAttribute("open");
}

menuBtn.addEventListener("click", () => {
  if (menu.hasAttribute("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});
