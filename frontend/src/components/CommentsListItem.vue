<template>
  <li class="comment-item">
    <div class="comment-item__left-box">
      <router-link :to="{ name: 'userView', params: { id: authorId } }">
        <BaseAvatar
          :imagePath="avatar"
          width="45"
        />
      </router-link>
    </div>

    <div
      v-if="(isAuth && authorId === currentUserId) || isAdmin"
      class="comment-actions"
      :class="{ 'comment-actions--opened': areCommentActionsOpened }"
    >
      <button
        class="comment-actions__delete-comment-button"
        @click="onDeleteComment"
      >
        Delete
      </button>

      <button
        v-if="isAuth && authorId === currentUserId"
        @click="toggleEditCommentMode"
        class="comment-actions__edit-comment-button"
      >
        Edit
      </button>
    </div>

    <div class="comment-item__right-box">
      <div>
        <p class="comment-item__authorname">{{ authorname }}</p>

        <button
          v-if="isAuth && authorId === currentUserId"
          @click="toggleOpeningCommentActions"
          class="toggle-actions-button"
        >
          <div class="toggle-actions-button__item"></div>
          <div class="toggle-actions-button__item"></div>
          <div class="toggle-actions-button__item"></div>
        </button>

        <form
          @submit.prevent="onEdit"
          v-if="editMode"
        >
          <BaseTextField v-model.trim="commentBodyInEditMode" />
        </form>
        <p
          v-else
          class="comment-item__body"
        >
          {{ commentBody }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

import CommentsService from '@/services/commentsService/Comments.service'
import { getterTypes } from '@/store/modules/auth/auth.module.types'

export default {
  name: 'CommentsListItem',

  props: {
    commentId: {
      type: Number,
      required: true,
    },

    avatar: {
      type: String,
      required: false,
    },

    body: {
      type: String,
      required: true,
    },

    authorname: {
      type: String,
      required: true,
    },

    authorId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      commentBody: this.body,
      commentBodyInEditMode: '',
      editMode: false,
      areCommentActionsOpened: false,
    }
  },

  computed: {
    ...mapGetters({
      isAuth: getterTypes.isAuth,
      currentUserId: getterTypes.currentUserId,
      isAdmin: getterTypes.isAdmin,
    }),
  },

  methods: {
    async onDeleteComment() {
      await CommentsService.delete(this.commentId)

      this.$emit('comment-deleted')
    },

    async toggleEditCommentMode() {
      this.editMode = !this.editMode

      this.commentBodyInEditMode = this.commentBody
    },

    async onEdit() {
      const commentToEdit = {
        data: {
          body: this.commentBodyInEditMode,
        },
      }
      await CommentsService.edit(this.commentId, commentToEdit)

      this.commentBody = this.commentBodyInEditMode

      this.editMode = false
      this.areCommentActionsOpened = false
    },

    toggleOpeningCommentActions() {
      this.areCommentActionsOpened = !this.areCommentActionsOpened

      this.editMode = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/shared/styles/mixins';

.comment-item {
  position: relative;
  display: flex;
  gap: 10px;
  padding: 5px;
  max-width: 100%;

  &__body {
    font-size: adaptive(rem(14), rem(17));
    max-width: 100%;
    word-break: break-all;
  }

  &__authorname {
    margin-bottom: 5px;
  }

  &:not(:last-child) &__right-box {
    border-bottom: 1px solid #23243e;
  }

  &__right-box {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
  }
}

.toggle-actions-button {
  position: absolute;
  right: 15px;
  top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 25px;
  height: 20px;

  &__item {
    width: 6px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #fff;
  }
}

.comment-actions {
  position: absolute;
  right: 60px;
  display: none;
  max-width: max-content;
  border-radius: rem(5);
  background-color: #320e8b;
  color: #fff;
  z-index: 99;

  &--opened {
    display: flex;
  }

  & * {
    font-size: 17px;
    padding: 5px 10px;
    color: inherit;
    transition: 0.3s;

    &:first-child {
      border-top-left-radius: rem(5);
      border-top-right-radius: rem(5);
    }

    &:last-child {
      border-bottom-left-radius: rem(5);
      border-bottom-right-radius: rem(5);
    }

    @media (any-hover: hover) {
      &:hover {
        background-color: #3d13a7;
      }
    }
  }
}
</style>
