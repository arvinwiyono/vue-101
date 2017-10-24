let modal = Vue.component('modal', {
	// Use emit to communicate with the root scope
	template: `
		<div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
					<slot></slot>
				</div>
			</div>
			<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
		</div>

	`
})

new Vue({
	el: '#root',
	components: {
		my_modal: modal
	},
	data: {
		showModal: false
	}
})