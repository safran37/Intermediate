const mobile = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close");
const click = document.querySelectorAll(".click");
const showIt = document.querySelectorAll(".show");
const arrow = document.querySelectorAll(".arrow");
hamburger.addEventListener("click", () => {
  mobile.style.display = "flex";
});
closeButton.addEventListener("click", () => {
  mobile.style.display = "none";
});
click.forEach((key, index) => {
  key.addEventListener("click", () => {
    if (index == 0) {
      document.querySelector(".image").src =
        "./images/illustration-features-tab-1.svg";
    }
    if (index == 1) {
      document.querySelector(".image").src =
        "./images/illustration-features-tab-2.svg";
    }
    if (index == 2) {
      document.querySelector(".image").src =
        "./images/illustration-features-tab-3.svg";
    }
    for (let keyes of click) {
      keyes.classList.remove("active");
      click[index].classList.add("active");
    }
    for (let boxes of showIt) {
      boxes.style.display = "none";
      showIt[index].style.display = "flex";
    }
  });
});
// TAB MENU FINISH ///////////////////
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const error = document.querySelector(".error");

question.forEach((key, index) => {
  key.addEventListener("click", () => {
    answer[index].classList.toggle("show");
    arrow[index].classList.toggle("arrow-down");
  });
});
// FAQ //

const contact = document.querySelector(".contact");
const wrapper = document.querySelector(".wrapper");
const pureWhite = document.querySelector(".pure-white");
const pureGreen = document.querySelector(".pure-green");

contact.addEventListener("click", () => {
  const emailField = document.querySelector("#email");
  const email = document.querySelector("#email").value;
  const wrapper = document.querySelector(".wrapper");
  let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!res.test(email)) {
    error.style.display = "inline-block";
    emailField.classList.add("wrapper-border");
    wrapper.classList.add("wrapper-height");
    pureWhite.style.display = "inline-block";
    setInterval(() => {
      window.location.reload();
    }, 3000);
  }
  if (res.test(email)) {
    wrapper.classList.add("wrapper-height");
    wrapper.style.backgroundColor = "hsl(229, 31%, 21%)";
    emailField.style.border = "1px solid hsl(229, 31%, 21%)";
    pureGreen.style.display = "inline-block";
    setInterval(() => {
      window.location.reload();
    }, 3000);
  }
});

//EMAIL//
