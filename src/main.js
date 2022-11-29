import Vue from 'vue'
import App from './App.vue'

/* ------------- Dependencias ---------------- */
// Bootstrap 4: npm i bootstrap@4 jquery popper.js
import './bootstrap'

// Router 3: npm i vue-router@3
import { router } from './router'

// VueForm - Formulario Avanzado: npm i vue-form
import './form'

// Axios 3.4 : npm i axios vue-axios@3.4
import './axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
