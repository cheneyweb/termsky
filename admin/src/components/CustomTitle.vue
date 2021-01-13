<template>
  <a-layout-header
    id="customTitle"
    :style="{
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      height: '1.5rem',
      padding: 0,
    }"
  >
    <div
      :style="{
        width: '200px',
        backgroundColor: '#292B3C',
        height: '100%',
        padding: '0',
      }"
    ></div>
  </a-layout-header>
</template>

<script>
export default {
  name: "CustomTitle",
  methods: {},
};
</script>
    
<style>
#customTitle {
  position: "fixed";
  width: 100%;
  height: 100%;
  background-color: #1e2032;
  -webkit-app-region: drag;
}
</style>