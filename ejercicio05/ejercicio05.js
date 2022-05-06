// Script del ejercicio05

var tableSize = 0;

function createTable(){
	tableSize = document.getElementById("tableSize").value;
	let table = document.getElementById("valuesTable");

	let tableInnerHTML = "";
	tableInnerHTML += "<table>";
	for(let i = 0; i < tableSize; i++){
		tableInnerHTML += "<tr><td><input type='number' step='0.01' value='0'></td></tr>\n";
	}
	tableInnerHTML += "</table>";
	table.innerHTML = tableInnerHTML;

	document.getElementById("divCreateTable").setAttribute("style","display: none");
	document.getElementById("divValuesTable").setAttribute("style","display: block");
}
