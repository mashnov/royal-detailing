<template>
  <div class="background">
    <div
      class="background__video-filter"
      :style="filterStyle"
    />
    <video
      class="background__video-player"
      :src="videoSource"
      playsinline
      autoplay
      muted
      loop
    />
  </div>
</template>

<script>
import { publicPath } from '@/helpers/env';

export default {
  name: 'Background',
  computed: {
    videoSource() {
      return `${publicPath}header/header.mp4`;
    },
    filterStyle() {
      return { backgroundImage: `url('${publicPath}header/video.png')` };
    },
  },
};

</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.background__video-filter {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba($c5, 0.7);
  z-index: 2;
}
.background__video-player {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
