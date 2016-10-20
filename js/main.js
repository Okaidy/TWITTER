//variable contiene los valores del boton
var boton = document.getElementById("agregar");
//cuando se haga clic sobre boton llama a la funcion agregar tarea
boton.onclick = function () {
	agregarTarea();
};

//funcion para agregar tarea
function agregarTarea() {
	//tarea contine los valores de textarea
	var tarea = document.getElementById("texto");
	//contiene los valores de ul
	var pendientes = document.getElementById("lista");
	
	//comprueba si textare contiene texto
	if(tarea.value <= 0) {
		alert('Ingresa una tarea');
	} else {
		//variable que crea un li para la ul
		var nueva = document.createElement("li");


		//crea un input tipo checkbox para li
		var check = document.createElement("input");
		check.setAttribute("type","checkbox");
		nueva.appendChild(check);
		pendientes.appendChild(nueva);

		//si existe texto se crea elcontenido de la lista
		var actividad = document.createTextNode(tarea.value);
		nueva.appendChild(actividad);

		//crea el icono de bote de basura
		var borrar = document.createElement("span");
		borrar.setAttribute("class","fa fa-trash basura fa-lg");
		nueva.appendChild(borrar);
	}

	tarea.value = "";
	
}
    
