
import vehicles from './components/vehicles';
import bikes from './components/bikes';
import scooters from './components/scooters';
import sport from './components/sportBikes.vue';
import about from './components/about.vue';
import home from './components/home';
import faq from './components/faq.vue';
import checkout from './components/checkout.vue';
import display from './components/display.vue';
import test from './components/test.vue';


export default[
    // {path:'/', component:home},
    {path:'/', component:home},
    {path:'/about', component:about},
    {path:'/vehicles', component:vehicles},
    {path:'/bikes', component:bikes},
<<<<<<< HEAD
    {path:'/commuters', component:scooters},
    {path:'/contact', component:contact},
=======
    {path:'/scooters', component:scooters},
    {path:'/sport', component:sport},
    {path:'/faq', component:faq},
>>>>>>> 34b07efff7bde94b4ea8fec90239889c1d79ef46
    {path:'/checkout', component:checkout},
    {path:'/display', component:display},
    {path:'/test', component:test}

   
]