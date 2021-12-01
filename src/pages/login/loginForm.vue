<template>
  <template v-if="isShow">
    <div class="text-h4">{{ $t('login.signInFormTitle') }}</div>
    <q-input v-model="loginName" :label="$t('login.userName')" />
    <q-input v-model="loginPass" :label="$t('login.password')" type="password" />
    <div style="margin-top: 8px; display: flex">
      <q-checkbox right-label :model-value = "rememberMe" :label="$t('login.rememberMe')" />
      <a
        href="javascript:void(0);"
        style="display: inline-block; margin: 8px 0 -8px auto"
      >{{ $t('login.forgetPassword') }}</a
      >
    </div>
    <q-btn
      unelevated
      color="primary"
      :label="$t('login.signInFormTitle')"
      :disable="!loginName || !loginPass"
      @click="submit"
      size="md"
      style="width: 100%"
    />
  </template>

</template>
<script lang='ts' setup>
import { useQuasar } from "quasar";
import { computed, ref, unref } from 'vue';
import { LoginStateEnum, useLoginState } from './useLogin';
import  { useRouter }  from 'vue-router';

const quasar = useQuasar();
const loginName = ref("admin");
const loginPass = ref("admin");
const rememberMe = ref(false);

const {  getLoginState } = useLoginState();
const isShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);

const router = useRouter()
function submit() {
  if (!loginName.value) {
    quasar.notify("用户名不能为空！");
    return;
  }
  if (!loginPass.value) {
    quasar.notify("密码不能为空！");
    return;
  }
  quasar.loading.show({
    message: "登录中",
  });
  let timer
  timer = setTimeout(() => {
    quasar.loading.hide()
    timer = void 0
    void router.push('/')
    clearTimeout(timer)

  }, 1000)



}

</script>
