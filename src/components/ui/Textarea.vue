<template lang="pug">
  .textarea
    textarea.textarea__field(
      ref="field"
      v-model="localValue"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="updateValue"
      @blur="$emit('blur')"
    )
</template>

<script>
import mixinInput from './mixins/input';

export default {
  name: 'UiTextarea',
  mixins: [mixinInput],
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/parts/input.scss';

.textarea {
  @include input;

  &__field {
    height: 160px;
    padding-top: $offsetX2;
    padding-bottom: $offsetX2;
  }
}
</style>
