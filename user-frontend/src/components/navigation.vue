<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-2 fixed-top">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <i class='fas fa-align-left' style='font-size:28px'></i>
  </button>
  <a class="navbar-brand" routerLink="/">BIKE<span class="red">X</span></a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
     <ul class="navbar-nav mr-auto">
      
       <form class="form-inline">
      <button class="btn btn-outline-success0" type="submit"><i class="fa fa-search"></i></button>
      <input class="form-control" type="search" placeholder="Search by Models" aria-label="Search">
    </form>
    </ul>
    <ul class="navbar-nav ">
    
       <li class="nav-item">
        <a class="story"><router-link to="/about" exact-active-class="active">OUR STORY</router-link></a>
      </li>
      <li class="nav-item">
       <a class="models"><router-link to="/" exact-active-class="active">MODELS</router-link></a>
      </li>
      <li class="nav-item">
       <a class="faq"><router-link to="/contact" exact-active-class="active">FAQ'S</router-link></a>
      </li>

</ul>
  </div>
</nav>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Coda:800&display=swap');

.navbar{
  box-shadow: 0 3px 7px 0 #e9e9e9;

}
.navbar-brand{
  font-size: 2.25rem;
  font-family: 'Coda', cursive;
  font-weight: bold;
}
button.navbar-toggler{
  outline: none !important;
  border: none;

}
button.navbar-toggler:focus {
  outline: none !important;
  border: none;

}
.red{
  color: #EA2027
}
input.form-control{
  box-sizing: content-box;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
    margin-left: 0px;
    margin-right: 0px;
    outline: 0;
    font-size: 12px;
    width: 550px;
    font-family: 'Montserrat', sans-serif;
    box-shadow: none;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
@media only screen and (max-width: 700px) {
  input.form-control{
     width: 200px;
  }
}
.navbar-collapse {
    margin-bottom: 20px
    }
.navbar ul li a{
  text-decoration: none;
  background-color: transparent;
  color: black;
  font-family: 'Montserrat', sans-serif;
    font-size: 14px;
}
ul.navbar-nav.mr-auto {
    margin-left: 15px;
}
.navbar ul li{
padding: 5px
}
.active{
  border-bottom: 2px solid #EA2027;
  padding-bottom: 5px
}
 .btn-outline-success {
    color: #EA2027;
    border: none;
}
.btn-outline-success:hover {
    background-color: transparent !important;
      border: none !important;
}
button.btn.btn-outline-success0 {
    box-shadow: none;
}
.btn-outline-success:not(:disabled):not(.disabled):active:focus{
         box-shadow: none;
        color: #EA2027
} 
.story{
  word-spacing: 2px;
}
 input.form-control:focus {
    border-bottom: 1px solid #EA2027;
}
</style>