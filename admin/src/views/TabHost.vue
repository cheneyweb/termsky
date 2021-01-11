<template>
  <a-tabs
    size="small"
    @change="callback"
    :style="{
      color: '#FFFFFF',
    }"
  >
    <a-tab-pane key="1" tab="Host分组1">
      <GridHost />
    </a-tab-pane>
    <a-tab-pane key="2" tab="Host分组2"> Content of Tab Pane 2 </a-tab-pane>
    <a-tab-pane key="3" tab="Host分组3"> Content of Tab Pane 3 </a-tab-pane>
  </a-tabs>
</template>

<script>
import GridHost from "@/components/GridHost.vue";

export default {
  name: "TabHost",
  components: {
    GridHost,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
</style>
