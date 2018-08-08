require('./bootstrap');
window.Vue = require('vue');

import BootstrapVue from 'bootstrap-vue'
import Header from './layouts/Header'
import Home from './pages/Home'
import Footer from './layouts/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'


Vue.use(BootstrapVue);

Vue.component('titler', require('./components/Titler'));
Vue.component('overlay-hover', require('./components/HoverOverlay'));


const header = new Vue({
  el: 'header',
  render: h => h(Header)
});

const app = new Vue({
  el: '#home',
  created() {
    Aos.init();
  },
  render: h => h(Home),
});

const footer = new Vue({
  el: 'footer',
  render: h => h(Footer)
});




