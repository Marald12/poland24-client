import { IOrder } from '@/features/redux/api/order/order.interface'
import { IReview } from '@/features/redux/api/review/review.interface'

export interface IUser {
	_id: string
	email: string
	password: string
	name: string
	surname: string
	phoneNumber: number
	createdAt: string
	updatedAt: string
	__v: number
	role: string
	orders: IOrder[]
	reviews: IReview[]
}

export interface IUserDto {
	name?: string
	surname?: string
	email?: string
	phoneNumber?: number
	password?: string
}
