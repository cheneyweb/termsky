<template>
  <div style="height: 100vh">
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :span="16" style="padding: 10px">
        <!-- <a-form :model="loginForm" layout="horizontal" @submit="onSubmit" @submit.native.prevent> -->
        <!-- <a-form-item> -->
        <a-input v-model:value="loginForm.username" placeholder="EMAIL">
          <template #prefix><MailFilled /></template>
        </a-input>
      </a-col>
      <!-- </a-form-item> -->

      <a-col :span="16" style="padding: 10px">
        <!-- <a-form-item> -->
        <a-input-search
          v-model:value="loginForm.password"
          type="password"
          placeholder="CODE"
          @search="onSend"
        >
          <template #prefix><LockOutlined /></template>
          <template #enterButton>
            <a-button :disabled="loginForm.username === ''">
              <template #icon>
                <SendOutlined />
              </template>
              SEND
            </a-button>
          </template>
        </a-input-search>
      </a-col>

      <!-- </a-form-item> -->
      <!-- <a-form-item> -->

      <!-- </a-form-item> -->
      <!-- </a-form> -->
    </a-row>
    <a-row type="flex" justify="space-around" align="middle">
      <a-button
        type="primary"
        html-type="submit"
        :disabled="loginForm.username === '' || loginForm.password === ''"
        @click="onSubmit"
      >
        LOGIN
      </a-button>
    </a-row>
  </div>
</template>
<script>
import { message } from "ant-design-vue";
import { sendCode, login } from "../service/index.js";
import { MailFilled, LockOutlined, SendOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    MailFilled,
    LockOutlined,
    SendOutlined,
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async onSend(e) {
      let res = await sendCode({ username: this.loginForm.username });
      if (res.err) {
        message.warning("already sent");
      }
    },
    async onSubmit(e) {
      let res = await login(this.loginForm);
      if (!res.err) {
        this.$store.commit("login", res.res);
        message.success("welcome");
      } else {
        message.error("login failed");
      }
    },
  },
};
</script>