<template lang="pug">
  label.radio
    i.radio__dot(:class="{'is-visible': checked}")
    input.radio__field(
      type="radio"
      v-model="localValue"
      :value="option"
      :checked="checked"
      :disabled="disabled"
      @change="updateValue"
    )
    span.radio__label {{ label }}
</template>

<script>
import mixinInput from './mixins/input';

export default {
  name: 'UiRadio',
  mixins: [mixinInput],
  props: {
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    option: {
      type: [String, Number, Boolean],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    checked() {
      return this.localValue === this.option;
    },
  },
};
</script>

<style lang="scss" scoped>
.radio {
  $this: &;

  position: relative;
  display: flex;
  align-items: flex-start;
  cursor: pointer;

  & + & {
    margin-top: $offset;
  }

  &__dot {
    position: absolute;
    left: 9px;
    top: 9px;
    width: 5px;
    height: 5px;
    background-color: $color-hover;
    border-radius: 50%;
    opacity: 0;
    transition: opacity $transition-duration;

    &.is-visible {
      opacity: 1;
    }
  }
  &__field {
    flex-shrink: 0;
    appearance: none;
    width: 23px;
    height: 23px;
    margin-right: $offset;
    background-color: $color-white;
    border: $border;
    border-radius: 50%;
    transition-duration: $transition-duration;
    transition-property: border-color;

    &:checked {
      border-color: $color-hover;
    }
    &:disabled {
      background-color: $color-disabled;
      cursor: not-allowed;

      & + #{$this}__label {
        color: $color-disabled-text;
      }
    }
  }
  &__label {
    font-size: 14px;
    transition: color $transition-duration;
  }

  &:hover {
    #{$this}__field {
      &:not(:disabled) {
        border-color: $color-hover;

        & + #{$this}__label {
          color: $color-hover;
        }
      }
    }
  }
  #{$this}__field {
    &:focus {
      &:not(:disabled) {
        border-color: $color-hover;
        outline: none;
      }
    }
  }


  @media (min-width: $bp-desktop) {
    display: inline-flex;

    & + & {
      margin-top: 0;
      margin-left: $offsetX4;
    }
  }
}
</style>
