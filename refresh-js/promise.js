let promise = new Promise(function(resolve, reject){
	setTimeout(() => resolve("done!"), 1000);
});

let failedPromise = new Promise(function(resolve, reject){
	setTimeout(() => reject(new Error("Whoops!")), 1000);
});

function loadScript(src){
	return new Promise(function(resolve, reject){
		let script = document.createElement('script');
		script.src = src;
		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error(`Script load error: ${src}`));
		document.head.append(script);
	});
}

// Client
let testPromise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js');

testPromise.then(
	script => {alert(`${script.src} is loaded!`);},
	error => {alert(error);}
);