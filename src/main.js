import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, {Validator} from 'vee-validate'
import axios from 'axios'
import './local/index'

Vue.config.productionTip = false
Vue.use(VeeValidate)

const vaildator = new Validator()
vaildator.localize('zh-CN')

axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'http://5200.me'

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
