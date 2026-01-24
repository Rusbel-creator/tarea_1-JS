const Username = document.getElementById("name");
const Button = document.getElementById("submit");
const Message = document.getElementById("mensaje");

Button.addEventListener("click", () => {
    const name = Username.value.trim();

    if (name === "") {
        Message.textContent = `Favor de poner su nombre!!!`;
    } else {
        Message.textContent = `Hola ${name}, bienvenido a el mejor JavaScript que veras hoy 🧐🍷`;
    }
});
