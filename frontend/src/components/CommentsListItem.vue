<template>
  <li class="comment-item">
    <div class="comment-item__left-box">
      <router-link :to="{ name: 'userView', params: { id: authorId } }">
        <img
          class="comment-item__avatar"
          :src="`http://localhost:1337${avatar}`"
          alt="comment author"
        />
      </router-link>
    </div>

    <div class="comment-item__right-box">
      <p class="comment-item__authorname">{{ authorname }}</p>

      <p class="comment-item__body">{{ body }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CommentsListItem',

  props: {
    avatar: {
      type: String,
      required: false,
    },

    body: {
      type: String,
      required: true,
    },

    authorname: {},

    authorId: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.comment-item {
  display: flex;
  gap: 10px;
  padding: 5px;

  &__avatar {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  &__body {
    font-size: 1.1rem;
  }

  &__authorname {
    margin-bottom: 5px;
  }

  &__right-box {
    border-bottom: 1px solid #23243e;
  }
}
</style>
