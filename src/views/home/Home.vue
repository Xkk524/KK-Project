<template>
    <div class="home">
        <nav-bar-title/>
        <div class="banner">
            <img src="../../assets/img/home/home-banner.png" alt="">
        </div>
        <div class="location">
            <div class="city">成都</div>
            <div class="mycity">
                <span>我的位置</span>
                <i class="iconfont icon-dingwei"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBarTitle from "./HomeNavBar/NavBarTitle.vue";
</script>

<style lang="scss" scoped>
    .banner{
        img {
            width: 100%;
        }
    }
    .location {
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 20px;
        .city {
            flex: 1;
        }
        .mycity {
            width: 74px;
            font-size: 12px;
            i{
                color: #ff9835;
                margin-left: 5px;
            }
        }
    }
</style>  