require('./bootstrap');
window.Vue = require('vue');

import BootstrapVue from 'bootstrap-vue'
import Header from './layouts/Header'
import Home from './pages/Home'

Vue.use(BootstrapVue);

Vue.component('titler', require('./components/Titler'));
Vue.component('overlay-hover', require('./components/HoverOverlay'));

export const isInViewPort = {
  isLiteral: true,
  inserted: (el, binding, vnode) => {
    let func = () => {
      let rect = el.getBoundingClientRect();
      let inView = (
          rect.width > 0 &&
          rect.height > 0 &&
          rect.top >= 0 &&
          rect.bottom <=(window.innerHeight || document.documentElement.clientHeight)
      );
      if (inView) {
        setTimeout(function () {
          binding.value()
        }, 1000)
        window.removeEventListener('scroll', func);
      }
    };
    window.addEventListener('scroll', func);

    func();
  },
};

Vue.directive('is-in-view-port', isInViewPort);

const app = new Vue({
  el: '#home',
  render: h => h(Home)
});

const header = new Vue({
  el: 'header',
  render: h => h(Header)
});


