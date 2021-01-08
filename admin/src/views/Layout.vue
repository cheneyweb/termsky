<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider
      theme="dark"
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        background: '#292B3C',
      }"
    >
      <a-menu
        theme="dark"
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        :style="{ background: '#292B3C' }"
      >
        <a-menu-item key="1">
          <DatabaseFilled />
          <span class="nav-text">Host</span>
        </a-menu-item>
        <a-menu-item key="2">
          <LockFilled />
          <span class="nav-text">Profile</span>
        </a-menu-item>
        <a-menu-item key="3">
          <SnippetsFilled />
          <span class="nav-text">Snippet</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout
      :style="{ marginLeft: '200px', background: '#1E2032', height: '100vh' }"
    >
      <a-button
        size="small"
        type="primary"
        shape="round"
        :style="{ width: '110px', margin: '4px', float: 'right' }"
        @click="openDrawer"
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
        <a-tab-pane key="1" tab="分组1"> Content of Tab Pane 1 </a-tab-pane>
        <a-tab-pane key="2" tab="分组2"> Content of Tab Pane 2 </a-tab-pane>
        <a-tab-pane key="3" tab="分组3"> Content of Tab Pane 3 </a-tab-pane>
      </a-tabs>
      <NewHost />
    </a-layout>
  </a-layout>
</template>
<script>
import {
  DatabaseFilled,
  LockFilled,
  SnippetsFilled,
  PlusOutlined,
} from "@ant-design/icons-vue";

import NewHost from "@/components/NewHost.vue";

export default {
  data() {
    return {
      selectedKeys: ["1"],
    };
  },
  components: {
    DatabaseFilled,
    LockFilled,
    SnippetsFilled,
    PlusOutlined,
    NewHost,
  },
  methods: {
    openDrawer() {
      this.$store.commit("switchDrawer", { key: "isShowDrawerHost" });
    },
  },
};
</script>

<style>
</style>