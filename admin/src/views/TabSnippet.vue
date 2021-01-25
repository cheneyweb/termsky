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
      <a-tab-pane v-for="(item, i) in groups" :key="item" :tab="item">
        <GridSnippet :group="item" />
      </a-tab-pane>
    </a-tabs>
    <NewSnippet />
  </a-row>
</template>

<script>
import { querySnippet } from "../service/index.js";
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
  created() {
    // querySnippet();
    this.groups = ["Snippet分组A", "Snippet分组B", "Snippet分组C"];
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
