const errorText = document.getElementById("error-text");
const submmitBtn = document.getElementById("submit-btn");
const inputField = document.getElementById("input-text");

let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputField.value === "") {
    errorText.innerText = "Enter your email address";
    inputField.classList.add("error");
  } else if (!inputField.value.match(emailFormat)) {
    errorText.innerText = "Invalid Email Address";
    inputField.classList.add("error");
  } else {
    alert("email address submitted");
    inputField.value = "";
  }
});

inputField.addEventListener("input", () => {
  if (inputField.value.match(emailFormat)) {
    errorText.innerText = "";
    inputField.classList.remove("error");
  }
});
