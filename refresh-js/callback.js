function loadScript(src, callback){
	let script = document.createElement('script');
	script.src = src;
	script.onload = () => callback(script);
	document.head.append(script);
}

loadScript('./my.js', (script) => {
	alert(`The ${script.src} is loaded!`);
	newFunction();
})