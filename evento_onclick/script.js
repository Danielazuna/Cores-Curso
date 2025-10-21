// Cambiar texto del botón "Iniciar sesión"
const salirBtn = document.getElementById("salir");
salirBtn.addEventListener("click", function() {
    this.innerText = this.innerText === "Iniciar sesión" ? "Cerrar sesión" : "Iniciar sesión";
});

// Ocultar boton "Agregar definición"
const agregarBtn = document.getElementById("agregar");
agregarBtn.addEventListener("click", function() {
    this.style.display = "none";
});

// Función de megusta con contador
const botonesMeGusta = document.querySelectorAll(".me-gusta");
botonesMeGusta.forEach(boton => {
    boton.addEventListener("click", function() {
        const contador = this.nextElementSibling;
        let cantidad = parseInt(contador.innerText);
        cantidad++;
        contador.innerText = `${cantidad} likes`;

        const definicion = this.closest(".definicion").querySelector("p").innerText;
        alert(`Te gusta la definición: ${definicion}`);
    });
});