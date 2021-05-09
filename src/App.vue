<template>
  <div id="app">
    <Header>
      <template slot="details">
        <StartDetails />
      </template>
      <template slot="form">
        <StartForm />
      </template>
    </Header>
  </div>
</template>

<script>
import Header from '@/components/header/Header';
import StartDetails from '@/components/start-details/StartDetails';
import StartForm from '@/components/start-form/StartForm';

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
    Header,
    StartDetails,
    StartForm,
  },
};

</script>

<style lang="scss">
  @import "assets/styles/base-style";
</style>
