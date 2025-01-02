<template>
  <view class="playbar">
    <view class="playbar-info">
      <image
        src="https://p3fx.kgimg.com/stdmusic/240/20240510/20240510110428670256.jpg"
        class="playbar-info-avatar"
        mode="scaleToFill"
      />
      <view class="playbar-info-text">
        {{ " Call You Mine" }}·{{ "The Chainsmakers" }}
      </view>
    </view>
    <view class="playbar-control">
      <image
        :src="playIcon"
        class="playbar-control-play"
        mode="scaleToFill"
        @click="playStatus = !playStatus"
      />
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from "vue";

const playStatus = ref(false);
const playIcon = computed(() => {
  if (playStatus.value) {
    return new URL("../../static/icon/pause.svg", import.meta.url).href;
  } else {
    return new URL("../../static/icon/play.svg", import.meta.url).href;
  }
});
</script>

<style lang="scss">
.playbar {
  width: 100%;
  height: 100rpx;
  background: #f8f8f8;
  position: fixed;
  bottom: var(--window-bottom);
  left: 0;
  box-shadow: 0 -2rpx 10rpx 10rpx rgba(0, 0, 0, 0.1);
  padding: 10rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10rpx 10rpx 0 0;

  &-info {
    display: flex;
    &-avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 10rpx;
    }
    &-text {
      width: 350rpx;
      overflow: hidden;
      white-space: nowrap;
      margin-left: 20rpx;
      font-size: 28rpx;
      color: #333;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
  }
  &-control {
    display: flex;
    align-items: center;

    &-play {
      width: 60rpx;
      height: 60rpx;
    }
  }
}
</style>
