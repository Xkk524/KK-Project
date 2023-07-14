<script setup>
  import { useRoute } from 'vue-router';
  import TabBar from '@/components/tabbar/TabBar.vue'
  import Loading from './components/Loading/Loading.vue';

  const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view/>
    <tab-bar v-if="!route.meta.hideTabbar"/>
    <loading/>
    <!-- <tab-bar/> -->
  </div>
  
</template>

<style scoped>

</style>
