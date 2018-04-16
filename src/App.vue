<template>
  <div id="app">
    <v-header></v-header>
    <div class="content">
      <div class="photo">
        <img src="./assets/logo2.png">
      </div>
      <div class="entrance">
        <span>进入文档</span>
      </div>
      <router-view class="r-view"></router-view>
    </div>
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

.content{
  width: 100%;
  height:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12%;
}

.photo{
  flex: 1;
}

.entrance{
  flex: 1;
  margin-top:2%;
  font-size: 30px;
  font-family: 'Microsoft YaHei';
  color: #89B7AD;
  border-bottom: 5px;
}

.entrance span{
   border-bottom: 4px solid #11A586;
}
.r-view{
  margin: 0;
  padding: 0;
}
</style>
