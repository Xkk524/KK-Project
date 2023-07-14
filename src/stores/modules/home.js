import { defineStore } from "pinia";
import { getHomeHotSuggest, getHomeCategories, getHomeHotHouse } from "@/service/modules/home"
 

export const useHomeStore = defineStore("home",{
    state:() => ({
        hotSuggests:[],
        Categories:[],
        currentPage:1,
        hotHouseList:[]
    }),
    actions:{
        async fetchHomeAction(){
            const res = await getHomeHotSuggest()
            this.hotSuggests = res.data.data
        },
        async fetchHomeCategoriesAction(){
            const res = await getHomeCategories()
            this.Categories = res.data.data
        },
        async fetchHomeHotHouseAction(){
            const res  = await getHomeHotHouse(this.currentPage)
            this.hotHouseList.push(...res.data.data) 
            this.currentPage++
        }
    }
})