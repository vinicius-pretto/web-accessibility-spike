const formFields = {
  firstName: document.querySelector("#firstName"),
  lastName: document.querySelector("#lastName"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
  street: document.querySelector("#street"),
  zipCode: document.querySelector("#zipCode"),
  city: document.querySelector("#city"),
};

Object.keys(formFields).forEach((key) => {
  const field = formFields[key];

  field.addEventListener("change", (e) => {
    const value = e.target.value.trim();
    if (!value) {
      setErrorMessage(key, "Please fill out this field");
    } else {
      setErrorMessage(key, "");
    }
  });
});

function getFormValues() {
  return {
    firstName: formFields.firstName.value.trim(),
    lastName: formFields.lastName.value.trim(),
    email: formFields.email.value.trim(),
    password: formFields.password.value.trim(),
    street: formFields.street.value.trim(),
    zipCode: formFields.zipCode.value.trim(),
    city: formFields.city.value.trim(),
  };
}

function clearFormErrors(values) {
  Object.keys(values).forEach((field) => {
    setErrorMessage(field, "");
  });
}

function validate(values) {
  let isValid = true;

  const errors = {};
  Object.keys(values).forEach((key) => {
    if (!values[key]) {
      errors[key] = "Please fill out this field";
      isValid = false;
    }
  });

  return { errors, isValid };
}

function setErrorMessage(field, error) {
  document.querySelector(`#${field} ~ p`).textContent = error;
}

function renderFormValues(values) {
  const output = document.querySelector("#output");
  output.classList.remove("visually-hidden");
  output.innerHTML = JSON.stringify(values, null, 2);
}

function renderFormErrors(errors) {
  Object.keys(errors).forEach((key) => {
    const error = errors[key];
    setErrorMessage(key, error);
  });
}

document.querySelector("#btn-submit").addEventListener("click", () => {
  const values = getFormValues();
  const { isValid, errors } = validate(values);

  if (!isValid) {
    const firstInvalidInput = Object.keys(errors)[0];
    formFields[firstInvalidInput].focus();
    renderFormErrors(errors);
    return;
  }
  renderFormValues(values);
  clearFormErrors(values);
});
