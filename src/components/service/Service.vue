<template>
  <div class="service">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="service__wrapper" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service',
};
</script>

<style lang="scss" scoped>
.service__wrapper {
  min-height: calc(100vh - 200px);
  background: rgba($c2, 0.4);
  backdrop-filter: blur(5px);
  backface-visibility: hidden;
  transform: translateZ(0);
  perspective: 1px;
  border: 1px solid rgba($c1, 0.15);
  box-shadow: 0 0 15px $c5;
  border-radius: 12px;
}
</style>
