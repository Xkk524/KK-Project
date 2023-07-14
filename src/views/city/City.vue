<script setup>
import '@/assets/css/common.css';
import { computed,  ref } from "vue";
import { useRouter } from "vue-router";
import {useCityStore} from "@/stores/modules/city.js"
import { storeToRefs } from 'pinia';
import CityGroupItem from './components/CityGroupItem.vue';
// import { getAllCity } from "@/service/modules/city.js"
const router = useRouter()
const searchValue = ref('')
// 搜索框功能
const cancelClick = () =>{
    router.back()
}
// tab标签功能
const tabActive = ref()
// 网络请求，请求城市数据
// onMounted(()=>{
//     getAllCity().then(res =>{
//         console.log(res.data);
//     })
// })

// 创建一个对象用于调用创建的pinia状态管理的函数
const cityStore = useCityStore()
//调用fetchCityAction方法用于数据请求
cityStore.fetchCityAction()
// 将cityStore对象中的allCityies解构赋值出来
const { allCityies } = storeToRefs(cityStore)

// 目的：获取选中标签后的数据
// 1.获取正确的key：将tabs中绑定的tabAction正确绑定
// 2.根据key从allCityies获取数据，默认直接获取的数据不是响应式的，所以必须包裹computed
const currentGroup = computed(()=> allCityies.value[tabActive.value])
</script>

<template>
    <!-- <div class="city hide"> -->
    <div class="city">
      <div class="top">
        <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置" 
        show-action
        shape="round"
        @cancel="cancelClick"
        />
        <van-tabs v-model:active="tabActive" color="#ff9854">
          <template v-for="(value,key) in allCityies" :key="key">
            <van-tab  :title="value.title" :name="key"></van-tab>
          </template> 
        </van-tabs>
      </div>
      <!-- 城市列表 -->
      <div class="content">
          <template v-for="(value,key) in allCityies" :key="key">
            <city-group-item v-show="tabActive === key" :group-data="value" />
          </template>
      </div>
    </div>
</template>
<style lang="scss" scoped>
// 搜索框中搜索图标颜色
// :deep(.van-field__left-icon){
//     color: #ff9853;
// }
.city {
  .top{
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>