<template lang="pug">
  #app
    delivery-form
</template>

<script>
import DeliveryForm from '@/views/DeliveryForm.vue';

export default {
  name: 'App',
  components: {
    DeliveryForm,
  },
};
</script>

<style lang="scss" src="@/assets/scss/global.scss"></style>
