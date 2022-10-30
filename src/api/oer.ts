import hyRequest from '@/utils/request'
import { ReturnDataType } from './type'
export interface Oer {
	toolChamberDate: String
	stableSlot: Number
	stableWafer : Number
	count : Number
}

export function getOerAPI () {
  return hyRequest.get<ReturnDataType<Oer[]>>({
    url: '/oer',
    showLoading: false
  })
}
