<template>
<div class="display mt-2 mb-4">
  <nav aria-label="breadcrumb mb-2  pb-2">
    <ol class="breadcrumb mb-0 ml-3 pb-0">
      <li aria-current="page" class="breadcrumb-item active1">
        <ol class="breadcrumb mb-0 pb-0">
          <li class="breadcrumb-item notactive"><a href="/">Home</a></li>
          <li class="breadcrumb-item active1"><router-link to="/vehicles">Vehicles</router-link></li>
          <li class="breadcrumb-item active1"><router-link to="/bikes">Bikes</router-link></li>
          <li class="breadcrumb-item active1"><a>suzuki 125</a></li>
        </ol>
      </li>
    </ol>
  </nav>
  <div class="row">
    <div class="col-md-6">
    <carousel perPage="1" :loop="true" paginationActiveColor="#EA2027">
    <slide>
      <div class="image">
        <img src="../assets/bikes/06-honda-dio.png" width="100%" height="55%">
      </div>
    </slide>
    <slide>
      <div class="image">
        <img src="../assets/bikes/14-aprilia.png" width="100%" height="55%">
      </div>
    </slide>
    <slide>
      <div class="image">
        <img src="../assets/bikes/11-bajaj-ct-100.png" width="100%" height="55%">
      </div>
    </slide>
    <slide>
      <div class="image">
        <img src="../assets/bikes/11-bajaj-ct-100.png" width="100%" height="55%">
      </div>
    </slide>
  </carousel>
  </div>

 <div class="col-md-6">
    <div class="discription mt-4 col-12">
      <div class="heading">
        <p>HONDA NAVI</p>
        <p>Rs. 35,000 <span class="priceStrike">45,000</span></p>
      </div>
      <div class="features ml-4 mr-4">
        <div class="row feat">
          <div class="col-4">
            <p><i class='fas fa-cogs'></i> 150CC</p>
          </div>
           <div class="col-4">
            <p><i class='fas fa-tachometer-alt'></i> 40 kmpl</p>
          </div>
          <div class="col-4">
            <p><i class="fas fa-palette"></i> White</p>
          </div>
        </div>
      </div>

      <div class="submit mt-3 mb-4">
        <button class="btn btn-primary buttons" type="submit">BOOK NOW</button>
      </div>
    </div>
 </div>
 </div>

    <div class="col-12 specs mt-4 col-md-12">
      <div class="row">
        <div class="col-md-6">
          <div class="heading pr-0 pb-0">
            <nav class="nav pb-0 text-left">
              <div class="col-6 spec-head active">
                <p class="nav-link">Features </p>
              </div>      
            </nav>
          </div>
          <div class="col-12 features-content mt-4">
            <p>"Bajaj categorizes CT100 as the jackpot bike offering superior mileage and low maintenance.
              Bajaj CT100 is layered with a new decal design. The SNS (Spring in Spring Suspension) technology aids in 
              conquering the most challenging road conditions. It has a long padded seat delivering a high level of comfort
              and making the commute on rougher terrains easier. The powerful engine helps in extracting the maximum efficiency. "
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="heading pr-0 pb-0">
            <nav class="nav pb-0 text-left">
              <div class="col-6 spec-head active">
                <p class="nav-link">Details </p>
              </div>     
            </nav>
          </div>

          <div class="col-12 features-content">
            <ul class="text-left mt-4 pl-3">
              <div class="row">
                <div class="col-6 head">
                  <li>CC </li>
                </div>
                <div class="col-6 body">
                  <li>150CC</li>
                </div>
              </div>

              <div class="row">
                <div class="col-6 head">
                  <li>Mileage </li>
                </div>
                <div class="col-6 body">
                  <li>99.1</li>
                </div>
              </div>
              <div class="row">
                <div class="col-6 head">
                  <li>Power </li>
                </div>
                <div class="col-6 body">
                  <li>8.1</li>
                </div>
              </div>
              <div class="row">
                <div class="col-6 head">
                  <li>Fuel Capacity </li>
                </div>
                <div class="col-6 body">
                  <li>10.5</li>
                </div>
              </div>
              <div class="row">
                <div class="col-6 head">
                  <li>Speed </li>
                </div>
                <div class="col-6 body">
                  <li>90</li>
                </div>
              </div>
              <div class="row">
                <div class="col-6 head">
                  <li>Ignition </li>
                </div>
                <div class="col-6 body">
                  <li>Kick start</li>
                </div>
              </div>
          </ul>
        </div>
      </div>
    </div>

    <div class="heading pr-0 pb-0">
      <nav class="nav pb-0 text-left">
        <div class="col-6 spec-head active">
          <p class="nav-link">Why us?</p>
        </div>     
      </nav>
    </div>
    <div class="col-12 features-content mt-4">
      <p>
        Our monthly bike rental vehicle range includes Bajaj CT 100 B at a very affordable rent. 
        This bike for rent at bike rentals in Hyderabad and Bangalore comes with Bajaj ‘SNS’ suspension in the rear and a conventional suspension in the front. It comes with a fuel gauge and flexible side indicators. The two-wheeler for rent uses a 102 cc single-cylinder 4-stroke engine tuned to produce 7.6 bhp of power and 8.24 Nm of peak torque.
        Take this self-drive bike effortlessly around your city and enjoy a hassle-free ride throughout.
      </p>
    </div>
    <div class="submit mt-3 mb-4">
      <button class="btn btn-primary buttons" type="submit">BOOK NOW</button>
    </div>
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Coda:800&display=swap');
a {
    color: #EA2027;
    text-decoration: none;
    background-color: transparent;
}
.breadcrumb{
background-color: transparent;
padding:0 !important;
font-family: 'Montserrat', sans-serif;
}
.active{
  border-bottom: 2px solid #EA2027;
}
.footer-head {
  border-bottom: 2px solid #EA2027;
}
.footer-head p{
   font-size: 20px;
    font-family: 'Coda', cursive;
    font-weight: bold;  
}
.head{
  padding: 3px 0px 3px 0px;
}
.features-content ul{
  list-style:none;
  font-family: 'Montserrat', sans-serif;
}
.features-content p{
  font-family: 'Montserrat', sans-serif;
}
.head{
  color:#EA2027
}
.buttons{
    padding: 8px 32px;
    border-radius: 20px;
    text-transform: uppercase;
    color: #fff;
    background-color: #EA2027;
    border-color: #EA2027;
}
.priceStrike {
    text-decoration: line-through;
    color: #9d9d9d;
}
.feat i{
  color: #EA2027
}
.spec-head p{
  font-size: 20px;
    font-family: 'Coda', cursive;
    font-weight: bold;  
}

.features-content p{
  text-align: left
}
</style>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  data(){
    return{
    
    }
  },
   components:{
     Carousel,
    Slide
   },
   methods:{
   
   }
}
</script>