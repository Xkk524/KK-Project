import { useMainStore } from "@/stores/modules/main";
import axios from "axios";

const mainStore =  useMainStore()
// 封装axios
export const httpRequest = axios.create({
  // baseURL: 'http://codercba.com:1888/api/',
  baseURL:'http://123.207.32.32:1888/api/',
  timeout: 1000,
});
// 请求拦截器
httpRequest.interceptors.request.use(function (config) {
  mainStore.isLoadingShow = true
  return config;
}, function (error) {

  return Promise.reject(error);
});

// 响应拦截器
// 每次发送网络请求时就进行加载图标的显示
httpRequest.interceptors.response.use(function (response) {
  mainStore.isLoadingShow = false
  return response;
}, function (error) {
  mainStore.isLoadingShow = false
  return Promise.reject(error);
});
