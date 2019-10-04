import bikes from './components/bikes';
import about from './components/about.vue';
import home from './components/home'

export default[
    {path:'/', component:home},
    {path:'/about', component:about},
    {path:'/bikes', component:bikes}
   
]