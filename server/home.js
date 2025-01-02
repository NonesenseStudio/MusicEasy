import instance from ".";

/*
 * 获取banner
 * @param {Number} type 0: pc 1: android 2: iphone 3: ipad
 * @returns {Promise}
 */
export const getBanner = (type) => {
  return instance.post("/banner", { type });
};

/*
 * 首页-发现
 * @param {Boolean} refresh 是否刷新
 * @param cursor 游标
 * @returns {Promise}
 */

export const getDiscover = (refresh = false, cursor = null) => {
  return instance.post("/homepage/block/page", { refresh, cursor });
};
