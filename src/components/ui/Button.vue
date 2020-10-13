<template lang="pug">
  component.button(:class="classesList" @click="$emit('click')")
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
  height: 32px;
  padding: 0 $offsetX2;
  border: none;
  border-radius: $border-radius;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: $font-weight-normal;
  color: $color-white;
  cursor: pointer;
  transition-duration: $transition-duration;
  transition-property: opacity, color, background-color;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &.is-loading {
    color: transparent !important;

    #{$this}__loading {
      // position: absolute;
      color: $color-white;
    }
  }
}
</style>
