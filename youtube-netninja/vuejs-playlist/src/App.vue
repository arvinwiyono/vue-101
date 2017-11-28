<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
// Here we register the Ninjas component locally, not globally in main.js
import Ninjas from './Ninjas.vue'

export default {
  components:{
    'ninjas': Ninjas
  },
  data(){
    return {
      title: 'Ninja App'
    }
  }
}
</script>

<style>

</style>
