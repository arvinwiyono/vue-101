function unique(arr){
	let s = new Set();
	for(let str of arr){
		s.add(str);
	}
	// this converts Set to an Array
	return [...s].join(', ');
}

let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"]
console.log(unique(values));