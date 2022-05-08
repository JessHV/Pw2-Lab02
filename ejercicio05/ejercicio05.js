// Script del ejercicio05

var tableSize = 0;

function createTable(){
	tableSize = document.getElementById("tableSize").value;
	let table = document.getElementById("valuesTable");

	let tableInnerHTML = ""; // Guardara la tabla dinamica
	tableInnerHTML += "<table>";
	for(let i = 0; i < tableSize; i++){
		tableInnerHTML += "<tr><td><input type='number' step='0.01' value='0'></td></tr>\n";
	}
	tableInnerHTML += "</table>";
	table.innerHTML = tableInnerHTML; // Agrega la tabla dinamica al DOM
	
	// Oculta el primer div (donde se obtiene el tamanio de la tabla)
	document.getElementById("divCreateTable").setAttribute("style","display: none");
	// Muestra el segundo div, que contiene a la tabla dinamica
	document.getElementById("divValuesTable").setAttribute("style","display: block");
}

function calcSum(){
	let values = getValuesFromTable(); // Arreglo de valores en la tabla
	let sum = 0;
	for(value of values){ // Recorre los elementos del arreglo para sumarlos
		sum += value;
	}
	// Coloca la suma en una etiqueta con id "totalSum"
	document.getElementById("totalSum").innerHTML = sum;
	
	// Muestra el tercer div, que contiene el resultado de la suma
	document.getElementById("divTotalSum").setAttribute("style","display: block");
}
function getValuesFromTable(){
// Devuelve un arreglo con los valores establecidos en la tabla dinamica
	let values = [];
	// Obtiene un arreglo de todos los nodos de etiqueta "td" en el DOM
	let tdTagValues = document.getElementsByTagName("td");

	/* Recorre el arrglo de nodos para sumar el valor guardado en la etiqueta "input"
	que se encuentra dentro de cada nodo "td" del arreglo*/
	for(tag of tdTagValues){
		let inputTag = tag.firstChild; // Obtencion del nodo "input"
		let val = parseFloat(inputTag.value); // Obtencion del valor de input y convertido a Float
		values.push(val); // Agregando el valor al arreglo
	}
	return values;
}
