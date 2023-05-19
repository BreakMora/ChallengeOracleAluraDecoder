const textarea = document.querySelector(".TextoCodificar");
const mensaje = document.querySelector(".TextoCodificado");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function botonEncriptar(){

    let textoCodificar = document.getElementById("textoCodificar").value;
    let mensajeAviso = document.getElementById("mensajeAviso");
    let tituloVacio = document.getElementById("tituloVacio");
    let parrafoVacio = document.getElementById("parrafoVacio");
    let Muneco = document.getElementById("Muneco");
    let textoCoD = document.getElementById("textoCoD");
    let copiar = document.querySelector(".copiar");

    if(revisarTexto(textoCodificar)==true){
        const textoEncriptado = Encriptar(textarea.value);
        if(textoCodificar!=0 && textoEncriptado!=0){
            mensaje.value = textoEncriptado;
            textarea.value = "";
            copiar.style.display="block";
            textoCoD.style.display="flex";
            textoCoD.style.visibility="visible";
            mensajeAviso.style.display="flex";
            mensajeAviso.textContent = "¡Texto Encriptado con éxito!";
            parrafoVacio.textContent = "";
            Muneco.style.display="none";
            console.log();
        }
        else{
            mensaje.value="";
            mensajeAviso.style.display = "none";
            Muneco.style.display="flex";
            Muneco.src="./Imagenes/muneco.png";
            textoCoD.style.display="none";
            tituloVacio.textContent="Ningún mensaje fue encontrado";
            parrafoVacio.textContent="Ingresa el texto que deseas encriptar o desencriptar"
            copiar.style.display="none";
            textoCodificar.length=0;
            alert("No se encontro ningun texto para encriptar.");
        }
    }
    else{
        
        alert("No se pueden encriptar numeros o signo de puntuacion.");
    }
}


function botonDesencriptar(){

    let textoCodificar = document.getElementById("textoCodificar").value;
    let mensajeAviso = document.getElementById("mensajeAviso");
    let tituloVacio = document.getElementById("tituloVacio");
    let parrafoVacio = document.getElementById("parrafoVacio");
    let Muneco = document.getElementById("Muneco");
    let textoCoD = document.getElementById("textoCoD");
    let copiar = document.querySelector(".copiar");

    if(revisarTexto(textoCodificar)==true){
        if(textoCodificar!=0){
            const textoDesencriptado = Desencriptar(textarea.value);
            mensaje.value = textoDesencriptado;
            textarea.value = "";
            copiar.style.display="block";
            textoCoD.style.display="flex";
            textoCoD.style.visibility="visible";
            mensajeAviso.style.display="flex";
            mensajeAviso.textContent = "¡Texto Desencriptado con éxito!";
            parrafoVacio.textContent = "";
            Muneco.style.display="none";
        }
        else{
            Muneco.style.display="flex";
            Muneco.src="./Imagenes/muneco.png";
            textoCoD.style.display="none";
            mensajeAviso.style.display="none";
            tituloVacio.textContent="Ningún mensaje fue encontrado";
            parrafoVacio.textContent="Ingresa el texto que deseas encriptar o desencriptar"
            copiar.style.display="none";
            textoCodificar.length=0;
            alert("No se encontro ningun texto para desencriptar.");
        }
    }
}

function Encriptar(textoEncritado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    textoEncritado = textoEncritado.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(textoEncritado.includes(matrizCodigo[i][0])){
            textoEncritado=textoEncritado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncritado;
}

function Desencriptar(textoDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado=textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDesencriptado;
}

document.getElementById("copiar").onclick=function(){
    let textoCoD = document.getElementById("textoCoD").value;

    navigator.clipboard.writeText(textoCoD)
    .then(()=>{ alert("Texto copiado en el portapapeles");})
}

function revisarTexto(texto){
    let revisartexto=false;
    if (/^[a-z\s\-\_\.\,\:\;\!\?\ñ]+$/.test(texto)) {
        revisartexto=true;
    }
    if(texto.length==0){
        revisartexto=true;
    }
    return revisartexto;
}

window.addEventListener('load',function(){ 
    let textoCodificar = document.getElementById("textoCodificar"); 
    textoCodificar.focus();
});
