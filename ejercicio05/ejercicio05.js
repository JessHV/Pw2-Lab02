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

function calcSum(){
	let values = getValuesFromTable();
	let sum = 0;
	for(value of values){
		sum += value;
	}
	document.getElementById("totalSum").innerHTML = sum;

	document.getElementById("divTotalSum").setAttribute("style","display: block");
}
function getValuesFromTable(){
	let values = [];
	let tdTagValues = document.getElementsByTagName("td");
	for(tag of tdTagValues){
		let inputTag = tag.firstChild;
		let val = parseFloat(inputTag.value);
		values.push(val);
	}
	return values;
}
