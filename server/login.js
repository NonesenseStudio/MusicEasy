import instance from "./index";

/**
 * 游客登录
 */
export const registerAnonimous = () => {
  return instance.post("/register/anonimous");
};

/**
 * 刷新登录
 */
export const refreshLogin = () => {
  return instance.post("/login/refresh");
};

/**
 * 手机登录
 * @param {string} phone 手机号
 * @param {string} password 密码
 * @param {string} captcha 验证码
 * @return {Promise}
 * */
export const loginByPhone = (phone, password, captcha) => {
  return instance.post("/login/cellphone", {
    phone,
    password,
    captcha,
  });
};

/**
 * 邮箱登录
 * @param {string} email 邮箱
 * @param {string} password 密码
 * @return {Promise}
 * */
export const loginByEmail = (email, password) => {
  return instance.post("/login", {
    email,
    password,
  });
};

/**
 * 获取验证码
 * @param {string} phone 手机号
 * @return {Promise}
 * */
export const getCaptcha = (phone) => {
  return instance.get("/captcha/sent", {
    params: {
      phone,
    },
  });
};

/**
 * 检测手机号码是否已注册
 * 说明 : 调用此接口 ,可检测手机号码是否已注册
 * @param {string} phone 手机号
 * @return {Promise}
 * */

export const checkPhone = (phone) => {
  return instance.get("/cellphone/existence/check", {
    params: {
      phone,
    },
  });
}