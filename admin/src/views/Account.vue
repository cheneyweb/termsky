<template>
  <div style="height: 100vh">
    <div v-if="isLogin()">
      <a-row type="flex" justify="space-around" align="middle">
        WELCOME
      </a-row>
    </div>
    <div v-else>
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
              <a-button :disabled="loginForm.username === '' || sendFreeze">
                <template #icon>
                  <SendOutlined />
                </template>
                {{ sendText }}
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
      sendText: "SEND",
      sendFreeze: false,
    };
  },
  methods: {
    isLogin() {
      if (!this.$store.state.user.token) {
        let userJson = localStorage.getItem("user");
        if (userJson) {
          let user = JSON.parse(userJson);
          this.$store.commit("login", user);
        }
      }
      return this.$store.state.user.token;
    },
    async onSend(e) {
      this.sendFreeze = true;
      message.success("please check your email");
      let res = await sendCode({ username: this.loginForm.username });
      if (res.err) {
        message.warning("already sent");
        this.sendFreeze = false;
      } else {
        let countDown = 60;
        let intervalHandle = setInterval(() => {
          this.sendText = `SEND (${countDown--})`;
          if (countDown == 0) {
            this.sendFreeze = false;
            this.sendText = `SEND`;
            clearInterval(intervalHandle);
          }
        }, 1000);
      }
    },
    async onSubmit(e) {
      await login(this.loginForm);
    },
  },
};
</script>