let alto = window.screen.height;
let ancho = window.screen.width;
console.log(ancho,"/br", alto)
let elemento = document.querySelector("#imagenCentral");

if (alto == 320 && ancho == 1170){
        let imagen = elemento.setAttribute("src", "cabecera.jpg");
    }    else{
            let imagen = elemento.setAttribute("src", "cabeceraPhone2.jpg");
    }
