<template>
  <a-row>
    <a-button
      size="small"
      type="primary"
      shape="round"
      :style="{
        width: '8rem',
        height: '1.8rem',
        margin: '0px 0px 0px 16px',
        float: 'left',
      }"
      @click="onDrawer"
    >
      <template v-slot:icon><PlusOutlined /></template>NEW SNIPPET
    </a-button>
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
      <a-tab-pane key="2" tab="Snippet分组2">
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Snippet分组3">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
    <NewSnippet />
  </a-row>
</template>

<script>
import { PlusOutlined } from "@ant-design/icons-vue";
import GridSnippet from "@/components/GridSnippet.vue";
import NewSnippet from "@/components/NewSnippet.vue";

export default {
  name: "TabSnippet",
  components: {
    PlusOutlined,
    GridSnippet,
    NewSnippet,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    onDrawer() {
      this.$store.commit("switchDrawer", { key: "isShowDrawerSnippet" });
    },
  },
};
</script>

<style scoped>
</style>
