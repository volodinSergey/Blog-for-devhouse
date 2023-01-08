<template>
  <div class="user-details">
    <img
      class="user-details__avatar"
      v-if="fullAvatarUrl"
      :src="fullAvatarUrl"
      alt="user avatar"
    />
    <img
      class="user-details__avatar"
      v-else
      src="@/assets/no-avatar.jpg"
      alt="user avatar"
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

  computed: {
    fullAvatarUrl() {
      const baseUrl = 'http://localhost:1337'

      if (this.avatar) return `${baseUrl}${this.avatar}`

      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.user-details {
  margin-bottom: 3rem;
  border: 1px solid #23243e;
  border-top: 0px;
  border-radius: 1rem;
  padding: 2rem;

  &__avatar {
    display: grid;
    place-items: center;
    width: 100px;
    height: 100px;
    margin-bottom: 2rem;
    padding: 10px;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid #fcfcfc29;
  }

  &__username::first-letter {
    text-transform: uppercase;
  }
}
</style>
