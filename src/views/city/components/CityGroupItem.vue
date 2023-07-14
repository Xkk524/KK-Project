<script setup>
import { useCityStore } from '@/stores/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
// 定义props
const props = defineProps({
    groupData:{
        type:Object,
        default:() =>({})
    }
})
// index-bar动态索引
const indexList = computed (()=>{
    const list = props.groupData.cities.map(item => item.group)
    list.unshift('#')
    return list
})
// 监听城市点击
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
    //获取点击的城市数据
    // console.log(city)
    cityStore.currentCity = city
    //返回上一级
    router.back()
}
</script>

<template>
<div class="group">
    <van-index-bar :index-list="indexList" highlight-color="#ff9854">
        <van-index-anchor index="热门"/>
        <div class="hot-list">
            <template  v-for="hotcity in groupData.hotCities" :key="hotcity.cityId" > 
                <div class="hot-city" @click="cityClick(hotcity)">{{ hotcity.cityName }}</div>
            </template>
        </div>
        <template v-for="(item,index) in groupData.cities" :key="index">
            <van-index-anchor :index="item.group"/>
            <template  v-for="city in item.cities" :key="city.cityId" > 
                <van-cell :title="city.cityName" @click="cityClick(city)" />
            </template>
        </template>
    </van-index-bar>
</div>
</template>

<style lang="scss" scoped>
.hot-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
    .hot-city {
        width: 70px;
        height: 28px;
        border-radius: 14px;
        text-align: center;
        line-height: 28px;
        color: #000;
        background: #fff4ec;
        margin:  10px 0;
    }
}
</style>