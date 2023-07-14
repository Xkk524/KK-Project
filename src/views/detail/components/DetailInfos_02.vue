<script setup>
import { ref } from "vue"

const props =  defineProps({
    detailInfos:{
        typeof: Array,
        default: () => []
    }
})
const houseTags = ref([])
houseTags.value = props.detailInfos.houseTags
</script>

<template>
    <div class="detail-infos">
        <div class="name">
            <h2>{{ detailInfos.houseName }}</h2>
        </div>
        <div class="tagtext">
           <template v-for="item in houseTags" :key="item.tagCode">
                <span 
                    class="text"
                    :style="{color: item?.tagText?.color,background: item?.tagText?.background?.color}"
                    >{{ item?.tagText?.text }}</span>
           </template>
        </div>
        <div class="comment">
            <div class="score">
                <span class="overall">{{ detailInfos.commentBrief.overall }}</span>
                <span class="score-title">{{ detailInfos.commentBrief.scoreTitle }}</span>
                <span class="brief">"{{ detailInfos.commentBrief.commentBrief }}"</span>
            </div>
            <div class="total">
                <span>
                    {{ detailInfos.commentBrief.totalCount }}条评论 
                    <van-icon name="arrow" />
                </span>
            </div>
        </div>
        <div class="position">
            <div class="address">{{ detailInfos.nearByPosition.address }}</div>
            <div class="right">
                地图·周边 
                <van-icon name="arrow" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.detail-infos {
    
    .name {
        // margin: 20px;
        padding: 15px;
    }
    .tagtext {
        margin-left: 15px;
        .text {
            margin-right: 8px;
            font-size: 12px;
        }
    }
    .comment {
        display: flex;
        padding: 0 12px;
        margin: 15px;
        background: #f2f0f0a3;
        height: 40px;
        text-align: center;
        line-height: 40px;
        justify-content: space-between;
        .score {
            .overall {
                font-size: 22px;
                font-weight: 600;
                padding-right: 4px;
            }
            .score-title {
                font-size: 14px;
                font-weight: 600;
                padding-right: 4px;
            }
            .brief {
                font-size: 13px;
                color: #666;
            }
        }
        .total {
            span {
                color: #FF9645;
                font-size: 12px;
            }
        }
    }
    .position {
        display: flex;
        padding: 0 12px;
        margin: 15px;
        background: #f2f0f0a3;
        height: 40px;
        text-align: center;
        line-height: 40px;
        justify-content: space-between;
        .address {
            font-weight: 600;
        }
        .right {
            font-size: 12px;
            color: #FF9645;
        }
    }
}
</style>