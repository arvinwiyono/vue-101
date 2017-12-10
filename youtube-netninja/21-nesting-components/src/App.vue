<template>
	<div id="app">
		<app-header v-bind:title="title" :greeting="greeting" v-on:changeTitle="updateTitle($event)" v-on:changeGreeting="updateGreeting($event)"></app-header>

		<p v-on:changeGreeting="updateGreeting($event)">From App.vue: {{greeting}}</p>

		<app-ninjas v-bind:ninjas="ninjas" :greeting="greeting"></app-ninjas>

		<app-footer v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-footer>
	</div>
</template>

<script type="text/javascript">
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'
	import Ninjas from './components/Ninjas.vue'
	export default{
		data(){
			return{
				title: 'Vue Ninjas',
				greeting: 'Hello there!',
				ninjas: [
					{name: 'Arvin', speciality: 'Slicing fruits', show: false},
					{name: 'Biondi', speciality: 'Sleeping & eating er day long', show: false},
					{name: 'Hitoshi', speciality: 'Driving a tuk-tuk', show: false},
					{name: 'Tango', speciality: 'You wot m8', show: false},
					{name: 'Kami', speciality: 'Unknown', show: false},
					{name: 'Yoshi', speciality: 'Not sure', show: false}
				]
			}
		},
		methods:{
			updateGreeting: function(newGreeting){
				console.log('Updating greeting...');
				this.greeting = newGreeting;
			},
			updateTitle: function(newTitle){
				console.log('Updating title...');
				this.title = newTitle;
			}
		},
		components: {
			// Not using header because <header> is an HTML tag
			'app-header': Header,
			'app-footer': Footer,
			'app-ninjas': Ninjas
		}
	}
</script>

<style type="text/css">
</style>