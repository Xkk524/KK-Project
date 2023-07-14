<script setup>
defineProps({
    title:{
        typeof: String,
        default: ""
    },
    moreText:{
        typeof: String,
        default: ""
    }
})
</script>

<template>
    <div class="section">
        <div class="top">
            <h2>{{ title }}</h2>
        </div>
        <div class="center">
            <slot>默认内容</slot>
        </div>
        <div class="footer" v-if="moreText.length">
            <span class="more">{{ moreText }}</span>
            <van-icon name="arrow" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section {
    margin: 15px;
    .top {
        margin-bottom: 15px;
    }
    .center {
        background-color: #f7f9fb;
    }
    .footer {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
        font-size: 12px;
        color: #FF9645;
        font-weight: 600;
    }
}
</style>