<template>
  <div class="contacts">
    <div class="container">
      <div class="row mb-3">
        <div class="col-12">
          <div class="contacts__wrapper">
            <div class="contacts__script">
              <component
                is="script"
                async
                type="text/javascript"
                charset="utf-8"
                :src="src"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="contacts__address">
            <span>
              <b>Наш адрес</b>: <a :href="link" target="_blank">198095, Россия, Санкт-Петербург, Митрофаньевское шоссе, 18</a>
            </span>
            <a
              target="_blank"
              :href="link"
            >
              <YandexNavigatorLogo />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { yandexMapScriptSrc, yandexMapLink } from '@/helpers/env';

import YandexNavigatorLogo from '@/assets/svg/navigator.svg';

export default {
  name: 'Contacts',
  components: {
    YandexNavigatorLogo,
  },
  data: () => ({
    src: yandexMapScriptSrc,
    link: yandexMapLink,
  }),
};
</script>

<style lang="scss" scoped>
  .contacts__wrapper {
    padding: 20px;
    background: rgba($c2, 0.4);
    backdrop-filter: blur(5px);
    backface-visibility: hidden;
    transform: translateZ(0);
    perspective: 1px;
    border-radius: 12px;
    border: 1px solid rgba($c1, 0.15);
    box-shadow: 0 0 15px $c5;
  }
  .contacts__script {
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid rgba($c1, 0.2);
  }
  .contacts__address {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px;
    background: rgba($c2, 0.4);
    backdrop-filter: blur(5px);
    backface-visibility: hidden;
    transform: translateZ(0);
    perspective: 1px;
    border-radius: 12px;
    border: 1px solid rgba($c1, 0.15);
    box-shadow: 0 0 15px $c5;
  }
  .contacts__address span {
    font-size: 21px;
    line-height: 21px;
    color: $c1;
  }
  .contacts__address a {
    display: block;
    text-decoration: none;
    margin-left: auto;
  }
  .contacts__address span a {
    display: inline;
    text-decoration: underline;
    color: rgba($c1, 0.6);
    transition: color 0.15s $animation-easing;
  }
  .contacts__address span a:hover {
    color: rgba($c1, 1);
  }
  .contacts__address a svg {
    display: block;
    width: 40px;
  }
</style>
