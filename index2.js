
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
const image = new Image();
const imageUrl = "https://uploads2.wikiart.org/images/remedios-varo/the-call.jpg!Large.jpg";
image.src = imageUrl;
image.style.margin = "20px"
h1.append(image);
const body = document.body;



let color = [255, 0, 0];

function changeBackgroundColor() {
    color[2]++; 
    color[0]--;  
    body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;   
    if (color>= 255) {
      clearInterval(intervalId);
    }
  }  
  const intervalId = setInterval(changeBackgroundColor, 80);

document.getElementById("image")
image.addEventListener("click", function() {
    window.open("https://www.wikiart.org/en/remedios-varo", "_blank");
});


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

