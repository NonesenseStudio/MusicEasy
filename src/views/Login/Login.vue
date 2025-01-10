<template>
  <div class="wh-full flex-col justify-center items-center">
    <van-form @submit="onSubmit" class="w-full" ref="form">
      <van-cell-group inset v-if="loginStatus === 'phone'">
        <van-field
          v-model="loginParams.phone"
          name="手机号"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '' }]"
        />
        <van-field
          v-model="loginParams.captcha"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button
              size="small"
              type="primary"
              :disabled="captchaStatus"
              @click="onSendCaptcha"
            >
              {{ captchaText }}
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
      <van-cell-group inset v-if="loginStatus === 'email'">
        <van-field
          v-model="loginParams.email"
          name="邮箱"
          label="邮箱"
          placeholder="请输入邮箱"
          :rules="[{ required: true, message: '' }]"
        />
        <van-field
          v-model="loginParams.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="w-full flex justify-between p-4">
      <span
        class="text-[#1989fa]"
        @click="loginStatus = loginStatus === 'phone' ? 'email' : 'phone'"
        >手机登录</span
      >
      <a class="text-[#1989fa]">注册</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = ref();
const loginStatus = ref("phone");
const loginParams = ref({
  email: null,
  phone: null,
  password: null,
  captcha: null,
});
const captchaText = ref("发送验证码");
const captchaStatus = ref(false);

const onSendCaptcha = () => {
  form.value.validate(["phone"]).then((e) => {
    console.log(e);
  });
  captchaText.value = "发送中...";
  captchaStatus.value = true;
  setTimeout(() => {
    captchaText.value = "发送验证码";
    captchaStatus.value = false;
  }, 5000);
};
const onSubmit = (values: any) => {
  console.log("submit", values);
};
</script>

<style scoped></style>
