
var inicio;


let body = document.querySelector("#body"); // cambiar atributos HTML / CSS
var style_body = window.getComputedStyle(body); // obtener atributos CSS 
var rutaImagenFondoOriginal = style_body.getPropertyValue("background-image");

// hacer dos botones uno paraguardar y otro para recuperar, 
//usando web storage para que guarde como van las cajas

function cambiarClientes(tipo_accion,numeroCaja) {

    // 1 varaibles 2 condiciones etc 

    let input_caja;
    let divcaja;
    let stylecaja;
    let mensajes;

    if (numeroCaja == "caja1") {

        let input_caja1 = document.getElementById("CAJA1");  
        input_caja = input_caja1;
        

        let divcaja1 = document.querySelector("#divcaja1"); // cambiar atributos HTML / CSS
        divcaja = divcaja1;
        var style_divcaja1 = window.getComputedStyle(divcaja1); // obtener atributos CSS 
        stylecaja = style_divcaja1;

        mensajes = document.getElementById('mensaje1');

        

    } else if (numeroCaja == "caja2") {    

        let input_caja2 = document.getElementById("CAJA2");
        input_caja = input_caja2;

        let divcaja2 = document.querySelector("#divcaja2");
        divcaja = divcaja2;
        var style_divcaja2 = window.getComputedStyle(divcaja2);
        stylecaja = style_divcaja2;
        
        let div_mensaje = document.getElementById('mensaje2');
        mensajes = div_mensaje;
        
        

    } else if (numeroCaja == "caja3") {    

        let input_caja3 = document.getElementById("CAJA3");
        input_caja = input_caja3;

        let divcaja3 = document.querySelector("#divcaja3");
        divcaja = divcaja3;
        var style_divcaja3 = window.getComputedStyle(divcaja3);
        stylecaja = style_divcaja3;

        let div_mensaje = document.getElementById('mensaje3');
        mensajes = div_mensaje;

    } else if (numeroCaja == "caja4") {    

        let input_caja4 = document.getElementById("CAJA4");
        input_caja = input_caja4;

        let divcaja4 = document.querySelector("#divcaja4");
        divcaja = divcaja4;
        var style_divcaja4 = window.getComputedStyle(divcaja4);
        stylecaja = style_divcaja4;

        let div_mensaje = document.getElementById('mensaje4');
        mensajes = div_mensaje;

    }
         
    // esto aumentaría en uno el valor del input de caja1:
    let total_clientes_caja = parseInt(input_caja.value);

   
    // consultando un VALOR CSS de un etiqueta:
    console.log("|" + stylecaja.getPropertyValue("background") + "|");



    // vamos a comprobar si el background de la caja está en bourdeo

    console.log("|" + stylecaja.getPropertyValue("background") + "|");
    if (stylecaja.getPropertyValue("background") == "rgb(192, 62, 83) none repeat scroll 0% 0% / auto padding-box border-box") {
        inicio = new Date();


        // dependiendo de lo que pasemos en la variable "tipo_accion", sumará o restará:
        if (tipo_accion == "poner") {
            if(total_clientes_caja ==4) {
                total_clientes_caja = total_clientes_caja + 0; 
            }else {
                total_clientes_caja = total_clientes_caja + 1;
            }
  
            let mensaje_caja = mensajes;
            console.log("holaaa" + mensaje_caja);
            mensaje_caja.innerHTML = "<br>HAY " + total_clientes_caja + " CLIENTE";

            
        } else if (tipo_accion == "quitar") {
            total_clientes_caja = total_clientes_caja - 1;
            let mensaje_caja = mensajes;
            mensaje_caja.innerHTML = "<br>HAY " + total_clientes_caja + " CLIENTE";

          
            
            if (total_clientes_caja <= 0) {
                total_clientes_caja = 0;
                divcaja.style.background = "rgb(33, 153, 155)";
                mensaje_caja.innerHTML = "<br>CAJA CERRADA";
            } 
            
            
        } else {
            alert("has introducido mal el tipo de acción!");
        }

        input_caja.value = total_clientes_caja;

    } else {

        // cambiando un VALOR CSS de una etiqueta:
        if (total_clientes_caja != 0 || tipo_accion == 'poner') {
            console.log("vamos a poner el elemento en bourdeo!");
            divcaja.style.background = "rgb(192, 62, 83)";
            let mensaje_caja = mensajes;
            mensaje_caja.innerHTML = "<br>CAJA ABIERTA";

            
        }

    }
        console.log(total_clientes_caja);


   

    if (total_clientes_caja == 4) {
        alert("La caja esta completa.");
        let fin = new Date();
        let tiempoTranscurrido = (fin-inicio)/1000; //en milisegundos
        alert('Tiempo transcurrido:' + tiempoTranscurrido);
    }

   
}

let input_caja1 = document.getElementById("CAJA1");
        input_caja = input_caja1;

        let divcaja1 = document.querySelector("#divcaja1"); // cambiar atributos HTML / CSS
        divcaja = divcaja1;
        var style_divcaja1 = window.getComputedStyle(divcaja1); // obtener atributos CSS 
        stylecaja = style_divcaja1;

        mensajes = document.getElementById('mensaje1');

        console.log("|" + stylecaja.getPropertyValue("background") + "|");

document.getElementById("divcaja1").oncontextmenu = function() { 

    cambiarClientes('quitar', 'caja1'); 

};

document.getElementById("divcaja2").oncontextmenu = function() { 

    cambiarClientes('quitar', 'caja2'); 

};

document.getElementById("divcaja3").oncontextmenu = function() { 

    cambiarClientes('quitar', 'caja3'); 

};

document.getElementById("divcaja4").oncontextmenu = function() { 

    cambiarClientes('quitar', 'caja4'); 

};


//FUNCIONALIDAD BOTON DIA Y NOCHE

  function ponerOscuro(){

    let body = document.getElementById('body'); // cambiar atributos HTML / CSS
    
    var style_body = window.getComputedStyle(body); // obtener atributos CSS 
    
    console.log(style_body.getPropertyValue("background-image"));

      
    if(style_body.getPropertyValue("background-image") == rutaImagenFondoOriginal){

        let body = document.getElementById('body'); // cambiar atributos HTML / CSS
        body.style.backgroundImage='url(noche1.jpg)';//QUITAR ESTA IMAGEN
        
    } else {

        body.style.backgroundImage = 'url(supeer.jpg)';//imagen de fondo

    }  

  }

  // BOTON BORRAR FONDO
    function borrarFondo() {
        
        let body = document.getElementById('body'); // cambiar atributos HTML / CSS
        
        var style_body = window.getComputedStyle(body); // obtener atributos CSS 
        
        console.log(style_body.getPropertyValue("background-image"));
        console.log(body.style.backgroundImage);
        
        // comprobamos si la imagen original está activa / mostrándose todavía:
        if(style_body.getPropertyValue("background-image") == rutaImagenFondoOriginal){

            body.style.backgroundImage='url()';

        } else {

            body.style.backgroundImage = 'url(supeer.jpg)';
        }  
                   
    }








  
