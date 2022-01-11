document.querySelector("#btn-submit").addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const errorName = document.querySelector("#error-name");
  const errorEmail = document.querySelector("#error-email");

  if (!name) {
    errorName.textContent = "Required";
  }
  if (!email) {
    errorEmail.textContent = "Required";
  }

  const user = {
    name,
    email,
  };

  if (!user.name || !user.email) {
    return;
  }
  const output = document.querySelector("#output");
  output.classList.remove("hidden");
  output.innerHTML = JSON.stringify(user, null, 2);

  errorName.textContent = "";
  errorEmail.textContent = "";
});
