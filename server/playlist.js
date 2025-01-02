import instance from ".";

/**
 * 获取精品歌单标签
 */
export const getHighQualityTags = () => {
  return instance.get("/playlist/highquality/tags");
};

/**
 * 获取精品歌单
 * @param {string} cat -  tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部"
 * @param {number} before - 分页参数,取上一页最后一个歌单的 id, 不传则返回所有
 * @return {Promise}
 */
export const getHighQuality = ({
  cat = "全部",
  limit = 50,
  before = null,
} = {}) => {
  return instance.post("/top/playlist/highquality", {
    cat,
    limit,
    before,
  });
};
