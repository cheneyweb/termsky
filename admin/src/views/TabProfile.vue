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
      <template v-slot:icon><PlusOutlined /></template>NEW PROFILE
    </a-button>
    <a-tabs
      size="small"
      @change="callback"
      :style="{
        color: '#FFFFFF',
      }"
    >
      <a-tab-pane v-for="(item, i) in groups" :key="item" :tab="item">
        <GridProfile :group="item" />
      </a-tab-pane>
    </a-tabs>
    <NewProfile />
  </a-row>
</template>

<script>
import { queryProfile } from "../service/index.js";
import { PlusOutlined } from "@ant-design/icons-vue";
import GridProfile from "@/components/GridProfile.vue";
import NewProfile from "@/components/NewProfile.vue";

export default {
  name: "TabProfile",
  components: {
    PlusOutlined,
    GridProfile,
    NewProfile,
  },
  data() {
    return {
      groups: [],
      hosts: [],
    };
  },
  created() {
    // queryProfile();
    this.groups = ["Profile分组A", "Profile分组B", "Profile分组C"];
  },
  computed: {},
  methods: {
    onDrawer() {
      this.$store.commit("switchDrawer", { key: "isShowDrawerProfile" });
    },
  },
};
</script>

<style scoped>
</style>
