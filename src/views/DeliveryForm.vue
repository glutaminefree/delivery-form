<template lang="pug">
  .container
    .delivery-form
      h1.delivery-form__title.title.is-1 Выберите способ доставки
      .delivery-form__content
        .tabs
          .tabs__header
            a.tabs__link(
              v-for="tab in formTabs"
              :key="`tab-${tab}`"
              :class="{'is-active': tab === activeTab}"
              href="#"
              @click.prevent="setActiveTab(tab)"
            )
              span.tabs__link-text {{ tab }}
          .tabs__body
            .tabs__tab(:class="{'is-active': activeTab === 'Доставка'}")
              a.tabs__tab-title(href="#" @click.prevent="setActiveTab('Доставка')") Доставка
              .tabs__tab-content
                span Lorem ipsum
            .tabs__tab(:class="{'is-active': activeTab === 'Самовывоз'}")
              a.tabs__tab-title(href="#" @click.prevent="setActiveTab('Самовывоз')") Самовывоз
              .tabs__tab-content
                span Dolor sit amet
</template>

<script>
export default {
  name: 'DeliveryForm',
  data() {
    return {
      formTabs: ['Доставка', 'Самовывоз'],
      activeTab: 'Доставка',
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style lang="scss" scoped>
.delivery-form {
  padding-top: $offsetX5;
}
.tabs {
  margin-top: $offsetX4;
}
</style>
