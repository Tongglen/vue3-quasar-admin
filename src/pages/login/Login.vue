<template>
  <div class="login">
    <div class="justify-center loginForm">
      <div class="darkButton">
        <q-toggle
          :label="pinkModel"
          color="black"
          @update:model-value="change"
          false-value="暗黑"
          true-value="明亮"
          v-model="pinkModel"
        />
        <q-toggle
          :label="language"
          color="black"
          @update:model-value="changeLanguage"
          false-value="中文"
          true-value="English"
          v-model="language"
        />
      </div>
      <!--    <q-input v-model="text" label="用户名"  model-value=""/>-->
      <div class="text-h4">登录</div>
      <q-input v-model="loginName" label="账号" />
      <q-input v-model="loginPass" label="密码" type="password" />
      <div style="margin-top: 8px; display: flex">
        <q-checkbox right-label v-model="rememberMe" label="保持登录状态" />
        <q-icon
          name="info_outlined"
          @click="tips = true"
          style="
            cursor: pointer;
            margin: 12px 0 -8px 10px;
            font-size: 1.2em;
            color: gray;
          "
        />
        <div style="margin: 10px 0 0 -16px">
          <q-menu
            auto-close
            anchor="top middle"
            self="bottom middle"
            style="box-shadow: none"
            v-model="tips"
          >
            <div class="pnx-popover">
              <div class="tooltip-container">
                <div class="tooltip-content">
                  Selecting this option means you won’t have to sign in as often
                  on this device. For your security, we recommend only doing
                  this on your personal devices.
                </div>
                <span class="arrow-down"></span>
              </div>
            </div>
          </q-menu>
        </div>
        <a
          href="javascript:void(0);"
          style="display: inline-block; margin: 8px 0 -8px auto"
          >忘记密码？</a
        >
      </div>
      <q-btn
        unelevated
        rounded
        color="black"
        label="登录"
        :disable="!loginName || !loginPass"
        @click="submit"
        size="md"
        style="width: 14.5em"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { Dark } from "quasar";

const quasar = useQuasar();

const pinkModel = ref("暗黑");
function change(val) {
  Dark.toggle();
}
//
function changeLanguage() {}
// const loginName = ref("admin")
// const loginPass = ref("admin")
// const  rememberMe = ref(false)
// const tips = ref(false),

// function submit() {
//   if (loginName.value) {
//     quasar.notify("用户名不能为空！");
//     return;
//   }
//   if (!loginPass.value) {
//     quasar.notify("密码不能为空！");
//     return;
//   }
//   quasar.loading.show({
//     message: "登录中",
//   });
// }
</script>

<style lang="scss" scoped>
.body--dark {
  .login {
    width: 100%;
    height: 800px;
    background: url(src/assets/login-bg.jpg) no-repeat;
    background-size: 100%;
  }
}
.body--light {
  .login {
    width: 100%;
    height: 800px;
    background: url(src/assets/login-light.jpg) no-repeat;
    background-size: 100%;
  }
}
.login {
  .loginForm {
    position: relative;
    width: 400px;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
  }
}
.pnx-popover {
  outline: 0px;
  width: 307px;
  display: block;
  padding-bottom: 10px;
}
.pnx-popover .tooltip-container {
  font-size: 14px;
  line-height: 1.25;
  font-weight: 400;
  padding: 1px;
  text-align: left;
  border-radius: 4px;
  background-clip: padding-box;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.125);
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 10px;
  white-space: normal;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
}
.pnx-popover .tooltip-content {
  text-align: center;
  font-size: 12px;
  padding: 8px;
  display: block;
}
.pnx-popover .arrow-down {
  border-width: 11px 11px 0px;
  bottom: 0px;
  left: 50%;
  margin-left: -11px;
  /*border-top-color: rgba(0, 0, 0, 0.125) !important;*/
  border-top-color: black !important;
}
.pnx-popover .arrow-down,
.pnx-popover .arrow-down::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
}
</style>
