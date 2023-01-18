<template>
  <div class="select">
    <p
      @click="toggleIsOpened"
      class="select__selected"
    >
      {{ selectedOption || 'Choose from list' }}
    </p>

    <ul
      v-if="isOpened"
      class="select__options-list options-list"
      :class="{ 'options-list--opened': isOpened }"
    >
      <li
        class="options-list__option"
        v-for="option in options"
        :key="option.value"
        @click="onSelectOption(option)"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',

  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      selectedOption: '',
      isOpened: false,
    }
  },

  methods: {
    toggleIsOpened() {
      this.isOpened = !this.isOpened
    },

    onSelectOption(selectedOption) {
      this.selectedOption = selectedOption.name

      this.$emit('option-selected', selectedOption.value)

      this.isOpened = false
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 200px;

  &__selected {
    text-align: center;
    padding: 0.5em;
    margin-bottom: 1rem;
    cursor: pointer;
    border: 1px solid #23243e;
    border-radius: 0.4rem;
  }
}

.options-list {
  position: absolute;
  top: 40px;
  display: block;
  flex-direction: column;
  border: 1px solid #23243e;
  border-radius: 0.4rem;
  background-color: #8267b50a;
  width: 100%;
  transition: all 0.7s;

  &__option {
    padding: 0.5em;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
    transition: 0.2s;

    &:first-child {
      border-top-left-radius: 0.4rem;
      border-top-right-radius: 0.4rem;
    }

    &:last-child {
      border-bottom-left-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;
    }

    @media (any-hover: hover) {
      &:hover {
        background-color: #230042;
      }
    }
  }
}
</style>
