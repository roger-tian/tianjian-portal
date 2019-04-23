import { get, post } from '@/utils/request'

const HttpConstant = {
  BASE_CHARGE: '/baseCharge/getAll',
  EXCEL_IMPORT: '/baseCharge/excelImport'
}

export function excelImport (formData) {
  return sendRequest(HttpConstant.EXCEL_IMPORT, {formData: formData})
}

export function getAllBaseCharge (pageNo) {
  console.log('111111111')
  return sendRequest(HttpConstant.BASE_CHARGE, { pageNo: pageNo })
}

export function getData (method, params) {
  return get(method, params)
}

function sendRequest (method, params) {
  console.log('222222222')
  return post(method, params)
}
