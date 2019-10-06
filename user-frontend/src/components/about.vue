<template>
<div class="about">
<section class="section about position-relative">
	<div class="container">
		<div class="row ">
			<div class="col-lg-6 col-md-6">
				<div class="about-item pr-3 mb-5 mb-lg-0">
					<span class="h6 text-color">What we are</span>
					<h2 class="mt-3 mb-4 position-relative content-title">We are dynamic team of creative people</h2>
					<p class="mb-5">llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
				</div>
			</div>
			<div class="col-lg-6 col-md-6">
				<div class="about-item-img">
					<img src="https://freepngimg.com/thumb/team/11-2-team-picture.png" alt="" height="200px">
				</div>
			</div>
		</div>
	</div>
</section>

<section class="about-info section">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="about-info-item mb-4 mb-lg-0">
					<h3 class="mb-3"><span class="text-color mr-2 text-md ">01.</span>Our Mission</h3>
					<p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
				</div>		
			</div>
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="about-info-item mb-4 mb-lg-0">
					<h3 class="mb-3"><span class="text-color mr-2 text-md">02.</span>Vission</h3>
					<p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
				</div>		
			</div>
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="about-info-item mb-4 mb-lg-0">
					<h3 class="mb-3"><span class="text-color mr-2 text-md">03.</span>Our Approach</h3>
					<p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
				</div>		
			</div>
		</div>
	</div>
</section>

<div class="container-fluid">
 <h2> REACH OUT TO US </h2>
 <div class="contact-items">
   <div class="contact-item ok"> 
        <a name="LinkComponent" href="/experience">
            <i class=" icon fas fa-question"></i><a class="infor" href="https://goo.gl/maps/hCavipi3r8gjLh2k9" target="_blank">Visit Our Experience Center</a>
        </a>
    </div>
    <div class="vl"></div>
   <div class="contact-item ok">
     <a name="LinkComponent" href="/contact">
        <i class="icon far fa-envelope"></i><a class="infor" href="message">Send A Message</a>
      </a>
 </div>
 <div class="vl"></div>
   <div class="contact-item ok" href="#">
      <i class="icon fas fa-phone-volume"></i><a class="infor" href="tel:(080) 9999-9999">(080) 9999-9999</a>
   </div>
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

body{
      text-align: left;
}
.container-fluid{
  background-color: rgb(238, 238, 238);
  border-radius: 0.3em;
  /* padding: 2em;  
   */
    padding-top: 2em;
    padding-bottom: 2em;
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
.infor{
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

.section {
  padding: 50px 0;
}

.section-sm {
  padding: 70px 0;
}

.section-title {
  margin-bottom: 70px;
}

.section-title .title {
  font-size: 50px;
  line-height: 50px;
}

.section-title p {
  color: #666;
  font-family: "Poppins", sans-serif;
}

.about-content {
  padding: 20px 0px 0px 80px;
}

.about-content h4 {
  font-weight: 600;
}

.about-content h4:before {
  position: absolute;
  content: "\f576";
  font-family: "Font Awesome 5 Free";
  font-size: 30px;
  position: absolute;
  top: 8px;
  left: -65px;
  font-weight: 700;
}
.text-color {
    color: #f75757;
}
.h6{

    font-weight: 600;
}
.caption{
font-family: Calibre-Semibold;
    letter-spacing: 1.3px;
    color: rgb(4, 16, 34);
    text-transform: uppercase;
    }
</style>