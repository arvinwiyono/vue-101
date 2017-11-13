<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <p class="subtitle">{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Your first Vue file, whooo!'
    }
  },
  methods:{
    greeting: function(){
      return 'Heyyyyy cowboy.'
    }
  }
}
</script>

<style>
  p.subtitle{
    color: green;
  }
</style>
