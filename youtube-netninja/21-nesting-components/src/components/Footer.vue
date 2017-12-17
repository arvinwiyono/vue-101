<template>
	<footer>
		<p>{{copyright}}</p>
	</footer>
</template>

<script type="text/javascript">
	import { bus } from "../main";

	export default{
		props: ['title'],
		data(){
			return{
				
			}
		},
		computed: {
			copyright: function(){
				return 'Copyright 2017 ' + this.title;
			}
				
		},
		created(){
			bus.$on('titleChanged', (data) => {
				this.title = data;
			});
		}
	}
</script>

<style type="text/css">
	footer{
		background: #222;
		padding: 6px;
	}
	p{
		color: lightgreen;
		text-align: center;
	}
</style>