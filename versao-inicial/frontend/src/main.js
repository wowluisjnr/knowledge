import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1aXogQ2xhdWRpbyBMYXJhIEp1bmlvciIsImVtYWlsIjoibHVpc2FkbUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU3NTMwMjk2LCJleHAiOjE1NTc3ODk0OTZ9.3tT1VSgCjPukGroscqPtI0Ax4w559eIQ1xeWGlfhUhE'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')