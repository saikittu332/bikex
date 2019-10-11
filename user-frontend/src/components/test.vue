<template>

<div id="app">
  <div class="navbar col-lg-12 mb-4">
      <div class="col-md-2 logo text-left logo ml-0 pl-0">
          <a class="navbar-brand">BIKE<span style="color:red">X</span></a>
      </div>
      <div class=" col-md-5 search-bar text-left ml-0 pl-0">
            <autocomplete
                :search="search"
                placeholder="Search for a Model"
                aria-label="Search for a Model"
                @submit="handleSubmit"
                class="myClass"
            ></autocomplete>
      </div>


      <div class="col-md-5 navbar-item text-right pr-0 mt-2">
        <ul>
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
  </div>
</div>

</template>
<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
export default {
    data(){
        return{
                countries: ['Abhinash','Sai']
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
      alert(`You selected ${result}`)
    }
  }
  
}
</script>

<style scoped>
#app{
  margin: 0 auto;
  font-size: 20px
}
.navbar-item ul li{
    display: inline-block;
    text-decoration: none;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    padding: 10px

}
.navbar-item ul li a{
    color: black
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
@media screen and (max-width: 600px) {
    .navbar-item ul li{
        display: block;
        text-align: center;
        display: none
    }
}
.myClass .autocomplete-result{
background-image:none
}
</style>