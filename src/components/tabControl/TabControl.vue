<script setup>
import { ref } from 'vue'
defineProps({
    titles:{
        typeof: Array,
        default:()=>[]
    }
})
const currentIndex = ref(0)
const emit = defineEmits(['tabItemClick'])
const itemClick = (index) => {
    currentIndex.value = index
    emit('tabItemClick',index)
}
</script>

<template>
    <div class="tab-control">
      <template v-for="(item, index) in titles" :key="index">
        <div class="tab-control-item"
             :class="{ active: index === currentIndex }"
             @click="itemClick(index)">
          <span>{{ item }}</span>
        </div>
      </template>
    </div>
  </template>
  
  <style lang="scss" scoped>
    .tab-control {
      display: flex;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background-color: #fff;
    }
  
    .tab-control-item {
      flex: 1;
    }
  
    .tab-control-item.active {
      color: #f85;
      font-weight: 700;
    }
  
    .tab-control-item.active span {
      border-bottom: 3px solid #f85;
      padding: 8px;
    }
  </style>
  
  