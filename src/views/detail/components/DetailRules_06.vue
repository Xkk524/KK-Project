<script setup>
import DetailSection from '@/components/DetailSection/DetailSection.vue';
defineProps({
    rulesData:{
        typeof: Object,
        default: () =>({})
    }
})
</script>

<template>
  <div class="rules">
    <detail-section title="预订须知">
        <div class="order-rules">
            <template v-for="(item,index) in rulesData.orderRules" :key="index">
               <div class="item">
                    <div class="title"> {{ item.title }}</div>
                    <div class="introduction">
                        {{ item.introduction }}
                        <div class="tip" v-if="item.title === '在线押金'">查看说明</div>
                    </div>
               </div>
            </template>
        </div>
    </detail-section>
  </div>
</template>

<style lang="scss" scoped>
.rules {
    border: 5px solid #f2f3f4;
    .order-rules {
        .item {
            display: flex;
            align-items: center;
            .title {
                width: 64px;
                margin: 20px 20px 0 0;
            }
            .introduction {
                font-size: 13px;
                margin-top: 20px;
                position: relative;
                display: flex;
                .tip {
                    position: absolute;
                    right: -120px;
                    font-weight: 600;
                }
            }
        }
    }
}
</style>
