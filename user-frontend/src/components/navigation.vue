<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">BikeX</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
       <li class="nav-item">
        <a class="nav-link"><router-link to="/about"  exact-active-class="active">About</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/bikes"  exact-active-class="active">Bikes</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">How It Works ?</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" ><router-link to="/contact"  exact-active-class="active">Contact Us</router-link></a>
      </li>
    </ul>
  </div>
</nav>
</template>