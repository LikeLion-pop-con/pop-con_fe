import axios from "axios";

const BASE_URL = "https://popcon.store";
const NOTICE_BASE_URL = "bizmsg-web.kakaoenterprise.com";

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
  return axios
    .get(`${BASE_URL}/mylikebrand/?user_name=${name}`)
    .then((res) => res.data);
}
export function getNewbrand() {
  return axios.get(`${BASE_URL}/main/newbrand`).then((res) => res.data);
}
export function getMypopupreservation(user_id) {
  return axios
    .get(`${BASE_URL}/mypopupreservation/?id=${user_id}`)
    .then((res) => res.data);
}

export function postMylikepopup(popup_name, user_name) {
  const data = {
    popup_name: popup_name,
    user_name: user_name,
  };
  console.log(data);
  return axios.post(`${BASE_URL}/popuplike/`, data).then((res) => res.data);
}
export function postMylikebrand(brand_name, user_name) {
  const data = {
    brand_name: brand_name,
    user_name: user_name,
  };
  console.log(data);
  return axios.post(`${BASE_URL}/brandlike/`, data).then((res) => res.data);
}
export function postPopupplace(brand_name, user_name) {
  const data = {
    brand_name: brand_name,
    user_name: user_name,
  };
  console.log(data);
  return axios.post(`${BASE_URL}/popupplacelike`, data).then((res) => res.data);
}
export function postPopupreservation(
  user_id,
  popup_id,
  popup_reservation_date,
  popup_reservation_time
) {
  return axios
    .post(`${BASE_URL}/popupreservation/`, {
      user_id,
      popup_id,
      popup_reservation_date,
      popup_reservation_time,
    })
    .then((res) => console.log(res.data));
}

export function getPopupById(id) {
  return axios.get(`${BASE_URL}/popupinfo/?id=${id}`).then((res) => res.data);
}
