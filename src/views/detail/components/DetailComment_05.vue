<script setup>
import DetailSection from '@/components/DetailSection/DetailSection.vue';
defineProps({
  commentData:{
    typeof: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="hot-comment">
    <detail-section title="热门评论" :more-text="`查看全部${commentData.totalCount}条评论`">
      <div class="comment-top">
        <div class="left">
          <div class="overall">
            {{ commentData.overall }}
          </div>
          <div class="score">
            <div class="score-top">{{ commentData.scoreTitle }}</div>
            <div class="score-center">{{ commentData.totalCount }}条评论</div>
            <div class="rate">
              <van-rate 
                :model-value="commentData.overall"
                allow-half
                readonly
                size="12"
                color="#FF9645"
              />
            </div>
          </div>
        </div>
        <div class="right">
          <template v-for="(item,index) in commentData.subScores" :key="index">
            <span>{{ item }}</span>
          </template>
        </div>
      </div>
      <div class="comment-center">
        <template v-for="(data,indey) in commentData.commentTagVo" :key="indey">
          <span :style="{color: data.color ,background: data.backgroundColor}">{{ data.text }}</span>
        </template>
      </div>
      <div class="comment-bottom">
        <div class="comment-infos">
          <div class="avatars">
            <img :src="commentData.comment.userAvatars" alt="">
          </div>
          <div class="name">
            <div class="username">{{ commentData.comment.userName }}</div>
            <div class="date">{{ commentData.comment.checkInDate }}</div>
          </div>
        </div>
        <div class="comment-detail">
          {{ commentData.comment.commentDetail }}
        </div>
      </div>
    </detail-section>
  </div>
</template>

<style lang="scss" scoped>
.hot-comment {
  border: 5px solid #f2f3f4;
  .comment-top {
    display: flex;
    margin-bottom: 15px;
    .left {
      display: flex;
      align-items: center;
      .overall {
        font-size: 43px;
        font-weight: 600;
        margin-right: 8px;
      }
      .score {
        .score-top {
          font-weight: 600;
        }
        .score-center {
          font-size: 12px;
          color: #999;
        }
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      span {
        margin-right: 5px;
        font-size: 12px;
      }
    }
  }
  .comment-center {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    span {
      margin: 0 15px 10px 0;
    }
  }
  .comment-bottom {
    .comment-infos {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      .avatars {
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 8px;
        }
      }
      .name {
        .date {
          font-size: 13px;
          color: #999;
        }
      }
    }
    .comment-detail {
      font-size: 13px;
      line-height: 20px;
    }
  }
}
</style>
