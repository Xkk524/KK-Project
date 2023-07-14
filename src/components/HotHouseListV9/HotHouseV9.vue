<script setup>

const props = defineProps({
    houseData:{
        typeof:Object,
        default:() => ({})
    }
})
</script>

<template>
    <div class="hot-house-item">
        <div class="house-item">
            <div class="img-item">
                <img :src="props.houseData.image.url" alt="">
            </div>
            <div class="house-info">
                <div class="summary">{{ props.houseData.summaryText }}</div>
                <div class="name">{{ props.houseData.houseName }}</div>
                <div class="hosue-score">
                    <van-rate 
                        :model-value="Number(props.houseData.commentScore)" 
                        readonly 
                        allow-half
                        size="14"
                        color="#ff5000"
                    />
                    <span class="price">￥{{props.houseData.finalPrice}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.house-item {
    position: relative;
    width: 167px;
    margin-top: 20px;
    .img-item {
        img {
            width: 100%;
            border-radius: 8px;
        }
    }
    .house-info {
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
        padding: 10px;
        font-size: 13px;
        .summary {
            margin-bottom: 5px;
        }
        .name {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin-bottom: 5px;
        }
        .price {
            margin-left: 20px;
            color: #ff5000;
        }
    }
}
</style>