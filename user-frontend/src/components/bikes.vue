<template>
<div class="bikes">
<div id="myFilter" class="sidenav">
    <i class="fil fa fa-filter" aria-hidden="true"></i>
    <span class="fil sc-bYSBpT iQnyqm">Filters</span>
    <i class="close fa fa-times" v-on:click="closeFilter" aria-hidden="true"></i>

  <!-- <a href="javascript:void(0)" class="closebtn" v-on:click="closeFilter">&times;</a> -->
    <!-- <button type="button" class="close" aria-label="Close" v-on:click="closeFilter">
        <span aria-hidden="true">&times;</span>
    </button> -->
  <div class="manufac">
      <button class="manufacturer" v-on:click="toggle = !toggle">Manufacturer
          <a v-if="!toggle"><i class="fas fa-caret-down fa-sm"></i></a>
          <a v-if="toggle"><i class="fas fa-caret-up fa-sm"></i></a>
        </button>
        <div class="panel" v-if="toggle">
        <a href="suzuki">Suzuki</a>
        <a href="Maruti">Maruti</a>
        <a href="Honda">Honda</a>
        <a href="Tvs">Tvs</a>
        </div>
    </div>
    <div class="bikecc">
        <button class="cc" v-on:click="toggle = !toggle">CC
          <a v-if="!toggle"><i class="fas fa-caret-down"></i></a>
          <a v-if="toggle"><i class="fas fa-caret-up"></i></a>
        </button>
        <div class="panel" v-if="toggle">
        <a href="100cc">From 100cc</a>
        <a href="200cc">101cc-200cc</a>
        <a href="300cc">201cc-300cc</a>
        <a href="400cc">301cc-400cc</a>
        </div>
  </div>
  <div class="variants">
        <button class="type" v-on:click="toggle = !toggle">Type
          <a v-if="!toggle"><i class="fas fa-caret-down"></i></a>
          <a v-if="toggle"><i class="fas fa-caret-up"></i></a>
        </button>
        <div class="panel" v-if="toggle">
        <a href="petrol">Petrol</a>
        <a href="diesel">Diesel</a>
        <a href="electric">Electric</a>
        </div>
  </div>
</div>

<div id="main">
    <div class="container col-sm-12">
        <nav aria-label="breadcrumb mt-0 mb-0">
            <ol class="breadcrumb">
            <li aria-current="page" class="breadcrumb-item active">
                <div class="dropdown">
                <span style="font-size:16px;cursor:pointer;margin:0px" v-on:click="openFilter"><i class='fas fa-exchange-alt' style='font-size:16px;color:red'></i> filter</span>
            </div>
            </li>
            <li aria-current="page" class="ml-auto">
            <div class="dropdown" >
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                    <i class='fas fa-sort' style='font-size:16px;color:red'></i> Sort By</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Premium First</a>
                    <a class="dropdown-item" href="#">Price: high to low</a>
                    <a class="dropdown-item" href="#">Model: old to new</a>
                    <a class="dropdown-item" href="#">Model: new to old</a>
                </div>
            </div>
            </li>
            </ol>
        </nav>

        
        <div class="card-deck">
            <div class="card mb-4">
                
                <img class="card-img-top" src="https://stat.overdrive.in/wp-content/odgallery/2018/06/43177__ANI8066.JPG" alt="Card image cap">
                <div class="card-body">
                    <h4 class="bike-name">Yamaha R15</h4>
                    <p class="bike-model">Model--2018</p>
                    <p class="bike-price">Price--80000</p>
                </div>
            </div>
            <div class="card mb-4">

			<span class="notify-badge">Premium</span>
      		<img class="card-img-top " src="https://bd.gaadicdn.com/processedimages/yamaha/mt-15/source/m_mt-15_11560414504.jpg?tr=w-439,e-sharpen" alt="Card image cap">    
                <div class="card-body">
                    <h4 class="bike-name">Yamaha MT-15</h4>
                    <p class="bike-model">Model--2019</p>
                    <p class="bike-price">Price--95000</p>
                </div>
            </div>
            <div class="w-100 d-none d-sm-block d-md-none"><!-- wrap every 2 on sm--></div>
            <div class="card mb-4">
                <img class="card-img-top " src="https://i.ebayimg.com/images/g/v5oAAOSwDQtcl3zn/s-l800.jpg" alt="Card image cap">
                <div class="card-body">
                    <h4 class="bike-name">Honda CBR-250R Repsol</h4>
                    <p class="bike-model">Model--2017</p>
                    <p class="bike-price">Price--90000</p>
                </div>
            </div>
            <div class="w-100 d-none d-md-block d-lg-none"><!-- wrap every 3 on md--></div>
            <div class="card mb-4">
                <img class="card-img-top " src="https://bd.gaadicdn.com/processedimages/ktm/ktm-duke-390/source/m_duke-390_11539346124.jpg?tr=w-439,e-sharpen" alt="Card image cap">
                <div class="card-body">
                    <h4 class="bike-name">Duke 390 ABS</h4>
                    <p class="bike-model">Model--2018</p>
                    <p class="bike-price">Price--150000</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
// import filter from './filter'
export default {
    name: 'bikes',
    // components: {
    //     filter
    // },
    data(){
        return {
            toggle:false
        }
    },
    methods:{
        openFilter: function() {
        // console.log('working')
        document.getElementById("myFilter").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        },

        closeFilter: function() {
        document.getElementById("myFilter").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        }
            }
}

</script>

<style scoped>
body {
     background: #eee;
}
.breadcrumb{
    background-color: whitesmoke !important;
}
.container{ 
    margin-top: 5px ; 
    }
.dropdown{
     margin-top: 5px ;
     float: right;
     outline: none; 
}
.card-img-top{
    height: 175px; 
    width: auto;
}
.dropdown-menu.show{
    left: -25px !important;
}
.row{
     margin-top: 5px ;
}
.dropdown button{
    background-color: whitesmoke;
    color:black;
    border:none;
    font-size: 16px;
}

.notify-badge{
    position: absolute;
    right:4px;
    top:10px;
    background:rgb(250, 211, 38);
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    color:white;
    padding:5px 10px;
    font-size:12px;
}

@media screen and (min-height: 750px) {
  .mobile{
      display: block
  }
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  /* top: 76px; */
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 35px;
}

.sidenav a {
  /* padding: 8px 8px 8px 32px; */
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  transition: 0.3s;
}
.close{
    margin-top: 3px;
    margin-right: 15px;
    size: 50px;
}

.fil {
    margin-left: 2px;
    
    font-size:20px;
    size: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
    border-left: #d6d7da 1px solid;
  background-color: #f1f1f1;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
.manufacturer  {
  background-color: rgb(190, 190, 190);
  /* color: #444; */
  cursor: pointer;
  /* padding: 10px 10px 10px 10px; */
  width: 100%;
  border: none;
  /* text-align: left; */
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  margin-top: 15px;
}

.cc  {
  background-color: rgb(190, 190, 190);
  /* color: #444; */
  cursor: pointer;
  /* padding: 10px 10px 10px 10px; */
  width: 100%;
  border: none;
  /* text-align: left; */
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  margin-top: 15px;
}

.type {
  background-color: rgb(190, 190, 190);
  /* color: #444; */
  cursor: pointer;
  /* padding: 10px 10px 10px 10px; */
  width: 100%;
  border: none;
  /* text-align: left; */
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  margin-top: 15px;
}

.cc a{
  /* color: #777; */
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.type a{
  /* color: #777; */
  font-weight: bold;
  float: right;
  margin-left: 5px;
}


.manufacturer  a{
  /* color: #777; */
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.panel {
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.panel a{
      font-size: 15px;
}

</style>