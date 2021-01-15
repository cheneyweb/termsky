<template>
  <div id="app">
    <CustomTitle />
    <router-view />
  </div>
</template>

<script>
import CustomTitle from "@/components/CustomTitle.vue";
export default {
  components: {
    CustomTitle,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  height: 100vh;
}
</style>
