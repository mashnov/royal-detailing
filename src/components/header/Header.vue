<template>
  <div class="header">
    <VideoBg
      :sources="sources"
      :img="img"
    />
    <div class="header-form">
      <div class="container">
        <div class="row">
          <div class="d-none d-md-flex flex-wrap col-md-4 col-lg-6">
            <slot name="details" />
          </div>
          <div class="col-12 col-md-8 col-lg-6">
            <slot name="form" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoBg from 'vue-videobg';

export default {
  name: 'Header',
  components: {
    VideoBg,
  },
  data: () => ({
    sources: ['/video/header.mp4'],
    img: '/images/header/background.jpg',
  }),
};

</script>

<style lang="scss" scoped>
  .header:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba($c5, 0.7);
    background-image: url('/images/header/video.png');
    z-index: 2;
  }
  .header ::v-deep section {
    position: relative;
    z-index: 1;
  }
  .header-form {
    position: absolute;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
  }
</style>
