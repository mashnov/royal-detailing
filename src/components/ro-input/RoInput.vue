<template>
  <div
    class="ro-input"
    :class="disabled && 'ro-input_disabled'"
  >
    <transition
      appear
      name="fade-in"
    >
      <div
        v-if="label && (isFocused || value)"
        class="ro-input__label"
      >
        {{ label }}
      </div>
    </transition>
    <label>
      <input
        type="text"
        :disabled="disabled"
        :value="value"
        :placeholder="placeholder"
        @focus="isFocused = true"
        @blur="isFocused = false"
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
      label: {
        default: '',
        validator: (prop) => ['string'].includes(typeof prop) || prop === null,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
      isFocused: false,
    }),
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
    position: relative;
    display: block;
    width: 100%;
    border-radius: 8px;
    border: 1px solid rgba($c1, 0.2);
    box-shadow: inset 0 0 15px $c5;
    backdrop-filter: blur(5px);
    backface-visibility: hidden;
    transform: translateZ(0);
    perspective: 1px;
    padding: 15px;
  }
  .ro-input_disabled {
    cursor: not-allowed;
  }
  .ro-input__label {
    position: absolute;
    border-radius: 8px;
    background-color: $c2;
    border: 1px solid rgba($c1, 0.2);
    box-shadow: inset 0 0 15px $c5;
    padding: 2px 10px;
    font-size: 15px;
    color: rgba($c1, 0.6);
    top: -13px;
    left: 10px;
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
    user-select: all;
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
