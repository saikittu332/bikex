   <template>

<div id="app">
  <nav class="navbar col-lg-12 col-12 mr-0 pb-0 fixed-top">
      <div class="row col-12 col-md-2 mr-0 pr-0">
        <div class="col-md-2 col-6 logo text-left logo ml-0 pl-0" @click="home">
          <a class="navbar-brand">BIKE<span style="color:red">X</span></a>
        </div>
        <div class="col-md-3 col-6 mobile text-right mr-0 pr-0 pb-3" style="margin-top:9px;">
          <!-- <i class='fas fa-search pr-2' style='font-size:25px' @click="isSearch= !isSearch"></i> -->
          <!-- <i class='fas fa-bars pl-2 pr-0 mr-0' style='font-size:25px' @click="isNavigation= !isNavigation"></i> -->
         <div class="row pull-right">
            <i class='fas fa-search pr-3' style='font-size:25px' @click="isSearch= !isSearch"></i>
          <div class="toggler pt-0 mt-0" @click="isNavigation= !isNavigation">
                  <div class="bars" v-bind:class="{first: !isNavigation}"></div>
                  <div class="bars" v-bind:class="{second: !isNavigation}"></div>
                  <div class="bars" v-bind:class="{third: !isNavigation}"></div>
          </div>
         </div>
        </div>
      </div>
      <div class=" col-md-6 text-left mb-1 mt-0 pt-0 pl-0 pr-0 mt-1" v-bind:class="{ search: isSearch }">
            <autocomplete
                :search="search"
                placeholder="Search for a Model"
                aria-label="Search for a Model"
                @submit="handleSubmit"
                class="myClass"
            ></autocomplete>
      </div>
      <div class="col-md-4 navmenu text-right pr-0 mt-2" v-bind:class="{ mob: isNavigation }">
        <ul class="ml-0">
            <li class="nav-item">
                <a class="story"><router-link to="/" exact-active-class="active">OUR STORY</router-link></a>
            </li>
            <li class="nav-item">
            <a class="models"><router-link to="/vehicles" exact-active-class="active">MODELS</router-link></a>
            </li>
            <li class="nav-item">
            <a class="faq"><router-link to="/contact" exact-active-class="active">FAQ'S</router-link></a>
            </li>
</ul>
      </div>
  </nav>
</div>

</template>
<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
export default {
    data(){
        return{
          countries: ['commuters','bikes','sports'],
          isSearch:true,
          isNavigation:true
        }
    },
    components: {
    Autocomplete
  },
    methods: {
    search(input) {
      if (input.length < 1) { return [] }
      return this.countries.filter(country => {
        return country.toLowerCase()
          .startsWith(input.toLowerCase())
      })
    },

    handleSubmit(result) { 
      if(result.length<1){ this.$router.push({path:'/' + noresult})}
      this.$router.push({path:'/' + result})
      this.isSearch = true
    },
    home:function() {
       this.$router.push({path:'/'})
     }
  }
  
}
</script>

<style scoped>
#app{
  margin: 0 auto;
  font-size: 20px
}
.toggler .bars{
  width: 33px;
  height: 4px;
  background-color: black;
  margin: 6px 0;
  	-webkit-transition: all 0.2s;
	transition: all 0.2s;
}
.navmenu ul li{
    display: inline-block;
    text-decoration: none;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    padding: 10px

}
.navmenu ul li a{
    color: black;
     text-decoration: none
}
.navbar{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
    background: white;
    transition: all 250ms ease-in-out 0s;
}
.logo a{
  font-size: 2.00rem;
  font-family: 'Coda', cursive;
  font-weight: bold;
}
.active{
  border-bottom: 2px solid #EA2027;
  padding-bottom: 5px
}
input.autocomplete-input {
    border: 1px solid red !important;
}
.navbar .mobile{
  display: none;
}
@media screen and (max-width: 600px) {
  .mob{
   display: none
  }
    .navmenu ul li{
        display: block;
        text-align: center;
        padding-top: 2px;
        margin-top: 2px;   
    }
    .search{
      display: none;
    }
    i.fas.fa-search{
    padding-top: 6px;
}
    .navbar .mobile{
      display: block
    }
    .navmenu ul{
      padding-inline-start: 0px;
    }
    .first {
    transform: rotate(45deg);
    transform-origin: 5% 10%;
    height: 5px !important;
    }
    .second {
      opacity: 0;
    }
    .third {
      transform: rotate(-45deg);
      transform-origin: 6% 90%;
      height: 5px !important;
    }
}

.myClass{
background-image: none;
}
</style>