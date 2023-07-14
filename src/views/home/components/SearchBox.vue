<script setup>
import { useCityStore } from '@/stores/modules/city';
import { useHomeStore } from '@/stores/modules/home';
import { useMainStore } from '@/stores/modules/main';
import { formatMountDay,getDiffDays } from '@/util/format-date';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

// defineProps({
//     hotSuggest:{
//         type:Array,
//         default:[]
//     }
// })

const router = useRouter()
//获取城市列表
const cityClick = () => {
    router.push('/city')
}
// 获取位置信息
 const mycityClick = () =>{
    navigator.geolocation.getCurrentPosition(res =>{
        console.log('获取位置成功:',res)
    },err =>{
        console.log('获取位置失败：',err)
    })
 }

 // 选择城市后回显至首页
 const cityStore = useCityStore()
 const { currentCity } = storeToRefs(cityStore)

 // 获取日期
//  const nowDate = new Date()
//  const tomorrowDate = new Date()
//  tomorrowDate.setDate(nowDate.getDate() + 1)
// const startDate = ref(formatMountDay(nowDate)) 
//  const endDate = ref(formatMountDay(tomorrowDate))
const mainStore =  useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(()=> formatMountDay(startDate.value))
const endDateStr = computed(()=> formatMountDay(endDate.value))

 // 选择入店/离店的日期
 const showCalendar = ref(false)
 const selectDataRangeConfirm = (value) =>{
    // 1.将选择的入店/离店日期赋值给对应的变量
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    // startDate.value = formatMountDay(selectStartDate)
    // endDate.value = formatMountDay(selectEndDate)
    mainStore.startDate = selectStartDate
    mainStore.endDate = selectEndDate
    // 2.点击确认后关闭日期选择的范围弹窗
    showCalendar.value = false
    // 选择日期范围后，动态计算所待的天数
    stayDays.value = getDiffDays(selectStartDate,selectEndDate)
 }
 // 定制日期文案
const formatter = (day) =>{
    if (day.type === 'start') {
        day.bottomInfo = '入住';
      } else if (day.type === 'end') {
        day.bottomInfo = '离店';
    }
    return day
}
// 入住至离店所待的时间
const stayDays = ref(getDiffDays(startDate.value,endDate.value))

// 热门建议
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
  // 热门建议点击后的逻辑
const hotSuggestClick = (text) => {
    router.push({
        path:'/search',
        query:{
            startDate: startDate.value,
            endDate: endDate.value,
            hotSuggests:text,
        }
    })
}
// 点击搜索按钮后的逻辑
const searchBtnClick = () => {
    router.push({
        path:'/search',
        query:{
            startDate: startDate.value,
            endDate: endDate.value,
            currentCity:currentCity.value.cityName,
        }
    })
}
</script>
<template>
    <div class="search-box">
        <!-- 位置信息 -->
        <div class="location">
            <div class="city" @click="cityClick">{{currentCity.cityName}}</div>
            <div class="mycity" @click="mycityClick">
                <span>我的位置</span>
                <i class="iconfont icon-dingwei"></i>
            </div>
        </div>
        <!-- 日期选择 -->
        <div class="date-range border-top-line" @click="showCalendar = true">
            <div class="left">
                <div class="start">
                    <span class="tip">入住</span>
                    <span class="date">{{startDateStr}}</span>
                </div>
                <div class="stay">共{{ stayDays }}晚</div>
            </div>
            <div class="leave">
                <span class="tip">离店</span>
                <span class="date">{{endDateStr}}</span>
            </div>
        </div>
        <van-calendar 
            v-model:show="showCalendar"
            type="range" 
            :round="false"
            color="#ff9854"
            :formatter="formatter"
            @confirm="selectDataRangeConfirm" 
        />
        <div class="price-people border-top-line">
            <div class="left">价格不限</div>
            <div class="right">人数不限</div>
        </div>
        <div class="key-word border-top-line">关键字/位置/民宿名</div>
        <!-- 热门建议 -->
        <div class="hot-suggest border-top-line">
            <template v-for="(item,index) in hotSuggests" :key="index">
                <div 
                    class="item"
                    :style="{ color: item.tagText.color, background: item.tagText.background.color}"
                    @click="hotSuggestClick(item.tagText.text)"
                >{{ item.tagText.text }}</div>
            </template>
        </div>
        <!-- 搜索按钮 -->
        <div class="searchbtn" @click="searchBtnClick">开始搜索</div>
        <!-- 分类 -->
        <div class="">

        </div>
    </div>
</template>
<style lang="scss" scoped>
    .search-box {
        --van-calendar-popup-height: 100%
    }
   .location {
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 20px;
        .city {
            flex: 1;
            font-size: 15px;
            color: #333;
        }
        .mycity {
            width: 74px;
            font-size: 12px;
            color: #666;
            i{
                color: #ff9835;
                margin-left: 5px;
            }
        }
    }
   .date-range {
    display: flex;
    padding: 0 20px;
      .left {
        flex: 1;
        height: 44px;
        display: flex;
        align-items: center;
        .start {
            display: flex;
            flex-direction: column;
        }
        .stay {
            flex: 1;
            text-align: center;
            font-size: 12px;
            color: #666;
        }
      }
      .leave {  
        display: flex;
        flex-direction: column;
      }
      .tip {
        color: #666;
        font-size: 13px;
      }
   }
   .price-people {
     display: flex;
     height: 44px;
     padding: 20px;
     padding-bottom:0 ;
     .left {
        flex: 1;
        font-size: 12px;
        color: #666;
     }
     .right {
        font-size: 12px;
        color: #666;
     }
   }
   .key-word {
        padding: 0 20px;
        font-size: 12px;
        color: #666;
        height: 44px;
    }
    .hot-suggest {
        display: flex;
        flex-wrap: wrap;
        padding: 0 11px;
        .item {
            padding: 4px 12px;
            margin: 3px;
            border-radius: 14px;
            font-size: 12px;
        }
    }
    .searchbtn {
        width: 348px;
        height: 38px;
        max-height: 50px;
        background: #ff9835;
        border-radius: 20px;
        text-align: center;
        line-height: 38px;
        font-size: 18px;
        color: #fff;
        margin:auto;
        margin-top: 8px;
    }
</style>