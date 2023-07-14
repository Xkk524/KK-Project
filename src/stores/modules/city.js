import { getAllCity } from '@/service/modules/city'
import { defineStore } from 'pinia'


export const useCityStore = defineStore('city', {
  state:() => ({
    // 用于存储网络请求返回的数据
    allCityies:{},
    currentCity:{ 
      cityId: 45,
      cityName: '广州'
    },
  }),
  actions:{
    async fetchCityAction(){
        // 调用getAllCity方法用于发送网络请求
        const res = await getAllCity()
        this.allCityies = res.data.data
    }
  }
})