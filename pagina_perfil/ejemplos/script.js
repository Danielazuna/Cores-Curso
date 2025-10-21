document.getElementById("colorButton").addEventListener("click", function() {
    var colores = ["#FF6347", "#66CDAA", "#9370DB", 
        "#FFD700", "#4682B4", "#FFA07A"];
    
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;

});

var imagenes = document.querySelectorAll(".imagenEliminar");
// Agregamos un evento 'click' a CADA imagen
imagenes.forEach(function(imagen) {
    imagen.addEventListener("click", function() {
// "this" se refiere a la imagen específica que fue clickeada
    this.remove();
    });
});