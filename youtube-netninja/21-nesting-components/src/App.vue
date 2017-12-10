<template>
	<div id="app">
		<app-header></app-header>
		<app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
		<app-footer></app-footer>
	</div>
</template>

<script type="text/javascript">
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'
	import Ninjas from './components/Ninjas.vue'
	export default{
		data(){
			return{
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