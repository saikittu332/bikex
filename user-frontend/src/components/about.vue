<template>
<div class="story">
<div class="article">
    <div class="image-aboutus-banner"  >
   <div class="container">
      <div class="row">
          <div class="col-md-12">
            <h1 class="lg-text">Our Story</h1>
            <p class="image-aboutus-para">Selling the used bikes</p>
          </div>
      </div>
   </div>
</div>
</div>
<div class="container-fluid mb-4">
 <h2> REACH OUT TO US </h2>
 <div class="contact-items">
   <div class="contact-item"> 
        <a href="https://vroom.zendesk.com/hc/en-us" name="LinkComponent">
            <i class=" icon fas fa-question"></i><a class="info" href="visit">Visit Our Experience Center</a>
        </a>
    </div>
    <div class="vl"></div>
   <div class="contact-item">
     <a name="LinkComponent" href="/contact">
        <i class="icon far fa-envelope"></i><a class="info" href="message">Send A Message</a>
      </a>
 </div>
 <div class="vl"></div>
   <div class="contact-item" href="#">
      <i class="icon fas fa-phone-volume"></i><a class="info" href="tel:(+91) 9876-543210">(+91) 9876-543210</a>
   </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'about',

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Coda&display=swap');
.container-fluid{
  background-color: rgb(238, 238, 238);
  border-radius: 0.3em;
  padding: 2em;  
}
h2{
  font-family: 'Coda', cursive;
  word-spacing: 10px;
  font-weight: bold;
}
.icon {
    height: 22px;
    color: #e7131a;
    padding-left: 15px;
}
.info{
  color:black;
  padding-left: 15px;
  padding-right: 15px;
}

.contact-items{
-webkit-tap-highlight-color: transparent;
font-family: 'Open Sans', sans-serif;
font-size: 16px;
line-height: 1.5rem;
color: #041022;
-webkit-font-smoothing: antialiased;
box-sizing: inherit;
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
padding-top: 25px;
}

.vl {
    border-left: 1px solid rgb(199, 198, 198);
    height: 35px;
}

/* @media screen and (max-height: 750px) {
  .contact-items{
    font-size: 10px; 
    display: flex;
flex-direction: row;
padding-top: 25px;
  }
} */
 .image-aboutus-banner {
    background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), 
    url("https://images.pexels.com/photos/556962/pexels-photo-556962.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position:  */
    background-position: center center;
    color: #fff;
    padding-top: 110px;
    padding-bottom:110px;
    /* height: auto; */
 }
 
  /* .image-aboutus-sm-banner {
    background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("https://images.pexels.com/photos/631008/pexels-photo-631008.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: #fff;
    padding-top: 30px;
    padding-bottom:30px;
 } */
.lg-text {
    font-size:50px;
    font-weight: 600;
    text-transform: none;
    color:#fff;
}
.image-aboutus-para {
    color:rgb(255, 255, 255);
}

</style>