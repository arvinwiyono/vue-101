/*
Class paterns in Javascript
*/

// style #1 - function classes
function User(name, birthday){

	// private function
	function calculateAge(){
		return new Date().getFullYear() - birthday.getFullYear();
	};

	this.sayHi = function(){
		console.log(name + ', age: ' + calculateAge());
	};
}

// style # 2 - prototype-based classes
function User2(name, birthday){
	this._name = name;
	this._birthday = birthday;
}

User2.prototype._calculateAge = function(){
	return new Date().getFullYear() - this._birthday.getFullYear();
};

User2.prototype.sayHi = function(){
	console.log(this._name + ', age: ' + this._calculateAge());
};

user_1 = new User('Arvin Wiyono', new Date(2000, 0, 1));
user_1.sayHi();

user_2 = new User2('Someone else', new Date(1995, 12, 10));
user_2.sayHi();

// Animal and Rabit example for inheritance
function Animal(name){
	this.name = name;
}

let animal_1 = new Animal('Timmy');

Animal.prototype.eat = function(){
	console.log(this.name + ' eats.');
};

animal_1.eat(); // Timmy can now eat
let animal_2 = new Animal('Puffy');
animal_2.eat();

function Rabbit(name){
	this.name = name;
}

// Not all animals can jump
Rabbit.prototype.jump = function(){
	console.log(this.name + ' jumps!');
};

// Inheritance chain
Rabbit.prototype.__proto__ = Animal.prototype;

let rabbit = new Rabbit('White rabbit');
rabbit.eat();
rabbit.jump();

// The class syntax
class User3{
	constructor(name){
		this.name = name;
	}

	sayHi(){
		console.log(this.name);
	}
}

let user_3 = new User3('Maria');
user_3.sayHi();

class Article{
	constructor(title, date){
		this.title = title;
		this.date = date;
	}
	// sort by date (ascending)
	static compare(articleA, articleB){
		return articleA.date - articleB.date
	}

	static createTodays(title){
		return new this(title, new Date());
	}
}

let articles = [
	new Article('Naruto', new Date(2016, 1, 1)),
	new Article('Sasuke', new Date(2012, 10, 22)),
	new Article('Sakura', new Date(2013, 4, 4))
];

articles.sort(Article.compare);

for(let article of articles){
	console.log(article.title);
}

let article = Article.createTodays('Todays News');
console.log(article.date);