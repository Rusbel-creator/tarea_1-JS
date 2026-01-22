const Username = document.getElementById("name");
const Button = document.getElementById("btn");
const Message = document.getElementById("mensaje");

Button.addEventListener("click", () => {
    const name = Username.value.trim();

    if (name === "") {
        Message.textContent = `Hey pon tu nombre pndj 😠`;
    } else {
        Message.textContent = `Hola ${name}, bienvenido a el mejor JavaScript que veras hoy 😎`;
    }
});