import { FadeTransition } from 'vue2-transitions';
import FormItem from '@/components/ui/FormItem.vue';
import Input from '@/components/ui/Input.vue';
import Textarea from '@/components/ui/Textarea.vue';
import Button from '@/components/ui/Button.vue';
import Radio from '@/components/ui/Radio.vue';
import Loading from '@/components/ui/Loading.vue';

export default (Vue) => {
  Vue.component(FadeTransition.name, FadeTransition);
  Vue.component(FormItem.name, FormItem);
  Vue.component(Input.name, Input);
  Vue.component(Textarea.name, Textarea);
  Vue.component(Button.name, Button);
  Vue.component(Radio.name, Radio);
  Vue.component(Loading.name, Loading);
};
