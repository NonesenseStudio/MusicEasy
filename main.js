import App from "./App";
import "./uni.scss";
// #ifndef VUE3
import Vue from "vue";
import "./uni.promisify.adaptor";
import playbar from "./components/playbar/playbar.vue";

Vue.use(playbar);
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
