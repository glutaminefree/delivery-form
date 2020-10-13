export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    readonly: Boolean,
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  methods: {
    updateValue({ newLocalValue = null } = {}) {
      if (newLocalValue !== null) {
        this.localValue = newLocalValue;
      }

      this.$emit('input', this.localValue);
    },
  },
  watch: {
    value(newValue) {
      this.localValue = newValue;
    },
  },
};
