<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-2 fixed-top">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" routerLink="/">BIKE<span class="red">X</span></a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
     <ul class="navbar-nav mr-auto pr-4">
      
       <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
      <input class="form-control mr-sm-2" type="search" placeholder="Search by Models" aria-label="Search">
    </form>
    </ul>
    <ul class="navbar-nav mt-auto mr-3">
    <li class="nav-item">
       <a class=""><router-link to="/" exact-active-class="active">HOME</router-link></a>
      </li>
        <!-- <li class="nav-item">
       <a class=""><router-link to="/bikes" exact-active-class="active">BIKES</router-link></a>
      </li> -->
       <li class="nav-item">
        <a class=""><router-link to="/about" exact-active-class="active">OUR STORY</router-link></a>
      </li>
      <li class="nav-item">
       <a class=""><router-link to="/contact" exact-active-class="active">EXPERIENCE CENTER</router-link></a>
      </li>
      <!-- <li class="nav-item">
      <a class=""><router-link to="/story" exact-active-class="active">OUR STORY?</router-link></a>
      </li> -->
</ul>
  </div>
</nav>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Coda:800&display=swap');

.navbar-brand{
  font-size: 2.25rem;
  font-family: 'Coda', cursive;
font-weight: bold;
}
.navbar-brand a {
    color: black;
    text-decoration: none;
    background-color: transparent;
    padding-left: 5px;

}
.red{
  color: #EA2027
}
.btn-outline-success {
    color: #EA2027;
    border: none;
}
.btn-outline-success:hover {
    background-color: transparent !important;
      border: none;
}
.btn-outline-success:focus {
       background-color: transparent !important;
       box-shadow: none;
}
.btn-outline-success:not(:disabled):not(.disabled):active:focus{
         box-shadow: none;
        color: #EA2027
}
ul.navbar-nav.mr-auto {
    margin-left: 15px;
}
@media screen and (min-height: 750px) {
  ul.navbar-nav.mr-auto {
    margin-left: 0px;
}
input.form-control{
  width: auto;
}
}
.navbar ul li a{
  text-decoration: none;
  background-color: transparent;
  color: black;
  font-family: 'Montserrat', sans-serif;
    font-size: 14px;
}
.navbar ul li{
padding: 5px
}
.active{
  border-bottom: 2px solid #EA2027;
  padding-bottom: 5px
}
input.form-control{
  box-sizing: content-box;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
    margin-left: -9px;
    margin-right: 20px;
    outline: 0;
    font-size: 12px;
    width: 500px;
      font-family: 'Montserrat', sans-serif;
    box-shadow: none;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.navbar{
  box-shadow: 0 3px 7px 0 #e9e9e9;

}

input.form-control:focus {
    border-bottom: 1px solid #EA2027;
    box-shadow: 0 1px 0 0 #EA2027;
}
</style>