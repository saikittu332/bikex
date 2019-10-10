<template>
<div class="home">
  <div class="container col-md-8 mb-4 mt-4">
    <div class="header text-center mt-4">
      <p>Discover your bike</p>
    </div>
      <div class="row">
       <div class="col-md-4 col-4 p-1 m-0" @click="bikes">
            <div class="card"> 
              <div class="image">
                <img src="../assets/scooter.svg" width="70%" height="35%">
              </div>
              <div class="card-body p-2 m-0">
                <p class="bike-name">Bikes</p>
              </div>
            </div>
       </div>
        <div class="col-md-4 col-4 p-1 m-0" @click="scooters">
            <div class="card"> 
              <div class="image">
                <img src="../assets/scooter.svg" width="70%" height="35%">
              </div>
              <div class="card-body p-2 m-0">
                <p class="bike-name">Scooter</p>
              </div>
            </div>
       </div>
        <div class="col-md-4 col-4 p-1 m-0" @click="racings">
            <div class="card">
              <div class="image">
                <img src="../assets/scooter.svg" width="70%" height="30%">
              </div>
              <div class="card-body p-2 m-0">
                <p class="bike-name">Racing</p>
              </div>
            </div>
        </div>
     </div>
  </div>
  <div class="quotes col-12 col-md-12 mb-4 pt-4 pb-4">
    <carousel items=1 :nav="false" :autoplay="true">
          <div class="col-12">
            "The website makes car-buying haggle-free,
             with prices below market value, so customers can rest easy knowing they aren't getting ripped off."
          </div>
          <div class="col-12">
            "The website makes car-buying haggle-free,
             with prices below market value, so customers can rest easy knowing they aren't getting ripped off."
          </div>
          <div class="col-12">
            "The website makes car-buying haggle-free,
             with prices below market value, so customers can rest easy knowing they aren't getting ripped off."
          </div>
          <div class="col-12">
            "The website makes car-buying haggle-free,
             with prices below market value, so customers can rest easy knowing they aren't getting ripped off."
          </div>
          <div class="col-12">
            "The website makes car-buying haggle-free,
             with prices below market value, so customers can rest easy knowing they aren't getting ripped off."
          </div>
    </carousel>
  </div>

  <div class="container col-md-12">
    <div class="row trust-container mb-4">
      <div class="col-md-3 pt-4 pb-4 trust border">
        <p>Customers</p>
        <h2>1,30,000+</h2>
      </div>
      <div class="col-md-3 col-6 pt-4 pb-4 trust border">
        <p>Ratings 4.7 / 5 </p>
      </div>
      <div class="col-md-3 col-6 pt-4 pb-4 trust border">
        <p>Reviews 4.7 / 5</p>
      </div>
      <div class="col-md-3 pt-4 pb-4 trust border">
        <p>Bike<span style="color:red">X </span> Showrooms</p>
        <h2>6+ Cities & Growing</h2>
        <p style="text-align:left; font-size:12px;">30+ Showrooms across Bangalore,
           Delhi-NCR, Jaipur, Pune, Kota & Hyderabad, and soon we are expanding to more cities.</p>
      </div>
    </div>
  </div>

    <div class="value-heading col-md-12 mb- text-center">
      <h2>BIKE<span style="color:#EA2027">X </span>values</h2>
    </div>

  <div class="container col-12 col-md-12 why-to-rent mb-4">
    <div class="row">
      <div class="col-6 col-md-2 mt-4">
        <div class="header mr-0">
         <div class="sub-head text-left">
            <p style="color: #999da3;">PRICE</p>
         </div>
          <div class="content mt-4">
              <p style="text-align:left; font-size:12px;font-family: 'Montserrat', sans-serif;">We’ve eliminated the middleman and made the entire
                 car buying process more efficient, which allows us to pass the savings onto our customers
              </p>
          </div>
        </div>
      </div>
       <div class="col-6 m-0 p-0 col-md-2 text-left mt-4">
          <div class="image m-0">
              <img src="../assets/values.jpg" alt="" height="auto" width="90%">
          </div>
      </div>

        <div class="col-6 m-0 p-0 col-md-2 text-left mt-4 mobile">
          <div class="image m-0">
              <img src="../assets/value1.jpg" alt="" height="auto" width="90%">
          </div>
      </div>

      <div class="col-6 col-md-2 mt-4">
        <div class="header mr-0">
         <div class="sub-head text-left">
            <p style="color: #999da3;">RECONDITIONING</p>
         </div>
          <div class="content mt-3">
              <p style="text-align:left; font-size:12px;font-family: 'Montserrat', sans-serif;">Every bike we sell has a clean title and an accident-free CARFAX® vehicle history report.
                 bikes are inspected for safety, mechanical, and cosmetic issues.</p>
          </div>
        </div>
      </div>
       <div class="col-6 m-0 p-0 col-md-2 text-left mt-4 laptop">
          <div class="image m-0">
              <img src="../assets/values2.jpg" alt="" height="auto" width="90%">
          </div>
      </div>


<div class="col-6 col-md-2 mt-4 mb-4">
        <div class="header mr-0">
         <div class="sub-head text-left">
            <p style="color: #999da3;">FINANCE</p>
         </div>
          <div class="content mt-3">
              <p style="text-align:left; font-size:12px;font-family: 'Montserrat', sans-serif;">Maybe you got the BIKE price you wanted, but got crushed on your loan.
                 There’s no reason your dealer should profit from a high interest rate.
              </p>
          </div>
        </div>
      </div>
       <div class="col-6 m-0 p-0 col-md-2 text-left mt-4">
          <div class="image m-0">
              <img src="../assets/values2.jpg" alt="" height="auto" width="90%">
          </div>
      </div>

    </div>
  </div>
  <!-- <div class="values col-md-8 ml-0">
    <div class="menu pb-0 ml-0 pl-0 col-12">
            <nav class="nav ml-0 pl-0">
               <ul class="ml-0 pl-0">
                 <li v-bind:class="{ active: prices }" @click="price">Prices</li>
                  <li v-bind:class="{ active: reconditioning }" @click="reconditions">Reconditioning</li>
                   <li v-bind:class="{ active: returns }" @click="returnss">Return</li>
                    <li v-bind:class="{ active: finance }" @click="finances">Finance</li>
                     <li v-bind:class="{ active: coverage }" @click="coverages">Coverage</li>
               </ul>
            </nav>
    </div>
    <div class="content col-12 col-md-12 col-lg-12 text-left">
        <div class="prices mt-0 pt-0 pl-0" v-show="price">
          <div class="col-sm-12 col-12 mt-0">
            <div class="header">
              <p>Prices</p>
            </div>
          </div>
        </div>

        <div class="prices" v-show="reconditioning == true">
          <div class="col-sm-12">
            <div class="header">
              <p>Reconditioning</p>
            </div>
          </div>
        </div>

        <div class="prices" v-show="returns">
          <div class="col-sm-12">
            <div class="header">
              <p>Returns</p>
            </div>
          </div>
        </div>

        <div class="prices" v-show="finance">
          <div class="col-sm-12">
            <div class="header">
              <p>Finance</p>
            </div>
          </div>
        </div>

        <div class="prices" v-show="coverage">
          <div class="col-sm-12">
            <div class="header">
              <p>Coverage</p>
            </div>
          </div>
        </div>
    </div>
  </div> -->
</div>
</template>

<script>
import premium from './premium';
import featured from './featured';
import carousel from 'vue-owl-carousel'
export default {
  name: 'home',
data(){
  return{
    prices:true,
    reconditioning:false,
    returns: false,
    finance:false,
    coverage:false

  }
},
components: {
    premium,
    featured,
    carousel 
  },
  methods:{
      // price: function(){
      //     this.prices= true;
      //     this.reconditioning = false;
          
      // },
      // reconditions: function(){
      //   this.reconditioning = true;
          
      // },
      // returnss: function(){
      //     this.prices = false;
      //     this.reconditioning = false;
      //     this.finance = false;
      //     this.coverage = false;
      //     this.returns = true;
      // },
      //  finances: function(){
      //     this.finance = true;
      //     this.prices = false;
      //     this.reconditioning = false;
      //     this.returns = false;
      //     this.coverage = false;
      // }
      bikes: function(){this.$router.push({path:'/bikes'})},
      scooters: function(){this.$router.push({path:'/scooters'})},
      racings: function(){this.$router.push({path:'/racing'})},
      }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
 @media only screen and (max-width: 500px) {
    .card{
      border:none !important;
      background-color: #EA2027;
      font-family: 'Montserrat', sans-serif;
    }
    .laptop{
      display: none;
    }
    .mobile{
      display:block !important;
    }
 }
 .menu p{
   display: inline
 }
 .border{
   border-right: 1px solid #EA2027
 }
 .mobile{
   display: none;
 }
 .nav ul li{
   display: inline;
   padding:12px;
  border-bottom: 1px solid gray;
  font-family: 'Montserrat', sans-serif;
 }
 .value-heading:after{
  
    content: ""; /* This is necessary for the pseudo element to work. */ 
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 10%; /* Change this to whatever width you want. */
    padding-top: 6px; /* This creates some space between the element and the border. */
    border-bottom: 2px solid #EA2027; /* This creates the border. Replace black with whatever color you want. */

 }
 .sub-head:after{
    content: ""; 
    display: block; 
    margin: 0px; 
    width: 10%;  
    border-bottom: 2px solid #EA2027;
 }
 .sub-head p{
   margin: 0px
 }
 .value-heading h2{
  font-size: 1.7rem;
  font-family: 'Coda', cursive;
  font-weight: bold;
 }
 .trust-container{
   background-color: #fff;
 }
 .quotes{
     /* box-shadow: 0 0 10px rgba(10, 10, 10, 0.5); */
  font-family: 'Montserrat', sans-serif;
font-style: italic;
 }
.active{
     border-bottom: 2px solid #EA2027 !important;

 }
 .trust h2{
   color: #EA2027; 
   font-weight:bold;
  font-family: 'Montserrat', sans-serif;
 }
 .trust{
     font-family: 'Montserrat', sans-serif;
     

 }
 ::-webkit-scrollbar { 
    display: none; 
}
 .menu{
  overflow-x: scroll;
  scrollbar-shadow-color: white;
 }
.card{
  background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 2px;
    cursor: pointer;
}
.header p{
      font-size: 16px;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold
    }
.card:hover{
  box-shadow: 0 0 10px rgba(10, 10, 10, 0.5);
  cursor: pointer;
}
.demo{
  border: 2px solid black;
}
</style>