import { helpers } from 'vuelidate/lib/validators';

export default (needLength) => {
  return helpers.withParams(
    { type: 'maskedLength', param: needLength },
    value => !helpers.req(value) || (value && value.replace('_', '').length === needLength),
  );
};
