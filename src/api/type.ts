export interface UserLoginParam {
	passport: string,
	password: string
}

export interface UserLoginRes {
	user: {
		id: number,
		passport: string,
		nickname: string,
		role: number
	},
	token: string
}

export interface UserListParam {
	page: number,
	pageSize: number
}

export interface UserListRes {
	passport: string
	id: number,
	role: number
}

export interface LogListParam {
	page: number,
	pageSize: number
}

export interface LogListRes {
	passport: string
	id: number,
	time: string,
	operate: string
}

// 定义返回结果的类型
export interface ReturnDataType<T = any> {
  data: T
  code: string
  success: boolean
	message: string
}
