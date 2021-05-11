<template>
  <div class="appointment-form">
    <div class="row mb-5">
      <div class="col-12">
        <div class="appointment-form__title">
          Записаться
        </div>
      </div>
    </div>
    <div class="appointment-form__wrapper">
      <transition
        appear
        name="fade-in"
      >
        <div
          v-if="formIsSend"
          class="appointment-form__message"
        >
          <span>
            Сообщение успешно отправлено
          </span>
        </div>
      </transition>
      <div class="row mb-3">
        <div class="col-12">
          <RoInput
            :disabled="getIsPending"
            :value="getName"
            label="Имя"
            placeholder="Имя"
            @input="setName"
          />
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <RoTelInput
            :disabled="getIsPending"
            :value="getPhone"
            label="Номер телефона"
            mask="+# (###) ### ## ##"
            placeholder="+7 (___) ___ __ __"
            @input="setPhone"
          />
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <RoInput
            :disabled="getIsPending"
            :value="getBrand"
            label="Номер или марка машины"
            placeholder="Номер или марка машины"
            @input="setBrand"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 offset-md-6">
          <Button
            :disabled="submitIsDisabled"
            @click="sendMessageHandler"
          >
            Отправить
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { sleep } from '@/helpers/sleep';

import RoTelInput from '@/components/ro-tel-input/RoTelInput';
import RoInput from '@/components/ro-input/RoInput';
import Button from '@/components/button/Button';

const PHONE_MIN_LENGTH = 7;
const NAME_MIN_LENGTH = 3;

export default {
  name: 'appointment-form',
  components: {
    RoTelInput,
    RoInput,
    Button,
  },
  data: () => ({
    formIsSend: false,
  }),
  computed: {
    ...mapGetters('appointment', {
      getName: 'GET_NAME',
      getPhone: 'GET_PHONE',
      getBrand: 'GET_BRAND',
      getIsPending: 'GET_IS_PENDING',
    }),
    phoneIsEmpty() {
      const { getPhone } = this;
      return (getPhone || '').trim().length < PHONE_MIN_LENGTH;
    },
    nameIsEmpty() {
      const { getName } = this;
      return (getName || '').trim().length < NAME_MIN_LENGTH;
    },
    submitIsDisabled() {
      const { getIsPending, phoneIsEmpty, nameIsEmpty } = this;
      return getIsPending || (nameIsEmpty || phoneIsEmpty);
    },
  },
  methods: {
    ...mapActions('appointment', {
      setName: 'SET_NAME',
      setPhone: 'SET_PHONE',
      setBrand: 'SET_BRAND',
      sendMessage: 'SEND_MESSAGE',
    }),
    async sendMessageHandler() {
      const { success } = await this.sendMessage();
      if (success) {
        this.setName('');
        this.setPhone('');
        this.setBrand('');
        this.formIsSend = true;
        await sleep(5000);
        this.formIsSend = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.appointment-form {
  padding: 20px 40px;
  background: rgba($c2, 0.4);
  backdrop-filter: blur(5px);
  backface-visibility: hidden;
  transform: translateZ(0);
  perspective: 1px;
  border-radius: 12px;
  border: 1px solid rgba($c1, 0.15);
  text-shadow: -1px -1px 1px $c5;
  box-shadow: 0 0 15px $c5;
}
.appointment-form__title {
  text-align: center;
  font-size: 41px;
  line-height: 43px;
  color: $c1;
}
.appointment-form__wrapper {
  position: relative;
}
.appointment-form__message {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  flex-wrap: wrap;
  align-content: center;
  width: calc(100% + 30px);
  height: calc(100% + 30px);
  transform: translateY(-15px) translateX(-15px) translateZ(0);
  backdrop-filter: blur(5px);
  backface-visibility: hidden;
  perspective: 1px;
  background: rgba($c2, 0.8);
  border-radius: 10px;
  z-index: 1;
}
.appointment-form__message span {
  text-align: center;
  font-size: 55px;
  color: rgba($c1, 0.7);
}
</style>
