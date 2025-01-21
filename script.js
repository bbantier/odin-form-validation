const form = document.querySelector(".test-form");
const inputElements = document.querySelectorAll(".form-control-div > input");

function Input(name) {
  this.name = name;
  this.input = document.getElementById(`${name}-input`);
  this.errorSpan = document.querySelector(`.${name}-error`);
}

const inputs = [];

inputElements.forEach((element) => {
  inputs.push(new Input(element.id.substring(0, element.id.indexOf("-"))));
});

inputs.forEach((input) => {
  input.input.addEventListener("input", () => {
    if (input.input.validity.valid) {
      input.errorSpan.textContent = "OK";
    }
  })
})