<script setup>
import { useRoute, useRouter } from "vue-router";
import { useDetailStore } from "@/stores/modules/detail"
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import DetailSwipe from "./components/DetailSwipe_01.vue";
import DetailInfons from "./components/DetailInfos_02.vue"
import DetailFacility from "./components/DetailFacility_03.vue"
import DetailLandlord from "./components/DetailLandlord_04.vue";
import DetailComment from "./components/DetailComment_05.vue";
import DetailRules from "./components/DetailRules_06.vue";
import DetailMap from "./components/DetailMap_07.vue"
import DetailPriceInfos from "./components/DetailPriceInfos_08.vue"
import TabControl from "@/components/tabControl/TabControl.vue"
import useScroll from "@/hooks/useScoll";


const route = useRoute()
const router = useRouter()
const houseId = route.params.id
// 发送网络请求
const detailStore =  useDetailStore()
detailStore.fetchDetailAction(houseId)

// 拿到detailStore里面的数据
const { detailData } = storeToRefs(detailStore)
const mainPart = computed(()=> detailData.value.mainPart)

const leftClick = () => {
    router.back()
}

// tabControl相关操作
const detailRef = ref()
const { scrollTop } =  useScroll(detailRef)
const showTabControl = computed(()=> {
    return scrollTop.value > 300
})

// const sectionEls = []
// const getSectionRef = (value) => {
//     sectionEls.push(value.$el)
// }
const sectionEls = ref({})
const names = computed(()=>{
    return Object.keys(sectionEls.value)
})

const getSectionRef = (value) =>{
    const name = value.$el.getAttribute("name")
    sectionEls.value[name] = value.$el
}

const tabClick = (index) => {
    // let instance = sectionEls[index].offsetTop
    const key = Object.keys(sectionEls.value)[index]
    const el = sectionEls.value[key]
    let instance = el.offsetTop
    if(index !== 0){
        instance = instance - 44
    }
    detailRef.value.scrollTo({
        top: instance,
        behavior: 'smooth'
    })
}

</script>

<template>
    <div class="detail" ref="detailRef">
        <tab-control 
            v-if="showTabControl"
            class="tabs"
            :titles="names"
            @tabItemClick="tabClick"
        />
        <van-nav-bar
            title="房屋详情"
            left-text="首页"
            color="#ff5000"
            left-arrow
            @click-left="leftClick"
        />
        <div v-if="mainPart">
            <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
            <detail-infons name="详情"  :ref="getSectionRef" :detail-infos="mainPart.topModule"/>
            <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
            <detail-landlord name="房东" :ref="getSectionRef" :landlord-list="mainPart.dynamicModule.landlordModule"/>
            <detail-comment name="评论" :ref="getSectionRef" :comment-data="mainPart.dynamicModule.commentModule"/>
            <detail-rules name="须知" :ref="getSectionRef" :rules-data="mainPart.dynamicModule.rulesModule"/>
            <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
            <detail-price-infos :introduction="mainPart.introductionModule"/>
        </div>
        <div class="footer">
            <img :src="mainPart.ensureModule.icon" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.detail {
    height: 100vh;
    overflow-y: auto;
    .tabs {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }
    :deep(.van-nav-bar__text) {
        color: #ff5000;
    }
    :deep(.van-icon) {
        color: #ff5000;
    }
    :deep(.van-nav-bar__title) {
        color: #ff5000;
    }
    .footer {
        margin: 30px 0;
        text-align: center;
        img {
            width: 123px;
            height: 17px;
           
        }
    }
}

</style>