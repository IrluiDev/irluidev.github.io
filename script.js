let alto = window.screen.height;
let ancho = window.screen.width;
console.log(ancho,"/br", alto)
let elemento = document.querySelector("#imagenCentral");
//let bannerOne = document.querySelector("#imgBanner1");
let bannerTwo = document.querySelector("#imgBanner2");

//---->let elementoEsc1 = document.querySelector("#ban1");
//let div = document.createElement(`div`);
//let fragmentoEsc1 = document.createDocumentFragment();
//let agregarRecuadroEsc1 = fragmentoEsc1.appendChild(div);
//agregarRecuadroEsc1.setAttribute("id","img1");
//agregarRecuadroEsc1.classList.add("recuadro");
//elementoEsc1.appendChild(agregarRecuadroEsc1);


//var h1 = document.createElement("p");
//agregarRecuadroEsc1.appendChild(h1);
//var h1Text = document.createTextNode('Titulo Agregado');
//h1.appendChild(h1Text);
//agregarRecuadroEsc1.appendChild(h1);
//let recuadro = document.querySelector("#recuadro");

//console.log(agregarRecuadroEsc1);

if ((alto == 1366 || alto == 379) || (ancho == 1024 || ancho == 820)){
    let imagen = elemento.setAttribute("src", "cabeceraTablet.jpg");
} else { if (alto >= 320 && ancho >= 1170 || ancho >= 820){
        let imagen = elemento.setAttribute("src", "cabecera.jpg");
    }    else{
            if (alto >= 320 && ancho <= 720){
                    let imagen = elemento.setAttribute("src", "cabeceraPhone.jpg");
                }
            
            else{
                if (alto >= 720 && ancho <= 820){
                        let imagen = elemento.setAttribute("src", "cabeceraPhone.jpg");
                    }
                }
            }
    }




    
