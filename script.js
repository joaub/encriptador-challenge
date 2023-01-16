const textousuario = document.querySelector(".textoentrada")
const mensajeencriptado = document.querySelector(".textoencriptado")





function botonencriptar(){
    if (textousuario.value==""){
        alert("ingrese texto")
        
    }

    else {
    const textoyaencriptado = encriptar(textousuario.value)
    mensajeencriptado.value = textoyaencriptado;
    mensajeencriptado.style.backgroundImage = 'none';
    textousuario.value="";
    }
}

function encriptar(textoencriptar){
    let letrascodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoencriptar=textoencriptar.toLowerCase();

    for (let iteracion=0; iteracion<letrascodigo.length; iteracion ++ ) {
        if(textoencriptar.includes(letrascodigo[iteracion][0])){
            textoencriptar=textoencriptar.replaceAll(letrascodigo[iteracion][0],letrascodigo[iteracion][1]);
        }
    }
   
    return textoencriptar;
    
}

function botondesencriptar(){
    const textodesencriptado = desencriptar(textousuario.value)
    mensajeencriptado.value = textodesencriptado;
    textousuario.value=""

    if (mensajeencriptado.value == ""){
        mensajeencriptado.style.backgroundImage = "url('imagenes/Muñeco.png')";}
    else {
        mensajeencriptado.style.backgroundImage = 'none'}

}

function desencriptar(textodesencriptar){
    let letrascodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    

    for (let iteracion=0; iteracion<letrascodigo.length; iteracion ++ ) {
        if(textodesencriptar.includes(letrascodigo[iteracion][1])){
            textodesencriptar=textodesencriptar.replaceAll(letrascodigo[iteracion][1],letrascodigo[iteracion][0]);
        }
    }
   
    return textodesencriptar;
}

function copiar() {

if (mensajeencriptado.value == "" ){
    alert("No hay texto para copiar")
    
}
else {
mensajeencriptado.select();
navigator.clipboard.writeText(mensajeencriptado.value);
mensajeencriptado.value = ""
alert("Copiado")}
mensajeencriptado.style.backgroundImage = "url('imagenes/Muñeco.png')";
}


