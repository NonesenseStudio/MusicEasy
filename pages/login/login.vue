<template>
  <view class="login">
    <uni-forms :modelValue="formData" ref="form" class="login-form">
      <!-- 手机验证码登录 -->
      <uni-forms-item
        label="手机号"
        name="phone"
        ref="phone"
        v-if="loginType === 'phone'"
        :rules="[
          { required: true, errorMessage: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, errorMessage: '请输入正确的手机号' },
        ]"
      >
        <uni-easyinput
          type="text"
          v-model="formData.phone"
          primaryColor="#ea0000"
          placeholder="请输入手机号"
        />
      </uni-forms-item>
      <uni-forms-item
        label="验证码"
        name="captcha"
        v-if="loginType === 'phone'"
        :rules="[{ required: true, errorMessage: '请输入验证码' }]"
      >
        <uni-easyinput
          type="text"
          v-model="formData.captcha"
          primaryColor="#ea0000"
          placeholder="请输入验证码"
        >
          <template #right>
            <button
              size="mini"
              type="default"
              class="captcha-btn"
              @click="sendCaptcha"
              :disabled="captchaBtnDisabled"
            >
              {{ captchaBtnText }}
            </button>
          </template>
        </uni-easyinput>
      </uni-forms-item>
      <!-- 邮箱登录 -->
      <uni-forms-item
        label="邮箱"
        name="email"
        v-if="loginType === 'email'"
        :rules="[{ required: true, errorMessage: '请输入邮箱' }]"
      >
        <uni-easyinput
          type="text"
          v-model="formData.email"
          primaryColor="#ea0000"
          placeholder="请输入邮箱"
        />
      </uni-forms-item>
      <uni-forms-item
        label="密码"
        name="password"
        v-if="loginType === 'email'"
        :rules="[{ required: true, errorMessage: '请输入密码' }]"
      >
        <uni-easyinput
          passwordIcon
          primaryColor="#ea0000"
          type="password"
          v-model="formData.password"
          placeholder="请输入密码"
        />
      </uni-forms-item>
    </uni-forms>
    <button @click="submitForm" type="default" class="btn">登录</button>
    <button
      style="margin-top: 20rpx; width: 100%"
      @click="loginByAnonimous"
      type="default"
    >
      游客登录
    </button>
    <view class="login-type">
      <text
        @click="loginType = loginType === 'phone' ? 'email' : 'phone'"
        type="text"
        >{{ loginType === "phone" ? "邮箱登录" : "手机登录" }}</text
      >
      <text type="text">扫码登录</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import {
  refreshLogin,
  registerAnonimous,
  getCaptcha,
  checkPhone,
} from "../../server/login";
const formData = ref({
  phone: null,
  email: null,
  password: null,
  captcha: null,
});
const form = ref();
const phone = ref();
const loginType = ref("phone");
const captchaBtnText = ref("发送验证码");
const captchaBtnDisabled = ref(false);

const submitForm = () => {
  uni.switchTab({ url: "/pages/home/home" });
  // form.value
  //   .validate()
  //   .then((res) => {
  //     if (loginType.value === "phone") {
  //       loginByPhone();
  //     } else {
  //       loginByEmail();
  //     }
  //   })
  //   .catch((err) => {
  //     console.log("表单校验失败", err);
  //   });
};
const sendCaptcha = () => {
  form.value.validateField("phone").then(async () => {
    let hasNumber = await checkPhone(formData.value.phone).then(
      ({ exist }) => exist === 1
    );
    if (!hasNumber) {
      uni.showToast({
        title: "该手机号未注册",
        icon: "none",
      });
      return;
    }
    let second = 60;
    let timer = setInterval(() => {
      captchaBtnText.value = `重新发送(${second})`;
      second--;
      captchaBtnDisabled.value = true;
      if (captchaBtnText.value === "重新发送(0)") {
        captchaBtnText.value = "发送验证码";
        captchaBtnDisabled.value = false;
        clearInterval(timer);
      }
    }, 1000);
  });
};

const loginByPhone = () => {};
const loginByEmail = () => {};
const loginByAnonimous = () => {
  registerAnonimous().then((res) => {
    refreshLogin().then((ref) => {
      console.log(ref);
    });
  });
};
</script>

<style lang="scss">
.login {
  padding: 20rpx;
  height: calc(100% - 40rpx);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .btn {
    background-color: #e94848;
    color: #fff;
    width: 100%;
  }

  &-type {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20rpx;
    color: #007aff;
  }

  &-form {
    width: 100%;
  }
}
</style>
