 <template>
<div class="mbr-section form4 cid-qv5Aq4h3k3" id="form4-2y" data-rv-view="5142"> 
    <div class="container">
        <div class="row">
            <div class="map col-md-6">
               
                <div class="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.009800035491!2d77.61026392869192!3d12.934953630476459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144d92b2dd49%3A0x90042049104d5e79!2sForum%20Mall!5e0!3m2!1sen!2sus!4v1568875757698!5m2!1sen!2sus"  width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-md-6 yeah" >
                <div>
                    <div class="icon-block pb-3">
                        <span class="icon-block__icon">
                            <span class="mbri-letter mbr-iconfont" media-simple="true"></span>
                        </span>
                        <h4 class="icon-block__title align-left mbr-fonts-style display-5">
                            Don't hesitate to contact us
                        </h4>
                    </div>
                    <div class="icon-contacts pb-3">
                        
                        <p class="mbr-text align-left mbr-fonts-style display-7">
                            Phone: +91 9876543210 <br>
                            Email: contact@bikex.com
                        </p>
                    </div>
                </div>
                <div data-form-type="formoid">
                    <div data-form-alert="" hidden="">
                        Thanks for filling out the form!
                    </div>
                      
    
                </div>
            <form class="form-contact" >
                <h1 class="h3 mb-3 font-weight-normal">Let us hear from you.</h1>
                <div class="error" v-if="error">
                    <p>{{result.msg}}</p>
                </div>
                <label for="inputEmail"  class="sr-only" >Name</label>
                <input class="form-control" placeholder="Your Name" autofocus v-model="name" required >
                <label for="inputphone" class="sr-only">Phone</label>
                <input class="form-control" placeholder="Phone" v-model="phone" required>
                  <label for="inputemail" class="sr-only">Email</label>
                <input class="form-control" placeholder="Email" v-model="email" required>
                  <label for="inputmessage" class="sr-only">Message</label>
                <textarea class="form-control" placeholder="Message" v-model="message" required></textarea>
                <button class="btn btn-lg btn-block mt-2" type="submit" v-on:click="contact">Submit</button>
            </form>
            </div>
        </div>
    </div>
</div>   

</template>   

<script>
// import VueSweetalert2 from 'vue-sweetalert2';
export default {
  name: 'contact',

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');


.cid-qv5Aq4h3k3 .input  {
    margin-bottom: 15px;
}

.cid-qv5Aq4h3k3 .icon-block .icon-block__title {
    display: inline-block;
    align-self: center;
    -webkit-align-self: center;
    margin-bottom: 0;
    line-height: 1;
    margin-top: 20px;
    font-style: italic;
}

.map{
     margin-top: 20px;
}

.form-control {
    box-shadow: none;
    color: #3f3e3e;
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    line-height: 1.43;
    min-height: 1.5em;
    padding: 1.07em .5em;
    
}

@media (min-width: 576px){
.container {
    margin-bottom: 15px;
    
}
}
.yeah{
             font-family: 'Josefin Sans', sans-serif;

}
.pb-3, .py-3 {
    padding-bottom: 0.5rem!important;
}
.error{
    color: red;
}
p {
    margin-top: 0;
    margin-bottom: 0rem;
}
input.form-control {
    margin-bottom: 15px;
         font-family: 'Josefin Sans', sans-serif;

}

textarea.form-control {
    margin-bottom: 15px;
         font-family: 'Josefin Sans', sans-serif;

}
.btn{
    background-color: #e74c3c;
    color: white; 
}

button.btn.btn-lg.btn-primary.btn-block.mt-2 {
    margin-bottom: 15px;
         font-family: 'Josefin Sans', sans-serif;
         background-color: #e74c3c;

}

</style>