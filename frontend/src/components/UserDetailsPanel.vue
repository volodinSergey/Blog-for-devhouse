<template>
  <div class="user-details">
    <div class="user-details__avatar">
      <img
        v-if="fullAvatarUrl"
        :src="fullAvatarUrl"
        alt="user avatar"
      />
      <img
        v-else
        src="@/assets/no-avatar.jpg"
        alt="user avatar"
      />
    </div>
    <h1 class="user-details__username">{{ this.username }}</h1>
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
  &__avatar {
    display: grid;
    place-items: center;
    width: 100px;
    aspect-ratio: 1;
    margin-bottom: 2rem;
    padding: 10px;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid #fcfcfc29;

    & img {
      width: 100%;
      border-radius: 50%;
    }
  }

  &__username::first-letter {
    text-transform: uppercase;
  }
}
</style>
