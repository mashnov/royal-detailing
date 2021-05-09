<template>
  <div
    class="ro-input"
    :class="disabled && 'ro-input_disabled'"
  >
    <label>
      <input
        type="text"
        :disabled="disabled"
        :value="value"
        :placeholder="placeholder"
        @keypress.enter="eventHandler('enter-press')"
        @input="eventHandler('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
  export default {
    name: 'RoInput',
    props: {
      value: {
        default: '',
        required: true,
        validator: (prop) => ['string'].includes(typeof prop) || prop === null,
      },
      placeholder: {
        default: '',
        validator: (prop) => ['string'].includes(typeof prop) || prop === null,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      eventHandler(eventName, $event) {
        const { disabled } = this;
        if (!disabled) {
          this.$emit(eventName, $event);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .ro-input {
    display: block;
    width: 100%;
    border-radius: 8px;
    border: 1px solid rgba($c1, 0.2);
    box-shadow: inset 0 0 15px $c5;
    backdrop-filter: blur(20px);
    padding: 15px;
  }
  .ro-input_disabled {
    cursor: not-allowed;
  }
  .ro-input label {
    display: block;
    width: 100%;
  }
  .ro-input label input {
    font-family: 'Caveat', cursive;
    display: block;
    width: 100%;
    font-size: 21px;
    color: rgba($c1, 0.6);
    border: none;
    appearance: none;
    background-color: transparent;
  }
  .ro-input input::-webkit-input-placeholder {
    font-family: 'Caveat', cursive;
    font-size: 21px;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: rgba($c1, 0.6);
    transition: text-indent 0.3s $animation-easing, 0.15s $animation-easing;
  }
  .ro-input input::-moz-placeholder {
    font-family: 'Caveat', cursive;
    font-size: 21px;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: rgba($c1, 0.6);
    transition: text-indent 0.3s $animation-easing, opacity 0.15s $animation-easing;
  }
  .ro-input input:-moz-placeholder {
    font-family: 'Caveat', cursive;
    font-size: 21px;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: rgba($c1, 0.6);
    transition: text-indent 0.3s $animation-easing, opacity 0.15s $animation-easing;
  }
  .ro-input input:-ms-input-placeholder {
    font-family: 'Caveat', cursive;
    font-size: 21px;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: rgba($c1, 0.6);
    transition: text-indent 0.3s $animation-easing, opacity 0.15s $animation-easing;
  }
  .ro-input input:focus::-webkit-input-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent 0.3s $animation-easing, opacity 0.15s $animation-easing;
  }
  .ro-input input:focus::-moz-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent 0.3s $animation-easing, opacity 0.15s $animation-easing;
  }
  .ro-input input:focus:-moz-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent 0.3s $animation-easing, opacity 0.15s $animation-easing;
  }
  .ro-input input:focus:-ms-input-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent 0.3s $animation-easing, opacity 0.15s $animation-easing;
  }
</style>
