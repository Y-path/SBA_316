
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;
const name = document.getElementById("name");
const h1 = document.createElement("h1");
h1.textContent = "Artist Discovery";
document.body.prepend(h1);
h1.style.color = "white";
h1.style.fontSize = "40px";
const h2 = document.createElement("h2");
h2.style.color = "white";
h2.style.fontSize = "12px";
h2.textContent = "Click on the image below"
h1.append(h2)
const image = new Image();
const imageUrl = "https://uploads2.wikiart.org/images/remedios-varo/the-call.jpg!Large.jpg";
image.src = imageUrl;
image.style.margin = "20px"
h2.append(image);
const body = document.body;
const formSubmit = document.createElement("formSubmit");
formSubmit.classList.add("hidden")
formSubmit.textContent = "Come back tomorrow for a new artist";
image.append(formSubmit); 
document.getElementsByClassName("hidden")

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

function checkName() {
    const nameValue = document.getElementById("name").value;
   
    if (nameValue === "") {
      alert("Please enter your name.");
    }
};

function submitForm() {
    alert("Thank you. We will be in touch!");
    document.getElementById("form").reset();
  }


// below does not work
 
 
 form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.remove("active");
    form.classList.add("hidden");
    formSubmit.classList.remove("hidden");
    formSubmit.classList.add("active");
 });



// form.addEventListener("submit", function(event) {
//    event.preventDefault(); 
//    const formData = new FormData(event.target);
//    const newForm = document.getElementsByClassName

// })  

//   form.className = "form";
//   console.log(form.outerHTML);
// function submitForm() {
//     alert("Thank you. We will be in touch!");
//     document.getElementsByClassName = "submitted"  
// }

// document.