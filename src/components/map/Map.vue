<template>
  <div class="map">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="map__wrapper">
            <div class="map__script">
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
    </div>
  </div>
</template>

<script>
import { yandexMapScriptSrc } from '@/helpers/env';

export default {
  name: 'Map',
  data: () => ({
    src: yandexMapScriptSrc,
  }),
};
</script>

<style lang="scss" scoped>
  .map__wrapper {
    padding: 20px 40px;
    min-height: 544px;
    background: rgba($c2, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 12px;
    border: 1px solid rgba($c1, 0.15);
    box-shadow: 0 0 15px $c5;
  }
  .map__script {
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid rgba($c1, 0.2);
  }
</style>
