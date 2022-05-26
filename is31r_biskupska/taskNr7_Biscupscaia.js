
  const input = document.getElementById("input");
  input.addEventListener("blur", function (e) {
    const value = parseFloat(e.target.value);
    if (!Number.isInteger(value)) {
      e.target.value = "0";
    }
  });