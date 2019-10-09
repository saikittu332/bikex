import bikes from './components/bikes';
import about from './components/about.vue';
// import home from './components/home';
import contact from './components/contact.vue';
import display from './components/display.vue'

export default[
    // {path:'/', component:home},
    {path:'/', component:about},
    {path:'/bikes', component:bikes},
    {path:'/contact', component:contact},
    {path:'/display', component:display}
   
]