<template>
  <v-app id="all">
    <router-view :key="$route.fullPath"/>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
  }),
};
</script>
<style>
@import '/src/assets/css/main.css';

</style>
