<template>
    <div class="row">
      <div class="address">
        <h4 class="mb-3 mt-3">Billing address</h4>
        <form class="needs-validation" novalidate>
          <div class="row">
            <div class="mb-3">
              <label for="firstName">Full Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
            </div>
            <div class="mb-3">
              <label for="phone">Mobile Number</label>
               <input type="text" class="form-control" id="phone" placeholder="" value="" required>  
            </div>
            <div class="mb-3 mr-2">
              <label for="email">Email Address</label>
              <input type="text" class="form-control" id="email" placeholder="" value="" required>    
            </div>
            </div>
            <div class="row">
              <div class=" mb-3">
                <label for="address">Address</label>
                <textarea class="form-control" rows="5" id="comment" name="text"></textarea>   
              </div>
              <div class="mb-3">
                <label for="zip">Zip-Code</label>
                <input type="text" class="form-control" id="zip" placeholder="" required>
              </div>
            </div> 
            <hr class="mb-4">
            
            <!-- <h4 class="mb-3">Payment</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                <label class="custom-control-label" for="credit">Credit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
                <label class="custom-control-label" for="debit">Debit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
                <label class="custom-control-label" for="paypal">Paypal</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="emi" name="paymentMethod" type="radio" class="custom-control-input" required>
                <label class="custom-control-label" for="emi">EMI</label>
              </div>
            </div>
            <div class="row">
              <div class="cname">
                <label for="cc-name">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="FULL NAME" required>
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="cnumber">
                <label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="XXXX-XXXX-XXXX-XXXX" required>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="cdate ">
                <label for="cc-expiration">Expiration</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="__/__" required>
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="ccvv">
                <label for="cc-expiration ">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="XXX" required>
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr class="mb-4"> -->
            <button class="btn btn-secondary btn-lg mb-4" type="submit">Continue to payment</button>
          </form>
        </div>
      </div>
</template>

<style scoped>
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 0px;
    justify-content: center;
}
.address{
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
}
.form-control {
    margin-left: 25px;
    display: block;
    width: 250px;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    box-shadow: none!important;
}    
</style>

