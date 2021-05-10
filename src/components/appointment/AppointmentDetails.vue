<template>
  <div class="appointment-details">
    <div class="row mb-3">
      <div class="col-8 offset-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
        <Logo />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="appointment-details__title">
          <h1>RoyalDetailing</h1>
          <h2>detailing & carwash</h2>
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
.appointment-details {
  margin: auto;
}
.appointment-details__title {
  text-align: center;
}
.appointment-details__title span {
  display: block;
  text-shadow: -1px -1px 1px $c5;
}
.appointment-details__title h1 {
  font-size: 41px;
  line-height: 43px;
  color: rgba($c1, 0.9);
  margin-bottom: 5px;
}
.appointment-details__title h2 {
  display: none;
}
@media (min-width: $screen-lg) {
  .appointment-details__title h2 {
    display: block;
    text-transform: uppercase;
    font-size: 31px;
    line-height: 33px;
    color: rgba($c1, 0.6);
  }
}
</style>
