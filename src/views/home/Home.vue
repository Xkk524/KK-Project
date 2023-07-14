<template>
    <div class="home">
        <nav-bar-title/>
        <div class="banner">
            <img src="../../assets/img/home/home-banner.png" alt="">
        </div>
        <!-- <search-box :hot-suggest="hotSuggests"/> -->
        <search-box/>
        <categories/>
        <search-bar v-show="isShowSearchBar"/>
        <hot-house-list/>
    </div>
</template>

<script setup>
import NavBarTitle from "./components/NavBarTitle.vue";
import SearchBox from './components/SearchBox.vue'
import Categories from "./components/Categories.vue"
import HotHouseList from "./components/HotHouseList.vue";
import SearchBar from "./components/SearchBar.vue";
import { useHomeStore } from "@/stores/modules/home";
import useScroll from "@/hooks/useScoll";
import { computed, ref, watch } from "vue";
// 发送网络请求
// 1.热门建议
const homeStore = useHomeStore()
// 调用 homeStore 里面的fetchHomeAction方法来发送热门建议请求
homeStore.fetchHomeAction()
// 调用 homeStore 里面的fetchHomeCategoriesAction方法来发送Categories请求
homeStore.fetchHomeCategoriesAction()
// 调用 homeStore 里面的fetchHomeHotHouseAction方法来发送获取房屋列表的请求
homeStore.fetchHomeHotHouseAction()

const { isReachBottom,scrollTop } = useScroll()
watch(isReachBottom,(newValue)=>{
    if(newValue){
        homeStore.fetchHomeHotHouseAction().then(()=>{
            isReachBottom.value = false
        })
    }
})

// 搜索框的显示/隐藏
// const isShowSearchBar = ref(false)
// watch(scrollTop,(newTop)=> {
//     isShowSearchBar.value = newTop > 100
// })
// 定义的可响应式数据，依赖另外一个可响应式的数据，那么可以使用计算属性(computed)
const isShowSearchBar = computed(()=>{
    return scrollTop.value > 498
})
</script>

<style lang="scss" scoped>
    .banner{
        img {
            width: 100%;
        }
    }
    .home {
        padding-bottom: 60px;
    }
    
</style>  