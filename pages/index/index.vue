<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <playbar />
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "发现好音乐",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ea2000;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: -100rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
  border-radius: 50%;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #fff;
  letter-spacing: 10rpx;
}
</style>
