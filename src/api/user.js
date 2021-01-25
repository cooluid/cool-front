import axios from "@/utils/request";
//获取用户信息
const userSign = () => axios.get("/user/fav");

//更新用户信息
const updateUserInfo = (data) => axios.post("/user/basic", data);

export { userSign, updateUserInfo };
