<template>
  <form
    @submit.prevent=""
    class="add-post-form"
  >
    <BaseTextField
      v-model="title"
      placeholder="Type post title"
    />
    <BaseTextField
      textareaMode
      v-model="body"
      placeholder="Type post body"
    />

    <BaseButton @click="filePick">Choose image</BaseButton>

    <input
      ref="file"
      type="file"
      placeholder="file"
      @change="onSelectImage"
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

    <BaseButton @click="onCreatePost">Add post</BaseButton>
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
    }
  },

  methods: {
    async onSelectImage(e) {
      const selectedImageFromFileInput = e.target.files[0]

      this.selectedImage = selectedImageFromFileInput

      const formData = new FormData()

      formData.append('files', this.selectedImage)

      const data = await MediaService.upload(formData)

      this.imageToPost = data[0]

      this.selectedImage = URL.createObjectURL(this.selectedImage)
    },

    filePick() {
      this.$refs.file.click()
    },

    async onCreatePost() {
      const newPostData = {
        title: this.title,
        body: this.body,
        image: this?.imageToPost,
      }

      await PostsService.create(newPostData)

      //  this.$router.push({ name: 'postsView' })
      this.$router.go()
    },
  },
}
</script>

<style lang="scss" scoped>
.add-post-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 0.5rem;
  margin-bottom: 2rem;

  @media (max-with: 386px) {
    width: 100%;
  }

  &__image-preview {
    background-color: #ffffff0f;
    width: 200px;
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
</style>
