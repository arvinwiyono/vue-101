<template>
	<footer>
		<p>{{copyright}}</p>
	</footer>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				copyright: 'Copyright 2017 Vue Ninjas'
			}
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