let cartasDadasVueltas=0;
let num=10;
let img1= document.getElementById("img1");
let divs= document.querySelectorAll(".a");
   
    //  img1.addEventListener("click",(e)=>{

    //     divs.forEach(element => {
    //          element.style.backgroundColor="red";
    //      });

    //     //img1.style.backgroundColor="red";
    //      //cartasDadasVueltas+1;
    //      setTimeout(darVueltaCarta, 3000);
    
    //  });

let imagenes=["messi1.jpg","messi2.jpg","ronaldo1.jpg","ronaldo2.jpg","maradona1.jpg","maradona2.jpg", "romagnoli1.jpg", "romagnoli2.jpg","ronaldino1.jpg","ronaldino2.jpg"]
let imagenesSeleccionadas=[]
let imagenesRandom=[]

let acertadas=[]

    
divs.forEach(el=>{
    el.style.opacity="0"
    console.log("tapando")
})



divs.forEach(el=>{

    let random= Math.floor(Math.random() * num);
    el.setAttribute("src",imagenes[random])
    imagenesRandom.push(imagenes[random])
    imagenes = imagenes.filter((item) => item !== imagenes[random])
    num--;
    
    el.addEventListener("click",(e)=>{   

        imagenesSeleccionadas.push(el.getAttribute("src"))
        el.style.opacity="1"
        cartasDadasVueltas++;
        console.log("dando vuelta "+ el.getAttribute("src"))

        if(cartasDadasVueltas==2){
            if( (imagenesSeleccionadas.includes("messi1.jpg") && imagenesSeleccionadas.includes("messi2.jpg")) || (imagenesSeleccionadas.includes("maradona1.jpg") && imagenesSeleccionadas.includes("maradona2.jpg")) ||  (imagenesSeleccionadas.includes("romagnoli1.jpg") && imagenesSeleccionadas.includes("romagnoli2.jpg")) || (imagenesSeleccionadas.includes("ronaldo1.jpg") && imagenesSeleccionadas.includes("ronaldo2.jpg")) || (imagenesSeleccionadas.includes("ronaldino1.jpg") && imagenesSeleccionadas.includes("ronaldino2.jpg")) ){
               console.log("gano")
               cartasDadasVueltas=0;
               imagenesSeleccionadas=[]
               acertadas.push(1)

               if(acertadas.length==5){
                alert("ganaste")
               }

            }
            else{
    
              console.log("las imagenes fueron"+imagenesSeleccionadas)
              
               divs.forEach(img=>{
                  if(imagenesSeleccionadas.includes(img.getAttribute("src"))){
                     
                      setTimeout(() => {
                          img.style.opacity="0"
                       }, 2000); 
                     
                  }
               })
    
               setTimeout(() => {
                  el.style.opacity="0"
               }, 2000); 
    
    
               imagenesSeleccionadas=[]
               cartasDadasVueltas=0;
    
    
            }
         }


    })



})




//   divs.forEach(el=>{
//      el.addEventListener("click",(e)=>{
//         // el.style.backgroundColor="red"
//          let random= Math.floor(Math.random() * num);
//          el.setAttribute("src",imagenes[random])
//          console.log(imagenes[random])
//          imagenesSeleccionadas.push(imagenes[random]);
//          imagenes = imagenes.filter((item) => item !== imagenes[random])
//         console.log(imagenes) 
//          num--;
//          cartasDadasVueltas++;

       

//        if(cartasDadasVueltas=="2"){
//           if( (imagenesSeleccionadas.includes("messi1.jpg") && imagenesSeleccionadas.includes("messi2.jpg")) || (imagenesSeleccionadas.includes("maradona1.jpg") && imagenesSeleccionadas.includes("maradona2.jpg")) ||  (imagenesSeleccionadas.includes("romagnoli1.jpg") && imagenesSeleccionadas.includes("romagnoli2.jpg")) || (imagenesSeleccionadas.includes("ronaldo1.jpg") && imagenesSeleccionadas.includes("ronaldo2.jpg")) || (imagenesSeleccionadas.includes("ronaldino1.jpg") && imagenesSeleccionadas.includes("ronaldino2.jpg")) ){
//              console.log("gano")
//              cartasDadasVueltas=0;

//           }
//           else{

//             console.log("las imagenes fueron"+imagenesSeleccionadas)
            
//              divs.forEach(img=>{
//                 if(imagenesSeleccionadas.includes(img.getAttribute("src"))){
                   
//                     setTimeout(() => {
//                         img.setAttribute("src","blanco.png")
//                      }, 3000); 
                   
//                 }
//              })

//              setTimeout(() => {
//                 el.setAttribute("src","blanco.png")
//              }, 3000); 


//              imagenesSeleccionadas=[]
//              cartasDadasVueltas=0;


//           }
//        }
       
//      })

//   });