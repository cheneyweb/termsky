<template>
  <a-drawer
    title="NEW Snippet"
    placement="right"
    :closable="false"
    :visible="isShowDrawerSnippet"
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
  },
};
</script>

<style scoped>
</style>
