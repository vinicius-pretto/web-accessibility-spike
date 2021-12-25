const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

function openMenu() {
  menu.removeAttribute("aria-hidden");
}

function closeMenu() {
  menu.ariaHidden = true;
}

menuBtn.addEventListener("click", () => {
  if (menu.hasAttribute("aria-hidden")) {
    openMenu();
  } else {
    closeMenu();
  }
});

menu.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    closeMenu();
    menuBtn.focus();
  }
});
