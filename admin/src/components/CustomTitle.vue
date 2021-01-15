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
    >
      <a-row
        :style="{
          padding: '0.5rem',
        }"
      >
        <CloseCircleFilled
          :style="{ color: '#EA6B60' }"
          class="closeCircle"
          @click="onClose"
        />
      </a-row>
    </div>
  </a-layout-header>
</template>

<script>
import { CloseCircleFilled } from "@ant-design/icons-vue";

export default {
  name: "CustomTitle",
  components: {
    CloseCircleFilled,
  },
  methods: {
    onClose() {
      window.require("electron").ipcRenderer.send("window-close");
    },
  },
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
.closeCircle:hover {
  color: #d24d57 !important;
}
</style>