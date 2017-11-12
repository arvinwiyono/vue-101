let app = new Vue({
	el: 'div#vue-app',
	data: {
		age: 23,
		x: 0,
		y: 0
	},
	methods: {
		incrementAge: function(year=1){
			this.age += year;
		},
		decrementAge: function(year=1){
			if(this.age - year >= 0){
				this.age -= year;
			}
			else{
				alert(`Cannot subtract ${year} year(s) from age!`);
			}
		},
		updateXY: function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		click: function(){
			alert('Thanks for visiting');
		}
	}
});