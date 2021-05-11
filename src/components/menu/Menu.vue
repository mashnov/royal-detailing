<template>
  <div class="menu">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <RouterLink
            class="menu__item"
            :to="{ name: 'appointment' }"
            :class="currentPageName === 'appointment' && 'menu__item_active'"
          >
            <LogoIcon />
            <span>
              Запись
            </span>
          </RouterLink>
        </div>
        <div class="col-3">
          <RouterLink
            class="menu__item"
            :to="{ name: 'service' }"
            :class="currentPageName === 'service' && 'menu__item_active'"
          >
            <ServiceIcon />
            <span>
              Услуги
            </span>
          </RouterLink>
        </div>
        <div class="col-3">
          <RouterLink
            class="menu__item"
            :to="{ name: 'review' }"
            :class="currentPageName === 'review' && 'menu__item_active'"
          >
            <ReviewIcon />
            <span>
              Отзывы
            </span>
          </RouterLink>
        </div>
        <div class="col-3">
          <RouterLink
            class="menu__item"
            :to="{ name: 'contacts' }"
            :class="currentPageName === 'contacts' && 'menu__item_active'"
          >
            <LocationIcon />
            <span>
              Контакты
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from '@/assets/svg/logo.svg';
import ServiceIcon from '@/assets/svg/service-icon.svg';
import ReviewIcon from '@/assets/svg/review-icon.svg';
import LocationIcon from '@/assets/svg/location-icon.svg';

export default {
  name: 'Menu',
  components: {
    LogoIcon,
    ServiceIcon,
    ReviewIcon,
    LocationIcon,
  },
  computed: {
    currentPageName() {
      const { $route } = this;
      return $route.name || '';
    },
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
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba($c1, 0.15);
  backface-visibility: hidden;
  transform: translateZ(0);
  perspective: 1px;
  z-index: 3;
}
.menu__item {
  display: block;
  padding: 10px 0;
  background: rgba($c2, 0.4);
  border-radius: 12px;
  border: 1px solid rgba($c1, 0.15);
  transition: background 0.15s $animation-easing;
  text-decoration: none;
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
