import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import router from './router';

Vue.component('ValidationProvider', ValidationProvider);

extend('positive', {
  validate: value =>  {
    return value.length > 1;
  },
  message: 'The {_field_} has to be longer than one symbol.',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
