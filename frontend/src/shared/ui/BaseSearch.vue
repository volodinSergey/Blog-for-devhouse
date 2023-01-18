<template>
  <input
    :value="value"
    class="search"
    type="search"
    :placeholder="placeholder"
    @input="emitInputValue"
  />
</template>

<script>
export default {
  name: 'BaseSearch',

  props: {
    value: {
      type: String,
    },

    placeholder: {
      type: String,
      default: 'Search',
    },
  },

  methods: {
    emitInputValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  background-color: #23243e;
  color: #fff;
  padding: 8px;
  border: 3px solid transparent;
  border-radius: 10px;
  transition: 0.3s;
  outline: none;
}

input:focus {
  border: 3px solid #0016d9;
}

input::placeholder {
  color: #9ca0d2;
}

input[type='text']::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type='text']::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}
</style>
