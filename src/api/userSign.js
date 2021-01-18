import axios from "@/utils/request";
import store from "@/store";

const headers = {
	Authorization: "Bearer " + store.state.token,
	"Content-Type": "application/json",
};

const userSign = () => {
	return axios.get("/user/fav", { headers });
};
export { userSign };
