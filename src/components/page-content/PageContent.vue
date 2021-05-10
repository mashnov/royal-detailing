<template>
  <div class="page-content">
    <div class="container">
      <Component :is="componentName" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Appointment from '@/components/appointment/Appointment';
import Map from '@/components/map/Map';

const COMPONENT_NAME_MAPPER = {
  appointment: 'Appointment',
  service: 'Appointment',
  map: 'Map',
};

export default {
  name: 'PageContent',
  components: {
    Appointment,
    Map,
  },
  computed: {
    ...mapGetters('main', {
      currentPageName: 'GET_PAGE_NAME',
    }),
    componentName() {
      const { currentPageName } = this;
      return COMPONENT_NAME_MAPPER[currentPageName];
    },
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  width: 100%;
  margin: 20px 0;
}
@media (min-width: $screen-sm) {
  .page-content {
    width: 100%;
    margin: 50px 0;
  }
}
</style>
