<template>
  <view class="home">
    <view class="home-banner">
      <banner></banner>
    </view>
    <view class="home-playlists-rcmd"></view>
    <view class="home-playlists-new"></view>
    <playbar />
  </view>
</template>

<script setup>
import { getHighQualityTags, getHighQuality } from "../../server/playlist";
import { getDiscover } from "../../server/home";
import banner from "./components/banner.vue";
import { onLoad } from "@dcloudio/uni-app";

onLoad(() => {
  // getHighQualityTags().then((res) => {
  //   console.log(res);
  // });
  // getHighQuality().then(({ playlists }) => {
  //   console.log(playlists);
  // });
  getDiscover().then((res) => {
    console.log(res);
  });
});
</script>

<style lang="scss">
.home {
  padding: 20rpx;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>
