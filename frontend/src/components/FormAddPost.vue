<template>
  <form
    @submit.prevent="console.log('заглушка')"
    class="add-post-form"
  >
    <BaseTextField
      v-model="title"
      placeholder="Type post title"
    />
    <BaseTextField
      textareaMode
      v-model="body"
      placeholder="Type post title"
    />

    <BaseButton>Add post</BaseButton>
  </form>
</template>

<script>
export default {
  name: 'FormAddPost',

  data() {
    return {
      title: '',
      body: '',
      image: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.add-post-form {
  display: inline-flex;
  flex-direction: column;
  width: 200px;
}
</style>
