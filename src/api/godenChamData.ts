import hyRequest from '@/utils/request'
import { ReturnDataType } from './type'
export interface GoldenchamData {
	toolChamber: String
	tool : String
	cham : String
	matchRatio: number
}

export function getGoldenchamDataAPI () {
  return hyRequest.get<ReturnDataType<GoldenchamData[]>>({
    url: '/goldencham-data',
    showLoading: false
  })
}
