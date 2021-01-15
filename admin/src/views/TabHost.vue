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
      <template v-slot:icon><PlusOutlined /></template>NEW HOST
    </a-button>
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
    <NewHost />
  </a-row>
</template>

<script>
import { PlusOutlined } from "@ant-design/icons-vue";
import NewHost from "@/components/NewHost.vue";
import GridHost from "@/components/GridHost.vue";

export default {
  name: "TabHost",
  components: {
    PlusOutlined,
    GridHost,
    NewHost,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    onDrawer() {
      this.$store.commit("switchDrawer", { key: "isShowDrawerHost" });
    },
  },
};
</script>

<style scoped>
</style>
