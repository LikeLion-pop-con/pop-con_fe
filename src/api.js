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
export function getNewbrand() {
  return axios.get(`${BASE_URL}/main/newbrand`).then((res) => res.data);
}




export function postMylikepopup(popup_name, user_name) {
  const data = {
    popup_name: popup_name,
    user_name: user_name
  };
  console.log(data)
  return axios.post(`${BASE_URL}/popuplike/`, data).then((res) => res.data);
}
export function postMylikebrand(brand_name, user_name) {
  const data = {
    brand_name: brand_name,
    user_name: user_name
  };
  console.log(data)
  return axios.post(`${BASE_URL}/brandlike/`, data).then((res) => res.data);
}
export function postPopupplace(brand_name, user_name) {
  const data = {
    brand_name: brand_name,
    user_name: user_name
  };
  console.log(data)
  return axios.post(`${BASE_URL}/popupplacelike`, data).then((res) => res.data);
}