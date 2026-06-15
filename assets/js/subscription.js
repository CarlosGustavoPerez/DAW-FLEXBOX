const form = document.getElementById("subscription-form");
const title = document.getElementById("form-title");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");
const age = document.getElementById("age");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const city = document.getElementById("city");
const postalCode = document.getElementById("postalCode");
const dni = document.getElementById("dni");
function showError(input, message) {
    input.nextElementSibling.textContent = message;
}

function clearError(input) {
    input.nextElementSibling.textContent = "";
}
function validateFullName() {

    const value = fullName.value.trim();

    if (value.length <= 6 || !value.includes(" ")) {
        showError(
            fullName,
            "Debe tener más de 6 letras y un espacio."
        );
        return false;
    }

    return true;
}
function validateEmail() {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email.value)) {

        showError(
            email,
            "Ingrese un email válido."
        );

        return false;
    }

    return true;
}
function validatePassword() {

    const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (!regex.test(password.value)) {

        showError(
            password,
            "Debe tener 8 caracteres, letras y números."
        );

        return false;
    }

    return true;
}
function validateRepeatPassword() {

    if (password.value !== repeatPassword.value) {

        showError(
            repeatPassword,
            "Las contraseñas no coinciden."
        );

        return false;
    }

    return true;
}
function validateAge() {

    const value = parseInt(age.value);

    if (isNaN(value) || value < 18) {

        showError(
            age,
            "Debe ser mayor o igual a 18."
        );

        return false;
    }

    return true;
}
function validatePhone() {

    const regex = /^\d{7,}$/;

    if (!regex.test(phone.value)) {

        showError(
            phone,
            "Debe contener al menos 7 dígitos."
        );

        return false;
    }

    return true;
}
function validateAddress() {

    const regex = /^(?=.*[A-Za-z])(?=.*\d).{5,}$/;

    if (
        !regex.test(address.value) ||
        !address.value.includes(" ")
    ) {

        showError(
            address,
            "Ingrese una dirección válida."
        );

        return false;
    }

    return true;
}
function validateCity() {

    if (city.value.trim().length < 3) {

        showError(
            city,
            "Debe tener al menos 3 caracteres."
        );

        return false;
    }

    return true;
}
function validatePostalCode() {

    if (postalCode.value.trim().length < 3) {

        showError(
            postalCode,
            "Debe tener al menos 3 caracteres."
        );

        return false;
    }

    return true;
}
function validateDni() {

    const regex = /^\d{7,8}$/;

    if (!regex.test(dni.value)) {

        showError(
            dni,
            "Debe contener 7 u 8 dígitos."
        );

        return false;
    }

    return true;
}
fullName.addEventListener("blur", validateFullName);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
repeatPassword.addEventListener("blur", validateRepeatPassword);
age.addEventListener("blur", validateAge);
phone.addEventListener("blur", validatePhone);
address.addEventListener("blur", validateAddress);
city.addEventListener("blur", validateCity);
postalCode.addEventListener("blur", validatePostalCode);
dni.addEventListener("blur", validateDni);
document
    .querySelectorAll("input")
    .forEach(input => {

        input.addEventListener("focus", () => {
            clearError(input);
        });

    });
fullName.addEventListener("keyup", () => {

    const value = fullName.value.trim();

    title.textContent =
        value === ""
            ? "HOLA"
            : `HOLA ${value.toUpperCase()}`;

});
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const validations = [
        validateFullName(),
        validateEmail(),
        validatePassword(),
        validateRepeatPassword(),
        validateAge(),
        validatePhone(),
        validateAddress(),
        validateCity(),
        validatePostalCode(),
        validateDni()
    ];

    const isValid = validations.every(v => v);

    if (!isValid) {

        alert(
            "Existen errores en el formulario."
        );

        return;
    }

    const successMessage =
        document.getElementById("success-message");

    successMessage.querySelector("p").textContent =
        `Suscripción realizada correctamente. Gracias por suscribirte, ${fullName.value}. Redirigiendo...`;

    successMessage.classList.remove("hidden");

    document.querySelector(".form-actions").style.display = "none";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);

});
