const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    if (email === "") {
        alert("Por favor, ingresa tu correo.");
        return;
    }

    if (mensaje === "") {
        alert("Por favor, escribe un mensaje.");
        return;
    }

    alert("¡Gracias por contactarnos, " + nombre + "! Tu mensaje fue enviado correctamente.");

    formulario.reset();
});
