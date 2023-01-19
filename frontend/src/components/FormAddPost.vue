<template>
  <form
    class="add-post-form"
    @submit.prevent
  >
    <BaseTextField
      v-model.trim="title"
      placeholder="Type post title"
    />
    <BaseTextField
      textareaMode
      v-model.trim="body"
      placeholder="Type post body"
    />

    <div
      class="validations-errors"
      :class="{ 'validations-errors--active': areInvalidFields }"
    >
      Body must't be empty !
    </div>

    <BaseButton @click="triggerFilePicker">Choose image</BaseButton>

    <input
      ref="file"
      type="file"
      placeholder="file"
      @change.prevent="onSelectImage"
      accept="image/*"
      class="hidden-file-input"
    />

    <div
      v-if="selectedImage"
      class="add-post-form__image-preview"
    >
      <img
        :src="selectedImage"
        alt="post image preview"
      />
    </div>

    <BaseButton
      type="submit"
      @click="onCreatePost"
      >Add post</BaseButton
    >
  </form>
</template>

<script>
import PostsService from '@/services/postsService/Posts.service'
import MediaService from '@/services/mediaService/Media.service'

export default {
  name: 'FormAddPost',

  data() {
    return {
      title: '',
      body: '',
      selectedImage: null,
      imageToPost: null,

      areInvalidFields: false,
    }
  },

  methods: {
    async onSelectImage(e) {
      const selectedImageFromFileInput = e.target.files[0]

      this.selectedImage = selectedImageFromFileInput

      const formData = new FormData()

      formData.append('files', this.selectedImage)

      const uploadedImage = await MediaService.upload(formData)

      this.imageToPost = uploadedImage

      this.selectedImage = URL.createObjectURL(this.selectedImage)
    },

    triggerFilePicker() {
      this.$refs.file.click()
    },

    async onCreatePost() {
      if (!this.body) {
        this.areInvalidFields = true

        setTimeout(() => (this.areInvalidFields = false), 3000)

        return
      }

      const newPostData = {
        title: this.title,
        body: this.body,
        image: this?.imageToPost,
      }

      const createdPost = await PostsService.create(newPostData)

      this.$emit('post-created', createdPost)

      this.title = ''
      this.body = ''
      this.selectedImage = null
      this.imageToPost = null
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/shared/styles/mixins';

.add-post-form {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border: 1px solid #23243e;
  border-radius: 10px;
  padding: 15px;
  @media (min-width: 386px) {
    max-width: rem(400);
  }

  &__image-preview {
    background-color: #ffffff0f;
    width: clamp(100px, 10.42vw, 200px);
    border-radius: 1em;

    & img {
      width: 100%;
      border-radius: 1em;
    }
  }
}

.hidden-file-input {
  width: 0;
  height: 0;
}

.validations-errors {
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  color: rgb(241, 33, 33);

  &--active {
    animation: animate 1.5s 1 normal;

    @keyframes animate {
      from {
        max-height: 0;
        opacity: 0;
        visibility: hidden;
      }

      to {
        max-height: 100%;
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
