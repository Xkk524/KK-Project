<script setup>
const props =  defineProps({
    swipeData:{
        typeof: Array,
        default: ()=>[]
    }
})
// 对后端提供的数据进行转换
const swipeGroup = {}
// 思路一
// for(const item of props.swipeData){
//     swipeGroup[item.enumPictureCategory] = []
// }
// for(const item of props.swipeData){
//     const valueArray = swipeGroup[item.enumPictureCategory]
//     valueArray.push(item)
// }
// 思路二
for(const item of props.swipeData) {
    let valueArray = swipeGroup[item.enumPictureCategory]
    if(!valueArray){
        valueArray = []
        swipeGroup[item.enumPictureCategory] = valueArray
    }
    valueArray.push(item)
}
// 标题替换
const getName = (name) => {
    return name.replace("：","")
}
const getCategoryIndex = (item) =>{
    const valueArray = swipeGroup[item.enumPictureCategory]
    return valueArray.findIndex(data => data === item)
}
</script>

<template>
    <div class="swipe">
        <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
            <template v-for="(item,index) in props.swipeData" :key="index">
                <van-swipe-item class="item">
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </template>
            <!-- <template #indicator="{ active, total }"> -->
            <template #indicator="{ active }">
                <!-- <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div> -->
                <div class="custom-indicator">
                    <template v-for="(value, key, index) in swipeGroup" :key="index">
                        <span 
                            class="item"
                            :class="{active: swipeData[active]?.enumPictureCategory == key}"    
                        >
                        <span class="text">{{ getName(value[0].title) }}</span>
                        <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                            {{ getCategoryIndex(swipeData[active]) +1 }}/{{ value.length }}
                        </span>
                        </span>
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<style lang="scss" scoped>
.swipe {
    .swipe-list {
        .item {
            img {
                width: 100%;
            }
        }
        .custom-indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            color: #fff;
            background: rgba(0, 0, 0, 0.8);
            .item {
                &.active {
                    background: #fff;
                    color: #333;
                    border-radius: 5px;
                }
            }
        }
    }
}
</style>