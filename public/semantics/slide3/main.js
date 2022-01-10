let btnCount = 0;
let linkCount = 0;

const btnText = document.querySelector("#btn-text");
const linkText = document.querySelector("#link-text");

document.querySelector("#click-me-btn").addEventListener("click", () => {
  btnCount++;
  btnText.innerHTML = `Clicked: ${btnCount}`;
});

document.querySelector("#click-me-link").addEventListener("click", () => {
  linkCount++;
  linkText.innerHTML = `Clicked: ${btnCount}`;
});
