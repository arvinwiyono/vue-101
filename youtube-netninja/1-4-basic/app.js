// A vue instance accepts an object as its parameter
let app = new Vue({
	el: '#vue-app',
	data: {
		name: 'Arvin',
		job: 'Just slacking...',
		website: 'https://www.linkedin.com/in/arvin-wiyono-80b5bba7/',
		websiteTag: '<a href="https://www.linkedin.com/in/arvin-wiyono-80b5bba7/" target="_blank">LinkedIn Profile</a>'
	},
	methods: {
		greet: function(time){
			return 'Good ' + time + ', ' + this.name + '!'; 
		}
	}
});