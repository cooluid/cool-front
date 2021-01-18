import PopComponent from "./Pop.vue";

const Pop = {};
Pop.install = (Vue) => {
	//注册
	const PopConstructor = Vue.extend(PopComponent);
	const instance = new PopConstructor();
	instance.$mount(document.createElement("div"));
	document.body.appendChild(instance.$el);

	//添加实例方法，全局调用
	Vue.prototype.$pop = (type, msg) => {
		instance.type = type;
		instance.msg = msg;
		instance.isShow = true;
	};
};

export default Pop;
