<template>
  <div class="header">
    <div
      class="header__video-filter"
      :style="videoStyle"
    />
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
import { publicPath } from '@/helpers/env';
import VideoBg from 'vue-videobg';

export default {
  name: 'Header',
  components: {
    VideoBg,
  },
  computed: {
    sources() {
      return [
        `${publicPath}header/header.mp4`,
      ];
    },
    img() {
      return `${publicPath}header/header.jpg`;
    },
    videoStyle() {
      return { backgroundImage: `url('${publicPath}header/video.png')` };
    },
  },
};

</script>

<style lang="scss" scoped>
  .header__video-filter {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba($c5, 0.7);
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
