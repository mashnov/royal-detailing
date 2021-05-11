<template>
  <div class="background">
    <div class="background__video-filter" />
    <video
      class="background__video-player"
      :poster="videoPoster"
      :src="videoSource"
      playsinline
      autoplay
      muted
      loop
    />
  </div>
</template>

<script>

export default {
  name: 'Background',
  data: () => ({
    videoSource: '/header/header.mp4',
    videoPoster: '/header/header.jpg',
  }),
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
  background-image: url('/header/header.png');
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
