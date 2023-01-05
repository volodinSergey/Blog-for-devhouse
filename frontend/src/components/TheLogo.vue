<template>
  <div class="logo-box">
    <router-link
      class="logo-box__logo"
      :to="{}"
      >Logotype
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TheLogo',
}
</script>

<style lang="scss" scoped>
$logo-color: #fff;
$font-size: 1.3rem;
.logo-box {
  display: inline-block;

  &__logo {
    font-family: sans-serif;
    font-size: $font-size;
    color: $logo-color;
  }
}
</style>
