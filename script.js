let imagenCabecera = "cabecera.jpg";
let imagenPhone = "cabeceraPhone2.jpg";
let imagenLoca = "logo.png"
let ancho = window.screen.height;
let alto = window.screen.width;

console.log(ancho +  "ancho");
console.log(alto + "alto"); 
let hola = "Hola";
let elemento = document.querySelector("#imagenCentral");

if (ancho >= 768 && alto >= 1024){
    if (ancho >= 864 && alto >= 1536){
        let imagen = elemento.setAttribute("src", imagenCabecera);
        console.log(imagen + '/br' + "cabeceragrande ")
    } else {
        let imagen = elemento.setAttribute("src", imagenLoca);
        console.log(imagen + '/br' + "cabecLoca")
    }  
    }   else{
            let imagen = elemento.setAttribute("src", imagenCabecera);
            console.log(imagen + '/br' + "cabeceraPhone")
    }
