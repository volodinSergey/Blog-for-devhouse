<template>
  <button
    class="base-button"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
}
</script>

<style lang="scss" scoped>
.base-button {
  font-family: sans-serif;
  font-size: 1.3rem;
  background-color: #0016d9;
  padding: 6px;
  border: none;
  border-radius: 10px;
  transition: 0.2s;
  color: #fff;
}

.base-button:hover {
  opacity: 0.8;
}
</style>
