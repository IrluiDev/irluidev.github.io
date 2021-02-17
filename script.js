let imagenCabecera = "cabecera.jpg";
let imagenPhone = "cabeceraPhone";
let ancho = window.screen.height;
let alto = window.screen.width;

console.log(ancho +  "ancho");
console.log(alto + "alto"); 
let hola = "Hola";

if (ancho >= 768 && alto >= 1024){
    if (ancho == 864 && alto == 1536){
        let elemento = document.querySelector("#imagenCentral");
        let imagen = elemento.setAttribute("src", imagenCabecera);
        console.log(imagen + '/br' + "jejej ")
    }
}
