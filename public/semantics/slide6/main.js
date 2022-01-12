function getFormValues() {
  return {
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    street: document.querySelector("#street").value,
    zipCode: document.querySelector("#zipCode").value,
    city: document.querySelector("#city").value
  }
}

function clearFormErrors(values) {
  Object.keys(values).forEach(key => {
    document.querySelector(`#${key} ~ p`).textContent = '';
  });
}

function validate(values) {
  let isValid = true;
  
  const errors = {};
  Object.keys(values).forEach((key) => {
    if (!values[key]) {
      errors[key] = 'Required';
      isValid = false;
    }
  });

  return { errors, isValid };
}

function renderFormValues(values) {
  const output = document.querySelector("#output");
  output.classList.remove("hidden");
  output.innerHTML = JSON.stringify(values, null, 2);
}

function renderFormErrors(errors) {
  Object.keys(errors).forEach(key => {
    document.querySelector(`#${key} ~ p`).textContent = errors[key];
  });
}

document.querySelector("#btn-submit").addEventListener("click", () => {
  const values = getFormValues();
  const { isValid, errors } = validate(values);

  if (!isValid) {
    renderFormErrors(errors);
    return;
  }
  renderFormValues(values)
  clearFormErrors(values);
});
