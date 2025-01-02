<template>
  <swiper
    class="banner"
    indicator-dots
    circular
    v-if="banners.length"
    indicator-color="rgba(255, 255, 255, .3)"
    indicator-active-color="rgba(255, 255, 255, 1)"
  >
    <swiper-item v-for="item in banners" :key="item.id">
      <image class="banner-img" :src="item.pic"></image>
    </swiper-item>
  </swiper>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { getBanner } from "../../../server/home";

const banners = ref([]);
const render = async () => {
  banners.value = await getBanner(1).then(({ banners }) => banners.slice(0, 5));
};
onLoad(() => {
  render();
});
</script>

<style lang="scss">
.banner {
  width: 100%;
  height: 300rpx;
  border-radius: 10rpx;
  .banner-img {
    border-radius: 10rpx;
    width: 100%;
    height: 100%;
  }
}
</style>
