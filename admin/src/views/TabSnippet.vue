<template>
  <a-tabs
    size="small"
    @change="callback"
    :style="{
      color: '#FFFFFF',
    }"
  >
    <a-tab-pane key="1" tab="Snippet分组1">
      <GridSnippet />
    </a-tab-pane>
    <a-tab-pane key="2" tab="Snippet分组2"> Content of Tab Pane 2 </a-tab-pane>
    <a-tab-pane key="3" tab="Snippet分组3"> Content of Tab Pane 3 </a-tab-pane>
  </a-tabs>
</template>

<script>
import GridSnippet from "@/components/GridSnippet.vue";

export default {
  name: "TabSnippet",
  components: {
    GridSnippet,
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
