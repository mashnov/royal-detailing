<template>
  <div class="page-content">
    <div class="container">
      <transition
        appear
        mode="out-in"
        name="fade-in"
      >
        <RouterView />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageContent',
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
