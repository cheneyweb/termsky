<template>
  <a-layout id="components-layout-demo-fixed-sider" :style="{ height: '100%' }">
    <a-layout :style="{ marginTop: '1.5rem' }">
      <a-layout-sider
        theme="dark"
        :style="{
          left: 0,
          height: '100vh',
          background: '#292B3C',
          position: 'fixed',
        }"
      >
        <a-menu
          theme="dark"
          mode="inline"
          v-model:selectedKeys="selectedKeys"
          :style="{ background: '#292B3C' }"
          @select="onSelect"
        >
          <a-menu-item key="account">
            <CloudFilled :style="{ fontSize: '1rem' }" />
            <span class="nav-text">Account</span>
          </a-menu-item>
          <a-menu-item key="host">
            <DatabaseFilled :style="{ fontSize: '1rem' }" />
            <span class="nav-text">Host</span>
          </a-menu-item>
          <a-menu-item key="profile">
            <LockFilled :style="{ fontSize: '1rem' }" />
            <span class="nav-text">Profile</span>
          </a-menu-item>
          <a-menu-item key="snippet">
            <SnippetsFilled :style="{ fontSize: '1rem' }" />
            <span class="nav-text">Snippet</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout :style="{ background: '#1E2032', marginLeft: '200px' }">
        <router-view></router-view>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  CloudFilled,
  DatabaseFilled,
  LockFilled,
  SnippetsFilled,
} from "@ant-design/icons-vue";

export default {
  data() {
    return {
      selectedKeys: ["account"],
    };
  },
  components: {
    CloudFilled,
    DatabaseFilled,
    LockFilled,
    SnippetsFilled,
  },
  methods: {
    onSelect(e) {
      this.$router.push(`${this.selectedKeys[0]}`);
    },
  },
};
</script>

<style>
</style>