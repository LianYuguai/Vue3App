import hyRequest from '@/utils/request'
import { UserLoginParam, ReturnDataType, UserLoginRes, UserListParam, UserListRes } from './type'

export function loginAPI (params: UserLoginParam) {
  return hyRequest.post<ReturnDataType<UserLoginRes>>({
    url: '/user/sign-in',
    showLoading: false,
    params
  })
}

export function getUserListAPI (params: UserListParam) {
  return hyRequest.get<ReturnDataType<UserListRes[]>>({
    url: '/user/list',
    showLoading: false,
    params
  })
}
