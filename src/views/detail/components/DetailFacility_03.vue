<script setup>
import DetailSection from "@/components/DetailSection/DetailSection.vue"
defineProps({
    houseFacility:{
        typeof: Object,
        default: ()=>({})
    }
})
</script>

<template>
    <div class="facility">
        <div class="facility-inner">
            <detail-section title="房屋设施" more-text="查看全部设施">
                <template v-for="(item,index) in houseFacility.houseFacilitys" :key="index">
                    <div class="item" v-if="houseFacility.facilitySort?.includes(index)">
                        <div class="group-name">
                            <img :src="item.icon" alt="">
                            <div class="text">{{ item.groupName }}</div>
                        </div>
                        <div class="list">
                            <template v-for="(data,indey) in item.facilitys.slice(0,4)" :key="indey">
                                <div class="list-item">
                                    <i class="iconfont icon-duihaoyuan"></i>
                                    <span class="text">{{ data.name }}</span>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
            </detail-section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.facility{
    border: 5px solid #f2f3f4;
    .facility-inner {
        padding: 5px 0;
        border-radius: 6px;
        font-size: 12px;
        .item {
            display: flex;
            margin: 25px 0;
            .group-name {
               width: 90px;
               text-align: center;
                img {
                    width: 30px;
                    height: 30px;

                }
                .text {
                    margin-top: 5px;
                    color: #000;
                }
            }
            .list {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                .list-item {
                    display: flex;
                    align-items: center;
                    box-sizing: border-box;
                    width: 50%;
                    margin: 4px 0;
                }
                .icon-duihaoyuan {
                    margin: 0 5px;
                    color: #17d2bc;
                }
                .text {
                    color: #333;
                }
            }
        }
    }
}
</style>