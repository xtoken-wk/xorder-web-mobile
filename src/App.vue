<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    color: #ffffff;
    text-align: center;
  }

  @font-face {
    font-family: 'NunitoSans-Regular';
    src: url('./assets/fonts/NunitoSans-Regular.ttf');
  }
</style>
