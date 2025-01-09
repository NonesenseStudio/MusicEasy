<template>
  <div class="wh-full bg-[#ea0000] flex-col justify-center items-center">
    <img :src="logo" alt="logo" class="w-20 h-20" />
    <div class="text-white">发现好音乐</div>
  </div>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.png";

const router = useRouter();
onMounted(() => {
  setTimeout(() => {
    router.push("/login");
  }, 2000);
});
</script>

<style scoped></style>
