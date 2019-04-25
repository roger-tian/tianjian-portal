import { get, post, postFormData } from '@/utils/request'

const HttpConstant = {
  BASE_CHARGE: '/baseCharge/getAll',
  EXCEL_IMPORT: '/baseCharge/excelImport'
}

export function excelImport (formData) {
  return sendFormRequest(HttpConstant.EXCEL_IMPORT, formData)
}

export function getAllBaseCharge (pageNo) {
  return sendRequest(HttpConstant.BASE_CHARGE, { pageNo: pageNo })
}

export function getData (method, params) {
  return get(method, params)
}

function sendRequest (method, params) {
  return post(method, params)
}

function sendFormRequest (method, param) {
  return postFormData(method, param)
}
