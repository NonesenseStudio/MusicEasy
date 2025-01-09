<script setup lang="ts">
import TabBar from "./components/TabBar.vue";
import { useDark } from "@vueuse/core";

const isDark = useDark().value ? "dark" : "light";
const router = useRouter();
const route = useRoute();
const showTab = ref(route.name !== "startup");
watch(
  () => route.name,
  (name) => {
    showTab.value = name !== "startup";
  },
);
onMounted(() => {});
</script>

<template>
  <van-config-provider class="w-full h-full" :theme="isDark">
    <div class="router-view w-full h-full" :class="{ 'pb-12.5': showTab }">
      <RouterView />
    </div>
    <tab-bar v-if="showTab"></tab-bar>
  </van-config-provider>
</template>

<style scoped lang="less">
.router-view {
  //height: calc(100vh - 50px);
}
</style>
