import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps'
import '../src/assets/css/main.css'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_API_KEY_MAP_GOOGLE,
    libraries: 'places',

  },

})


Vue.config.productionTip = false



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
