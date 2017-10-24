let message = Vue.component('message', {
	// Explicityly specify the accepted attributes
	props: ['title', 'body'],
	data: function(){
		return {
			isVisible: true
		}
	},
	methods: {
		hideModal(){
			this.isVisible = false;
		}
	},
	template: `
		<article class="message" v-show="isVisible">
			<div class="message-header">
			    <p>{{title}}</p>
			    <button class="delete" aria-label="delete" @click="hideModal"></button>
		  	</div>
			<div class="message-body">
				{{body}}
		  	</div>
		</article>
	`
});

new Vue({
	el: '#second-root',
	components: {custom_message_box: message}
});