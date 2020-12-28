import axios from "axios";
import errorHandle from "./errorHandle";
const CancelToken = axios.CancelToken;

class HttpRequest {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
		this.pending = {};
	}

	getInsideConfig() {
		const config = {
			baseURL: this.baseUrl,
			headers: {
				"Content-Type": "application/json;charset=utf8",
			},
			timeout: 10000,
		};

		return config;
	}

	removePending(key, isRequest = false) {
		if (this.pending[key] && isRequest) {
			this.pending[key]("取消重复的请求");
		}
		delete this.pending[key];
	}

	//设定拦截器
	interceptors(instance) {
		// Add a request interceptor
		//这里表示重复请求了
		instance.interceptors.request.use(
			(config) => {
				config.cancelToken = new CancelToken((c) => {
					let key = config.url + "&" + config.method;
					this.removePending(key, true);
					this.pending[key] = c;
				});
				return config;
			},
			(err) => {
				errorHandle(err);
			}
		);

		// Add a response interceptor
		instance.interceptors.response.use(
			(res) => {
				let key = res.config.url + "&" + res.config.method;
				this.removePending(key);
				if (res.status === 200) {
					return Promise.resolve(res.data);
				} else {
					Promise.reject(res);
				}
			},
			(err) => {
				errorHandle(err);
			}
		);
	}

	request(options) {
		const instance = axios.create();
		const newOptions = Object.assign(this.getInsideConfig(), options);
		this.interceptors(instance);

		return instance(newOptions);
	}

	get(url, config) {
		const options = Object.assign({ method: "get", url: url }, config);

		return this.request(options);
	}

	post(url, data) {
		return this.request({ method: "post", url: url, data: data });
	}
}

export default HttpRequest;
