let ancho = window.screen.height;
let alto = window.screen.width;
let elemento = document.querySelector("#imagenCentral");

if (ancho >= 768 && alto >= 1024){
    if (ancho >= 864 && alto >= 1536){
        let imagen = elemento.setAttribute("src", "cabecera.jpg");
    } 
      else{
            let imagen = elemento.setAttribute("src", "cabeceraPhone2.jpg");
    }
