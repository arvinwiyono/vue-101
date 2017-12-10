<template>
	<div>
		<h3 class="title is-3">List of ninjas</h3>
		<ul>
			<li v-for="ninja in ninjas">{{ninja}}</li>
		</ul>
	</div>
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

<!-- This is gonna scope the styling to its own component -->
<style type="text/css" scoped>
	.title{
		color: green !important;
	}
</style>