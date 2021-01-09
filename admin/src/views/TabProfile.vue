<template>
  <a-tabs
    size="small"
    @change="callback"
    :style="{
      color: '#FFFFFF',
    }"
  >
    <a-tab-pane key="1" tab="Profile分组1"> Content of Tab Pane 1 </a-tab-pane>
    <a-tab-pane key="2" tab="Profile分组2"> Content of Tab Pane 2 </a-tab-pane>
    <a-tab-pane key="3" tab="Profile分组3"> Content of Tab Pane 3 </a-tab-pane>
  </a-tabs>
</template>

<script>
export default {
  name: "TabProfile",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
</style>
