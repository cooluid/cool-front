import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import store from "@/store/index";

const Login = () =>
	import(/* webpackChunkName: 'login' */ "../views/Login.vue");
const Reg = () => import(/* webpackChunkName: 'reg' */ "../views/Reg.vue");
const Forget = () =>
	import(/* webpackChunkName: 'forget' */ "../views/Forget.vue");
const Index = () =>
	import(/* webpackChunkName: 'index' */ "../views/channels/Index.vue");
const Template1 = () =>
	import(/* webpackChunkName: 'template1' */ "../views/channels/Template1.vue");
const Center = () =>
	import(/* webpackChunkName: 'center' */ "../views/Center.vue");
const UserCenter = () =>
	import(/* webpackChunkName: 'user-center' */ "../components/user/Center.vue");
const UserMsg = () =>
	import(/* webpackChunkName: 'user-msg' */ "../components/user/Msg.vue");
const Others = () =>
	import(/* webpackChunkName: 'others' */ "../components/user/Others.vue");
const UserPost = () =>
	import(/* webpackChunkName: 'user-post' */ "../components/user/Posts.vue");
const Settings = () =>
	import(/* webpackChunkName: 'settings' */ "../components/user/Settings.vue");
const MyHome = () =>
	import(/* webpackChunkName: 'my-home' */ "../views/User.vue");
const MyInfo = () =>
	import(
		/* webpackChunkName: 'my-info' */ "../components/user/common/MyInfo.vue"
	);
const PicUpload = () =>
	import(
		/* webpackChunkName: 'pic-upload' */ "../components/user/common/PicUpload.vue"
	);
const Passwd = () =>
	import(
		/* webpackChunkName: 'passwd' */ "../components/user/common/Passwd.vue"
	);
const Accounts = () =>
	import(
		/* webpackChunkName: 'accounts' */ "../components/user/common/Accounts.vue"
	);
const MyPost = () =>
	import(
		/* webpackChunkName: 'my-post' */ "../components/user/common/MyPost.vue"
	);
const MyCollection = () =>
	import(
		/* webpackChunkName: 'my-collection' */ "../components/user/common/MyCollection.vue"
	);

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: Home,
		children: [
			{ path: "/", name: "index", component: Index },
			{ path: "/index/:catalog", name: "catalog", component: Template1 },
		],
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/reg",
		name: "reg",
		component: Reg,
		beforeEnter: (to, from, next) => {
			if (from.name === "login") {
				next();
			} else {
				next("/login");
			}
		},
	},
	{
		path: "/forget",
		name: "forget",
		component: Forget,
	},
	{ path: "/user", name: "home", component: MyHome },
	{
		path: "/center",
		component: Center,
		linkActiveClass: "layui-this",
		children: [
			{ path: "", name: "center", component: UserCenter },
			{ path: "msg", name: "msg", component: UserMsg },
			{ path: "others", name: "others", component: Others },
			{
				path: "posts",
				name: "posts",
				component: UserPost,
				children: [
					{ path: "", name: "mypost", component: MyPost },
					{ path: "collection", name: "collection", component: MyCollection },
				],
			},
			{
				path: "settings",
				name: "settings",
				component: Settings,
				children: [
					{
						path: "",
						name: "info",
						component: MyInfo,
					},
					{
						path: "pic",
						name: "pic",
						component: PicUpload,
					},
					{
						path: "passwd",
						name: "passwd",
						component: Passwd,
					},
					{
						path: "account",
						name: "account",
						component: Accounts,
					},
				],
			},
		],
		meta: { requiresAuth: true },
	},
];

const router = new VueRouter({
	linkExactActiveClass: "layui-this",
	routes,
});

router.beforeEach((to, from, next) => {
	const userInfo = localStorage.getItem("userInfo");
	const token = localStorage.getItem("token");

	if (userInfo != "" && userInfo != null && token != "" && token != null) {
		store.commit("setIsLogin", true);
		store.commit("setUserInfo", JSON.parse(userInfo));
		store.commit("setToken", token);
	}
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		const isLogin = store.state.isLogin;
		if (isLogin) {
			next();
		} else {
			next("/login");
		}
	} else {
		next();
	}
});

export default router;
