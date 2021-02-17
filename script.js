let alto = window.screen.height;
let ancho = window.screen.width;
console.log(ancho,"/br", alto)
let elemento = document.querySelector("#imagenCentral");

if (alto >= 1366 && ancho >= 1024){
    let imagen = elemento.setAttribute("src", "cabeceraTablet.jpg");
} else { if (alto >= 320 && ancho >= 1170){
        let imagen = elemento.setAttribute("src", "cabecera.jpg");
    }    else{
            if (alto >= 320 && ancho <= 820){
                    let imagen = elemento.setAttribute("src", "cabeceraPhone.jpg");
                }
            }
    }
