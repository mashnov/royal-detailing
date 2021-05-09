<template>
  <div
    class="button"
    :class="disabled && 'button_disabled'"
    @click="!disabled && $emit('click')"
  >
    <span>
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};

</script>

<style lang="scss" scoped>
.button {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba($c1, 0.25);
  background: rgba($c1, 0.1);
  text-align: center;
  transition: background 0.15s $animation-easing;
  box-shadow: 0 0 15px $c5;
  cursor: pointer;
}
.button_disabled {
  opacity: 0.5;
}
.button:not(.button_disabled):hover {
  background: rgba($c1, 0.3);
}
.button span {
  text-transform: capitalize;
  font-size: 25px;
  line-height: 27px;
  color: $c1;
  transition: color 0.15s $animation-easing;
  text-shadow: -1px -1px 1px $c5;
}
.button_disabled {
  cursor: not-allowed;
}
</style>
