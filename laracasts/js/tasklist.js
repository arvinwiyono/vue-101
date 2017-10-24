Vue.component('task', {
	template: '<li><slot></slot></li>'
})

Vue.component('task-list', {
	template: `
	<div>
		<task v-for="task in tasks">{{task.description}}</task>
	</div>`,
	
	data: () => {
		return {
			tasks: [
				{ description: 'Go to the store', completed: true },
				{ description: 'Finish tutorial', completed: false },
				{ description: 'Finish thesis', completed: false },
				{ description: 'Read emails', completed: true },
				{ description: 'Clean room', completed: false }
			]
		}
	}
})

new Vue({
	el: '#root'
});