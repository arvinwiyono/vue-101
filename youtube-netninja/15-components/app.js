var data = {
	name: 'Yoshi'
}

Vue.component('greeting', {
	template: `
		<div class="greeting content">
			<p>Hi there, I am {{name}}.</p>
			<p><button class="button" @click="changeName()">Change my name</button></p>
		</div>
		`,
	data: function(){
		// this returns a shared data among the instances
		// return data

		return {
			name: 'Yoshi'
		}
	},
	methods:{
		changeName: function(){
			this.name = 'Mario';
		}
	}
});

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

	},
	computed:{
		greet: function(){
			return 'This is app 2 speaking to you.'
		}
	}
});