<template>
  <div class="posts-actions">
    <input
      type="search"
      placeholder="What are you looking for ?..."
    />
  </div>
</template>

<script>
export default {
  name: 'PostsActions',
}
</script>

<style lang="scss" scoped>
.posts-actions {
  flex-basis: 50%;

  @media (max-width: 720px) {
    order: -1;
  }
}

input {
  background-color: #23243e;
  color: #fff;
  padding: 10px;
  border: 3px solid transparent;
  border-radius: 10px;
  transition: 0.3s;
  outline: none;
  width: 60%;

  &::placeholder {
    color: #fff;
  }
}
</style>
