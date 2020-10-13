<template lang="pug">
  label.radio
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

  display: inline-flex;
  align-items: center;
  cursor: pointer;

  & + & {
    margin-top: $offset;
  }

  &__field {
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

      & + #{$this}__label {
        position: relative;

        &:before {
          content: '';
          position: absolute;
          left: -22px;
          top: 6px;
          width: 5px;
          height: 5px;
          background-color: $color-hover;
          border-radius: 50%;
        }
      }
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
}
</style>
