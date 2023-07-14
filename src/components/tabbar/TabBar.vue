<template>
    <footer>
        <ul>
            <router-link to="/home" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'tabbaractive':''">
                    <i class="iconfont icon-shouye"></i>
                    <span>首页</span>
                </li>
            </router-link>
            <router-link to="/collect" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'tabbaractive':''">
                    <i class="iconfont icon-shoucang"></i>
                    <span>收藏</span>
                </li>
            </router-link>
            <router-link to="/order" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'tabbaractive':''">
                    <i class="iconfont icon-wodedingdan"></i>
                    <span>订单</span>
                </li>
            </router-link>
            <router-link to="/message" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'tabbaractive':''">
                    <i class="iconfont icon-xiaoxizhongxin"></i>
                    <span>消息</span>
                </li>
            </router-link>
        </ul>
    </footer>
</template>
<script setup>
import "@/assets/font/iconfont.js"
import "@/assets/font/iconfont.css"
</script>
<style lang="scss" scoped>
    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #f3f3f3;
        background: white;

        ul {
            display: flex;
            height: 50px;
            li {
                flex: 1;
                text-align: center;
                line-height: 25px;
                display: flex;
                flex-direction: column;
                i {
                    font-size: 20px;
                }
                span {
                    font-size: 16px;
                }
            }

        }
    }
    .tabbaractive{
        color: #ff9854;
    }
</style>