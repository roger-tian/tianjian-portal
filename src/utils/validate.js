/**
 * Created by chixin on 18/08/27.
 */

/**
 * 用户名验证
 * @param str
 * @return {boolean}
 */
export function isvalidUsername (str) {
  // const reg = /^[a-zA-Z][a-zA-Z0-9_]{3,}$/
  const reg = /^[a-zA-Z][a-zA-Z0-9_]+$/
  return reg.test(str)
}

/**
 * 密码验证
 * @return {boolean}
 */
export function isValidPassword (str) {
  // const reg = /^[a-zA-Z0-9]{6,}$/
  const reg = /^[a-zA-Z0-9]*$/
  return reg.test(str)
}

/**
 * 真实用户名验证
 * @param str
 */
export function isValidRealName (str) {
  // const reg = /^[a-zA-Z\u4e00-\u9fa5]{2,}$/
  const reg = /^[a-zA-Z\u4e00-\u9fa5]*$/
  return reg.test(str)
}

/**
 * 验证手机号
 * @param str
 * @return {boolean}
 */
export function isMobileNum (str) {
  const reg = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/
  return reg.test(str)
}
/* 合法uri */
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validatAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
