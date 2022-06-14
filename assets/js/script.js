const input = document.getElementById("input");
const output = document.getElementById("output");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    switch (e.target.innerHTML) {
      case "C":
        input.innerHTML = "0";
        output.innerHTML = "0";
        break;
      case "x":
        input.innerHTML += "*";
        break;
      case "%":
        input.innerHTML += '/100';
        break;
      case "&lt;":
        if (input.innerHTML.length <= 1) {
          return (input.innerHTML = "0");
        }
        input.innerHTML = input.innerHTML.slice(0, -1);
        break;
      case "=":
        output.innerHTML = eval(input.innerHTML);
        break;
      default:
        if (input.innerHTML == 0) {
          input.innerHTML = "";
        }
        input.innerHTML += e.target.innerHTML;
        break;
    }
  });
});
