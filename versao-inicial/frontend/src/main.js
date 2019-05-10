import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1aXogQ2xhdWRpbyBMYXJhIEp1bmlvciIsImVtYWlsIjoibHVpc2FkbUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU3NDkzMjA5LCJleHAiOjE1NTc3NTI0MDl9.zeQwQpt9eD86sbAQ6Ps-A3_H5pvjMoMTBMS0O5wwit4'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')