document.querySelector("#btn-submit").addEventListener("click", () => {
  const user = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
  };

  const output = document.querySelector("#output");
  output.classList.remove("hidden");
  output.innerHTML = JSON.stringify(user, null, 2);
});
