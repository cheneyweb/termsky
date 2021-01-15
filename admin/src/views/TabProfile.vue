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
        height: '100vh',
        color: '#FFFFFF',
      }"
    >
      <a-tab-pane key="1" tab="Profile分组1">
        <GridProfile />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Profile分组2">
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Profile分组3">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
    <NewProfile />
  </a-row>
</template>

<script>
import { PlusOutlined } from "@ant-design/icons-vue";
import GridProfile from "@/components/GridProfile.vue";
import NewProfile from "@/components/NewProfile.vue";

export default {
  name: "TabProfile",
  components: {
    PlusOutlined,
    GridProfile,
    NewProfile
  },
  data() {
    return {};
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
