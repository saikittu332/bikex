<template>
<footer class="section footer-classic context-dark bg-image" style="background: #000000;">
        <div class="container mt-4 mb-4">
          <div class="row row-30">
            <div class="col-md-4 col-xl-5">
               <div class="first pr-xl-4">
                <a href="" class="navbar-brand" routerLink="/">BIKE<span class="red">X</span></a>
                <p><a href="/facebook">   <i class="fb fab fa-facebook fa-2x"></i> </a>
                <a href="/instagram"> <i class="insta fab fa-instagram fa-2x"></i></a>
                <a href="/twitter">  <i class="tweet fab fa-twitter fa-2x"></i></a></p>
                <p class="rights"><span>©  </span><span class="copyright-year">2019</span><span> BikeX</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div class="abc col-md-4">
              <h3>Contacts</h3>      
              <p class="address"><span>Address: </span><a class="map-responsive" href="https://goo.gl/maps/eJKcARiWnqRXDc5u5">hal 2nd stage, bengaluru</a></p>
              <div class="email"><p class="email"><span>Email: </span><a href="mailto:bikex@gmail.com">bikex@gmail.com</a></p></div>
              <p class="phones"><span>Phones: </span><span class="phone">(080) 9999-9999</span></p>
            </div>
            <div class="col-md-4 col-xl-3">
              <h3>Company</h3>
              <ul class="nav-list">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Privacy Policy</a></li>            
                <li><a href="#">Careers</a></li>            
              </ul>
            </div>
          </div>
        </div>
      </footer>
</template>


<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
.container{
  padding: 40px 20px 20px 20px;
  /* padding: 40px 0px 20px 0px; */
  
}
.context-dark, .bg-black-dark .bg-primary{
    color: rgba(255, 255, 255, 0.8);
}
.navbar-brand{
  font-size: 1.5rem;
  font-family: 'Coda', cursive;
font-weight: bold;
margin-left: -150px;
}
.navbar-brand a {
    color: black;
    text-decoration: none;
    background-color: transparent;
    padding-left: 5px;
    font-family: 'Coda', cursive;
    /* margin-left: -100px; */
}
.rights {
  margin-left: 10px;
}

/* .fb .insta .tweet{
  margin-left: 10px;
} */
 ul li a:hover {
    color: rgb(175, 42, 42);
}

.abc a:hover{
  color: rgb(175, 42, 42);
}

.abc a:hover{
  color: rgb(175, 42, 42);
}

/*onhover social icons */
.fb:hover{
color: #3B5998
} 

.insta:hover{
  
color: #3f729b
}

.tweet:hover{
color: #1da1f2
}


.red{
  color: #EA2027
}

.footer-classic a, .footer-classic a:focus, .footer-classic a:active {
    color: #ffffff;
}




.nav-list li {
    /* padding-top: 5px;
    padding-bottom: 5px; */
        margin-bottom: 1rem;

}

@media (min-width: 1200px){
.pr-xl-4, .px-xl-4 {
  margin-left: -300px;
    /* padding-right: -2.5rem!important; */
    
}}
ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
}
.nav-list li a:before {
    content: "\f14f";
    font: 400 21px/1 "Material Design Icons";
    color: #4d6de6;
    display: inline-block;
    vertical-align: baseline;
    margin-left: -28px;
    margin-right: 7px;
    opacity: 0;
    visibility: hidden;
    transition: .22s ease;
}
.nav-list ul li a{
    font-family: 'Montserrat', sans-serif;
}
.fab{  
  padding-right: 50px;
}
.fa-facebook:before {
    content: "\f09a";
    margin-left: 50px;
}

.map-responsive{
    overflow:hidden;
    position:relative;
    height:0;
}
.map-responsive a{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}
</style>