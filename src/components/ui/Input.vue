<template lang="pug">
  .input
    input.input__field(
      ref="field"
      v-model="localValue"
      :name="name"
      :type="type"
      :placeholder="placeholderVal"
      :disabled="disabled"
      :readonly="readonly"
      @input="updateValue"
      @keypress.enter="onEnterPress"
      @blur="$emit('blur')"
    )
</template>

<script>
import Inputmask from 'inputmask';
import mixinInput from './mixins/input';

export default {
  name: 'UiInput',
  mixins: [mixinInput],
  props: {
    type: {
      type: String,
      default: 'text',
    },
    mask: {
      type: String,
      default: '',
    },
  },
  computed: {
    placeholderVal() {
      return this.placeholder
        ? this.placeholder
        : this.mask ? this.mask : '';
    },
  },
  mounted() {
    this.mayBeSetMask();
  },
  methods: {
    mayBeSetMask() {
      if (!this.mask) {
        return false;
      }

      this.setMask();
    },
    setMask() {
      Inputmask({
        mask: this.mask,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      }).mask(this.$refs.field);
    },
    unsetMask() {
      if (this.$refs.field.inputmask) {
        this.$refs.field.inputmask.remove();
      }
    },

    onEnterPress() {
      this.$emit('enterPress');
      this.updateValue();
    },
  },
  watch: {
    mask() {
      this.unsetMask();
      this.mayBeSetMask();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/parts/input.scss';

.input {
  @include input;
}
</style>
