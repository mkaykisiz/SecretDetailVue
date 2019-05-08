import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as VueGoogleMaps from 'vue2-google-maps'
import Vuetify from 'vuetify'


Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_G_API_KEY,
    libraries: 'places'
  },
  installComponents: false
})

Vue.component('google-map', VueGoogleMaps.Map)
Vue.component('google-marker', VueGoogleMaps.Marker)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
