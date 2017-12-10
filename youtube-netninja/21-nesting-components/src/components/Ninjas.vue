<template>
	<div id="ninjas">
		<!-- <p>{{ninjas}}</p> -->
		<ul>
			<li v-for="ninja in ninjas" @click="ninja.show = !ninja.show">
				<h2>{{ninja.name}}</h2>
				<h3 v-show="ninja.show">Speciality: {{ninja.speciality}}</h3>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		props: {
			ninjas: {
				type: Array
			}
		},
		data(){
			return{

			}
		}
	}
</script>

<style type="text/css" scoped>
	#ninjas{
		width: 100%;
		max-width: 120%;
		margin: 40px auto;
		padding: 0 20px;
		box-sizing: border-box;		
	}
	ul{
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		padding: 0;
	}
	li{
		cursor: pointer;
		flex-grow: 2;
		flex-basis: 300px;
		text-align: center;
		padding:30px;
		border: 1px solid grey;
		margin: 5px;
	}
</style>