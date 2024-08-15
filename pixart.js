const input = document.getElementById("color-field");
console.log(input);
const brush = document.querySelector(".brush");
console.log(brush);
const btn = document.getElementById("set-color");
console.log(btn);

btn.addEventListener("click", showColorbrush);
function showColorbrush() {
  event.preventDefault();
  let inputOne = document.getElementById("color-field").value;
  console.log(inputOne);
  brush.style.background = inputOne;
}

for (let j = 0; j < 8000; j++) {
  const kvadrat = document.createElement("div");
  kvadrat.classList.add("square");
  document.body.appendChild(kvadrat);

  kvadrat.addEventListener("mouseover", function () {
    let inputOne = document.getElementById("color-field").value;
    kvadrat.style.backgroundColor = inputOne;
  });
}
