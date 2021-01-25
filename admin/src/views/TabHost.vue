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
      @change="onQuery"
      :style="{
        color: '#FFFFFF',
      }"
    >
      <a-tab-pane v-for="(item, i) in groups" :key="item" :tab="item">
        <GridHost :group="item" />
      </a-tab-pane>
    </a-tabs>
    <NewHost />
  </a-row>
</template>

<script>
import { queryHost } from "../service/index.js";
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
    return {
      groups: [],
      hosts: [],
    };
  },
  created() {
    // queryHost();
    this.groups = ["Host分组A", "Host分组B", "Host分组C"];
  },
  computed: {},
  methods: {
    onDrawer() {
      this.$store.commit("switchDrawer", { key: "isShowDrawerHost" });
    },
    onQuery(key) {
      // console.log(key);
    },
  },
};
</script>

<style scoped>
</style>
