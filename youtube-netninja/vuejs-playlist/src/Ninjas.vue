<template>
	<ul>
		<li v-for="ninja in ninjas">{{ninja}}</li>
	</ul>
</template>

<script type="text/javascript">
export default {
	data(){
		return {
			ninjas: ['Yoshi', 'Mario', 'Luigi']
		}
	}
}
</script>

<style type="text/css">
	
</style>