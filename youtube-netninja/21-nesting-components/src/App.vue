<template>
	<div id="app">
		<app-header></app-header>
		<ninjas></ninjas>
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

			}
		},
		components: {
			// Not using header because <header> is an HTML tag
			'app-header': Header,
			'app-footer': Footer,
			'ninjas': Ninjas
		}
	}
</script>

<style type="text/css">
</style>