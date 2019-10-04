<template>
<div class="bikes">
<div id="myFilter" class="sidenav">
    
        <nav aria-label="breadcrumb mt-0 mb-0">
            <ol class="breadcrumb Filter">
            <li aria-current="page" class="breadcrumb-item active">
                <i class="fa fa-exchange" aria-hidden="true"></i>
                <span>Filters</span>
            </li>
            <li aria-current="page" class="ml-auto">
                <i v-on:click="closeFilter" aria-hidden="true">X</i>

            </li>
            </ol>
        </nav>
  <div class="manufac">
      <button class="accordion" v-on:click="toggle = !toggle">Manufacturer
          <a v-if="!toggle"><i class="fas fa-angle-down fa-sm"></i></a>
          <a v-if="toggle"><i class="fas fa-angle-up fa-sm"></i></a>
        </button>
        <div class="panel" v-if="toggle">
        <a href="suzuki">Suzuki</a>
        <a href="Maruti">Maruti</a>
        <a href="Honda">Honda</a>
        <a href="Tvs">Tvs</a>
        </div>
    </div>
    <div class="bikecc">
        <button class="accordion" v-on:click="toggle1 = !toggle1">CC
          <a v-if="!toggle1"><i class="fas fa-angle-down"></i></a>
          <a v-if="toggle1"><i class="fas fa-angle-up"></i></a>
        </button>
        <div class="panel" v-if="toggle1">
        <a href="100cc">From 100cc</a>
        <a href="200cc">101cc-200cc</a>
        <a href="300cc">201cc-300cc</a>
        <a href="400cc">301cc-400cc</a>
        </div>
  </div>
  <div class="variants">
        <button class="accordion" v-on:click="toggle2 = !toggle2">Type
          <a v-if="!toggle2"><i class="fas fa-angle-down"></i></a>
          <a v-if="toggle2"><i class="fas fa-angle-up"></i></a>
        </button>
        <div class="panel" v-if="toggle2">
        <a href="petrol">Petrol</a>
        <a href="diesel">Diesel</a>
        <a href="electric">Electric</a>
        </div>
  </div>
</div>

<div id="main2">
    <div class="container col-sm-12">
        <nav aria-label="breadcrumb mt-0 mb-0">
            <ol class="breadcrumb">
            <li aria-current="page" class="breadcrumb-item active">
                <div class="dropdown">
                <span style="font-size:16px;cursor:pointer;margin:0px" v-on:click="openFilter"><i class='fas fa-exchange-alt' style='font-size:16px;color:red'>
                    </i> Filter</span>
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
                    <h4 class="bike-name">Yamaha R-15</h4>
                    <p class="bike-model">Model: 2018</p>
                    <p class="bike-price">Rs. 80000</p>
                </div>
            </div>
            <div class="card mb-4">

			<span class="notify-badge">Premium</span>
      		<img class="card-img-top " src="https://bd.gaadicdn.com/processedimages/yamaha/mt-15/source/m_mt-15_11560414504.jpg?tr=w-439,e-sharpen" alt="Card image cap">    
                <div class="card-body">
                    <h4 class="bike-name">Yamaha MT-15</h4>
                    <p class="bike-model">Model: 2019</p>
                    <p class="bike-price">Rs. 95000</p>
                </div>
            </div>
            <div class="w-100 d-none d-sm-block d-md-none"><!-- wrap every 2 on sm--></div>
            <div class="card mb-4">
                <img class="card-img-top " src="https://i.ebayimg.com/images/g/v5oAAOSwDQtcl3zn/s-l800.jpg" alt="Card image cap">
                <div class="card-body">
                    <h4 class="bike-name">Honda CBR-250R Repsol</h4>
                    <p class="bike-model">Model: 2017</p>
                    <p class="bike-price">Rs. 90000</p>
                </div>
            </div>
            <div class="w-100 d-none d-md-block d-lg-none"><!-- wrap every 3 on md--></div>
            <div class="card mb-4">
                <img class="card-img-top " src="https://bd.gaadicdn.com/processedimages/ktm/ktm-duke-390/source/m_duke-390_11539346124.jpg?tr=w-439,e-sharpen" alt="Card image cap">
                <div class="card-body">
                    <h4 class="bike-name">Duke 390 ABS</h4>
                    <p class="bike-model">Model: 2019</p>
                    <p class="bike-price">Rs.150000</p>
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
            toggle:false,
            toggle1:false,
            toggle2:false
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
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
body {
     background: #eee;
}
.breadcrumb {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: transparent;
   background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 3px 7px 0 #e9e9e9;
  font-family: 'Montserrat', sans-serif;

}
.card-body{
    padding: 5px 0px 0px 0px;
    line-height: 0;

}
ol.breadcrumb.Filter {
    background-color: transparent !important;
}
ol.breadcrumb.Filter li{
   font-size: 13px
}
h4 {
  font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: bold;
}
.fa-filter:before {
    content: "\f0b0";
    font-size: 13px;
    font-weight: 1px;
}
.fil[data-v-664fe93e] {
    margin-left: 2px;
    font-size: 13px;
    size: 10px;
}
p{
  font-size: 15px;
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
  left:0px;
  top: 81px;
  background-color: white;
  overflow-x: hidden;
  padding-top: 10px;
}

.sidenav a {
  /* padding: 8px 8px 8px 32px; */
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
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


.sidenav a {
    font-size: 14px;
    }
.sidenav a:hover{
    color: #EA2027;
    text-decoration: underline red;
}

.accordion {
font-family: 'Montserrat', sans-serif;
  background-color: transparent;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  font-weight: bold;
  padding: 5px 20px 5px 20px;
  cursor: pointer;
}
.accordion a {
  color: #777;
  float: right;
  font-size: 16px;
  margin-left: 5px;
  font-weight: bold;
}
.panel {
  padding: 0;
  background-color: white;
  max-height: 100%;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
      font-family: 'Montserrat', sans-serif;
        font-size: 5px;
        text-align: left;
          padding: 5px 20px 5px 25px;



}

</style>