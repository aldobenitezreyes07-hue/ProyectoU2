
document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".nav-link");
    const paginaActual = window.location.pathname.split("/").pop() || "index.html";

    enlaces.forEach(function (enlace) {
        const destino = enlace.getAttribute("href");

        if (destino === paginaActual) {
            enlace.classList.add("active");
        } else {
            enlace.classList.remove("active");
        }
    });

    const formulario = document.querySelector("#formularioContacto");

    if (formulario) {
        const campos = formulario.querySelectorAll("input, select, textarea");

        campos.forEach(function (campo) {
            campo.addEventListener("input", function () {
                campo.classList.remove("is-invalid");

                if (campo.checkValidity()) {
                    campo.classList.add("is-valid");
                } else {
                    campo.classList.remove("is-valid");
                }
            });

            campo.addEventListener("change", function () {
                if (campo.checkValidity()) {
                    campo.classList.remove("is-invalid");
                    campo.classList.add("is-valid");
                }
            });
        });

        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const respuesta = document.querySelector("#respuestaFormulario");
            let formularioValido = true;

            campos.forEach(function (campo) {
                if (!campo.checkValidity()) {
                    campo.classList.add("is-invalid");
                    campo.classList.remove("is-valid");
                    formularioValido = false;
                } else {
                    campo.classList.remove("is-invalid");
                    campo.classList.add("is-valid");
                }
            });

            if (!formularioValido) {
                respuesta.textContent = "Revisa los campos marcados antes de continuar.";
                respuesta.style.color = "#ff8585";
                return;
            }

            respuesta.textContent = "¡Formulario validado correctamente!";
            respuesta.style.color = "#b7ff00";

            if (typeof Swal !== "undefined") {
                Swal.fire({
                    title: "¡Excelente!",
                    text: "Tus datos se validaron correctamente. Este formulario es una demostración y no envía información a un servidor.",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                    confirmButtonColor: "#719e00",
                    background: "#1a201e",
                    color: "#f4f5f4"
                });
            }

            formulario.reset();

      