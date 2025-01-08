import { IBase } from '@/features/redux/api/base.interface'
import { IShop } from '@/features/redux/api/shop/shop.interface'
import { IUser } from '@/features/redux/api/user/user.interface'

export interface IReview extends IBase {
	message: string
	starCount: number
	media: string[]
	shop: IShop
	user: IUser
}

export interface IReviewDto {
	message: string
	starCount: number
	media?: string[]
	shopId: string
}
