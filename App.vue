<script>
import instance from "./server/index.js";

export default {
  onLaunch: function () {
    instance.post("/login/status").then((res) => {
      setTimeout(() => {
        if (!res.data.account) {
          uni.redirectTo({ url: "/pages/login/login" });
        } else {
          uni.redirectTo({ url: "/pages/discover/discover" });
        }
      }, 5000);
    });
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
</style>
