function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
