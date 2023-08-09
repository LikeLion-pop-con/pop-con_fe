import axios from "axios";

const BASE_URL = "https://popcon.store";

export function getMainCategory(id) {
  return axios.get(`${BASE_URL}/main/${id}`).then((res) => res.data);
}

export function getMainCategoryIng(id) {
  return axios.get(`${BASE_URL}/main/${id}/ing`).then((res) => res.data);
}
export function getMainHotPopup() {
  return axios.get(`${BASE_URL}/main/hotpopup`).then((res) => res.data);
}
export function getMypageMylikebrand(name) {
  return axios.get(`${BASE_URL}/mylikebrand/?user_name=${name}`).then((res) => res.data);
}
export function postMylikebrand(popup_name, user_name) {
  const data = {
    popup_name: "아디다스 슈퍼스타",
    user_name: user_name
  };
  console.log(data)
  return axios.post(`${BASE_URL}/popuplike`, data).then((res) => res.data);
}