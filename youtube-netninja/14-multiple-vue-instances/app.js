let one = new Vue({
	el: '#vue-app-one',
	data:{
		title: 'First application'
	},
	methods:{

	},
	computed:{
		greet: function(){
			return 'Hello from app one!'
		}
	}
});

let two = new Vue({
	el: '#vue-app-two',
	data:{
		title: 'Second application'
	},
	methods:{
		changeTitle: function(){
			one.title = 'My title has been changed!';
		}
	},
	computed:{
		greet: function(){
			return 'This is app 2 speaking to you.'
		}
	}
});

two.title = "Changed from outside the vue instance.";