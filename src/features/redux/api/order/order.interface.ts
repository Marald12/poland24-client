import { IBase } from '@/features/redux/api/base.interface'
import { IUser } from '@/features/redux/api/user/user.interface'

export interface IOrder extends IBase {
	url: string
	count: number
	price: number
	deliveryPrice: number
	description: string
	socialType: string
	name: string
	surname: string
	phoneNumber: string
	email: string
	comment: string
	shop: string
	isUsed: boolean
	summa: number
	user?: IUser
}

export interface IOrderDto {
	url: string
	count: number
	price: number
	deliveryPrice: number
	description: string
	socialType: string
	shopId: string
	comment: string
	name: string
	surname: string
	phoneNumber: string
	email: string
	isUsed: boolean
}

export interface IOrderDtoForAuth {
	url: string
	count: number
	price: number
	deliveryPrice: number
	description: string
	socialType: string
	shopId: string
	comment: string
	isUsed: boolean
}
