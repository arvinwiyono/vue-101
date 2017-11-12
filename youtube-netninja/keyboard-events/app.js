new Vue({
	el: '#vue-app',
	data: {
		defaultName: 'Your name...',
		defaultAge: 20,
		name: undefined,
		age: undefined
	},
	methods:{
		logName: function(){
			console.log(`You entered your name: ${this.name}`);
		},
		logAge: function(){
			console.log(`You entered your age: ${this.age}`);
		}
	}
});