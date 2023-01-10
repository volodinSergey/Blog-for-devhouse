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
  },
}
</script>

<style lang="scss" scoped>
.comments-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #021b8924;
  padding: 5px;
  border-radius: 10px;
}
</style>
