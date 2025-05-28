function agregar(valor){
  let pantalla = document.getElementById("resultado");
  pantalla.value = pantalla.value + valor;
}

function limpiar (){
    let pantalla = document.getElementById("resultado");
    pantalla.value = "";
}

function borrar (){
    let pantalla = document.getElementById("resultado")
    pantalla.value = pantalla.value.slice(0,-1);
}

function total(){
  let pantalla = document.getElementById("resultado");
  pantalla.value = eval(pantalla.value);
}