<template>
  <div id="app">
    <navigation></navigation>
     <router-view></router-view>
     <appFooter></appFooter>
  </div>
</template>

<script>
// import home from './components/home.vue';
import bikes from './components/bikes.vue';
import appFooter from './components/footer.vue';
import navigation from './components/navigation.vue';

export default {
  name: 'app',
  components: {
    navigation,
    appFooter,
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