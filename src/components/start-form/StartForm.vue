<template>
  <div class="start-form">
    <div class="row mb-5">
      <div class="col-12">
        <div class="start-form__title">
          Записаться
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <RoInput
          :disabled="getIsPending"
          :value="getName"
          placeholder="Имя (обязательно)"
          @input="setName"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <RoInput
          :disabled="getIsPending"
          :value="getBrand"
          placeholder="Номер или марка машины"
          @input="setBrand"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <RoTelInput
          :disabled="getIsPending"
          :value="getPhone"
          mask="+7 (###) ### ## ##"
          placeholder="Номер телефона (обязательно)"
          @input="setPhone"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 offset-md-6">
        <Button
          :disabled="submitIsDisabled"
          @click="sendMessage"
        >
          Отправить
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import RoTelInput from '@/components/ro-tel-input/RoTelInput';
import RoInput from '@/components/ro-input/RoInput';
import Button from '@/components/button/Button';

const PHONE_MIN_LENGTH = 7;
const NAME_MIN_LENGTH = 3;

export default {
  name: 'StartForm',
  components: {
    RoTelInput,
    RoInput,
    Button,
  },
  computed: {
    ...mapGetters('reception', {
      getName: 'GET_NAME',
      getPhone: 'GET_PHONE',
      getBrand: 'GET_BRAND',
      getIsPending: 'GET_IS_PENDING',
    }),
    phoneIsEmpty() {
      const { getPhone } = this;
      return (getPhone || '').trim().length > PHONE_MIN_LENGTH;
    },
    nameIsEmpty() {
      const { getName } = this;
      return (getName || '').trim().length > NAME_MIN_LENGTH;
    },
    submitIsDisabled() {
      const { getIsPending, phoneIsEmpty, nameIsEmpty } = this;
      return getIsPending || (nameIsEmpty || phoneIsEmpty);
    },
  },
  methods: {
    ...mapActions('reception', {
      setName: 'SET_NAME',
      setPhone: 'SET_PHONE',
      setBrand: 'SET_BRAND',
      sendMessage: 'SEND_MESSAGE',
    }),
  },
};

</script>

<style lang="scss" scoped>
.start-form {
  padding: 40px;
  background: rgba($c2, 0.4);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba($c1, 0.15);
  text-shadow: -1px -1px 1px $c5;
  box-shadow: 0 0 15px $c5;
}
.start-form__title {
  text-align: center;
  font-size: 41px;
  line-height: 43px;
  color: $c1;
}
</style>
