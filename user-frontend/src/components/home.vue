<template>
  <div class="home mt-3">
   <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/bike1.jpg" alt="banner1" width="100%" > 
    </div>
    <div class="carousel-item">
      <img src="../assets/bike2.jpg" alt="banner2" width="100%" >   
    </div>
    <div class="carousel-item">
      <img src="../assets/bike3.jpg" alt="banner3" width="100%" >  
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
<defaultcomponent></defaultcomponent>
<premium></premium>
<featured></featured>
</div>
</template>

<script>
import premium from './premium';
import featured from './featured';
export default {
  name: 'home',

components: {
    premium,
    featured
  }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

.carousel-caption{
  font-family: 'Josefin Sans', sans-serif;
  
}
.carousel-caption a{
  color: whitesmoke;
    text-decoration: none;
}
.home{
  -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.1);
    -moz-box-shadow: 0 2px 5px rgba(0,0,0,.1);
    box-shadow: 0 2px 5px rgba(0,0,0,.1)
}
</style>