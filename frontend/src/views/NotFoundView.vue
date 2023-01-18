<template>
  <section class="not-found">
    <div class="container">
      <h1 class="not-found__title">OOPS, PAGE NOT FOUND</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFoundView',
}
</script>

<style lang="scss" scoped>
.not-found__title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
}
</style>
