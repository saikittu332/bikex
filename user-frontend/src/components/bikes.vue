<template>
    <div class="bikes">              
        <div class="container col-md-12">  
            <nav aria-label="breadcrumb mb-0 pb-0">
            <ol class="breadcrumb mb-0 pb-0">
                <li aria-current="page" class="breadcrumb-item active">
                    <ol class="breadcrumb mb-0 pb-0">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active"><a>Bikes</a></li>
                    </ol>
                </li>
                <li aria-current="page" class="ml-auto">
                    <div class="toggle">
                        <input type="radio" name="sizeBy" value="standard" id="standard" onclick="location.href='/standard'" checked="checked" />
                        <label for="standard" >Standard</label>
                        <input type="radio" name="sizeBy" value="premium" id="premium" onclick="location.href='/premium'" />
                        <label for="premium" >Premium</label>
                    </div>
                </li>
            </ol>
            </nav>
            <nav class="nav mb-4 desktop">
            <a class="nav-link active1" href="#">100cc - 150cc</a>
            <a class="nav-link" href="#">150cc - 200cc</a>
            <a class="nav-link" href="#">200-cc - 250cc</a>
            
            </nav>
            <div class="form-group mobile">
                <label for="sel1">Select CC:</label>
                <select class="form-control" id="sel1">
                    <option>100cc - 150cc</option>
                    <option>150cc - 200cc</option>
                    <option>200-cc - 250cc</option>
                </select>
            </div>
        </div>                   
    <div class="container pb-4">   
  <div class="row">
    <div class="col-6 col-md-4 col-lg-3 pt-2">
     <div class="motorbike">
        <div class="card">
          <div class="image">
             <img src="../assets/16-aether.png" width="auto" height="70px">
          </div>
                <div class="card-body">
                    <p class="bike-name">SCOOTER</p>
                </div>
        </div>
     </div>
    </div>
    <div class="col-6 col-md-4 col-lg-3 pt-2">
       <div class="moterbike">
          <div class="card"> 
            <div class="image">
             <img src="../assets/16-aether.png" width="auto" height="70px">
            </div>
                <div class="card-body">
                    <p class="bike-name">BIKES</p>
                </div>
         </div>
       </div>
    </div>
    <div class="col-6 col-md-4 col-lg-3 pt-2">
       <div class="moterbike">
          <div class="card"> 
            <div class="image">
             <img src="../assets/16-aether.png" width="auto" height="70px">
            </div>
                <div class="card-body">
                    <p class="bike-name">BIKES</p>
                </div>
         </div>
       </div>
    </div>
      <div class="col-6 col-md-4 col-lg-3 pt-2">
       <div class="moterbike">
          <div class="card"> 
            <div class="image">
             <img src="../assets/16-aether.png" width="auto" height="70px">
            </div>
                <div class="card-body">
                    <p class="bike-name">BIKES</p>
                </div>
         </div>
       </div>
    </div>
   
  </div>
</div>
</div>
</template>


<style scoped>
.breadcrumb{
background-color: transparent;
}
.dropdown:hover > .dropdown-menu {
	 display: block;
}
 .dropdown > .dropdown-toggle:active {
	/*Without this, clicking will make it sticky*/
	 pointer-events: none;
}
.active1{
    border-bottom: 1px solid red;
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
	 font-size: 1rem;
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
	 background-color: #4b9dea;
	 color: #fff;
	 box-shadow: 0 0 10px rgba(102, 179, 251, .5);
	 border-color: #4b9dea;
	 z-index: 1;
}
 .toggle input:focus + label {
	 outline-offset: 0.45rem;
}
.mobile{
    display: none;
}
 @media (max-width: 800px) {
	 .toggle input + label {
		 /* padding: 0.75rem 0.25rem; */
         padding: 0.25rem 0.25rem;
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
}


@import url('https://fonts.googleapis.com/css?family=Montserrat|Scada&display=swap');
#bikes {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.topic p{
    font-size: 18px;
    font-weight:bold;
    font-family: 'Scada', sans-serif;
}
.card-body p{
      font-size: 13px;
      margin-top: 10px;
      font-family: 'Montserrat', sans-serif;
}
 
</style>