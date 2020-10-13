<template lang="pug">
  .form-item(:class="classesList")
    .form-item__field
      slot
    fade-transition
      span.form-item__error(v-if="error" v-html="error")
</template>

<script>
export default {
  name: 'UiFormItem',
  props: {
    error: {
      type: String,
      default: '',
    },
  },
  computed: {
    classesList() {
      return [
        this.error ? 'is-error' : '',
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.form-item {
  & + & {
    margin-top: $offset * 1.5;
  }

  &__error {
    display: block;
    margin-top: $offset / 2;
    padding-left: $offset * 1.5;
    font-size: 14px;
    color: $color-error;
  }
}
</style>
