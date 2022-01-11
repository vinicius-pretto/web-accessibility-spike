const darkModeSwitch = document.querySelector("#dark-mode-switch");
const body = document.querySelector("body");
const KeyCode = {
  SPACE: "Space",
  ENTER: "Enter",
};

function toggleSwitch() {
  const switchControl = document.querySelector(
    "#dark-mode-switch .switch__control"
  );
  const ariaChecked = switchControl.getAttribute("aria-checked");
  const isChecked = ariaChecked === "true" ? false : true;
  switchControl.setAttribute("aria-checked", isChecked);

  if (isChecked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}

darkModeSwitch.addEventListener("keypress", (e) => {
  if (e.code === KeyCode.SPACE || e.code === KeyCode.ENTER) {
    toggleSwitch();
  }
});
darkModeSwitch.addEventListener("click", toggleSwitch);
