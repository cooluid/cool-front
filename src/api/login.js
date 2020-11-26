import axios from "@/utils/request";

const getCode = (sid) => {
	return axios.get("/getCaptcha", { params: { sid: sid } });
};

const forget = (option) => {
	return axios.post("/forget", { ...option });
};

export { getCode, forget };
