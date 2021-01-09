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
        @select="onSelect"
      >
        <a-menu-item key="host">
          <DatabaseFilled />
          <span class="nav-text">Host</span>
        </a-menu-item>
        <a-menu-item key="profile">
          <LockFilled />
          <span class="nav-text">Profile</span>
        </a-menu-item>
        <a-menu-item key="snippet">
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
        :style="{ width: '125px', margin: '4px', float: 'right' }"
        @click="onDrawer"
      >
        <template v-slot:icon><PlusOutlined /></template>{{ drawTitle }}
      </a-button>

      <router-view></router-view>

      <NewHost />
      <NewProfile />
      <NewSnippet />
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
import NewProfile from "@/components/NewProfile.vue";
import NewSnippet from "@/components/NewSnippet.vue";

export default {
  data() {
    return {
      selectedKeys: ["host"],
      drawTitle: "NEW HOST",
    };
  },
  components: {
    DatabaseFilled,
    LockFilled,
    SnippetsFilled,
    PlusOutlined,
    NewHost,
    NewProfile,
    NewSnippet,
  },
  methods: {
    onDrawer() {
      if (this.selectedKeys[0] == "host") {
        this.$store.commit("switchDrawer", { key: "isShowDrawerHost" });
      } else if (this.selectedKeys[0] == "profile") {
        this.$store.commit("switchDrawer", { key: "isShowDrawerProfile" });
      } else if (this.selectedKeys[0] == "snippet") {
        this.$store.commit("switchDrawer", { key: "isShowDrawerSnippet" });
      }
    },
    onSelect(e) {
      this.drawTitle = `NEW ${this.selectedKeys[0].toLocaleUpperCase()}`;
      console.log(`${this.selectedKeys[0]}`);
      this.$router.push(`${this.selectedKeys[0]}`);
    },
  },
};
</script>

<style>
</style>