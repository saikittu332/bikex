<template>
<div class="hello">
  <div class="packages-container mt-4">
    <div class="container col-md-12">
        <nav aria-label="breadcrumb mt-4 mb-4">
            <ol class="breadcrumb">
            <li aria-current="page" class="breadcrumb-item active">POPULAR NEW MODELS</li>
            <li aria-current="page" class="ml-auto"><a href="/bikes" class="">SHOW ALL</a></li>
            </ol>
        </nav>

    <div class="row">

            <div class="col-md-3">
            <div class="card mb-4 shadow-sm" style="cursor: pointer" @click="bike">
            <div class="image">
                 <img src="https://auto.ndtvimg.com/bike-images/colors/ktm/rc-200/ktm-rc-200-white.png?v=1" height="130px">
                </div>                   
                    
                    <div class="card-body">
                        <p class="card-text" style="font-size:20px">Honda Activa</p>
                        <p class="card-text">125cc</p>
                        <p class="card-text">Rs. 18,500</p>
                    </div>
            </div>
        </div>
    


    </div>
    </div>
</div>  
</div>

</template> 



<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
      bike: function () {
          this.$router.push(
              {
                  path:'/bikes'
              }
          )
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

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
a {
    color: #EA2027;
    text-decoration: none;
    background-color: transparent;
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    line-height: 10px;
}
.image img{
    width: 74%
}
.image img:hover{
    width: 84%
}
</style>