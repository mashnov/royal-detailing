<template>
  <div class="menu">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div
            class="menu__item"
            :class="currentPageName === 'appointment' && 'menu__item_active'"
            @click="setPageName('appointment')"
          >
            <LogoIcon />
            <span>
              Запись
            </span>
          </div>
        </div>
        <div class="col-4">
          <div
            class="menu__item"
            :class="currentPageName === 'service' && 'menu__item_active'"
            @click="setPageName('service')"
          >
            <ServiceIcon />
            <span>
              Услуги
            </span>
          </div>
        </div>
        <div class="col-4">
          <div
            class="menu__item"
            :class="currentPageName === 'map' && 'menu__item_active'"
            @click="setPageName('map')"
          >
            <LocationIcon />
            <span>
              Контакты
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import LogoIcon from '@/assets/svg/logo.svg';
import ServiceIcon from '@/assets/svg/service-icon.svg';
import LocationIcon from '@/assets/svg/location-icon.svg';

export default {
  name: 'Menu',
  components: {
    LogoIcon,
    ServiceIcon,
    LocationIcon,
  },
  computed: {
    ...mapGetters('main', {
      currentPageName: 'GET_PAGE_NAME',
    }),
  },
  methods: {
    ...mapActions('main', {
      setPageName: 'SET_PAGE_NAME',
    }),
  },
};
</script>

<style lang="scss" scoped>
.menu {
  padding: 20px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: rgba($c4, 0.6);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba($c1, 0.15);
  z-index: 3;
}
.menu__item {
  padding: 10px 0;
  background: rgba($c2, 0.4);
  border-radius: 12px;
  border: 1px solid rgba($c1, 0.15);
  transition: background 0.15s $animation-easing;
  cursor: pointer;
}
.menu__item:not(.menu__item_active):hover {
  background: rgba($c2, 0.6);
}
.menu__item_active {
  background: rgba($c2, 0.8);
}
.menu__item svg {
  display: block;
  height: 20px;
  margin: 0 auto;
  color: $c1;
}
.menu__item span {
  display: none;
}
@media (min-width: $screen-sm) {
  .menu__item span {
    display: block;
    text-align: center;
    text-transform: uppercase;
    text-shadow: -1px -1px 1px $c5;
    font-size: 13px;
    margin-top: 10px;
    color: $c1;
  }
}
</style>
