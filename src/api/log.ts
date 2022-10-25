import hyRequest from '@/utils/request'
import { LogListParam, ReturnDataType, LogListRes } from './type'
export function getLogListAPI (params: LogListParam) {
  return hyRequest.get<ReturnDataType<LogListRes[]>>({
    url: '/log/list',
    showLoading: false,
    params
  })
}
