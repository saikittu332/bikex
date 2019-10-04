<template>
<div class="hello">
  <div class="packages-container mt-4">
    <div class="container col-sm-12">
        <nav aria-label="breadcrumb mt-4 mb-4">
            <ol class="breadcrumb">
            <li aria-current="page" class="breadcrumb-item active">POPULAR NEW MODELS</li>
            <li aria-current="page" class="ml-auto"><a href="#/products" class="">SHOW ALL</a></li>
            </ol>
        </nav>

    <div class="row">
        <div class="col-md-3">
            <div class="card mb-4 shadow-sm">
                <img src="https://auto.ndtvimg.com/bike-images/colors/ktm/rc-200/ktm-rc-200-white.png?v=1" height="180px">
                    <div class="card-body">
                        <p class="card-text" style="font-family: 'Squada One', cursive;font-size:20px">Honda Activa</p>
                        <p class="card-text">125cc</p>
                        <p class="card-text">Rs. 18,500</p>
                    </div>
            </div>
        </div>

       
        <div class="col-md-3">
            <div class="card mb-4 shadow-sm">
                <img src="" height="180px">
                    <div class="card-body">
                        <p class="card-text" style="font-family: 'Squada One', cursive;font-size:20px">Honda Activa</p>
                        <p class="card-text">125cc</p>
                        <p class="card-text">Rs. 18,500</p>
                    </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card mb-4 shadow-sm">
                <img src="https://bd.gaadicdn.com/processedimages/yamaha/mt-15/source/m_mt-15_11560414504.jpg?tr=w-439,e-sharpen" height="180px">
                    <div class="card-body">
                        <p class="card-text" style="font-family: 'Squada One', cursive;font-size:20px">Honda Activa</p>
                        <p class="card-text">125cc</p>
                        <p class="card-text">Rs. 18,500</p>
                    </div>
            </div>
        </div>
         <div class="col-md-3">
            <div class="card mb-4 shadow-sm">
                <img src="https://i.ebayimg.com/images/g/v5oAAOSwDQtcl3zn/s-l800.jpg" height="180px">
                    <div class="card-body">
                        <p class="card-text" style="font-family: 'Squada One', cursive;font-size:20px">Honda Activa</p>
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
    padding: 1.25rem;
    line-height: 6px;
}
</style>