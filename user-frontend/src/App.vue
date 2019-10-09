<template>
  <div id="app">
    <navigation></navigation>
     <div class="content">
       <router-view></router-view>
     </div>
     <appFooter></appFooter>
  </div>
</template>

<script>

import appFooter from './components/footer.vue';
import navigation from './components/navigation.vue';

export default {
  name: 'app',
  components: {
    navigation,
    appFooter
 
  }
}
</script>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;    
}
.content{
  margin-top: 74px;
}
</style>