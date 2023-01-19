<template>
  <textarea
    v-if="textareaMode"
    class="base-textfield textarea"
    :value="value"
    :placeholder="placeholder"
    @input="emitInputValue"
  ></textarea>

  <input
    v-else
    class="base-textfield"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    @input="emitInputValue"
  />
</template>

<script>
export default {
  name: 'BaseTextField',

  props: {
    type: {
      type: String,
      default: 'text',
    },

    textareaMode: {
      type: Boolean,
      default: false,
    },

    value: {
      type: [String, Number],
      default: '',
    },

    name: {
      type: String,
    },

    label: {
      type: String,
    },

    placeholder: {
      type: String,
      default: '',
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
.base-textfield {
  background-color: #23243e;
  color: #fff;
  padding: 5px;
  border: 3px solid transparent;
  border-radius: 10px;
  transition: 0.3s;
  outline: none;

  &:focus {
    border: 3px solid #0016d9;
  }

  &::placeholder {
    color: #9ca0d2;
  }
}

.textarea {
  resize: none;
  height: 100px;
  max-height: 100px;
}
</style>
