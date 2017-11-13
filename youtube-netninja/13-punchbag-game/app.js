let app = new Vue({
	el: '#vue-game',
	data:{
		health: 100,
		ended: false
	},
	methods:{
		punchBag: function(){
			this.health -= 10;
			console.log(this.health);
			if(this.health === 0){
				this.ended = true;
			}
		},
		restartGame: function(){
			this.health = 100;
			this.ended = false;
		}
	}
});