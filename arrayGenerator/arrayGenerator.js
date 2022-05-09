// Alternative solution using map() over array of null values
function arrayGenerator(n, min, max){
	// Creates an array of nulls, with length = n
	let a = Array.apply(null, Array(n));
	/* Maps over "a" to set a random value between min and max to every element
	and saves the new array in "a" */
	a = a.map( function(e){
		let rnd = Math.ceil(Math.random() * (max - min) + min);
		return rnd;
	});
	return a;
}
