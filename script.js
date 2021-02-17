let imagenCabecera = "cabecera.jpg";
let imagenPhone = "cabeceraPhone";
let viewportWidth = window.screen.height;
let viewportHeight = window.screen.width;

let ancho = console.log(viewportWidth);
let alto = console.log(viewportHeight); 
let hola = "Hola";

if (ancho >= 768 && alto >= 1024){
    console.log(hola)
    if (ancho == 864 && alto == 1536){
        let imagen = document.getElementById("#imagenCentral");
        console.log("Hola")
    }
}
