<template>
  <ul class="comments-list">
    <CommentsListItem
      v-for="comment in comments"
      :key="comment.id"
      :authorname="comment.author.username"
      :avatar="comment.author.avatar?.url"
      :body="comment.body"
    />
  </ul>
</template>

<script>
import CommentsListItem from '@/components/CommentsListItem.vue'
export default {
  name: 'CommentsList',

  components: {
    CommentsListItem,
  },

  props: {
    comments: {
      type: Array,
      required: false,
    },

    // commentsShowed: {
    //   type: Boolean,
    //   default: false,
    // },
  },
}
</script>

<style lang="scss" scoped>
.comments-list {
  display: flex;
  max-height: 100%;
  opacity: 1;
  overflow: hidden;
  transition: 0.22s;
  flex-direction: column;
  gap: 10px;
  background-color: #021b8924;
  padding: 5px;
  border-radius: 10px;

  &--showed {
    max-height: 100%;
    opacity: 1;
    overflow: visible;
  }
}
</style>
