//Haz tú validación en javascript acá
const formulario = document.querySelector(".formcontato__form");
const inputs = document.querySelectorAll(".formcontato__input");
const textarea = document.querySelector(".formcontato__textarea");
const spanErrors = document.querySelectorAll(".formcontato__error");
const text = document.querySelector(".formcontato__alert");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValidInput = true;
  let isValidTextarea = true;

  spanErrors.forEach(function (span) {
    span.classList.add("none");
  });

  // Validando los inputs
  inputs.forEach(function (input, index) {
    if (!input.checkValidity() || input.value.trim() === "") {
      spanErrors[index].classList.remove("none");
      isValidInput = false;
    }
  });

  // Validación del área de texto
  if (!textarea.checkValidity() || textarea.value.trim() === "") {
    spanErrors[3].classList.remove("none");
    isValidTextarea = false;
  }

  if (isValidInput && isValidTextarea) {
    text.innerText = "¡El formulario se envió correctamente!";
    text.classList.remove("none");
    text.classList.add("green");
    formulario.reset();
  } else {
    text.innerText = "¡Hay campos que no están completos!";
    text.classList.remove("none", "green");
  }

  setTimeout(() => {
    text.classList.add("none");
  }, 5000);
});
