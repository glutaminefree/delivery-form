<template lang="pug">
  .loading
    .loading__item
    .loading__item
    .loading__item
    .loading__item
</template>

<script>
export default {
  name: 'UiLoading',
};
</script>

<style lang="scss" scoped>
.loading {
  display: inline-block;
  position: relative;
  width: 26px;
  height: 26px;

  &__item {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 22px;
    height: 22px;
    margin: 2px;
    border: 2px solid $color-white;
    border-radius: 50%;
    animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: $color-white transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}
@keyframes loading {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
