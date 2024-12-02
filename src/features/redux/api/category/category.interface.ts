import { IShop } from '@/features/redux/api/shop/shop.interface'
import { IBase } from '@/features/redux/api/base.interface'

export interface ICategory extends IBase {
	name: string
	shops: IShop[]
}
