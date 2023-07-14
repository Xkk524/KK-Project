<script setup>
import DetailSection from '@/components/DetailSection/DetailSection.vue';
defineProps({
    landlordList:{
        typeof:Object,
        default: ()=>({})
    }
})
</script>

<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
        <div class="header">
            <img :src="landlordList.topScroll" alt="">
        </div>
        <div class="hotel-infos">
            <div class="left">
                <div class="hotel-logo">
                    <img :src="landlordList.hotelLogo" alt="">
                </div>
                <div class="hotel-name">
                    <div class="name">{{ landlordList.hotelName }}</div>
                    <template v-for="(item,index) in landlordList.hotelTags" :key="index">
                        <span 
                            class="tags" 
                            :style="{color: item.tagText.color}"
                            :class="{ 'myStyle': index === landlordList.hotelTags.length - 1 }"
                        >
                        {{ item.tagText.text }}
                    </span>
                    </template>
                </div>
            </div>
            <div class="right">
                <button>联系商家</button>
            </div>
        </div>
        <div class="hotel-summary">
                <template v-for="(data,indey) in landlordList.hotelSummary" :key="indey">
                    <div class="hotel-item">
                        <div class="title">{{ data.title }}</div>
                        <div class="introduction">{{ data.introduction }}</div>
                        <div class="tip">{{ data.tip }}</div>
                    </div>
                </template>
        </div>
    </detail-section>
  </div>
</template>

<style lang="scss" scoped>
.landlord {
    border: 5px solid #f2f3f4;
    .header {
        img {
            width: 100%;
        }
    }
    .hotel-infos {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 30px;
        .left {
            display: flex;
            align-items: center;
            .hotel-logo {
                img {
                    width: 50px;
                    height: 50px;
                }
            }
            .hotel-name {
                .name {
                    margin-bottom: 3px;
                    font-weight: 600;
                }
                .tags {
                    font-size: 12px;
                    border-right: 1px solid #9B9B9B;
                    padding: 0 5px;
                }
                .myStyle {
                    border-right: none;
                }
            }
        }
        .right {
            button {
                background-color: #FF9645;
                color: #fff;
                border: none;
                height: 25px;
                line-height: 25px;
                border-radius: 5px;
            }
        }
    }
    .hotel-summary {
        display: flex;
        .hotel-item {
            flex: 1;
            .title {
                font-size: 10px;
                color: #999;
            }
            .introduction {
                font-size: 18px;
                color: #333;
                font-weight: 600;
                margin: 4px 0 2px;
            }
            .tip {
                font-size: 10px;
                color: #999;
            }
        }

    }
}

</style>
