<template>
<div class="container-fluid">
 <h2> REACH OUT TO US </h2>
 <div class="contact-items">
   <div class="contact-item"> 
        <a href="https://vroom.zendesk.com/hc/en-us" name="LinkComponent">
            <i class=" icon fas fa-question"></i><a class="info" href="visit">Visit Our Experienced Center</a>
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


</style>