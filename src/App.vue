<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    mounted() {
      document.getElementById('app').style.display = 'block';
      document.getElementById('appLoading').style.display = 'none';
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>