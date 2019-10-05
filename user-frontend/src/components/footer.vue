<template>
<footer class="section footer-classic context-dark pl-auto pr-auto col-md-12" style="background: #000000;">
        <div class="container footer pt-4">
          <div class="row">
            <div class="col-md-3 pl-0 text-left ">
                <a href="" class="navbar-brand" routerLink="/">BIKE<span class="red">X</span></a>
               <div class="social">
                  <p class="social"><a href="/facebook">   <i class="fb fa fa-facebook fa-2x"></i> </a>
                <a href="/instagram"> <i class="insta fa fa-instagram fa-2x"></i></a>
                <a href="/twitter">  <i class="tweet fa fa-twitter fa-2x"></i></a></p>
               </div>  
               <div class="batch">
                  <p class="rights"><span>©  </span><span class="copyright-year">2019</span>
                  <span> BikeX</span><span>. </span><span>All Rights Reserved.</span></p>
                </div>
            </div>
            <div class="col-md-3 pl-0 col-xl-3 text-left contentss">
             <h3 class="menu">CONTACTS</h3> 
              <ul class="nav-list">
                <li><span>Email: </span><a href="mailto:bikex@gmail.com">bikex@gmail.com</a></li>            
                <li><span>Phones: </span><span class="phone" href="(080) 9999-9999">(080) 9999-9999</span></li> 
                <li><span>Address: </span>
                <a class="map-responsive" href="https://goo.gl/maps/eJKcARiWnqRXDc5u5">hal 2nd stage,sdsdsdbengaluru</a>
                </li>           
              </ul>
            </div>

            <div class="col-md-3 pl-0 col-xl-3 text-left contentss">
              <h3 class="menu">COMPANY</h3>
              <ul class="nav-list">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Privacy Policy</a></li>            
                <li><a href="#">Careers</a></li>            
              </ul>
            </div>

            <div class="col-md-3 col-xl-3 text-left contentss">
              <h3 class="menu">LOCATE US</h3>
              <ul class="nav-list">
                <li> <div class="google-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24259.2011026722!2d77.62487102130073!3d12.982895604377044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a77f100f77%3A0xc5ec8c9958653929!2sOntrack%20-%20Bike%20Rental%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1570217531689!5m2!1sen!2sin"  width="100%" height="200px" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div></li>
                           
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
.footer{
  min-height: 250px;
  padding: 1;
}
.navbar-brand{
  font-size: 1.5rem;
  font-family: 'Coda', cursive;
  font-weight: bold;
}
/* .batch {
    margin-top: 84px;
} */
.menu{
font-size: 15px;
font-weight: bold;
color: rgb(153, 157, 163);
  font-family: 'Montserrat', sans-serif;

}
.sub-menu p{
  font-size: 5px;
    font-family: 'Montserrat', sans-serif;

}
.social a{
  padding-right: 10px;
  font-size: 10px;
}
.contentss ul{
  line-height: 40px;
  list-style: none;
 padding: 0px;
 margin: 0px;
   font-family: 'Montserrat', sans-serif;

}
.context-dark, .bg-black-dark .bg-primary{
    color: rgba(255, 255, 255, 0.8);
}

 ul li a:hover {
    color: rgb(175, 42, 42);
}
.batch p{
  font-size: 12px;
     font-family: 'Montserrat', sans-serif;

}

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

@media only screen and (max-width: 600px) {
  .container{
    text-align: center
  }
.row{
  text-align: center
}
}

</style>