<template>
  <div class="app">
    <Background />
    <PageContent />
    <Menu />
  </div>
</template>

<script>
import Background from '@/components/background/Background';
import PageContent from '@/components/page-content/PageContent';
import Menu from '@/components/menu/Menu';

export default {
  name: 'App',
  metaInfo: {
    title: 'RoyalDetailing',
    meta: [
      {
        name: 'description',
        content: 'RoyalDetailing - detailing & car wash',
      },
    ],
  },
  components: {
    Background,
    PageContent,
    Menu,
  },
};

</script>

<style lang="scss">
  @import "assets/styles/base-style";
</style>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 89px;
}
@media (min-width: $screen-sm) {
  .app {
    padding-bottom: 109px;
  }
}
</style>
