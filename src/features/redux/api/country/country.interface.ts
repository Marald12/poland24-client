import { IBase } from '@/features/redux/api/base.interface'
import { IShop } from '@/features/redux/api/shop/shop.interface'

export interface ICountry extends IBase {
	name: string
	shops: IShop[]
}
