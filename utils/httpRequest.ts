import axios from "axios";

export const getData = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

export const postData = async (url: string, data: any) => {
  const res = await axios.post(url, data);
  return res.data;
};
