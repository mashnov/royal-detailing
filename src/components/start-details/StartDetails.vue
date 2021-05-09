<template>
  <div class="start-details">
    <div class="row mb-3">
      <div class="col-8 offset-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
        <Logo />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="start-details__title">
          <span>RoyalDetailing</span>
          <span>DETAILING & CARWASH</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/logo/Logo';

export default {
  name: 'StartDetails',
  components: {
    Logo,
  },
};

</script>

<style lang="scss" scoped>
.start-details {
  margin: auto;
}
.start-details__title {
  text-align: center;
}
.start-details__title span {
  display: block;
  text-shadow: -1px -1px 1px $c5;
}
.start-details__title span:nth-child(1) {
  font-size: 41px;
  line-height: 43px;
  color: rgba($c1, 0.9);
  margin-bottom: 5px;
}
.start-details__title span:nth-child(2) {
  display: none;
}
@media (min-width: $screen-lg) {
  .start-details__title span:nth-child(2) {
    display: block;
    font-size: 31px;
    line-height: 33px;
    color: rgba($c1, 0.5);
  }
}
</style>
