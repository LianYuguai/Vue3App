import hyRequest from '@/utils/request'
import { ReturnDataType } from './type'
export interface Ooc {
	toolChamber: String
	lastDate : String
	oOC : String
}

export function getOocAPI () {
  return hyRequest.get<ReturnDataType<Ooc[]>>({
    url: '/ooc',
    showLoading: false
  })
}
