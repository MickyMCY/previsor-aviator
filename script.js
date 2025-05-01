let line = document.getElementById("line");
let indicator = document.getElementById("indicator");

function startPrediction() {
  indicator.innerText = "A prever o próximo voo...";
  indicator.classList.remove("danger");
  line.style.width = "0";

  let percent = Math.floor(Math.random() * 100);

  setTimeout(() => {
    if (percent > 70) {
      indicator.innerText = "ALERTA: Alta probabilidade de voo acima de 10x!";
      indicator.classList.add("danger");
    } else {
      indicator.innerText = "Voo provável: 1.2x - 3.5x";
    }
    animateLine();
  }, 2000);
}

function animateLine() {
  let width = 0;
  let interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width += 2;
      line.style.width = width + "%";
    }
  }, 30);
}
