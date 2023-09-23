const footerInput = document.querySelector(".footer__input");
const footerInputBtn = document.querySelector(".footer__input-button");

footerInput.addEventListener("input", function () {
  if (this.value) {
    footerInputBtn.classList.add("footer__input-button_visible");
  }
});

footerInputBtn.addEventListener("click", function () {
  footerInput.value = "Круто!";
});

// переключение темы
const switchToogle = document.querySelector(".switch__toogle");

switchToogle.addEventListener("click", function () {
  this.classList.toggle("switch__toogle_active");
});
