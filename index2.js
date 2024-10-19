// document.body.style.backgroundImage = "url(https://uploads2.wikiart.org/images/remedios-varo/the-call.jpg!Large.jpg)";
// document.body.style.backgroundSize = "600px";
// document.body.style.backgroundRepeat = "no-repeat"
// document.body.style.backgroundPosition = "center";
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;
const name = document.getElementById("name");
const h1 = document.createElement("h1");
h1.textContent = "Learn More About the Artist";
document.body.prepend(h1);
h1.style.color = "white";
h1.style.fontSize = "35px";
const h3 = document.createElement("h3");
h3.textContent = "Enter your information below and we will send you a new artist to discover each week";
form.prepend(h3);
h3.style.color = "white";
h3.style.fontSize = "16px";



const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


window.addEventListener("load", () => {
  
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});


email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    error.textContent = "That's not an Email!";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
});string


