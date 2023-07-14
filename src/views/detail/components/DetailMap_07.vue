<script setup>
import DetailSection from '@/components/DetailSection/DetailSection.vue';
import { onMounted,ref } from 'vue';
const props =  defineProps({
    position :{
        typeof: Object,
        default: () => ({})
    }
})
const mapRef = ref()
onMounted(()=> {
    const map = new BMapGL.Map(mapRef.value);// 创建地图实例 
    const point = new BMapGL.Point(props.position.longitude, props.position.latitude);// 创建点坐标 
    map.centerAndZoom(point, 15);// 初始化地图，设置中心点坐标和地图级别
    const marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);                     // 将标注添加到地图中
})
</script>

<template>
  <div class="detail-map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
        <div class="baidu" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<style lang="scss" scoped>
.detail-map{
    border: 5px solid #f2f3f4;
    .baidu {
        height: 215px;
    }
}

</style>
