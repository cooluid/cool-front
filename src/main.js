import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate, { Validator } from "vee-validate";
import "./local/index";

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(VeeValidate);

const vaildator = new Validator();
vaildator.localize("zh-CN");

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
