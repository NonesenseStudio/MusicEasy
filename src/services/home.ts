import instance from "./service.ts";

/**
 * 获取banner
 * @param {Number} type 0: pc 1: android 2: iphone 3: ipad
 * @returns {Promise}
 */
// 定义BannerType类型
type BannerType = 0 | 1 | 2 | 3;
export const getBanner = (type: BannerType) => {
  return instance.post("/banner", { type });
};

/**
 * 首页-发现
 * @param {Boolean} refresh 是否刷新
 * @param {Number} cursor 游标
 * @returns {Promise}
 */
type blockPage = {
  refresh: boolean;
  cursor: number | null;
};
export const getDiscover = (
  refresh: boolean = false,
  cursor: number | null = null,
) => {
  return instance.post("/homepage/block/page", { refresh, cursor });
};
