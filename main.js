let cartasDadasVueltas=0;
let cantidadCartas=10;
let imagenesSeleccionadas=[]
let divs= document.querySelectorAll(".a");
let imagenes=["imagenes/messi1.jpg","imagenes/messi2.jpg","imagenes/ronaldo1.jpg","imagenes/ronaldo2.jpg","imagenes/maradona1.jpg","imagenes/maradona2.jpg", "imagenes/romagnoli1.jpg", "imagenes/romagnoli2.jpg","imagenes/ronaldino1.jpg","imagenes/ronaldino2.jpg"]
let acertadas=0;

const ocultarImagenes=()=>{
    divs.forEach(carta=>{
        carta.style.opacity="0"
    })
}

const darVueltaCarta=(carta)=>{
    carta.style.opacity="1"
}

const colocarImagenes=(carta)=>{
    let random= Math.floor(Math.random() * cantidadCartas);
    carta.setAttribute("src",imagenes[random])
    imagenes = imagenes.filter((item) => item !== imagenes[random])
    cantidadCartas--;
}


const seleccionCarta=(carta)=>{
     imagenesSeleccionadas.push(carta.getAttribute("src"))
     darVueltaCarta(carta);
     cartasDadasVueltas++;
}

const cartasErroneas=()=>{
    //recorro todos los div y donde se encuentren las imagenes seleccionadas le cambio la opacidad para "dar vuelta la carta"
    divs.forEach(img=>{
        if(imagenesSeleccionadas.includes(img.getAttribute("src"))){
            setTimeout(() => {
                img.style.opacity="0"
             }, 2000); 
        }
     })
     imagenesSeleccionadas=[]
     cartasDadasVueltas=0;
}


const memotest =()=>{

divs.forEach(carta=>{

    colocarImagenes(carta)
    
    carta.addEventListener("click",(e)=>{   

        seleccionCarta(carta)

        //si hay 2 cartas seleccionadas, compruebo si son iguales o no
        if(cartasDadasVueltas==2){
            if( (imagenesSeleccionadas.includes("imagenes/messi1.jpg") && imagenesSeleccionadas.includes("imagenes/messi2.jpg")) || (imagenesSeleccionadas.includes("imagenes/maradona1.jpg") && imagenesSeleccionadas.includes("imagenes/maradona2.jpg")) ||  (imagenesSeleccionadas.includes("imagenes/romagnoli1.jpg") && imagenesSeleccionadas.includes("imagenes/romagnoli2.jpg")) || (imagenesSeleccionadas.includes("imagenes/ronaldo1.jpg") && imagenesSeleccionadas.includes("imagenes/ronaldo2.jpg")) || (imagenesSeleccionadas.includes("imagenes/ronaldino1.jpg") && imagenesSeleccionadas.includes("imagenes/ronaldino2.jpg")) ){
               cartasDadasVueltas=0;
               imagenesSeleccionadas=[]
                acertadas++;
               if(acertadas==5){
                alert("ganaste")
               }

            }

            //Si no son iguales las cartas seleccionadas las damos vuelta..
            else{
               cartasErroneas()
            }
         }


    })



})


}




const juego=()=>{
    ocultarImagenes()
    memotest()
}



juego();
