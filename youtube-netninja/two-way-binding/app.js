new Vue({
	el: '#vue-app',
	data:{
		name: '',
		age: ''
	},
	methods:{
		logName: function(){
			console.log(this.name);
		},
		logAge: function(){
			console.log(this.age);
		}
	}
});