<template>
  <a-drawer
    title="NEW Snippet"
    placement="right"
    :closable="false"
    :visible="isShowDrawerSnippet"
    @close="onClose"
  >
    <a-form :layout="vertical" :model="form">
      <a-form-item label="GROUP">
        <a-input v-model:value="form.group" placeholder="input placeholder" />
      </a-form-item>
      <a-form-item label="LABEL">
        <a-input v-model:value="form.label" placeholder="input placeholder" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="onSubmit">Submit</a-button>
      </a-form-item>
    </a-form>
    
  </a-drawer>
</template>

<script>
import {
  createSnippet,
  updateSnippet,
  deleteSnippet,
} from "../service/index.js";
export default {
  name: "NewSnippet",
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
    isShowDrawerSnippet() {
      return this.$store.state.drawer.isShowDrawerSnippet;
    },
  },
  components: {},
  methods: {
    onClose() {
      this.$store.commit("switchDrawer", { key: "isShowDrawerSnippet" });
    },
    onSubmit() {
      createSnippet(this.form);
    },
  },
};
</script>

<style scoped>
</style>
