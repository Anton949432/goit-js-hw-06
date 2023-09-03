const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
    const inputValue = nameInput.value.trim(); // Відсікаємо зайві пробіли.

    if (inputValue === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = inputValue;
    }
});