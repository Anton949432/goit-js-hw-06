
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    if (!formObject.email || !formObject.password) {
        alert("Будь ласка заповніть всі поля.");
        return;
    }

    console.log(formObject);

    event.currentTarget.reset();
});