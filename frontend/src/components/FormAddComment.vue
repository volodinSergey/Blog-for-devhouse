<template>
  <form class="add-comment-form">
    <BaseTextField
      v-model.trim="commentBody"
      placeholder="Add your comment"
    />

    <button
      type="submit"
      @click.prevent="onAddComment"
      class="add-comment-form__button"
      :disabled="isCommentExists"
    >
      <svg
        class="add-comment-form__button-icon"
        width="64px"
        height="64px"
        viewBox="-2.4 -2.4 28.80 28.80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#af7474"
      >
        <g
          id="SVGRepo_bgCarrier"
          stroke-width="0"
        />

        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="#CCCCCC"
          stroke-width="0.144"
        />

        <g id="SVGRepo_iconCarrier">
          <g id="style=linear">
            <g id="email">
              <path
                id="vector"
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                stroke="#242bff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="vector_2"
                d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
                stroke="#242bff"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
  </form>
</template>

<script>
import CommentsService from '@/services/commentsService/Comments.service'

export default {
  name: 'FormAddComment',

  props: {
    postId: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      commentBody: '',
    }
  },

  computed: {
    isCommentExists() {
      return this.commentBody.length > 0 ? false : true
    },
  },

  methods: {
    async onAddComment() {
      const newCommentData = {
        data: {
          postId: this.postId,
          body: this.commentBody,
        },
      }

      const createdComment = await CommentsService.create(newCommentData)

      this.$emit('comment-added', createdComment)

      this.commentBody = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.add-comment-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
  border: 1px solid #23243e;
  border-radius: 10px;
  gap: 1rem;
  margin-top: 1rem;
}

.add-comment-form__button {
  background-color: transparent;
  border: none;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
  }

  @media (any-hover: hover) {
    &:hover {
      background-color: #4626ff21;
    }
  }

  &-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
