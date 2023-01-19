<template>
  <div class="logo-box">
    <router-link
      class="logo-box__logo"
      :to="{ name: 'postsView' }"
    >
      Logotype
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BaseLogo',
}
</script>

<style lang="scss" scoped>
@import '@/shared/styles/mixins.scss';

$color: #fff;
$font-size: adaptive(rem(13), rem(20));
.logo-box {
  display: inline-block;
  margin-right: 20px;

  &__logo {
    font-family: sans-serif;
    font-size: $font-size;
    color: $color;
  }
}
</style>
