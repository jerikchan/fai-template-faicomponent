import Vue from 'vue';
import App from './components/App.vue';
import './plugins';

new Vue({
  el: '#app',
  render: h => h(App),
});