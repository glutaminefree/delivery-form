<template lang="pug">
  .form-item(:class="classesList")
    label.form-item__label(v-if="label" v-html="label")
    .form-item__field
      slot
    fade-transition
      span.form-item__error(v-if="error" v-html="error")
</template>

<script>
export default {
  name: 'UiFormItem',
  props: {
    label: {
      type: String,
      default: '',
    },
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

  &__label {
    display: block;
    margin-bottom: $offset;
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
