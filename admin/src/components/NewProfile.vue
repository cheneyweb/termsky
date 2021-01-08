<template>
  <a-drawer
    title="NEW Profile"
    placement="right"
    :closable="false"
    :visible="isShowDrawerProfile"
    @close="onClose"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
export default {
  name: "NewProfile",
  data() {
    return {};
  },
  computed: {
    isShowDrawerProfile() {
      return this.$store.state.drawer.isShowDrawerProfile;
    },
  },
  components: {},
  methods: {
    onClose() {
      this.$store.commit("switchDrawer", { key: "isShowDrawerProfile" });
    },
  },
};
</script>

<style scoped>
</style>
