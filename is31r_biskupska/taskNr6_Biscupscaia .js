const decBtn = document.getElementById("decrement");
const incBtn = document.getElementById("increment");
const input = document.getElementById("input");

decBtn.addEventListener("click", function () {
  const inputValue = parseInt(input.value, 10);
  if (inputValue > 0) {
    input.value = inputValue - 1;
  }
});

incBtn.addEventListener("click", function () {
  const inputValue = parseInt(input.value, 10);

  if (inputValue < 9) {
    input.value = inputValue + 1;
  }
});