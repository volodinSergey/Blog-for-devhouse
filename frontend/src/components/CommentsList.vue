<template>
  <ul class="comments-list">
    <CommentsListItem
      v-for="(comment, index) in comments"
      :key="comment.id"
      :commentId="comment.id"
      :authorname="comment.author.name"
      :authorId="comment.author.id"
      :avatar="comment.author?.avatar"
      :body="comment.body"
      @comment-deleted="commentDeleted(index)"
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
      required: true,
    },
  },

  methods: {
    commentDeleted(index) {
      this.$emit('comment-deleted', index)
    },
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
  border-radius: 10px;

  &--showed {
    max-height: 100%;
    opacity: 1;
    overflow: visible;
    padding: 5px;
  }
}
</style>
