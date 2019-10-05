import bikes from './components/bikes';
import about from './components/about.vue';
import home from './components/home';
import contact from './components/contact.vue'

export default[
    {path:'/', component:home},
    {path:'/about', component:about},
    {path:'/bikes', component:bikes},
    {path:'/contact', component:contact}
   
]