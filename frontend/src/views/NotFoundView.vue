<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__box">
        <h1 class="not-found__title">OOPS, PAGE NOT FOUND</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFoundView',
}
</script>

<style lang="scss" scoped>
@import '@/shared/styles/mixins.scss';

.not-found__box {
  display: grid;
  padding-top: 20%;
  place-items: center;
}

.not-found__title {
  font-size: adaptive(rem(20), rem(50));
}
</style>
