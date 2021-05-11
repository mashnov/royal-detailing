<template>
  <div class="social-link">
    <a
      target="_blank"
      :href="avitoLink"
    >
      <AvitoLogo />
    </a>
    <a
      target="_blank"
      :href="instagramLink"
    >
      <InstagramLogo />
    </a>
    <a
      target="_blank"
      :href="vkGroupLink"
    >
      <VkLogo />
    </a>
    <a
      target="_blank"
      :href="yandexMapLink"
    >
      <YandexLogo />
    </a>
  </div>
</template>

<script>
import { yandexMapLink, vkGroupLink, instagramLink, avitoLink } from '@/helpers/env';

import YandexLogo from '@/assets/svg/yandex-logo.svg';
import InstagramLogo from '@/assets/svg/instagram-logo.svg';
import VkLogo from '@/assets/svg/vk-logo.svg';
import AvitoLogo from '@/assets/svg/avito-logo.svg';

export default {
  name: 'SocialLink',
  components: {
    InstagramLogo,
    VkLogo,
    AvitoLogo,
    YandexLogo,
  },
  data: () => ({
    yandexMapLink,
    vkGroupLink,
    instagramLink,
    avitoLink,
  }),
};
</script>

<style lang="scss" scoped>
.social-link {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px;
  background: rgba($c2, 0.4);
  backdrop-filter: blur(5px);
  backface-visibility: hidden;
  transform: translateZ(0);
  perspective: 1px;
  border-radius: 12px;
  border: 1px solid rgba($c1, 0.15);
  box-shadow: 0 0 15px $c5;
}
.social-link a {
  display: block;
  color: rgba($c1, 0.5);
  transition: color 0.15s $animation-easing;
}
.social-link a:hover {
  color: rgba($c1, 1);
}
.social-link a:not(:last-child) {
  margin-bottom: 15px;
}
.social-link a svg {
  display: block;
  width: 30px;
}
</style>
