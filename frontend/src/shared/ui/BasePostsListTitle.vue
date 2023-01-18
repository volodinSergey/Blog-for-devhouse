<template>
  <h2 class="posts-list-title">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'BasePostsListTitle',
}
</script>

<style lang="scss" scoped>
.posts-list-title {
  font-size: 1.5rem;

  margin-bottom: 1em;
}
</style>
