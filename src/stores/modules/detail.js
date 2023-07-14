import { getDetailData } from "@/service/modules/detail";
import { defineStore } from "pinia";

export const useDetailStore = defineStore("detail",{
    state:()=>({
        detailData: {}
    }),
    actions:{
        async fetchDetailAction(houseId){
            const res = await getDetailData(houseId)
            this.detailData = res.data.data
        }
    }
})