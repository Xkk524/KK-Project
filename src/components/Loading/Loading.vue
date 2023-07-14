<script setup>
import { useMainStore } from "@/stores/modules/main"

const mainStore =  useMainStore()
const loadingClick = () => {
    mainStore.isLoadingShow = false
}
</script>

<template>
    <div 
        class="loading" 
        @click="loadingClick"
        v-show="mainStore.isLoadingShow"
        >
        <div class="loading-img">
            <img src="@/assets/img/home/loading.gif" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
 .loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
    z-index: 99;
    .loading-img {
        img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }
    }
 }
</style>