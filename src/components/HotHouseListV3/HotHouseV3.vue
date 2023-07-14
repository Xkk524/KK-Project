<script setup>

const props = defineProps({
    itemData:{
        typeof:Object,
        default:() => ({})
    }
})
</script>

<template>
    <div class="hot-house-item-v3">
        <div class="house-item-v3">
            <div class="img-item">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="house-info">
                <div class="location">
                    <i class="iconfont icon-spiritling-dingwei"></i>
                    <span>{{ itemData.location }}</span>
                </div>
                <div class="name">{{ itemData.houseName }}</div>
                <div class="summary">{{ itemData.summaryText }}</div>
                <div class="price">
                    <span class="final-price">￥{{ itemData.finalPrice }}</span>
                    <span class="product-price">￥{{ itemData.productPrice}}</span>
                    <span class="price-tip-badge">{{ itemData?.priceTipBadge?.text }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.house-item-v3 {
    width: 162px;
    margin-top: 22px;
    .img-item {
        img {
            width: 100%;
            border-radius: 8px;
        }
    }
    .house-info {
        .location {
            color: #666;
            font-size: 12px;
            margin: 8px 0;
            .icon-spiritling-dingwei {
                font-size: 12px;
            }
        }
        .name {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin-bottom: 5px;
        }
        .summary {
            font-size: 12px;
            color: #666;
            margin-bottom: 5px;
        }
        .final-price {
            font-size: 20px;
            color: #ff5000;
        }
        .product-price {
            text-decoration: line-through;
            font-size: 10px;
            color: #ccc;
            margin: 0 3px;
        }
        .price-tip-badge {
            background: linear-gradient(to right,#ff6666,#ff9f9f);
            border-radius: 10px;
            font-size: 13px;
            display: inline-block;
            width: 60px;
            text-align: center;
            color: #fff;
            
        }
    }
}
</style>