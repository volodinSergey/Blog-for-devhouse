<template>
  <button
    class="like-button"
    @click="onClickLike"
  >
    <div class="like-button__inner">
      <svg
        class="like-button__icon"
        :class="{ 'like-button__icon--liked': liked }"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 122.88 107.41"
        style="enable-background: new 0 0 122.88 107.41"
        xml:space="preserve"
      >
        <g>
          <path
            class="st0"
            d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"
          />
        </g>
      </svg>

      <span class="like-button__likes-counter">{{ likesCount }}</span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'PostLikeButton',

  props: {
    likesCount: {
      type: Number,
      required: true,
    },

    postId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      liked: false,
    }
  },

  methods: {
    onClickLike() {
      if (this.liked) {
        this.liked = false

        return
      }

      this.liked = true
    },
  },
}
</script>

<style lang="scss" scoped>
.like-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  border: 1px solid #fff;
  border: none;
  padding: 7px 10px;
  border-radius: 21px;
  transition: 0.2s;
  user-select: none;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  &__icon {
    fill: #fff;
    stroke: #fff;
    width: 1.3rem;
    aspect-ratio: 1;
    transition: 0.2s;

    &--liked {
      fill: red;
    }
  }

  &__likes-counter {
    color: #fff;
    font-size: 1.2rem;
  }
}
</style>
