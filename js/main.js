//variable contiene los valores del boton
var boton = document.getElementById("agregar");
//tarea contine los valores de textarea
var tarea = document.getElementById("texto");
//contiene los valores de ul
var pendientes = document.getElementById("lista");

//cuando se haga clic sobre boton llama a la funcion agregar tarea
boton.onclick = function () {
	agregarTarea();
};

function crearTarea() {
	//variable que crea un li para la ul
	var nueva = document.createElement("li");
	
	//crea un input tipo checkbox para li
	var check = document.createElement("input");
	check.setAttribute("type","checkbox");
	nueva.appendChild(check);
	pendientes.appendChild(nueva);

	//crea una label para el texto
	var actividad = document.createElement("label");
	//si existe texto se crea elcontenido para label
	var descripcion = document.createTextNode(tarea.value);
	actividad.appendChild(descripcion);
	nueva.appendChild(actividad);

	//crea el icono de bote de basura
	var borrar = document.createElement("span");
	borrar.setAttribute("class","fa fa-trash basura fa-lg");
	nueva.appendChild(borrar);

	return nueva;
}
//funcion para agregar tarea
function agregarTarea() {
	//comprueba si textare contiene texto
	if(tarea.value <= 0) {
		alert('Ingresa una tarea');
	} else {
		var nuevo = crearTarea();
	}

	tarea.value = "";
	seleccionaTarea();
	borra();
}

//funcion para borrar elemento que contiene al trash seleccionado
function borra() {
	var borrado = document.getElementsByTagName("span"); 
	for (var i = 0; i < borrado.length; i++) {
		borrado[i].onclick = function(){
			var padreTrash = this.parentNode;
  			padreTrash.parentNode.removeChild(padreTrash);
  		}
	}
}
//funcion para verificar si esta seleccionado
function seleccionaTarea() {
	var checkBox = document.getElementsByTagName("input");
  	for (var j = 0; j < checkBox.length; j++) {
  		checkBox[j].onclick = function() {
  			if (this.checked == true){
  				var lbl = this.nextSibling;
  				lbl.setAttribute("class","tachado");
  			} else if(this.checked == false) {
  				var lbl = this.nextSibling
  				lbl.setAttribute("class","");
  			}
  		}
 	}
}








