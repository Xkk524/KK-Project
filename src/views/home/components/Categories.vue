<script setup>
import { useHomeStore } from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore()
const { Categories } = storeToRefs(homeStore)
</script>

<template>
    <div class="categories">
        <template v-for="item in Categories" :key="item.id">
            <div class="categories-item">
                <img :src="item.pictureUrl" alt="">
                <div class="text">{{ item.title }}</div>
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.categories{
    display: flex;
    overflow-x: auto;
    padding: 0 10px;
    margin-top: 8px;
    // 当前元素下隐藏滚动条
    &::-webkit-scrollbar {
        display: none; 
    }

    .categories-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-shrink: 0 ;
        width: 70px;
        text-align: center;
        img {
            width: 32px;
            height: 32px;
        }
        .text {
            font-size: 12px;
            color: #666;
            margin-top: 8px;
        }
    }
}
</style>