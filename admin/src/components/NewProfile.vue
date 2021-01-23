<template>
  <a-drawer
    title="NEW Profile"
    placement="right"
    :closable="false"
    :visible="isShowDrawerProfile"
    @close="onClose"
  >
    <a-form :layout="vertical" :model="form">
      <a-form-item label="GROUP">
        <a-input v-model:value="form.group" placeholder="input placeholder" />
      </a-form-item>
      <a-form-item label="LABEL">
        <a-input v-model:value="form.label" placeholder="input placeholder" />
      </a-form-item>
      <!-- <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary"> Submit </a-button>
      </a-form-item> -->
    </a-form>
  </a-drawer>
</template>

<script>
import {
  createProfile,
  updateProfile,
  deleteProfile,
} from "../service/index.js";
export default {
  name: "NewProfile",
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
    isShowDrawerProfile() {
      return this.$store.state.drawer.isShowDrawerProfile;
    },
  },
  components: {},
  methods: {
    onClose() {
      this.$store.commit("switchDrawer", { key: "isShowDrawerProfile" });
    },
  },
};
</script>

<style scoped>
</style>
