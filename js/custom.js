"use strict";

function validarNumero(valor){ 
    //intento convertir a entero. 
    //si era un entero no le afecta, si no lo era lo intenta convertir 
    valor = parseInt(valor)

    //Compruebo si es un valor numérico 
    if (isNaN(valor)) { 
       //entonces (no es numero) devuelvo el valor cadena vacia 
       return "" 
    }else{ 
       //En caso contrario (Si era un número) devuelvo el valor 
       return valor 
    } 
}

function compruebaNumero(){ 
   	numeroValidado = validarNumero(document.f1.numero.value) 
   	if (numeroValidado == ""){ 
      	//si era la cadena vacía es que no era válido. Lo aviso 
      	alert ("Debe escribir un numero válido!") 
      	//selecciono el texto 
      	document.f1.numero.select() 
      	//coloco otra vez el foco 
      	document.f1.numero.focus() 
   	}else 
      	document.f1.numero.value = numeroValidado 
} 