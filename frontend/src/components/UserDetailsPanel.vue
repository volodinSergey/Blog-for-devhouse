<template>
  <div class="user-details">
    <BaseAvatar
      :imagePath="avatar"
      width="100"
    />

    <h1 class="user-details__username">
      {{ this.username }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'UserDetailsPanel',

  props: {
    username: {
      type: String,
    },

    avatar: {
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.user-details {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 3rem;
  border: 1px solid #23243e;
  border-top: 0px;
  border-radius: 1rem;
  padding: 2rem;

  &__username::first-letter {
    text-transform: uppercase;
  }
}
</style>
