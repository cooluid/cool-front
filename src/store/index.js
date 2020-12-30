import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		sid: "",
		isLogin: false,
		token: "",
		userInfo: null,
	},
	mutations: {
		setSid(state, val) {
			state.sid = val;
		},
		setIsLogin(state, value) {
			state.isLogin = value;
		},
		setUserInfo(state, value) {
			state.userInfo = value;
		},
	},
	actions: {},
	modules: {},
});
