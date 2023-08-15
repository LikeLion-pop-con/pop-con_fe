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
export function getCardinfo(id) {
  return axios.get(`${BASE_URL}/card/info/?id=${id}`).then((res) => res.data);
}
export function getCardcheck(id, pw) {
  return axios
    .get(`${BASE_URL}/card/check/?id=${id}&pw=${pw}`)
    .then((res) => res.data);
}
export function getSearch(search) {
  return axios
    .get(`${BASE_URL}/search/${search}`)
    .then((res) => res.data);
}
export function getBrandinfo(id) {
  return axios
    .get(`${BASE_URL}/brandinfo/?id=${id}`)
    .then((res) => res.data);
}


export function postMylikepopup(popup_id, user_id) {
  return axios
    .post(`${BASE_URL}/popuplike/`, {
      popup_id,
      user_id,
    })
    .then((res) => console(res.data));
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
    .then((res) => res.data);
}

export function getPopupById(id) {
  return axios.get(`${BASE_URL}/popupinfo/?id=${id}`).then((res) => res.data);
}
export function postCard(
  user_pk,
  account_password,
  bank,
  bank_account_number,
  card_number,
  max_date,
  cvc,
  card_password
) {
  const data = {
    user_pk: user_pk,
    account_password: account_password,
    bank: bank,
    bank_account_number: bank_account_number,
    card_number: card_number,
    max_date: max_date,
    cvc: cvc,
    card_password: card_password,
  };
  console.log(data);
  return axios.post(`${BASE_URL}/card/signup/`, data).then((res) => res.data);
}
