import axios from "axios";
import errorHandle from "./errorHandle";

class HttpRequest {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
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

	interceptors(instance) {
		// Add a request interceptor
		instance.interceptors.request.use(
			(config) => {
				return config;
			},
			(err) => {
				errorHandle(err);
			}
		);

		// Add a response interceptor
		instance.interceptors.response.use(
			(res) => {
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
