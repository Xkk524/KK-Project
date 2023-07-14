<script setup>
import HotHouseV3 from "@/components/HotHouseListV3/HotHouseV3.vue";
import HotHouseV9 from "@/components/HotHouseListV9/HotHouseV9.vue";
import { useHomeStore } from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const homeStore = useHomeStore()
const { hotHouseList } = storeToRefs(homeStore)
const router = useRouter()

const itemClick = (item) => {
    router.push(`/detail/${item.houseId}`)
}
</script>

<template>
    <div class="hot-house">
        <h2>热门精选</h2>
        <div class="list" >
            <template v-for="item in hotHouseList" :key="item.data.houseId">
                <hot-house-v9 
                    v-if="item.discoveryContentType === 9" 
                    :house-data="item.data"
                    @click="itemClick(item.data)"
                />
                <hot-house-v3 
                    v-else-if="item.discoveryContentType === 3" 
                    :item-data="item.data"
                    @click="itemClick(item.data)"
                />
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .hot-house {
        margin: 8px ;
        .list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
</style>