<template>
  <div id="app">
    <navigation></navigation>
    <!-- <router-view></router-view> -->
    <!-- <home></home> -->
    <bikes></bikes>
  </div>
</template>

<script>
// import home from './components/home.vue';
import bikes from './components/bikes.vue';
import navigation from './components/navigation.vue';

export default {
  name: 'app',
  components: {
    navigation,
    //  home
    bikes
  }
}
</script>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;    
}
</style>
