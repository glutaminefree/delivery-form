<template lang="pug">
  .container
    .delivery-form.pt-5
      h1.delivery-form__title.title.is-1 Выберите способ доставки
      .delivery-form__content
        .tabs.mt-4
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
            .tabs__tab(:class="{'is-active': isDelivery}")
              a.tabs__tab-title(href="#" @click.prevent="setActiveTab('Доставка')") Доставка
              .tabs__tab-content
                form.form(@submit.prevent)
                  ui-form-item(:error=`
                    ($v.delivery.fullName.$dirty && !$v.delivery.fullName.required)
                      ? 'Обязательное поле'
                      : ''
                  `)
                    ui-input(
                      v-model="delivery.fullName"
                      placeholder="Петров Иван Валерьевич"
                      name="fullName"
                      @blur="$v.delivery.fullName.$touch"
                    )
                  ui-form-item(:error=`
                    ($v.delivery.phone.$dirty && !$v.delivery.phone.required)
                      ? 'Обязательное поле'
                      : ''
                  `)
                    ui-input(
                      v-model="delivery.phone"
                      name="phone"
                      mask="+7 (999) 999-99-99"
                      @blur="$v.delivery.phone.$touch"
                    )
                  ui-form-item(:error=`
                    ($v.delivery.address.$dirty && !$v.delivery.address.required)
                      ? 'Обязательное поле'
                      : ''
                  `)
                    ui-input(
                      v-model="delivery.address"
                      name="address"
                      placeholder="Город, улица, дом"
                      @blur="$v.delivery.address.$touch"
                    )
                  ui-form-item
                    ui-textarea(
                      v-model="delivery.comment"
                      name="comment"
                    )
                  .text-right.mt-3
                    ui-button.button(@click="sendForm") Отправить
            .tabs__tab(:class="{'is-active': isPickup}")
              a.tabs__tab-title(href="#" @click.prevent="setActiveTab('Самовывоз')") Самовывоз
              .tabs__tab-content
                span Dolor sit amet
</template>

<script>
import { validationMixin } from 'vuelidate';
import { requiredIf } from 'vuelidate/lib/validators';

// For demo purposes {
const apiEmul = {
  send() {
    return new Promise(resolve => setTimeout(() => { resolve({ status: 'success' }); }, 600));
  },
};
// }

export default {
  name: 'DeliveryForm',
  mixins: [validationMixin],
  data() {
    return {
      formTabs: ['Доставка', 'Самовывоз'],
      activeTab: 'Доставка',

      delivery: {
        fullName: '',
        phone: '',
        address: '',
        comment: '',
      },
      pickup: {
        address: '',
      },
    };
  },
  validations() {
    return {
      delivery: {
        fullName: { required: requiredIf(function() { return this.isDelivery; }) },
        phone: { required: requiredIf(function() { return this.isDelivery; }) },
        address: { required: requiredIf(function() { return this.isDelivery; }) },
        comment: {},
      },
      pickup: {
        address: { required: requiredIf(function() { return this.isPickup; }) },
      },
    };
  },
  computed: {
    isDelivery() {
      return this.activeTab === 'Доставка';
    },
    isPickup() {
      return this.activeTab === 'Самовывоз';
    },
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },

    async sendForm() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      }

      this.sending = true;

      try {
        const data = this.isDelivery ? this.delivery : this.pickup;
        const result = await apiEmul.send(data);

        if (!result || result.status !== 'success') {
          throw new Error('query error');
        }
      } catch (e) {
        console.log('form send error', e.message);
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
