<template lang="pug">
  button.button(:class="classesList" @click="$emit('click')")
    ui-loading.button__loading(v-if="loading")
    slot
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    loading: Boolean,
  },
  computed: {
    classesList() {
      return [
        this.loading ? 'is-loading' : '',
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  $this: &;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 $offsetX5;
  background-color: $color-hover;
  border: none;
  border-radius: $border-radius-big;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: $font-weight-normal;
  color: $color-white;
  cursor: pointer;
  transition-duration: $transition-duration;
  transition-property: background-color, color;

  &:hover {
    background-color: #0081bc;
  }
  &:active {
    background-color: #015d87;
  }
  &:disabled {
    background-color: $color-disabled;
    color: $color-gray-dark;
    cursor: not-allowed;
  }

  &.is-loading {
    position: relative;
    color: transparent !important;

    #{$this}__loading {
      position: absolute;
      color: $color-white;
    }
  }
}
</style>
