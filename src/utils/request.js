import HttpRequest from "./axios";
import config from "@/config";
const baseUrl =
	process.env.NODE_ENV === "develoment"
		? config.baseUrl.dev
		: config.baseUrl.pro;

const axios = new HttpRequest(baseUrl);

export default axios;
