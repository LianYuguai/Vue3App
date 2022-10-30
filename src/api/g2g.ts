import hyRequest from '@/utils/request'
import { ReturnDataType } from './type'
export interface G2G {
	best: String
	avg : String
	ratio: Number
	count: String
	ratio1: Number
}

export function getG2GAPI () {
  return hyRequest.get<ReturnDataType<G2G[]>>({
    url: '/g2g',
    showLoading: false
  })
}
