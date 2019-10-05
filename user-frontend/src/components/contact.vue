<template>
    <div class="container max-height-">
        <h1 class="hfaq">FREQUENTLY ASKED QUESTION'S</h1>
    <div class="row pb-2">
        <div class="col-lg-4 text-left">
            <div class="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
                <a href="#tab1" class="nav-link active" data-toggle="pill" role="tab" aria-controls="tab1" aria-selected="true">
                    <i class="mdi mdi-help-circle"></i> Frequently Asked Questions
                </a>
                <a href="#tab5" class="nav-link" data-toggle="pill" role="tab" aria-controls="tab5" aria-selected="false">
                    <i class="mdi mdi-coin"></i> Transactions
                </a>
                <a href="#tab6" class="nav-link" data-toggle="pill" role="tab" aria-controls="tab6" aria-selected="false">
                    <i class="mdi mdi-help"></i> General help
                </a>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="tab-content" id="faq-tab-content">
                <div class="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                    <div class="accordion" id="accordion-tab-1">
                        <div class="card">
                            <div class="card-header" id="accordion-tab-1-heading-1">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-1" aria-expanded="false" aria-controls="accordion-tab-1-content-1">Just once I'd like to eat dinner with a celebrity?</button>
                                </h5>
                            </div>
                            <div class="collapse show" id="accordion-tab-1-content-1" aria-labelledby="accordion-tab-1-heading-1" data-parent="#accordion-tab-1">
                                <div class="card-body text-left">
                                    <p>qwertyuiop</p>
                                    <p><strong>Example: </strong>Shut up and get to the point!</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-1-heading-2">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-2" aria-expanded="false" aria-controls="accordion-tab-1-content-2">Bender, I didn't know you liked cooking?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-1-content-2" aria-labelledby="accordion-tab-1-heading-2" data-parent="#accordion-tab-1">
                                <div class="card-body text-left">
                                    <p>That's so cute. Can we have Bender Burgers again? Is the Space Pope reptilian!? I wish! It's a nickel. Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually!</p>
                                    <p><strong>Example: </strong>Okay, I like a challenge. Is that a cooking show? No argument here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab5" role="tabpanel" aria-labelledby="tab5">
                    <div class="accordion" id="accordion-tab-5">
                        <div class="card">
                            <div class="card-header" id="accordion-tab-5-heading-1">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-5-content-1" aria-expanded="false" aria-controls="accordion-tab-5-content-1">Say what?</button>
                                </h5>
                            </div>
                            <div class="collapse show" id="accordion-tab-5-content-1" aria-labelledby="accordion-tab-5-heading-1" data-parent="#accordion-tab-5">
                                <div class="card-body text-left">
                                    <p>plmkiuhbghy.</p>
                                    <p><strong>Example: </strong>A sexy mistake. And I'd do it again!</p>
                                </div>
                            </div>
                        </div>                 
                    </div>
                </div>
                <div class="tab-pane" id="tab6" role="tabpanel" aria-labelledby="tab6">
                    <div class="accordion" id="accordion-tab-6">
                        <div class="card">
                            <div class="card-header" id="accordion-tab-6-heading-1">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-6-content-1" aria-expanded="false" aria-controls="accordion-tab-6-content-1">Doomsday device?</button>
                                </h5>
                            </div>
                            <div class="collapse show" id="accordion-tab-6-content-1" aria-labelledby="accordion-tab-6-heading-1" data-parent="#accordion-tab-6">
                                <div class="card-body text-left">
                                    <p>ytgbk</p>
                                    <p><strong>Example: </strong>So I really am important? How I feel when I'm drunk is correct?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
            </div>
        </div>
    </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Coda&display=swap');
body {
	 margin-top: 30px;
	 background-color: #eee;
}

.hfaq{
    /* padding-bottom: 10px; */
    word-spacing: 10px;
    font-family: 'Coda', cursive;
    font-weight: weight;
}
 .faq-nav {
	 flex-direction: column;
	 margin: 0 0 32px;
	 border-radius: 2px;
	 border: 1px solid #ddd;
	 box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);
}
 .faq-nav .nav-link {
	 position: relative;
	 display: block;
	 margin: 0;
	 padding: 13px 16px;
	 background-color: #fff;
	 border: 0;
	 border-bottom: 1px solid #ddd;
	 border-radius: 0;
	 color: #616161;
	 transition: background-color 0.2s ease;
}
 .faq-nav .nav-link:hover {
	 background-color: #f6f6f6;
}
 .faq-nav .nav-link.active {
	 background-color: #f6f6f6;
	 font-weight: 700;
	 color: rgba(0, 0, 0, .87);
}
 .faq-nav .nav-link:last-of-type {
	 border-bottom-left-radius: 2px;
	 border-bottom-right-radius: 2px;
	 border-bottom: 0;
}
 .faq-nav .nav-link i.mdi {
	 margin-right: 5px;
	 font-size: 18px;
	 position: relative;
}
 .tab-content {
	 box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);
}
 .tab-content .card {
	 border-radius: 0;
}
 .tab-content .card-header {
	 padding: 15px 16px;
	 border-radius: 0;
	 background-color: #f6f6f6;
}
 .tab-content .card-header h5 {
	 margin: 0;
}
 .tab-content .card-header h5 button {
	 display: block;
	 width: 100%;
	 padding: 0;
	 border: 0;
	 font-weight: 700;
	 color: rgba(0, 0, 0, .87);
	 text-align: left;
	 white-space: normal;
}
 .tab-content .card-header h5 button:hover, .tab-content .card-header h5 button:focus, .tab-content .card-header h5 button:active, .tab-content .card-header h5 button:hover:active {
	 text-decoration: none;
}
 .tab-content .card-body p {
	 color: #616161;
}
 .tab-content .card-body p:last-of-type {
	 margin: 0;
}
 .accordion > .card:not(:first-child) {
	 border-top: 0;
}
 .collapse.show .card-body {
	 border-bottom: 1px solid rgba(0, 0, 0, .125);
}
 
</style>>
