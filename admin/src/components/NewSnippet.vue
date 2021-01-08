<template>
  <a-drawer
    title="NEW Snippet"
    placement="right"
    :closable="false"
    :visible="isShowDrawerSnippet"
    @close="onClose"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
export default {
  name: "NewSnippet",
  data() {
    return {};
  },
  computed: {
    isShowDrawerSnippet() {
      return this.$store.state.drawer.isShowDrawerSnippet;
    },
  },
  components: {},
  methods: {
    onClose() {
      this.$store.commit("switchDrawer", { key: "isShowDrawerSnippet" });
    },
  },
};
</script>

<style scoped>
</style>
