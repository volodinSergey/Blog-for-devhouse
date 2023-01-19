<template>
  <img
    v-if="fullAvatarUrl"
    class="avatar"
    :style="{ width: width + 'px' }"
    :src="fullAvatarUrl"
    alt="user avatar"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: 'BaseAvatar',

  props: {
    imagePath: {
      type: String,
    },

    width: {
      type: String,
    },
  },

  computed: {
    fullAvatarUrl() {
      const baseUrl = 'http://localhost:1337'
      if (this.imagePath) return `${baseUrl}${this.imagePath}`

      return require(`@/assets/no-avatar.jpg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  display: inline-block;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  user-select: none;
}
</style>
