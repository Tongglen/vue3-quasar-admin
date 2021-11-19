<template>
  <div v-if='isShow'>
    <div class="text-h4">{{ $t('login.mobileSignInFormTitle') }}</div>
    <q-input no-caps  class="q-mt-md" dense outlined :placeholder="$t('login.mobile')" />
    <div class="q-mt-md row justify-between">
        <q-input no-caps  class='col-7'  dense outlined :placeholder="$t('login.smsCode')" />
        <q-btn no-caps  @click='handleStart' :disable='isStart' class='col-auto' color="primary" outline  :label="smsCode" />
    </div>
    <div class='row'>
      <q-btn class='col-12 q-mt-md' no-caps color="primary" :label="$t('login.loginButton')"/>
      <q-btn class='col-12 q-mt-md' no-caps  :label="$t('login.backSignIn')" @click='handleBackLogin'/>
    </div>
  </div>

</template>

<script lang="ts" setup>
  import { ref, unref, computed } from 'vue';
  import { useI18n } from "vue-i18n";
  import { useCountdown } from './countdown';
  import { LoginStateEnum, useLoginState } from './useLogin';


  const count = 60
  const { currentCount, isStart, start } = useCountdown(count);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
  const smsCode = ref(computed(() => {
    return !unref(isStart)
      ? useI18n().t('countdown.normalText')
      : useI18n().t('countdown.sendText', [unref(currentCount)]);
  }));

  const { handleBackLogin, getLoginState } = useLoginState();
  const isShow = computed(() => unref(getLoginState) === LoginStateEnum.MOBILE);

  function handleStart() {
    start()
  }
</script>

<style scoped>

</style>
