import axios from "@/utils/axios";

const getCode = () => {
  return axios.get("/getCaptcha");
};

const forget = async (option) => {
  let result = "";
  try {
    result = await axios.post("/forget", {
      ...option,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      console.log(`获取数据失败`);
    }
  } catch (e) {
    console.log(`发送错误的数据${e}`);
  }
  return result;
};

export { getCode, forget };
