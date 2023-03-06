// Contact Me
// Form
const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = `Your ${input.placeholder}`;
      formHeading.style.opacity = "1";
    }, 300);
  });

  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = "Let's Talk";
      formHeading.style.opacity = "1";
    }, 300);
  });
});
// End of Form

// Slideshow
const slideshow = document.querySelector(".slideshow");

setInterval(() => {
  const firstIcon = slideshow.firstElementChild;

  firstIcon.classList.add("faded-out");

  const thirdIcon = slideshow.children[3];

  thirdIcon.classList.add("light");

  thirdIcon.previousElementSibling.classList.remove("light");

  setTimeout(() => {
    slideshow.removeChild(firstIcon);

    slideshow.appendChild(firstIcon);

    setTimeout(() => {
      firstIcon.classList.remove("faded-out");
    }, 500);
  }, 500);
}, 3000);
// End of Slideshow

// Form Validation
const form = document.querySelector('.contact-form');
const username = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const messages = document.querySelectorAll(".message");

const error = (input, message) => {
  input.nextElementSibling.classList.add("error")
  input.nextElementSibling.textContent = message;
}


const success = (input) => {
   input.nextElementSibling.classList.remove("error");
}

const checkRequireFields = (inputArr) => {
  inputArr.forEach(input => {
    if(input.value.trim() === "") {
      error(input, `${input.id} is required`);   
      } 
    })  
};


const checkLength = (input, min) => {
  if (input.value.trim().length < min) {
    error(input, `${input.id} must be at least ${min} characters`);
    return false;
  } else {
    success(input);
    return true;
  }
};

const checkEmail = (input) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEx.test(input.value.trim())) {
    success(input);
    return true;
  } else {
    error(input, "Email is not valid");
    return false;
  }
};

form.addEventListener("submit", e => {
 
  let validation = false;
  let checkName = checkLength(username,2);
  let checkSubject = checkLength(subject,2);
  let checkMessage = checkLength(message,20);
  let checkEmailAddress = checkEmail(email);
  checkRequireFields([username,email,subject,message]);

  if (checkName && checkSubject && checkMessage && checkEmailAddress) {
    validation = true;
  }

  //console.log(checkName,checkEmailAddress,checkSubject,checkMessage);
  if (validation) {
    window.location.href="survey.html";
  } else {
    e.preventDefault();
  }


})
// End of Form Validation
// End Contact Me