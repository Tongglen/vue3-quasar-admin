<template>
  <div class="login">
    <div class="justify-center loginForm">
      <div class="darkButton">
        <q-toggle
          :label="pinkModel"
          color="white"
          keep-color
          @update:model-value="change"
          :false-value="$t('login.light')"
          :true-value="$t('login.dark')"
          v-model ="pinkModel"
        />
        <q-select
          v-model="locale"
          :options="localeOptions"
          label="Quasar Language"
          dense
          borderless
          emit-value
          map-options
          options-dense
          style="min-width: 150px"
        />
      </div>
      <LoginForm />
      <MobileForm />

      <div style='margin-top: 30px'>
        <div class="q-gutter-xs">
          <q-btn outline color="primary" class='otherLogin' :label="$t('login.mobileSignInFormTitle')" />
          <q-btn outline color="primary" class='otherLogin' :label="$t('login.qrSignInFormTitle')" />
          <q-btn outline color="primary" class='otherLogin' :label="$t('login.registerButton')" />
        </div>
      </div>
      <div class="flex justify-evenly antIcon">
        <GithubFilled />
        <WechatFilled />
        <AlipayCircleFilled />
        <GoogleCircleFilled />
        <TwitterCircleFilled />
      </div>
    </div>
  </div>
</template>
<script>

</script>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ref, reactive, watch } from "vue";
import { Dark } from "quasar";
import {
  GithubFilled,
  WechatFilled,
  AlipayCircleFilled,
  GoogleCircleFilled,
  TwitterCircleFilled,
} from '@ant-design/icons-vue';
import LoginForm  from './loginForm.vue'
import MobileForm  from './MobileForm.vue'

const { locale } = useI18n({ useScope: 'global' })
const localeOptions = reactive([
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '中文' }
])
const pinkModel = ref(useI18n().t('login.light'));
// Must be called at the top of a `setup` function
// watchEffect(() => {
//   pinkModel.value = useI18n().t('login.light')
// })
//暂时用watch代替
watch(locale,() =>{
  if(locale.value === 'en-US'){
    if(pinkModel.value === '明亮'){
      pinkModel.value = 'light'
    }else{
      pinkModel.value = 'dark'
    }
  }else{
    if(pinkModel.value === 'light'){
      pinkModel.value = '明亮'
    }else{
      pinkModel.value = '暗黑'
    }
  }
})
//主题切换
function change() {
  Dark.toggle();
}

</script>

<style lang="scss" scoped>
.body--dark {
  .login {
    height: 100%;
    background: url(src/assets/login-bg.jpg);
    background-size: auto;
  }
}
.body--light {
  .login {
    height: 100%;
    background: url(src/assets/login-light.jpg) no-repeat;
    background-size: auto;
  }
}

@media (max-width: $breakpoint-xl-max) {
  .login {
    .loginForm {
      position: relative;
      width: 400px;
      left: 50%;
      top: 200px;
      transform: translateX(-50%);
    }
    .otherLogin {
      width: 32%;
    }
    .antIcon {
      margin-top: 30px;
      .anticon{
        font-size: 22px;
        color: #888;
        cursor: pointer;
      }
      :hover {
        color: #0960bd;
      }
    }
  }
}
@media (max-width: $breakpoint-xs-max) {
  .login {
    .loginForm {
      position: relative;
      width: 400px;
      left: 50%;
      top: 200px;
      transform: translateX(-50%);
    }
    .otherLogin {
      width: 32%;
    }
    .antIcon {
      margin-top: 30px;
      .anticon{
        font-size: 22px;
        color: #888;
        cursor: pointer;
      }
      :hover {
        color: #0960bd;
      }
    }
  }
}
@media (max-width: $breakpoint-xs-max) {
  .login {
    .loginForm {
      position: relative;
      width: 90%;
      min-width: 360px;
      left: 50%;
      top: 200px;
      transform: translateX(-50%);
    }
    .otherLogin {
      width:32%;
    }
    .antIcon {
      margin-top: 30px;
      .anticon{
        font-size: 22px;
        color: #888;
        cursor: pointer;
      }
      :hover {
        color: #0960bd;
      }
    }
  }
}

</style>
