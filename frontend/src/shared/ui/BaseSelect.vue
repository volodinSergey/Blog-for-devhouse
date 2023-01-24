<template>
  <div class="select">
    <p
      @click="toggleIsOpened"
      class="select__title"
    >
      Sort by: {{ selectedOption }}
    </p>

    <ul
      v-if="isOpened"
      class="select__options-list options-list"
      :class="{ 'options-list--opened': isOpened }"
    >
      <li
        class="options-list__option"
        :class="{ 'options-list__option--selected': selectedOption === option.name }"
        v-for="option in options"
        :key="option.value"
        :value="option.value"
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
@import '@/shared/styles/mixins.scss';

$font-size-base: rem(20);

$color-border: #23243e;
$bgColor-options-list: rgb(47 28 82);
$bgColor-title: #8267b50a;
$color-active-option: #230042;

.select {
  position: relative;
  width: rem(200);

  &__title {
    font-size: $font-size-base;
    text-align: center;
    padding: em(10, 20);
    margin-bottom: em(20, 20);
    cursor: pointer;
    border: rem(1) solid $color-border;
    background-color: $bgColor-title;
    border-radius: em(3, 20);
  }
}

.options-list {
  font-size: $font-size-base;
  position: absolute;
  top: rem(50);
  display: block;
  flex-direction: column;
  border: 1px solid $color-border;
  border-radius: em(5, 20);
  background-color: $bgColor-options-list;
  width: 100%;
  transition: all 0.7s;

  &__option {
    padding: em(8, 20);
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
    transition: 0.2s;

    &--selected {
      background-color: $color-active-option;
    }

    &:first-child {
      border-top-left-radius: em(5, 20);
      border-top-right-radius: em(5, 20);
    }

    &:last-child {
      border-bottom-left-radius: em(5, 20);
      border-bottom-right-radius: em(5, 20);
    }

    @media (any-hover: hover) {
      &:hover {
        background-color: $color-active-option;
      }
    }
  }
}
</style>
