<template>
    <div class="bikes">              
        <div class="container col-md-12">  
            <nav aria-label="breadcrumb mb-0 pb-0">
                <ol class="breadcrumb mb-0 pb-0">
                    <li aria-current="page" class="breadcrumb-item active">
                        <ol class="breadcrumb mb-0 pb-0">
                            <li class="breadcrumb-item notactive"><a href="/">Home</a></li>
<<<<<<< HEAD
                            <li class="breadcrumb-item active"><a @click="vehicles" style="curser:pointer">Vehicles</a></li>
=======
                            <li class="breadcrumb-item active"><router-link to="/vehicles">Vehicles</router-link></li>
>>>>>>> 34b07efff7bde94b4ea8fec90239889c1d79ef46
                            <li class="breadcrumb-item active"><a>Scooters</a></li>
                        </ol>
                    </li>
                    <li aria-current="page" class="ml-auto">
                        <div class="toggle">
                            <input type="radio" name="sizeBy" value="standard" id="standard" @click="sstndard" checked="checked" />
                            <label for="standard" >Standard</label>
                            <input type="radio" name="sizeBy" value="premium" id="premium" onclick="" />
                            <label for="premium" >Premium</label>
                        </div>
                    </li>
                </ol>
            </nav>

            <nav class="nav mb-1 desktop text-left">
                <a class="nav-link active1" href="#">100CC - 150CC</a>
                <a class="nav-link" href="#">150CC - 200CC</a>
                <a class="nav-link" href="#">200CC - 250CC</a>
            </nav>
            
            <div class="form-group mobile">
                <label for="sel1">Select CC:</label>
                <select class="form-control" id="sel1">
                    <option>100CC - 150CC</option>
                    <option>150CC - 200CC</option>
                    <option>200-CC - 250CC</option>
                </select>
            </div>
        </div>  
        <!-- first container ends -->

        <div class="container bikes mb-4 py-2 col-lg-12">   
            <div class="row pl-2 pr-2" >
                <div class="col-4 col-md-4 col-lg-2 pt-2 pr-1 pl-1" >
                    <div class="motorbike" @click="display" >
                        <div class="card" >
                            <div class="image">
                                <img src="../assets/bikes/03-suzuki-access-125.png" width="100%" height="55%">
                            </div>
                            <div class="card-body">
                                <p class="bike-name">SUZUKI</p>
                                <p>150 CC</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-4 col-md-4 col-lg-2 pt-2 pr-1 pl-1">
                    <div class="moterbike">
                        <div class="card"> 
                            <div class="image">
                                <img src="../assets/bikes/15-vespa-vxl-125.png" width="100%" height="55%">
                            </div>
                            <div class="card-body">
                                <p class="bike-name">Vespa</p>
                                <p>180 CC</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-4 col-md-4 col-lg-2 pt-2 pr-1 pl-1">
                    <div class="moterbike">
                        <div class="card"> 
                            <div class="image">
                                <img src="../assets/bikes/14-aprilia.png" width="100%" height="55%">
                            </div>
                            <div class="card-body">
                                <p class="bike-name">Aprilla</p>
                                <p>125 CC</p>
                            </div>
                        </div>
                    </div>
                </div>  
                 <div class="col-4 col-md-4 col-lg-2 pt-2 pr-1 pl-1">
                    <div class="moterbike">
                        <div class="card"> 
                            <div class="image">
                                <img src="../assets/bikes/09-hero-maestro-edge.png" width="100%" height="55%">
                            </div>
                            <div class="card-body">
                                <p class="bike-name">Maestro</p>
                                <p>125 CC</p>
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="col-4 col-md-4 col-lg-2 pt-2 pr-1 pl-1">
                    <div class="moterbike">
                        <div class="card"> 
                            <div class="image">
                                <img src="../assets/bikes/09-hero-maestro-edge.png" width="100%" height="55%">
                            </div>
                            <div class="card-body">
                                <p class="bike-name">Maestro</p>
                                <p>125 CC</p>
                            </div>
                        </div>
                    </div>
                </div>  
                 <div class="col-4 col-md-4 col-lg-2 pt-2 pr-1 pl-1">
                    <div class="moterbike">
                        <div class="card"> 
                            <div class="image">
                                <img src="../assets/bikes/14-aprilia.png" width="100%" height="55%">
                            </div>
                            <div class="card-body">
                                <p class="bike-name">Aprilla</p>
                                <p>125 CC</p>
                            </div>
                        </div>
                    </div>
                </div>  
                 <div class="col-4 col-md-4 col-lg-2 pt-2 pr-1 pl-1">
                    <div class="moterbike">
                        <div class="card"> 
                            <div class="image">
                                <img src="../assets/bikes/08-honda-activa.png" width="100%" height="55%">
                            </div>
                            <div class="card-body">
                                <p class="bike-name">Honda Activa</p>
                                <p>125 CC</p>
                            </div>
                        </div>
                    </div>
                </div>  
                 <div class="col-4 col-md-4 col-lg-2 pt-2 pr-1 pl-1">
                    <div class="moterbike">
                        <div class="card"> 
                            <div class="image">
                                <img src="../assets/bikes/03-suzuki-access-125.png" width="100%" height="55%">
                            </div>
                            <div class="card-body">
                                <p class="bike-name">Suzuki</p>
                                <p>125 CC</p>
                            </div>
                        </div>
                    </div>
                </div>  
                 <div class="col-4 col-md-4 col-lg-2 pt-2 pr-1 pl-1">
                    <div class="moterbike">
                        <div class="card"> 
                            <div class="image">
                                <img src="../assets/bikes/17-hero-duet.png" width="100%" height="55%">
                            </div>
                            <div class="card-body">
                                <p class="bike-name">Hero Duet</p>
                                <p>125 CC</p>
                            </div>
                        </div>
                    </div>
                </div>  
                 <div class="col-4 col-md-4 col-lg-2 pt-2 pr-1 pl-1">
                    <div class="moterbike">
                        <div class="card"> 
                            <div class="image">
                                <img src="../assets/bikes/07-honda-aviator.png" width="100%" height="55%">
                            </div>
                            <div class="card-body">
                                <p class="bike-name">Aprilla</p>
                                <p>125 CC</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <!-- second container ends here -->
    </div>
</template>
<script>
export default {
<<<<<<< HEAD
    
  methods:{
            vehicles: function(){this.$router.push({path:'/vehicles'})},
  }
=======
    methods:{
         display: function(){this.$router.push({path:'/display'})},
    }
>>>>>>> 34b07efff7bde94b4ea8fec90239889c1d79ef46
}
</script>

<style scoped>
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
.dropdown:hover > .dropdown-menu {
	 display: block;
}
 .dropdown > .dropdown-toggle:active {
	/*Without this, clicking will make it sticky*/
	 pointer-events: none;
}
.active1{
    border-bottom: 1.5px solid #EA2027;
}
.bike-name{
    font-weight: bold
}
.image img{
    cursor: pointer;
  transition: all 0.4s ease;
}

 .toggle {
	 margin: 0 0 1.5rem;
	 box-sizing: border-box;
	 font-size: 0;
	 display: flex;
	 flex-flow: row nowrap;
	 justify-content: flex-start;
	 align-items: stretch;
     outline: none;
}
 .toggle input {
	 width: 0;
	 height: 0;
	 position: absolute;
	 left: -9999px;
}
 .toggle input + label {
	 margin: 0;
	 /* padding: 0.75rem 2rem; */
       padding: 0.15rem 0.5rem;
         margin-top: 7px;
	 box-sizing: border-box;
	 position: relative;
	 display: inline-block;
	 border: solid 1px #ddd;
	 background-color: #fff;
	 font-size: 0.7rem;
	 line-height: 140%;
	 font-weight: 600;
	 text-align: center;
	 box-shadow: 0 0 0 rgba(255, 255, 255, 0);
	 transition: border-color 0.15s ease-out, color 0.25s ease-out, background-color 0.15s ease-out, box-shadow 0.15s ease-out;
	/* ADD THESE PROPERTIES TO SWITCH FROM AUTO WIDTH TO FULL WIDTH */
	/*flex: 0 0 50%;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	*/
	/* ----- */
}
 .toggle input + label:first-of-type {
	 border-radius: 6px 0 0 6px;
	 border-right: none;
}
 .toggle input + label:last-of-type {
	 border-radius: 0 6px 6px 0;
	 border-left: none;
}
 .toggle input:hover + label {
	 border-color: #213140;
}
 .toggle input:checked + label {
	 background-color: #EA2027;
	 color: #fff;
	 box-shadow: 0 0 10px rgba(10, 10, 10, 0.5);
	 border-color: #EA2027;
	 z-index: 1;
}
 .toggle input:focus + label {
	 outline-offset: 0.45rem;
}
.mobile{
    display: none;
    font-family: 'Montserrat', sans-serif;
}
.desktop a{
    color: #213140;
    font-size: 14px;
}
.desktop .nav-link {
    display: block;
    padding-left: 0px;
    margin-right: 11px;
    padding-right: 0px;
    padding-bottom: 0px;
        font-family: 'Montserrat', sans-serif;

}
 @media (max-width: 800px) {
	 .toggle input + label {
		 /* padding: 0.75rem 0.25rem; */
         padding: 0.25rem 0.25rem;
         margin-top: 0px;
		 flex: 0 0 50%;
		 display: flex;
		 justify-content: center;
		 align-items: center;
	}
    .desktop{
        display: none;
    }
    .mobile{
        display: block;
    }
    .breadcrumb li a{
        font-size: 13px;
    }
    .breadcrumb-item+.breadcrumb-item::before {
        font-size: 10px;
        padding:2px;
    }
    .breadcrumb-item.active {
         padding-left: 1px;
    }
    .breadcrumb-item.notactive a{
         padding-left: 1px;
         color: #EA2027
    }
}


@import url('https://fonts.googleapis.com/css?family=Montserrat|Scada&display=swap');
#bikes {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.topic p{
    font-size: 18px;
    font-weight:bold;
      font-family: 'Montserrat', sans-serif;
}
.card-body{
    padding: 6px
}
.card-body p{
      font-size: 13px;
      margin-top: 0px;
      font-family: 'Montserrat', sans-serif;
      line-height: 3PX;
      padding:0px;
}
 
</style>