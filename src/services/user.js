/*
 * @Author: 柒叶
 * @Date: 2020-05-06 09:22:30
 * @Last Modified by: 柒叶
 * @Last Modified time: 2020-05-07 10:46:06
 */
import { stringify } from 'qs'
import request from '@/utils/request'

// 注册

export async function registerAccount(data) {
  return request('/api/register', {
    method: 'POST',
    data,
  })
}

// 登录
export async function loginAccount(data) {
  return request('/api/login', {
    method: 'POST',
    data,
  })
}

// 得到用户信息
export async function getAccount() {
  return request('/api/account')
}
