<script setup>
import { useMainStore } from "@/stores/modules/main";
import { formatMountDay } from "@/util/format-date";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const mainStore =  useMainStore()
const { startDate,endDate } = storeToRefs(mainStore)
const startDateStr = computed(()=> formatMountDay(startDate.value,"MM.DD"))
const endDateStr = computed(()=> formatMountDay(endDate.value,"MM.DD"))
</script>

<template>
  <div class="search-bar">
    <div class="content">
      <div class="left">
        <div class="left-top">
          <span class="text">住</span>
          <span class="start-date">{{ startDateStr }}</span>
        </div>
        <div class="left-bottom">
          <span class="text">离</span>
          <span class="start-date">{{ endDateStr }}</span>
          <i class="iconfont icon-youxiasanjiao"></i>
        </div>
      </div>
      <div class="right">
        <div class="keyword">
            <span>关键字/位置/民宿</span>
            <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: white;
  z-index: 10;

  .content {
    display: flex;
    width: 345px;
    background-color: #f2f4f6;
    border-radius: 8px;
    // margin: 10px;
    .left {
      margin-top: 8px;
      margin-left: 10px;
        .text {
            font-size: 12px;
            color: #666;
            padding-right: 3px;
        }
        .start-date {
            font-size: 13px;
        }
        .icon-youxiasanjiao {
            font-size: 2px;
        }
    }
    .right {
        margin-left: 10px;
        width: 265px;
        position: relative;
        .keyword {
            line-height: 45px;
            color: #666;
            font-size: 13px;
            i {
                position: absolute;
                right: 10px;
                font-size: 20px;
                color: #666;
                font-weight: 600;
            }
        }

    }
  }
}
</style>