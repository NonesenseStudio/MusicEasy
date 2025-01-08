<template>
  <view class="playbar">
    <view class="playbar-info">
      <image
        src="https://p3fx.kgimg.com/stdmusic/240/20240510/20240510110428670256.jpg"
        class="playbar-info-avatar"
        mode="scaleToFill"
      />
      <view class="playbar-info-text-container" ref="container">
        <view class="playbar-info-text-wrapper" ref="wrapperRef">
          <view class="playbar-info-text" ref="textRef">
            {{ title }}·{{ "Taylor Swift" }}
          </view>
          <view class="playbar-info-text" v-if="canScroll">
            {{ title }}·{{ "Taylor Swift" }}
          </view>
        </view>
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
    <uni-drawer
      ref="showLeft"
      mode="bottom"
      :width="320"
      @change="change($event, 'showLeft')"
    >
      <view class="close">
        <button @click="closeDrawer('showLeft')">
          <text class="word-btn-white">关闭Drawer</text>
        </button>
      </view>
    </uni-drawer>
  </view>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";

const playStatus = ref(false);
const playIcon = computed(() => {
  if (playStatus.value) {
    return new URL("../../static/icon/pause.svg", import.meta.url).href;
  } else {
    return new URL("../../static/icon/play.svg", import.meta.url).href;
  }
});
const title = ref("Look What You Made Me Do");
const container = ref();
const wrapperRef = ref();
const textRef = ref({ $el: { offsetWidth: 0 } });

const canScroll = ref(false);
let translateX = 0;
const titleScroll = () => {
  const scrollSpeed = textRef.value.$el.offsetWidth || 0 / 10;
  wrapperRef.value.$el.style.translate = --translateX - scrollSpeed / 60 + "px";
  let marginRight = parseFloat(
    getComputedStyle(textRef.value.$el).marginRight.split("px")[0]
  );

  if (
    translateX - scrollSpeed / 60 <
    -(textRef.value.$el.offsetWidth + marginRight)
  ) {
    translateX = 0;
    cancelAnimationFrame(titleScroll);
    setTimeout(() => {
      requestAnimationFrame(titleScroll);
    }, 5000);
  } else {
    requestAnimationFrame(titleScroll);
  }
};
watch(
  () => title.value,
  () => {
    nextTick(() => {
      if (textRef.value.$el.offsetWidth > container.value.$el.offsetWidth) {
        canScroll.value = true;
        setTimeout(() => {
          titleScroll();
        }, 5000);
      } else {
        canScroll.value = false;
      }
    });
  }
);
onMounted(() => {
  setTimeout(() => {
    title.value = "Me";
  }, 6000);
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
      width: fit-content;
      white-space: nowrap;
      margin-right: 50rpx;

      &-container {
        width: 350rpx;
        overflow: hidden;
        white-space: nowrap;
        margin-left: 20rpx;
        font-size: 28rpx;
        color: #333;
      }
      &-wrapper {
        width: fit-content;
        height: 100%;
        display: flex;
        align-items: center;
        translate: 0px;
      }
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
