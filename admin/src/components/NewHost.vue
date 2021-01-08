<template>
  <a-drawer
    title="NEW HOST"
    placement="right"
    :closable="false"
    :visible="isShowDrawerHost"
    @close="onClose"
  >
    <a-form :layout="vertical" :model="form">
      <a-form-item>
        <a-input
          v-model:value="form.group"
          placeholder="Group"
          style="width: 200px"
        >
          <template #prefix><user-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="form.label"
          placeholder="Label"
          style="width: 200px"
        >
          <template #prefix><user-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <!-- <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary"> Submit </a-button>
      </a-form-item> -->
    </a-form>
  </a-drawer>
</template>

<script>
import { UserOutlined } from "@ant-design/icons-vue";

export default {
  name: "NewHost",
  components: {
    UserOutlined,
  },
  data() {
    return {
      form: {
        group: "",
        label: "",
        username: "",
        password: "",
        passphrase: "",
        privateKey: "",
        publicKey: "",
      },
    };
  },
  computed: {
    isShowDrawerHost() {
      return this.$store.state.drawer.isShowDrawerHost;
    },
  },
  methods: {
    onClose() {
      this.$store.commit("switchDrawer", { key: "isShowDrawerHost" });
    },
  },
};
</script>

<style scoped>
</style>
