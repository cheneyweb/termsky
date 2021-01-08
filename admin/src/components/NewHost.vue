<template>
  <a-drawer
    title="NEW HOST"
    placement="right"
    :closable="false"
    :visible="isShowDrawerHost"
    @close="onClose"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
export default {
  name: "NewHost",
  data() {
    return {};
  },
  computed: {
    isShowDrawerHost() {
      return this.$store.state.drawer.isShowDrawerHost;
    },
  },
  components: {},
  methods: {
    onClose() {
      this.$store.commit("switchDrawer", { key: "isShowDrawerHost" });
    },
  },
};
</script>

<style scoped>
</style>
