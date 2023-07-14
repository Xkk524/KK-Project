<script setup>
import DetailSection from '@/components/DetailSection/DetailSection.vue';
defineProps({
    introduction: {
        typeof: Object,
        default: () => ({})
    }
})
</script>

<template>
  <div class="price-infos">
    <detail-section>
      <div class="title">{{ introduction.title }}</div>
      <div class="introduction">
        {{ introduction.introduction }}
      </div>
    </detail-section>
  </div>
</template>

<style lang="scss" scoped>
.price-infos {

  .title {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .introduction {
    font-size: 12px;
    line-height: 17px;
    text-align: justify;
    color: #333;
  }
}
</style>
