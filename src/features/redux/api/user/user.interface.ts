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
	orders: string[]
	reviews: string[]
}
