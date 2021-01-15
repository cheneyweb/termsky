<template>
  <div style="height:100vh">
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :span="16" style="padding: 10px">
        <!-- <a-form :model="loginForm" layout="horizontal" @submit="onSubmit" @submit.native.prevent> -->
        <!-- <a-form-item> -->
        <a-input v-model:value="loginForm.account" placeholder="EMAIL">
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
        >
          <template #prefix><LockOutlined /></template>
          <template #enterButton>
            <a-button :disabled="loginForm.account === ''">
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
        :disabled="loginForm.account === '' || loginForm.password === ''"
        @click="onSubmit"
      >
        LOGIN
      </a-button>
    </a-row>
  </div>
</template>
<script>
import { login } from "../service/index.js";
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
        account: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(e) {
      console.log(this.loginForm);
      login(this.loginForm);
    },
  },
};
</script>