<template>
<div class="bikes">                                        
  <div class="dropdown">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
      Sort By
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Price: low to high</a>
      <a class="dropdown-item" href="#">Price: high to low</a>
      <a class="dropdown-item" href="#">Model: old to new</a>
      <a class="dropdown-item" href="#">Model: new to old</a>
    </div>
  </div>

    <div class="container ">
        <div class="card-deck">
            <div class="card mb-4">
                <img class="card-img-top " src="https://stat.overdrive.in/wp-content/odgallery/2018/06/43177__ANI8066.JPG" alt="Card image cap">
                <div class="card-body">
                    <h4 class="bike-name">Yamaha R15</h4>
                    <p class="bike-model">Model--2018</p>
                    <p class="bike-price">Price--80000</p>
                    <button type="button" class="btn btn-primary">View Details</button>
                </div>
            </div>
            <div class="card mb-4">
                <img class="card-img-top " src="https://bd.gaadicdn.com/processedimages/yamaha/mt-15/source/m_mt-15_11560414504.jpg?tr=w-439,e-sharpen" alt="Card image cap">
                <div class="card-body">
                    <h4 class="bike-name">Yamaha MT-15</h4>
                    <p class="bike-model">Model--2019</p>
                    <p class="bike-price">Price--95000</p>
                    <button type="button" class="btn btn-primary">View Details</button>
                </div>
            </div>
            <div class="w-100 d-none d-sm-block d-md-none"><!-- wrap every 2 on sm--></div>
            <div class="card mb-4">
                <img class="card-img-top " src="https://i.ebayimg.com/images/g/v5oAAOSwDQtcl3zn/s-l800.jpg" alt="Card image cap">
                <div class="card-body">
                    <h4 class="bike-name">Honda CBR-250R Repsol</h4>
                    <p class="bike-model">Model--2017</p>
                    <p class="bike-price">Price--90000</p>
                    <button type="button" class="btn btn-primary">View Details</button>
                </div>
            </div>
            <div class="w-100 d-none d-md-block d-lg-none"><!-- wrap every 3 on md--></div>
            <div class="card mb-4">
                <img class="card-img-top " src="https://bd.gaadicdn.com/processedimages/ktm/ktm-duke-390/source/m_duke-390_11539346124.jpg?tr=w-439,e-sharpen" alt="Card image cap">
                <div class="card-body">
                    <h4 class="bike-name">Duke 390 ABS</h4>
                    <p class="bike-model">Model--2018</p>
                    <p class="bike-price">Price--150000</p>
                    <button type="button" class="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'bikes'
}
</script>
<style scoped>
body {
     background: #eee;
}
.container{ 
    margin-top: 5px ; 
    }
.dropdown{
     margin-top: 5px ; 
}
/* .card-img-top{
    height: 250px;
    width: 250px;
} */
.row{
     margin-top: 5px ;
}

</style>