<template>
  <div class="logo">
    <LogoIcon />
  </div>
</template>

<script>
import LogoIcon from '@/assets/svg/logo.svg';

export default {
  name: 'Header',
  components: {
    LogoIcon,
  },
};

</script>

<style lang="scss" scoped>
.logo {
  display: block;
  width: 100%;
}
.logo svg {
  display: block;
  width: 100%;
  margin: auto;
  color: rgba($c1, 0.7);
  animation: rotate3d 15s $animation-easing infinite;
}
</style>
