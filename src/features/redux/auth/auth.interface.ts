import { IUser } from '@/features/redux/api/user/user.interface'

export interface IAuthDto {
	email: string
	password: string
}

export interface IRegisterDto {
	email: string
	password: string
	name: string
	surname: string
	phoneNumber: string
}

export interface IAuth {
	accessToken: string
	user: IUser
}
