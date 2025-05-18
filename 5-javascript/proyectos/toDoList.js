/*
Proyecto 1: Lista de Tareas (To-Do List)
Crea una aplicación de lista de tareas que permita al usuario agregar, eliminar, marcar como completadas y listar tareas.
*/

/*
let tareas = []; // Limpio el Arreglo

function administrarTareas() {
    let respuesta = prompt("IMPORTANTE: Abra la consola de su navegador para visualizar los resultados."+("\n\n")+"Bienvenido por favor escriba:" +("\n\n")+"A = Agregar una Tarea" +("\n")+"E = Eliminar una Tarea" +("\n")+ "L = Listar la(s) Tarea(s)" +("\n")+ "S = Salir de la Aplicacion.");
    // El ("\n") hace un salto de linea,  ("\n\n") hace dos salto de linea.

    if (respuesta.toUpperCase() == "S") {
        alert("Abra la CONSOLA de su navegador para ver los resultados.")
        console.log("Salida de la Aplicacion");
        console.log("Lista de Tareas");
        console.log(tareas.join("\n"));
        return;
    }
    
    if (respuesta.toUpperCase() == "A") {
        let nuevaTarea = prompt("Ingrese una Tarea:");
        tareas.push(nuevaTarea.toUpperCase());
    } else if (respuesta.toUpperCase() == "L") {
        alert("Abra la CONSOLA de su navegador para ver la Lista de Tareas.")
        console.log("Lista de Tareas");
        tareas.forEach((tarea, index) => console.log(`${index}. ${tarea}`))//LE PEDI A LA AI QUE ME AYUDARA EN MOSTRAR EL INDICE
        //console.log(tareas.join("\n"));
    } else {
        alert("Respuesta inválida. Intenta de nuevo.");
    }

    function eliminarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas para eliminar.");
        return;
    }

    mostrarTareas();
    
    let indice = prompt("Ingrese el número de la tarea a eliminar:");
    
    if (indice > 0 && indice <= tareas.length) {
        tareas.splice(indice - 1, 1); // Elimina la tarea
        console.log("Tarea eliminada con éxito.");
    } else {
        console.log("Número inválido. Intenta nuevamente.");
    }
}

    administrarTareas(); // Llamada recursiva
}

// Iniciar Aplicacion
administrarTareas();
*/

let tareas = []; // Inicializa la lista de tareas vacía

function mostrarTareas() {
    if (tareas.length === 0) {
        console.log("Lista vacía, No hay Tareas a motrar.");
        return;
    }
    
    console.log("\nLista de Tareas:");// El ("\n") hace un salto de linea,  ("\n\n") hace dos salto de linea.
    tareas.forEach((tarea, index) => console.log(`${index + 1}. ${tarea}`));//LE PEDI A LA AI QUE ME AYUDARA EN MOSTRAR EL INDICE
}

function eliminarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas para eliminar.");
        return;
    }

    mostrarTareas();
    
    let indice = prompt("Ingrese el número de la tarea a eliminar:");
    
    if (indice > 0 && indice <= tareas.length) {
        tareas.splice(indice - 1, 1); // Elimina la tarea
        console.log("Tarea #" + indice + " eliminada.");
    } else {
        console.log(" # de Tarea no registrada, verifique e intente nuevamente.");
    }
}

function administrarTareas() {
    let respuesta = prompt(`

IMPORTANTE: Abra la consola de su navegador para visualizar los resultados.

Bienvenido, por favor escriba:
A = Agregar una Tarea
E = Eliminar una Tarea
L = Listar la(s) Tarea(s)
S = Salir de la Aplicación
    `).toUpperCase();

    if (respuesta === "S") {
        alert("Usted ha salido del aplicado.")
        console.log("\nLista de tareas:");
        mostrarTareas();
        return;
    }

    if (respuesta === "A") {
        let nuevaTarea = prompt("Ingrese una tarea:");
        tareas.push(nuevaTarea.toUpperCase());
    } else if (respuesta === "L") {
        mostrarTareas();
    } else if (respuesta === "E") {
        eliminarTarea();
    } else {
        alert("Letra inválida. Intenta de nuevo.");
        console.log("Letra inválida, verifique e intente de nuevo.");
    }

    administrarTareas(); // Llamada recursiva
}

// Iniciar aplicación
administrarTareas();