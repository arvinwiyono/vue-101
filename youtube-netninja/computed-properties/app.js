new Vue({
	el: 'div#vue-app',
	data:{
		age: 10,
		a: 0,
		b: 0
	},
	methods: {
		addToA: function(){
			console.log('A');
			return this.a + this.age;
		},
		addToB: function(){
			console.log('B');
			return this.b + this.age;
		}
	},
	computed:{
		addToAComputed: function(){
			console.log('Computed A');
			return this.a + this.age;
		},
		addToBComputed: function(){
			console.log('Computed B');
			return this.b + this.age;
		}
	}
});