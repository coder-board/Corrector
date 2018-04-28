<template>
  <div id="app">
    <v-header></v-header>
    <router-view class="r-view"></router-view>
  </div>
</template>

<script>
  import header from './components/header.vue';

  export default {
    name: 'app',
    components: {
      'v-header': header
    }
  };
</script>

<style>

html{
  height:100%;
}

body{
  height:100%;
  background-image: url(assets/bg.png);
  background-size: 120% 100%;
}

.r-view{
  margin: 0;
  padding: 0;
  height: auto;
}
</style>
