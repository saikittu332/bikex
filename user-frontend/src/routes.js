
import vehicles from './components/vehicles';
import bikes from './components/bikes';
import scooters from './components/scooters';
import sport from './components/sportBikes.vue';
import about from './components/about.vue';
import home from './components/home';
import contact from './components/contact.vue';
import checkout from './components/checkout.vue';
import display from './components/display.vue'

export default[
    // {path:'/', component:home},
    {path:'/', component:home},
    {path:'/vehicles', component:vehicles},
    {path:'/bikes', component:bikes},
    {path:'/scooters', component:scooters},
    {path:'/sport', component:sport},
    {path:'/contact', component:contact},
    {path:'/checkout', component:checkout},
    {path:'/display', component:display}
   
]