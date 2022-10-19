function getNumber(num) {
  const input = document.getElementById("input");
  input.value += num;
}

function clearinput() {
  const input = document.getElementById("input");
  input.value = "0";
}

function ansInput() {
  const input = document.getElementById("input");
  input.value = eval(input.value);
}
