<template>
	<div id="ninjas">
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