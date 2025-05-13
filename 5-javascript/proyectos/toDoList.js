/*
Proyecto 1: Lista de Tareas (To-Do List)
Crea una aplicación de lista de tareas que permita al usuario agregar, eliminar, marcar como completadas y listar tareas.
*/
let tareas = [];
let respuesta= prompt("Agregar (A) / Lista (L) / Eliminar (E) / Completar (C)");
    switch(respuesta) {
    case "A":
        agregar()
        break;
    case "L":
        mostrarTareas()
        break;
    default:
        console.log ( "Opcion invalida");
    }


function agregar (){
let respuesta= prompt("Ingrese la tarea");
    tarea = respuesta

}
    console.log(tarea)
    agregarTarea(tarea)




// Función para agregar una tarea
function agregarTarea(tarea) {
  if (tarea) {
    tareas.push(tarea);
    let t = tareas
    console.log(t);
  } else {
    console.log("No se puede agregar una tarea vacía.");
  }
}



// Función para mostrar todas las tareas
function mostrarTareas() {
  if (tareas.length === 0) {
    console.log("No hay tareas.");
  } else {
    console.log("Lista de tareas:");
    tareas.map(
        (tareas) => {
            console.log(tareas);
        }
        );
   };
  }



