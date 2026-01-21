const Username = document.getElementById("name");
const Button = document.getElementById("btn");
const Message = document.getElementById("mensaje");

Button.addEventListener("click", () => {
    const name = Username.value.trim();

    if (name === "") {
        alert("Por favor, ingresa un nombre.");
    } else {
        Message.textContent = `Hola ${name}, bienvenido a el mejor JavaScript que veras hoy 😎`;
    }
});