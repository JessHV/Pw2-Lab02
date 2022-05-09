// Initial code of arrayGenerator()
function arrayGenerator(n, min, max){
	let a = [];
	for(let x = 0; x < n; x++){
		a.push(Math.ceil(Math.random() * (max - min) + min));
	}
	return a;
}
