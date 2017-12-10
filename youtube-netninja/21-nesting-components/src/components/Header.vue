<template>
	<header>
		<h1>
			{{title}}
			<button @click="changeTitle">Change title</button>
		</h1>
		<p @click="changeGreeting">{{greeting}}</p>
	</header>
</template>

<script type="text/javascript">
	export default{
		props: ['title', 'greeting'],
		data(){
			return{

			}
		},
		methods: {
			changeTitle: function(){
				console.log('Changed from Header');
				this.$emit('changeTitle', 'New Title');
			},
			changeGreeting: function(){
				console.log('Changed from Header');
				this.$emit('changeGreeting', 'Good evening!')
			}
		}
	}
</script>

<style type="text/css" scoped>
	header{
		background: lightgreen;
		padding: 10px;
	}
	h1{
		color: #222;
		text-align: center;
	}
	p{
		color: black;
	}
</style>