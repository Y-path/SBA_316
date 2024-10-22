const body = document.querySelector("body");

const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;
const name = document.getElementById("name");
const h1 = document.createElement("h1");
h1.textContent = "Artist Discovery";
h1.style.color = "white";
h1.style.fontSize = "40px";
h1.style.margin = "auto";
h1.style.marginBottom = "30px";
document.body.append(h1);

const h2 = document.createElement("h2");
h2.style.color = "white";
h2.style.fontSize = "12px";
h2.textContent = "Click on the image below";
h2.style.margin = "auto";
h2.style.marginBottom = "30px";
document.body.append(h2);

const image = document.createElement("image");
document.body.append(image);

form.style.margin = "auto";
form.style.marginBottom = "30px";
document.body.append(form);

const h3 = document.createElement("h3");
h3.textContent = "Upcoming Featured Artists";
h3.style.color = "white";
h3.style.fontSize = "20px";
h3.style.margin = "auto";
h3.style.marginBottom = "20px";
document.body.append(h3);

document.getElementById("list")
list.style.width = "180px";
list.style.margin = "auto";
list.style.color = "white"
list.style.marginBottom = "40px"
document.body.append(list)
const span = document.createElement("span")


let imagesArray = [
    {
        title: "The Call by Remedios Varo",
        url: "https://uploads2.wikiart.org/images/remedios-varo/the-call.jpg!Large.jpg"
    },
    {
        title: "The Gathering",
        url: "https://uploads7.wikiart.org/images/remedios-varo/the-gathering.jpg!Large.jpg"
    },
    {
        title: "Character by Remedios Varo",
        url: "https://uploads3.wikiart.org/images/remedios-varo/character.jpg!Large.jpg"
    }
];
 
function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagesArray.length);
    const randomImage = imagesArray[randomIndex].url;
    const randomTitle = imagesArray[randomIndex].title; 

    const imageEl = document.createElement("img");
    imageEl.src = randomImage;
    imageEl.title = randomTitle;
    imageEl.style.margin = "auto";
    imageEl.style.marginTop = "15px";
    
    imageEl.onclick = function() {
        window.open("https://www.wikiart.org/en/remedios-varo", "_blank");;
      };
    //   document.body.append(imageEl);
   h2.append(imageEl);
}
 window.onload = displayRandomImage;


const artists = ["Vincent Van Gogh", "Mark Rothko", "Egon Schiele"];

const fragment = document.createDocumentFragment();

for (let i in artists) {
    const li = document.createElement("li");
    li.textContent = artists[i];
    fragment.appendChild(li);
    
}
document.getElementById("list").appendChild(fragment);


document.getElementById("h1");
h1.addEventListener("click", function() {
    h1.textContent = "Discover a New Artist";
    h1.style.color = "yellow";
    h1.style.fontFamily = "Roboto"
    h1.insertBefore(h2);
   
});


h1.addEventListener("mouseover", function() {
    this.style.cursor = "pointer";
});


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
    alert("Thank you. We will be in touch!");
    document.getElementById("form").reset(); 
  
  }
 
});


function checkName() {
    const nameValue = document.getElementById("name").value;
     if (nameValue === "") {
      alert("Please enter your name.");
    }
};




// All the stuff below does not work
// I left it here to show all the work I put into this

//  document.getElementById("image");
// image.addEventListener("click", (event) => {
//      event.preventDefault();
//     window.open("https://www.wikiart.org/en/remedios-varo", "_blank");
// });

// function submitForm() {
//     alert("Thank you. We will be in touch!");
//     document.getElementById("form").reset();  
//   }

// const button = document.getElementById("button");
// button.setAttribute("name", "submitButton");
// button.setAttribute("disabled", "");

// const form2 = document.createElement("form2");
// formSubmit.classList.add("hidden")
// formSubmit.textContent = "Come back tomorrow for a new artist";
// image.append(formSubmit); 
// document.getElementsByClassName("hidden")

// function changeImage(x, image) {
//     if(x==1) {
//         image.src = "https://uploads2.wikiart.org/images/remedios-varo/the-call.jpg!Large.jpg";
//     }
//     if(x==2) {
//         image.src = "https://uploads6.wikiart.org/images/remedios-varo/creation-of-the-birds.jpg!Large.jpg";
//     }
//     }

// document.getElementById("image");
// image.addEventListener("mouseover", () => {
//     image.src = "https://uploads6.wikiart.org/images/remedios-varo/creation-of-the-birds.jpg!Large.jpg";
    
//     image.alt = "The Creation of the Birds";

// });

// image.addEventListener("mouseout", () => {
//     image.src = "https://uploads2.wikiart.org/images/remedios-varo/the-call.jpg!Large.jpg";
   
//     image.alt = "The Call";

// });

//  document.querySelector("form")
//   form.addEventListener("mouseover", () => {
//     form.setAttribute("style", "background-color: lightblue;");

//   });

//   document.getElementById("submit");
//   submit.addEventListener("click", () => {
//     submit.setAttribute("data-text", "Submitted!");
//   });

// document.getElementById("form2");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     form.classList.add("hidden");
//     form2.classList.remove("hidden");
// });

//  form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     form.classList.remove("active");
//     form.classList.add("hidden");
//     formSubmit.classList.remove("hidden");
//     formSubmit.classList.add("active");
//  });

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

